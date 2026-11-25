import * as Hetzner from "@alchemy.run/hetzner";
import * as Alchemy from "alchemy";
import * as Effect from "effect/Effect";

import { Box } from "./src/server";

export default Alchemy.Stack(
  "rebox",
  {
    providers: Hetzner.providers(),
    state: Alchemy.localState(),
  },
  Effect.gen(function* () {
    const server = yield* Box;

    return {
      ipv4: server.ipv4,
    };
  })
);
