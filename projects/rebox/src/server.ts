import "varlock/auto-load";
import { readFileSync } from "node:fs";

import * as Hetzner from "@alchemy.run/hetzner";
import { ENV } from "varlock/env";

import { Tailscale } from "./firewalls";

// cloud-init :: bootstrap
const userData = readFileSync(
  new URL("config/cloud-init.yaml", import.meta.url),
  "utf-8"
)
  .replaceAll("<TAILSCALE_AUTH_KEY>", ENV.TAILSCALE_AUTH_KEY)
  .replaceAll("<SSH_PUBLIC_KEY>", ENV.SSH_PUBLIC_KEY)
  .replaceAll("<USERNAME>", ENV.USERNAME);

// Server
export const Box = Hetzner.Server("box", {
  name: "box",
  serverType: "cpx02",
  image: "ubuntu-24.04",
  location: "hel1",
  firewalls: [Tailscale],
  userData,
});
