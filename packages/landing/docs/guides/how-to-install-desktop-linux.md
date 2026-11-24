# How to install the Neuro Imagers desktop app on Linux

For x86_64 Linux distributions.

## Install script

```sh
curl -fsSL https://raw.githubusercontent.com/hieudoanm/neuro.imagers/master/scripts/install.sh | bash
```

The script detects your platform and downloads the matching release asset.

Choose the package format that matches your distribution — all are listed under
**Linux** on the
[downloads page](https://hieudoanm.github.io/neuro.imagers/downloads/).

## Debian / Ubuntu (`.deb`)

```sh
sudo apt install ./desktop-neuro-x86_64-unknown-linux-gnu.deb
```

(or
`sudo dpkg -i desktop-neuro-x86_64-unknown-linux-gnu.deb && sudo apt --fix-broken install`)

## Fedora / RHEL / openSUSE (`.rpm`)

```sh
sudo dnf install ./desktop-neuro-x86_64-unknown-linux-gnu.rpm        # Fedora / RHEL
sudo zypper install ./desktop-neuro-x86_64-unknown-linux-gnu.rpm     # openSUSE
```

## Any distribution (`.AppImage`)

```sh
chmod +x desktop-neuro-x86_64-unknown-linux-gnu.AppImage
sudo mv desktop-neuro-x86_64-unknown-linux-gnu.AppImage /opt/neuro-imagers
sudo ln -s /opt/neuro-imagers/desktop-neuro-x86_64-unknown-linux-gnu.AppImage ~/.local/bin/neuro-imagers
```

Then run `neuro-imagers` — no installation needed, the AppImage is
self-contained.

## Verifying

Launch Neuro Imagers from your application menu, or run the binary/AppImage from
a terminal.
