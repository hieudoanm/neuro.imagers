# neuro.imagers documentation

**neuro.imagers** is a local-first desktop workspace for EEG, MEG, and MRI
research data. The React interface runs inside Tauri and calls typed Rust
commands directly — no server dependency. All computation and persistence stay
on the local filesystem.

## Sections

- **Getting started** — install the desktop app and use the `neuro` CLI.
- **Concepts** — pipelines, datasets, and provenance.
- **Guides** — task-oriented walkthroughs and the MCP server.

## What it does

- Inspect, validate, and process EEG, MEG, and MRI recordings in one workspace.
- Reproducible JSON pipeline chains for filtering, artifact rejection, epoching,
  and more.
- Versioned datasets, experiments, analysis runs, and artifacts with provenance.
- `neuro` CLI for scripting: inspect, validate, convert, and export — plus
  `neuro mcp` for MCP clients.
- Runs fully offline; data never leaves your machine.

## Installation guides

- [CLI on macOS (Apple Silicon)](guides/how-to-install-cli-macos-silicon.md)
- [CLI on macOS (Intel)](guides/how-to-install-cli-macos-intel.md)
- [CLI on Linux](guides/how-to-install-cli-linux.md)
- [CLI on Windows](guides/how-to-install-cli-windows.md)
- [Desktop on macOS (Apple Silicon)](guides/how-to-install-desktop-macos-silicon.md)
- [Desktop on macOS (Intel)](guides/how-to-install-desktop-macos-intel.md)
- [Desktop on Linux](guides/how-to-install-desktop-linux.md)
- [Desktop on Windows](guides/how-to-install-desktop-windows.md)
