## Problem
The São Tomé & Príncipe PDF embed returns `ERR_BLOCKED_BY_CLIENT` in Chrome. The filename `sao-tome-marketing-agent-license.pdf` contains the word "marketing," which matches EasyList/ad-blocker filter rules. The Sierra Leone PDF (`sierra-leone-official-partner-certificate.pdf`) does not contain trigger words and should work, but needs verification.

## Changes

1. **Rename PDF file**
   - `public/licenses/sao-tome-marketing-agent-license.pdf` → `public/licenses/sao-tome-cbi-agent-license.pdf`
   - Delete the old file after copying

2. **Update file reference**
   - In `src/pages/destinations/SaoTomePrincipe.tsx` line 56, change:
     `file: "/licenses/sao-tome-marketing-agent-license.pdf"`
     → `file: "/licenses/sao-tome-cbi-agent-license.pdf"`

3. **Verify Sierra Leone PDF**
   - Preview the Sierra Leone destination page in the browser
   - Confirm the `sierra-leone-official-partner-certificate.pdf` embeds and loads without ad-blocker interference

## Technical notes
- No other code changes required
- The `<object>` embed in `DestinationPageTemplate.tsx` stays the same — only the `src` URL changes
- Title text in the UI remains "Marketing Agent License" — only the URL path is the blocker trigger
