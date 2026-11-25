import * as cf from "cloudflare:workers";

import type { WebsiteEnv } from "../../../infra/src/website.ts";

// In development mode with TanStack Start, `import { env } from "cloudflare:workers"`
// does not work at the top level.
// As a workaround, we use a proxy to access the env object.
const readEnv = (prop: PropertyKey): unknown => Reflect.get(cf.env, prop);

// Why :: The proxy is a typed facade over cf.env, which only exists once the worker boots.
// oxlint-disable-next-line typescript/no-unsafe-type-assertion
export const env = new Proxy({} as WebsiteEnv, {
  get: (_, prop) => readEnv(prop),
});
