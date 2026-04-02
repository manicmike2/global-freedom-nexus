import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageSEO from "@/components/PageSEO";
import { supabase } from "@/integrations/supabase/client";

type Status = "loading" | "valid" | "already_unsubscribed" | "invalid" | "success" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<Status>("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) {
      setStatus("invalid");
      return;
    }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") {
          setStatus("already_unsubscribed");
        } else if (data.valid) {
          setStatus("valid");
        } else {
          setStatus("invalid");
        }
      })
      .catch(() => setStatus("invalid"));
  }, [token]);

  const handleUnsubscribe = async () => {
    if (!token) return;
    setProcessing(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token },
      });
      if (error) throw error;
      if (data?.success) {
        setStatus("success");
      } else if (data?.reason === "already_unsubscribed") {
        setStatus("already_unsubscribed");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
    setProcessing(false);
  };

  const messages: Record<Status, { title: string; description: string }> = {
    loading: { title: "Loading…", description: "Verifying your unsubscribe request." },
    valid: { title: "Unsubscribe", description: "Click the button below to unsubscribe from future emails." },
    already_unsubscribed: { title: "Already Unsubscribed", description: "This email address has already been unsubscribed." },
    invalid: { title: "Invalid Link", description: "This unsubscribe link is invalid or has expired." },
    success: { title: "Unsubscribed", description: "You have been successfully unsubscribed from future emails." },
    error: { title: "Something Went Wrong", description: "We couldn't process your request. Please try again later." },
  };

  const { title, description } = messages[status];

  return (
    <div className="min-h-screen bg-background">
      <PageSEO title="Unsubscribe – Global Freedom Capital" description="Manage your email preferences." canonical="https://globalfreedomcapital.com/unsubscribe" />
      <Header />
      <section className="pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="container mx-auto px-6 lg:px-12 max-w-lg text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">{title}</h1>
          <p className="text-muted-foreground text-sm mb-8">{description}</p>
          {status === "valid" && (
            <button
              onClick={handleUnsubscribe}
              disabled={processing}
              className="px-8 py-3 bg-primary text-primary-foreground text-xs tracking-[0.2em] uppercase font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {processing ? "Processing…" : "Confirm Unsubscribe"}
            </button>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Unsubscribe;
