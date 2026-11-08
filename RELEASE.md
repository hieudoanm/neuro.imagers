## Neuro Imagers — latest build

A local-only desktop app for neuroimaging and neurophysiology work:
EEG, MEG, and MRI inspection/validation, synthetic EEG/MEG generation,
DICOM conversion, and dataset checksums — all on-device via a Rust
core and Tauri frontend.

### Download

Desktop bundles for macOS (`.dmg`/`.app.zip`), Linux (`.AppImage`/`.deb`/`.rpm`)
and Windows (`.msi`/`.exe`) are in the assets below.

### Quick start

```sh
neuro inspect recording.eeg
neuro validate recording.me
neuro generate_eeg --samples 1000 -o synthetic.npy
neuro mcp
```

### Documentation

- [README](https://github.com/hieudoanm/neuro.imagers#readme)
