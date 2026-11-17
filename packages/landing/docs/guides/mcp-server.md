# MCP server

`neuro` ships a [Model Context Protocol](https://modelcontextprotocol.io)
server over stdio. Agents can inspect, validate, convert, and export EEG, MEG,
and MRI recordings through the same typed commands as the CLI.

## Run

```sh
neuro mcp
```

The server reads newline-delimited JSON-RPC on stdin and writes responses on
stdout. It delegates every tool call to the `neuro` binary itself.

## Client configuration

```json
{
  "mcpServers": {
    "neuro": {
      "command": "neuro",
      "args": ["mcp"]
    }
  }
}
```

## Tools

| Tool            | Description                                            |
| --------------- | ------------------------------------------------------ |
| `inspect_eeg`   | Inspect an EEG recording (NPY, EDF/EDF+, BrainVision)  |
| `validate_eeg`  | Validate an EEG file set and report findings           |
| `export_eeg`    | Export an EEG recording to EDF+                        |
| `generate_eeg`  | Generate a deterministic synthetic EEG recording       |
| `inspect_meg`   | Inspect a MEG recording (FIF, CTF .ds, KIT, BIDS, OPM)  |
| `validate_meg`  | Validate a MEG file set and report findings            |
| `inspect_mri`   | Inspect a NIfTI volume                                 |
| `convert_dicom` | Convert a DICOM file or series directory to NIfTI      |

All tools return the same JSON the CLI prints. See the
[CLI guide](../getting-started/cli.md) for command details.


### Streamable HTTP

`neuro mcp --http 127.0.0.1:8080` also accepts `--http <addr>` (and `--token <token>`, or the
`MCP_AUTH_TOKEN` environment variable) to serve the same MCP surface over
streamable HTTP at `http://<addr>/mcp` — the transport used by ChatGPT
connectors and remote Claude clients. When a token is configured, every
request must carry `Authorization: Bearer <token>`.
