

## Add Google Analytics (GA4) to All Pages

Since this is a single-page React app, adding the gtag snippet to `index.html` will cover every page automatically.

**Change:** Add the two Google Analytics script tags to the `<head>` of `index.html`, right before the closing `</head>` tag.

- `<script async src="https://www.googletagmanager.com/gtag/js?id=G-Y0WC9DTXK6"></script>`
- Inline `<script>` with `gtag('config', 'G-Y0WC9DTXK6')`

**File:** `index.html` — 1 file, 2 lines added. No other changes needed.

