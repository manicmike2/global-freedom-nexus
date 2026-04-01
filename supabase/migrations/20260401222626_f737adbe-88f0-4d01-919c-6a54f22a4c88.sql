
-- 1. Explicitly deny SELECT for anon and authenticated
CREATE POLICY "deny_select_contact_us" ON public.contact_us_submissions
  FOR SELECT TO anon, authenticated USING (false);

-- 2. Fix function search path
CREATE OR REPLACE FUNCTION public.set_updated_at_contact_us_submissions()
  RETURNS trigger
  LANGUAGE plpgsql
  SECURITY INVOKER
  SET search_path = public
AS $$
begin
  new."updated_at" := now();
  return new;
end;
$$;

-- 3. Replace overly permissive INSERT policies with ones that validate non-empty required fields
DROP POLICY IF EXISTS "authenticated_insert_contact_us" ON public.contact_us_submissions;
DROP POLICY IF EXISTS "anon_insert_contact_us" ON public.contact_us_submissions;

CREATE POLICY "public_insert_contact_us" ON public.contact_us_submissions
  FOR INSERT TO anon, authenticated
  WITH CHECK (
    length(trim(full_name)) > 0 AND
    length(trim(email)) > 0 AND
    length(trim(help_message)) > 0 AND
    length(trim(i_am)) > 0
  );
