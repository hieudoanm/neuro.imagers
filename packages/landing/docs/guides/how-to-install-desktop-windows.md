# How to install the Neuro Imagers desktop app on Windows

For 64-bit Windows.

## Install script

```sh
curl -fsSL https://raw.githubusercontent.com/hieudoanm/neuro.imagers/master/scripts/install.sh | bash
```

The script detects your platform and downloads the matching release asset.

## Option 1: MSI installer

1. Open the
   [downloads page](https://hieudoanm.github.io/neuro.imagers/downloads/) and
   download **Windows** under **Desktop** —
   `desktop-neuro-x86_64-pc-windows-msvc.msi`.
2. Double-click the `.msi` and follow the installer wizard.

## Option 2: setup executable

Download `desktop-neuro-x86_64-pc-windows-msvc-setup.exe` instead and run it —
it is the NSIS installer equivalent.

## SmartScreen

The installer is unsigned, so Windows SmartScreen may warn on first run. Choose
**More info → Run anyway**.

## Verifying

Launch Neuro Imagers from the Start menu.
