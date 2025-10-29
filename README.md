# Media Transfer

Transfer photos and videos from your device to PC via WiFi/LAN - no cables needed!

## Quick Start (Easiest Way)

**Just double-click `start-server.bat`**

The batch file will:
- Automatically install dependencies (if needed)
- Start the server
- Display the URL to access from your device

## Manual Setup (Alternative)

1. **Install dependencies:**
   ```bash
   cd "G:\Iphone Media Transfer"
   npm install
   ```

2. **Start the server:**
   ```bash
   npm start
   ```

3. **The server will display the URL to access from your device** (e.g., `http://192.168.1.100:3000`)

## How to Use

### From Your Device:

1. **Connect to the same WiFi network** as your PC

2. **Open any browser** on your mobile device

3. **Enter the URL** shown in the terminal (e.g., `http://192.168.1.100:3000`)

4. **Click "Choose Files"** and select photos/videos

5. **Click "Upload Files"** to transfer them to your PC

6. **Files will be saved** to `G:\Iphone Media Transfer\uploads`

## Features

🚀 **UNLIMITED MODE - NO RESTRICTIONS!**

✅ Upload UNLIMITED files at once
✅ NO file size limits - upload files of ANY size
✅ NO file count limits - transfer your entire library
✅ Supports photos and videos
✅ Drag and drop support
✅ Real-time upload progress
✅ Mobile-friendly interface
✅ No cloud services - direct PC transfer
✅ MAXIMUM POWER MODE ACTIVATED ⚡

## Troubleshooting

**Can't connect from iPhone?**
- Make sure both devices are on the same WiFi network
- Check if your PC firewall is blocking port 3000
- Try using the exact IP address shown in the terminal

**Uploads failing?**
- Check if you have enough disk space on G: drive
- Ensure the uploads folder has write permissions
- Try smaller batches of files

## Security Note

This server is designed for **local network use only**. It runs on your private network and should not be exposed to the internet.

## About

blip blup blup blip

**Made by Muaz Azri**

A simple, minimalist tool for transferring media files from your mobile device to your PC over a local network. No limits. No cloud. Direct transfer.

### Connect

- Instagram: [@muazaoski](https://www.instagram.com/muazaoski/)
- X: [@yssrski](https://x.com/yssrski)

## License

MIT License - see [LICENSE](LICENSE) file for details.

Copyright (c) 2025 Muaz Azri
