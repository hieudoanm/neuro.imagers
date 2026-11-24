# How to install the neuro CLI on macOS (Intel)

For Intel-based Macs. The `neuro` CLI drives Neuro Imagers' analysis pipelines
from the terminal.

## Option 1: manual download

1. Open the
   [downloads page](https://hieudoanm.github.io/neuro.imagers/downloads/) and
   download **macOS (Intel)** under **CLI** — `cli-neuro-x86_64-apple-darwin`.
2. Make it executable and move it onto your `PATH`:

```sh
chmod +x cli-neuro-x86_64-apple-darwin
mv cli-neuro-x86_64-apple-darwin ~/.local/bin/neuro    # Windows: rename to neuro.exe on PATH
```

3. Verify:

```sh
neuro --version
```

## Option 2: build from source

```sh
cargo install --path crates/neuro-cli
```

## Troubleshooting

- `neuro: command not found` — the install directory is not on your `PATH`. Add
  `export PATH="$HOME/.local/bin:$PATH"` to your shell profile.
- Gatekeeper warning — the binary is unsigned. Right-click → Open, or run
  `xattr -d com.apple.quarantine` on the installed binary.
