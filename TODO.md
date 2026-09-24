# Portfolio — Remaining Work

## Content (replace placeholders)
- [x] `app/components/Hero.tsx` — real name, title/role, pitch line
- [x] `app/components/Nav.tsx` — name in nav brand
- [x] `app/components/About.tsx` — real experience timeline (Rakuten India roles, from `RESUME.md`)
- [x] `app/components/Projects.tsx` — real projects, tags, status (still `href: "#"` — add real links/repos)
- [x] `app/components/SkillsAndContact.tsx` — real skills list, email, phone, LinkedIn/GitHub URLs
- [x] `app/layout.tsx` — metadata `title`/`description`
- [ ] `app/components/Projects.tsx` — wire up real project links/repos (currently `href: "#"`)
- [ ] `app/components/Education.tsx` — verify wording matches how you want it presented

## Assets
- [ ] Favicon / `app/favicon.ico`
- [ ] Resume PDF (if you want a download link — not wired up yet)
- [ ] Open Graph / social preview image + meta tags (`og:image`, `twitter:image`) — none currently set

## Polish / UX
- [ ] Mobile nav menu — `Nav.tsx` links are hidden below `sm` breakpoint with no hamburger fallback
- [ ] Active section highlight in nav on scroll (optional)
- [ ] Verify gesture control UX on a phone/tablet (currently desktop-webcam oriented; consider hiding the gesture toggle on touch devices)
- [ ] Loading state / skeleton for the Three.js canvas on slow connections
- [ ] Check color contrast of `--muted` text against `--background` in both themes (accessibility)
- [ ] `alt` text and semantic headings pass once real content is in

## SEO / metadata
- [ ] `robots.txt` and `sitemap.xml`
- [ ] Structured data (JSON-LD `Person`/`WebSite`) if you want richer search results
- [ ] Canonical URL once domain is live

## Testing
- [ ] Cross-browser check for MediaPipe/webcam (Safari has stricter camera permission behavior)
- [ ] Lighthouse pass (performance — Three.js + MediaPipe bundle is heavy; consider lazy-loading `HeroScene`/`useHandTracking` behind a dynamic import if load time is an issue)
- [ ] Test with camera permission denied/no camera available — verify fallback messaging in `Hero.tsx` reads correctly

## Deployment
- [ ] Pick hosting (Vercel is the natural fit for Next.js)
- [ ] Custom domain + DNS
- [ ] Env/config check: none currently required, but confirm before deploy
- [ ] Analytics (optional — Plausible/Vercel Analytics/GA)

## Nice-to-haves (not required)
- [ ] Blog/writing section
- [ ] Case study pages per project instead of single cards
- [ ] Light/dark-aware social preview images
