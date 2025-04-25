import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: {
    compilerOptions: {
      moduleResolution: "node",
      allowSyntheticDefaultImports: true,
      esModuleInterop: true,
      composite: false,
      incremental: false
    }
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  treeshake: true,
  tsconfig: 'tsconfig.json'
});
