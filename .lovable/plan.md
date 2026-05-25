## YouTube Video Slideshow — About Page

Add a new section to the About page featuring the 5 YouTube videos as an elegant carousel/slideshow that matches the existing light-luxury aesthetic (ivory/gold/navy, serif headings, slow cinematic motion).

### Section design

- **Label (kicker):** "WATCH & LEARN"
- **Title:** "From Our YouTube Channel"
- **Subtitle:** Short line about insights from Tatiana on global mobility / investment migration.
- Uses existing `SectionHeading` + `SectionReveal` components for visual consistency.

### Slideshow behavior

- Built on existing `Carousel` (embla) component already in `src/components/ui/carousel.tsx` — no new deps.
- Desktop: 3 cards visible, peek of next; Mobile: 1 card.
- Gold-accented prev/next arrows, subtle dot indicators.
- Each card:
  - YouTube thumbnail (`https://i.ytimg.com/vi/{VIDEO_ID}/hqdefault.jpg`) loaded lazily
  - Gold play-icon overlay on hover
  - Video title underneath (fetched from YouTube oEmbed at build-time would need network; instead we hardcode clean titles or use generic labels — see note)
  - Click opens video in a lightweight modal (using existing `Dialog` component) with a responsive 16:9 iframe (`youtube-nocookie.com/embed/{ID}?autoplay=1`)
  - Close button + clicking backdrop closes; iframe unmounts on close to stop audio

### Video IDs extracted

1. `E7H59xlWZDc`
2. `aIslx3tp6qs`
3. `lAa8CobEztM`
4. `QIxCBBZTw9k`
5. `7O4QCJbhJVs`

### Files

- **New:** `src/components/YouTubeSlideshow.tsx` — self-contained section (data array, carousel, modal player)
- **Edit:** `src/pages/About.tsx` — import + render `<YouTubeSlideshow />` in an appropriate spot (likely before the closing CTA / contact section)

### Open question

I'll use the link text "Check out our YouTube" as a section eyebrow — but for each card's title, do you want me to:
- (a) Use generic numbered labels ("Episode 1", "Episode 2"…), or
- (b) Have you provide the 5 titles, or
- (c) Just show the thumbnail with no title text under it

If you don't reply, I'll default to (c) — pure thumbnails (cleanest, most luxury) with title revealed on hover.
