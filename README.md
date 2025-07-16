## Secure Video Player App

Internship Assignment – **Secure Video Player with Watermark & Screenshot Detection**  
Built with **React Native (Expo)** for the **Capabl Full-Stack App Developer Internship**

## Project Overview

This mobile app securely plays video content with additional security layers:
- Custom video player with native controls
- Live watermark with user name and timestamp
- Screenshot detection (simulated using AppState)
- Clean and mobile-optimized UI


## Features

| Feature | Description |
|  **Video Playback** | Plays MP4 files with pause/play, seek, fullscreen |
|  **Watermark Overlay** | Shows "Likitha V" + timestamp, updates every 30 seconds |
|  **Screenshot Detection** | Detects app background (simulated screenshot), shows alert |
|  **Auto Updates** | Watermark refreshes in real time |
|  **Mobile Friendly UI** | Fully responsive layout built with React Native |


## Tech Stack

- **React Native + Expo (SDK 53)**
- `expo-av` for video playback
- React Hooks (`useState`, `useEffect`)
- `AppState` API for detection
- Expo Go for mobile testing

##  Installation & Running Locally

git clone https://github.com/likithav1908/secure-video-player.git
cd secure-video-player
npm install
expo start

Scan the QR code using Expo Go on your Android/iOS device.

Screenshot Detection
Real screenshots can't be detected in Expo.

##  Demo Video

[🔗 Watch Demo](https://drive.google.com/file/d/19tzbh7kg3H8kOLdUkHGjFlsGf5zh1cSF/view?usp=drive_link)


This project simulates screenshot detection by monitoring app state changes.
Going to background (e.g. pressing Home or switching apps) triggers an alert and updates the screenshot counter.

Author
Likitha V
GitHub: @likithav1908

Submission Checklist

 Functional video player
 Watermark with user name & timestamp
 Screenshot detection alert
 GitHub repository pushed
 Demo video recorded
 Google form submitted

Notes
Expo warns that expo-av is deprecated, but it works fine in SDK 53.
Future versions should migrate to expo-video.



