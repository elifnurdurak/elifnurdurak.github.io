# Adding photos

Photos live in `public/images/`, one folder per category. The folder names are fixed (they match
`GalleryCategory` in `src/content/gallery.ts`):

| Folder                                | Content                               |
| ------------------------------------- | ------------------------------------- |
| `public/images/work/`                 | Work life, workplace events           |
| `public/images/art-ceramics/`         | Ceramic painting and other art        |
| `public/images/speaking/`             | Talks and conference appearances      |
| `public/images/psychology-community/` | Psychology community talks and events |
| `public/images/portraits/`            | Portraits                             |
| `public/images/other/`                | Anything else                         |

## Rules

1. **File names:** lowercase English words separated by hyphens, e.g. `devfest-2024-talk.jpg`.
   No spaces and no Turkish characters.
2. **Format and size:** JPG or WebP, longest side about 2000 px, ideally under 500 KB each.
3. **Privacy:** remove location (GPS/EXIF) data before publishing. Check that anyone recognisable
   in the photo is fine with it being public.
4. **Register the photo** in `src/content/gallery.ts` with an `altText` (Turkish description for
   screen readers) and its pixel `width` / `height`.

The site is published as a static export, so images are served exactly as committed. That is why
they must be compressed before they are added.
