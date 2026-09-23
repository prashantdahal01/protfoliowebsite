import { spawn } from "node:child_process";

const npx = process.platform === "win32" ? "npx.cmd" : "npx";
const port = process.env.PORT || "3000";

const server = spawn(npx, ["--yes", "serve@latest", "out", "-l", port], {
  stdio: "inherit",
  shell: process.platform === "win32"
});

server.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 1);
});