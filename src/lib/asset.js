// GitHub Pages serves this project site from /Portfolio/, not the domain
// root (see vite.config.js `base`). Vite only rewrites asset URLs it can see
// at build time (imports, or plain <img> tags inside index.html) — a string
// like "/images/foo.jpg" built at runtime in a data file or component is
// invisible to that rewrite, so it would 404 in production while working
// fine in dev. Route every /public asset reference through this helper
// instead of hardcoding a leading "/" path.
//
//   asset('images/foo.jpg') -> '/foo.jpg' in dev, '/Portfolio/images/foo.jpg' in prod
export const asset = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
