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
// Only hydrate when real prerendered markup exists (an element child).
// In dev the template still has the <!--app-html--> comment, which would
// otherwise trip hasChildNodes() and break hydration.
if (container.firstElementChild) {
  hydrateRoot(container, tree);
} else {
  createRoot(container).render(tree);
}
