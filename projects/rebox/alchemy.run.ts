import * as Hetzner from "@alchemy.run/hetzner";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";

import { Tailscale } from "@/firewalls";
import { Box } from "@/server";

export default Alchemy.Stack(
  "rebox",
  {
    providers: Hetzner.providers(),
    state: Alchemy.localState(),
  },
  Effect.gen(function* () {
    const server = yield* Box;
    const firewall = yield* Tailscale;

    return {
      ipv4: server.ipv4,
      firewall: firewall.appliedTo,
    };
  })
);
