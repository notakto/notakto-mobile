# Notakto Mobile

A mobile app for playing Notakto, built with Expo and React Native.

## Tech Stack

- Expo
- React Native
- TypeScript
- Expo Router

## Getting Started

1. Install dependencies

```bash
npm install
```

2. Start the development server

```bash
npx expo start
```

3. Copy `.env.example` to `.env` and fill in the Firebase values (placeholders only, no real keys are committed).

4. Scan the QR code with Expo Go or run it on an emulator.

## Testing and builds

See [docs/testing.md](docs/testing.md) for running the tests and the manual EAS Build workflow
(needs the `EXPO_TOKEN` repository secret, see `.env.example`).

## Project Structure

```
app/          # Screens and routes
components/   # Reusable UI components
assets/       # Images, fonts, icons
hooks/        # Custom React hooks
constants/    # App constants
```

## License

MIT
