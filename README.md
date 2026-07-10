# Intensed Dev

Apple-like GitHub Pages website built with HTML, CSS, JavaScript, Tailwind CSS, DaisyUI, and lightweight scroll effects.

## Edit content

Most page content lives in `src/components.js` inside the `siteContent` object:

- `nav` for navigation links
- `projects` for work cards
- `services` for studio cards
- `stack` for technology chips
- `timeline` for the process section

Add or remove objects from those arrays to extend the page without editing the main HTML.

## Local preview

Serve the folder with any static server, for example:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.
