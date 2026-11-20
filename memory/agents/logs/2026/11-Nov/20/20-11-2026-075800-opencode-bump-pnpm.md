| Field | Value |
| --- | --- |
| when | 20-11-2026 07:58 AM UTC / 20-11-2026 01:28 PM IST |
| agent | opencode |
| ask | Update pnpm, add it to mise, refresh all references and mise.lock |
| did | pnpm 12.10.1 to 12.21.0 in mise.toml, package.json (packageManager + devEngines) and CI; regenerated mise.lock; refreshed pnpm-lock packageManagerDependencies |
| outcome | One pnpm version everywhere, frozen install and CI checks green |
