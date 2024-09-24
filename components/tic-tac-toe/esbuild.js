// eslint-disable-next-line @typescript-eslint/no-var-requires
require("esbuild").buildSync({
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  platform: "node",
  format: "esm",
  target: ["esnext"],
  tsconfig: "tsconfig.build.json",
  loader: {
    ".css": "text",
    ".html": "text",
  },
  outfile: "dist/index.js",
  alias: {
    "@": "./src",
  },
});
