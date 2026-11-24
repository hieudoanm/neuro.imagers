# How to install the neuro CLI on Linux

For x86_64 Linux distributions. The `neuro` CLI drives Neuro Imagers' analysis
pipelines from the terminal.

## Option 1: manual download

1. Open the
   [downloads page](https://hieudoanm.github.io/neuro.imagers/downloads/) and
   download **Linux** under **CLI** — `cli-neuro-x86_64-unknown-linux-gnu`.
2. Make it executable and move it onto your `PATH`:

```sh
chmod +x cli-neuro-x86_64-unknown-linux-gnu
mv cli-neuro-x86_64-unknown-linux-gnu ~/.local/bin/neuro    # Windows: rename to neuro.exe on PATH
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

- `neuro: command not found` — ensure `~/.local/bin` is on your `PATH` (most
  distributions already include it).
- `No such file or directory` on a glibc system — the binary is built against
  glibc; on musl-based distros (Alpine) build from source instead.
