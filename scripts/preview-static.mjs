import { spawnSync } from "node:child_process";
import { resolve } from "node:path";

const viteCli = resolve("node_modules", "vite", "bin", "vite.js");
const result = spawnSync(
  process.execPath,
  [viteCli, "preview", "--host", "0.0.0.0", ...process.argv.slice(2)],
  {
    env: {
      ...process.env,
      VANT_STATIC_EXPORT: "true",
    },
    stdio: "inherit",
  },
);

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

process.exit(result.status ?? 1);
