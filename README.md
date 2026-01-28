# 🚀 Universal DevPortfolio

> **The Code Once, Run Everywhere Portfolio.**
> A pixel-perfect, highly performant, and universally responsive portfolio template built for the modern developer. Ships to **Web**, **iOS**, **Android**, **macOS**, and **Windows** from a single TypeScript codebase.

![Project Preview](./assets/adaptive-icon.png)

## ✨ Features

- **🎨 Universal Design System**: Built with **NativeWind** (Tailwind CSS) for consistent styling across Mobile, Web, and Desktop.
- **📱 Fully Responsive**: Adaptive layouts that look stunning on huge 4K monitors, laptops, and mobile screens.
- **🌗 Dark Mode**: First-class dark mode support with system preference detection and manual toggle.
- **🎭 Smooth Animations**: Powered by **Moti** & **Reanimated** for 60fps native-driven transitions.
- **⚡ Blazing Fast**: Optimized build setup using **Expo** and **Vite** (Web) + **Tauri** (Desktop).
- **🔒 Type Safe**: Strictly typed navigation and state management with **TypeScript**.

---

## 🛠 Tech Stack

- **Core**: [React 19](https://react.dev/), [React Native 0.81](https://reactnative.dev/), [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [Expo SDK 54](https://expo.dev/) (Universal Apps)
- **Desktop Engine**: [Tauri v2](https://tauri.app/) (Rust-based lightweight runtime)
- **Styling**: [NativeWind v4](https://www.nativewind.dev/) (Tailwind CSS for Native)
- **State**: [Zustand](https://github.com/pmndrs/zustand) (Minimalist state management)
- **Animation**: [Moti](https://moti.fyi/) + [Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- **Icons**: [Lucide React Native](https://lucide.dev/)

---

## 🏁 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

1.  **Node.js** (LTS version) & **npm**
2.  **Expo Go** app on your phone (for mobile testing).
3.  **Rust & Cargo** (Only required for Mac/Windows Desktop builds). [Install Rust](https://www.rust-lang.org/tools/install).
4.  **Xcode** (for Mac/iOS builds) or **Android Studio** (for Android builds).

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/achyuthkp27/cross-platform-portfolio.git
cd portfolio
npm install
```

---

## 🚀 Running the Project (A-Z)

This project is configured to run on 5 different platforms. Choose your target:

### 1. 🌐 Web Browser
Runs a fast local development server with Hot Module Replacement (HMR).

```bash
npm run dev
# or
npm run web
```
> Open [http://localhost:8081](http://localhost:8081) in your browser.

---

### 2. 🍏 macOS Desktop Application
Requires a Mac with Rust installed. Creates a native `.dmg` or `.app`.

```bash
# Start Development Mode
npm run desktop

# Build for Production (DMG/App)
npm run build:desktop
```
> The native app will launch in a separate window, behaving exactly like a standard Mac application.

---

### 3. 🪟 Windows Desktop Application
Requires a Windows PC with Rust installed. Creates a native `.exe` or `.msi`.

```bash
# Start Development Mode
npm run desktop

# Build for Production
npm run build:desktop
```
> Note: You must run this command on a Windows machine to generate a Windows executable.

---

### 4. 🤖 Android
Run on a physical device or emulator.

**Option A: Expo Go (Easiest)**
1. Install "Expo Go" from the Google Play Store on your phone.
2. Run the command:
   ```bash
   npm run android
   ```
3. Scan the QR code shown in the terminal with the Expo Go app.

**Option B: Development Build (Native)**
Ensure Android Studio & Java are set up.
```bash
npx expo run:android
```

---

### 5. 🍎 iOS (iPhone/iPad)
Run on a Simulator or physical device.

**Option A: Expo Go (Easiest)**
1. Install "Expo Go" from the App Store.
2. Run the command:
   ```bash
   npm run ios
   ```
3. Scan the QR code (using the Camera app) to open in Expo Go.

**Option B: Development Build (Native)**
Requires a Mac with Xcode.
```bash
npx expo run:ios
```

---

## 📦 Building for Production

### Web (Static Site)
Generates a static HTML/CSS/JS bundle for deployment (Vercel, Netlify, GitHub Pages).
```bash
npm run build:web
# Output is in dist/ or web-build/ folder
```

### Desktop (Mac/Win/Linux)
Generates optimized native binaries.
```bash
npm run build:desktop
# Output is in src-tauri/target/release/bundle/
```

### Mobile (APK / IPA)
The recommended way is using **EAS Build** (Expo Application Services).
```bash
# Install EAS CLI
npm install -g eas-cli

# Login
eas login

# Build
eas build --platform all
```

---

## 📂 Project Structure

```
portfolio/
├── assets/               # Images and static files
├── src/
│   ├── components/       # Reusable UI components (Navbar, Cards)
│   ├── navigation/       # Navigation stack configuration
│   ├── screens/          # Main application screens (Projects, Skills)
│   ├── store/            # Global state (Zustand)
│   ├── types/            # TypeScript definitions
│   └── utils/            # Helper functions
├── src-tauri/            # Rust/Tauri native configuration for Desktop
├── app.json              # Expo configuration (Mobile/Web)
├── package.json          # Dependencies and Scripts
├── tsconfig.json         # TypeScript config
└── tailwind.config.js    # Styling config
```

---

## 🤝 Contributing

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/amazing-feature`).
3. Commit your changes (`git commit -m 'Add some amazing feature'`).
4. Push to the branch (`git push origin feature/amazing-feature`).
5. Open a Pull Request.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
