# How to install the neuro CLI on Windows

For 64-bit Windows. The `neuro` CLI drives Neuro Imagers' analysis pipelines
from the terminal.

## Option 1: manual download

1. Open the
   [downloads page](https://hieudoanm.github.io/neuro.imagers/downloads/) and
   download **Windows** under **CLI** — `cli-neuro-x86_64-pc-windows-msvc.exe`.
2. Make it executable and move it onto your `PATH`:

```sh
chmod +x cli-neuro-x86_64-pc-windows-msvc.exe
mv cli-neuro-x86_64-pc-windows-msvc.exe ~/.local/bin/neuro    # Windows: rename to neuro.exe on PATH
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

- `neuro is not recognized` — the directory is not on `PATH`. Add it via
  Settings → Environment Variables, or call the binary by full path.
- SmartScreen warning — the binary is unsigned. Choose **More info → Run
  anyway**.
