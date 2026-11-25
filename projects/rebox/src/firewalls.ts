import * as Hetzner from "@alchemy.run/hetzner";

/**
 * @see https://tailscale.com/docs/install/cloud/hetzner
 */
export const Tailscale = Hetzner.Firewall("tailscale", {
  // Why :: Tailscale-only public NIC; no inbound TCP/SSH. Admin is over tailnet/Tailscale SSH.
  rules: [
    {
      description: "Tailscale WireGuard",
      direction: "in",
      protocol: "udp",
      port: "41641",
      sourceIps: ["0.0.0.0/0", "::/0"],
    },
  ],
});
