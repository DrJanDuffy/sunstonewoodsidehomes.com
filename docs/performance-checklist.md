# Performance & Media Optimization Checklist

SunstoneWoodsideHomes.com currently relies on lightweight gradients and typography, but as new media arrives use this workflow to keep Core Web Vitals strong.

## Image strategy
- Export hero/model photography at 1920px max width (WebP + fallback JPG).
- Serve gallery assets through `next/image` with `placeholder="blur"` and descriptive `alt` text.
- Keep per-image budgets under 200 KB; run `npx sharp-cli input.jpg --webp` or TinyPNG before commit.

## Video handling
- Host walkthroughs on YouTube/Vimeo with `loading="lazy"` embeds.
- Provide 16:9 poster frames and transcripts for each video; add `VideoObject` schema.

## Lighthouse workflow
1. `vercel build` (CI) or `vercel dev` locally, then run `npx @vercel/lighthouse https://www.sunstonewoodsidehomes.com`.
2. Track LCP hero text shifting—reserve space for future media with fixed aspect-ratio wrappers.
3. Address any INP warnings by deferring non-critical scripts and trimming client-side filters if necessary.

## Font & CSS tips
- continue relying on `next/font` for Montserrat and Source Sans (no FOIT).
- Keep custom gradients within utility classes to minimize global CSS bloat.

Log Lighthouse scores (>90 targets) in `/docs/seo-report.md` after major deploys.
