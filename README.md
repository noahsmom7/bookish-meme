# Cave Proposal Generator (Static Version)

This project recreates the Cave Proposal Generator as a fully static HTML/CSS/JS site, inspired by your original design and functionality. It includes:

- **Two-column layout**: a sidebar for inputs and appearance controls, and a main content area for the proposal preview.
- **Cost breakdown / tasks editor**: build your proposal line items by adding tasks with quantities and unit prices. The subtotal and contract total update automatically when you modify quantities or prices.
- **Dynamic payment schedules**: pick from several milestone schedules (40/40/20, AHJ 50/40/10, etc.) or create custom phases. The phase amounts recompute automatically from the active total.
- **Editable metadata and content**: update the executive summary, payment terms, retainage note, unit rates, allowances, alternates, compliance checklist, scope of work, inclusions, exclusions and clarifications.
- **Appearance customization**: choose an accent color and font family to match your branding. The header and buttons update instantly via CSS variables.
- **Import/Export**: download your current proposal as JSON or load a saved JSON file to continue editing. Use the browser's print dialog (via “Download PDF”) to generate a PDF.
- **No build tools required**: just open `index.html` in a browser or upload directly to a static hosting service such as Cloudflare Pages.

## Structure

```
index.html       # main page with UI and content sections
style.css        # styling for layout and elements
script.js        # logic for data handling, events, and rendering
images/
  treehouse.png  # optional hero image (not currently used in this template)
_redirects       # ensures all routes resolve to index.html for Cloudflare Pages
_headers         # adds security headers
README.md        # this file
```

## Deployment to Cloudflare Pages

1. Copy all files and folders (including `_redirects` and `_headers`) into your Cloudflare Pages project root or upload them via the direct upload option.
2. Since this is a fully static site, **leave the build command empty** and set the build output directory to `/`.
3. Deploy and visit your new site at `https://<project-name>.pages.dev`.

This static build removes the need for Node/Vite and ensures your generator works offline or in any static hosting environment. Feel free to customize the styles, colors, and layout to fit your brand.
