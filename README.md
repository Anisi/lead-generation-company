## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Known issues and future improvements

- The breakpoints are arbitrary; I would like a more robust way to handle them.
-  Figuring out the design system is hard with one page.
   - Some small inline styles were added to the components to make them look like the design.
   - The number of units should be multiplied by 8px, but it wasn't applied to the Figma design.
   - The font sizes are not handled cleanly.
- Some font weights don't match the design; we should fix them after adding all font weights.
- The landing page layout is only handled using the `Stack` component on size `992px`, which can be improved.

