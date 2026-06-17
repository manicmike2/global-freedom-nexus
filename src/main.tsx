import { hydrateRoot, createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";

const container = document.getElementById("root")!;

const tree = (
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);

// If prerendered markup exists, hydrate it; otherwise do a normal render.
// Hydrate only the prerendered production build. In dev there's no SSR HTML,
// and overlays may inject nodes into #root that would cause hydration mismatches.
if (import.meta.env.PROD && container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
