# rebox

disposable cloud development environments.

rebox provisions remote development machines when you need them and destroys them when you don't.

the idea is simple: don't pay for a development machine to sit idle. create one, configure it, connect from your editor, and use it for your projects and ai agents. when you're done, preserve what matters and destroy the machine. recreate it from configuration when you need it again.

## why

remote development machines make it possible to work with more compute than a local machine can provide. they're also useful for running multiple projects, development services, and ai agents.

but keeping that infrastructure running around the clock gets expensive, especially when you aren't using it.

rebox takes advantage of hourly-billed cloud compute. a machine can run for a few hours, several days, or weeks. its lifetime depends on the work, not an arbitrary schedule. when the work is done, destroy it instead of paying to keep it idle.

## how it works

```text
provision → configure → connect → work → preserve → destroy
```

- **provision:** create a cloud machine with the resources you need.
- **configure:** install the operating system dependencies and developer toolchain from code.
- **connect:** access the machine over the tailnet with tailscale ssh.
- **work:** use your regular editor, projects, development services, and ai agents.
- **preserve:** keep important files and state outside the disposable machine.
- **destroy:** remove the machine and its compute costs stop.

## approach

rebox is built around a few deliberate decisions:

- **disposable compute:** machines are replaceable, not permanent infrastructure.
- **reproducible setup:** machine configuration lives in code rather than manual setup steps.
- **persistent work:** projects and important state should survive the machine that hosts them.
- **developer-owned:** no mandatory hosted control plane or always-running management service.
- **opinionated defaults:** choose a focused stack and make it easy to adopt rather than supporting every possible setup.

## stack

the initial implementation uses:

- [hetzner cloud](https://www.hetzner.com/cloud/) for hourly-billed compute
- [alchemy](https://alchemy.run/) for infrastructure provisioning and lifecycle management
- [ansible](https://docs.ansible.com/) for machine configuration
- [tailscale](https://tailscale.com/) for private networking
- [mise](https://mise.jdx.dev/) for tool versions and task execution
- [zed](https://zed.dev/) for remote development

## status

rebox is under development. the initial target is a reproducible, disposable hetzner development environment.

## principle

**keep the work. replace the machine. pay for compute only when you need it.**
