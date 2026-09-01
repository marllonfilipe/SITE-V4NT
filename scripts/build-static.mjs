import { spawnSync } from "node:child_process";
import { existsSync, rmSync } from "node:fs";
import { resolve } from "node:path";

const vinextCli = resolve("node_modules", "vinext", "dist", "cli.js");
const staticOutput = resolve("dist", "client", "index.html");

rmSync(resolve("dist"), { recursive: true, force: true });

const result = spawnSync(process.execPath, [vinextCli, "build"], {
  env: {
    ...process.env,
    VANT_STATIC_EXPORT: "true",
  },
  stdio: "inherit",
});

if (result.error) {
  console.error(result.error);
  process.exit(1);
}

if (process.platform === "win32" && result.status !== 0 && existsSync(staticOutput)) {
  process.exit(0);
}

process.exit(result.status ?? 1);
