# How to install the Neuro Imagers desktop app on macOS (Intel)

For Macs with an Intel chip.

## Install script

```sh
curl -fsSL https://raw.githubusercontent.com/hieudoanm/neuro.imagers/master/scripts/install.sh | bash
```

The script detects your platform and downloads the matching release asset.

## Option 1: disk image (recommended)

1. Open the
   [downloads page](https://hieudoanm.github.io/neuro.imagers/downloads/) and
   download **macOS (Intel)** under **Desktop** —
   `desktop-neuro-x86_64-apple-darwin.dmg`.
2. Open the `.dmg` and drag **Neuro Imagers.app** into `/Applications`.
3. Eject the disk image and launch Neuro Imagers from `/Applications`.

## Option 2: zipped app bundle

If the `.dmg` does not work, download
`desktop-neuro-x86_64-apple-darwin.app.zip` instead, unzip it, and move **Neuro
Imagers.app** to `/Applications`:

```sh
unzip desktop-neuro-x86_64-apple-darwin.app.zip
mv "Neuro Imagers.app" /Applications/   # adjust to the unzipped name
```

## First launch (Gatekeeper)

The app is unsigned, so macOS may block the first launch. Either right-click
**Neuro Imagers.app** → **Open** → **Open**, or strip the quarantine attribute:

```sh
xattr -dr com.apple.quarantine /Applications/Neuro Imagers.app
```

## Verifying

Launch Neuro Imagers from `/Applications`, or from a terminal:

```sh
open -a "Neuro Imagers"
```
