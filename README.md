

# Notakto Mobile

Notakto Mobile is a cross-platform application for playing Notakto, built with Expo, React Native, and TypeScript. It includes a game-mode menu, settings screen, and Firebase Authentication with Google Sign-In.


## Tech Stack

- **Framework:** Expo SDK 54 and React Native
- **Language:** TypeScript
- **Navigation:** Expo Router and React Navigation
- **Authentication:** Firebase Authentication and Google Sign-In
- **State management:** Zustand
- **UI and device features:** Expo Font, Expo Image, Expo Haptics, Expo Web Browser, and React Native Toast Message
- **Code quality:** Biome and TypeScript

## Project Structure

```text
notakto-mobile/
├── app/                  # Application routes and layouts (Expo Router)
│   ├── _layout.tsx       # Root navigation/layout
│   ├── index.tsx         # Main route
│   └── settings.tsx      # Settings route
├── assets/               # Images, fonts, and other static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── constants/        # Shared constants
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Integrations and utilities, including Firebase
│   ├── screens/          # Screen-level components
│   ├── stores/           # Zustand state stores
│   └── types/            # Shared TypeScript types
├── app.json              # Expo app configuration
├── package.json          # Dependencies and scripts
├── package-lock.json     # npm dependency lockfile
├── tsconfig.json         # TypeScript configuration
└── README.md
```

## Prerequisites

- Node.js and npm
- Git
- Expo Go for compatible device testing, or an Android/iOS development environment for native builds
- A configured Firebase project if you want to test authentication

## Local Development

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/notakto/notakto-mobile.git
   cd notakto-mobile
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure the environment variables described in the Firebase Configuration section.

4. Start the Expo development server:

   ```bash
   npx expo start
   ```

5. Follow the terminal instructions to open the app in Expo Go or an appropriate emulator/simulator. Use a development build when a feature requires native functionality that Expo Go does not include.

### Available Scripts

| Command | Description |
| --- | --- |
| `npm start` | Start the Expo development server |
| `npm run android` | Start Expo with the Android target |
| `npm run ios` | Start Expo with the iOS target |
| `npm run web` | Start Expo for web |
| `npm run typecheck` | Run the TypeScript compiler without emitting files |
| `npm run check` | Run Biome checks |
| `npm run format` | Check formatting with Biome |

## Environment Variables and Firebase Configuration

The app initializes Firebase in `src/lib/firebase.ts` and uses Firebase Authentication with Google Sign-In.

Create a local `.env` file in the project root and provide the configuration values for your Firebase project:

```dotenv
EXPO_PUBLIC_FIREBASE_API_KEY=
EXPO_PUBLIC_FIREBASE_APP_ID=
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=
EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
EXPO_PUBLIC_FIREBASE_PROJECT_ID=
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=
EXPO_PUBLIC_FIREBASE_WEB_CLIENT_ID=
```

These variables are read by the Firebase initialization and Google Sign-In configuration. Obtain the appropriate values from your Firebase project settings and Google Sign-In setup.

**Important:**
- Do not commit your local `.env` file or other files containing local credentials.
- Variables prefixed with `EXPO_PUBLIC_` are embedded into the client application and are not secret. Never put private service-account credentials or other server-side secrets in them.
- Ensure Firebase Authentication and the required Google Sign-In configuration are enabled for the platforms you intend to test.
- Restart the Expo development server after changing environment variables.

## Expo Development and Builds

### Development

Run:

```bash
npx expo start
```

Use the QR code or the terminal shortcuts to open the app on a compatible device or emulator. If changes to the development environment cause unexpected behavior, try restarting with a cleared Metro cache:

```bash
npx expo start --clear
```

### Native Builds and EAS

The project uses Expo. For local native development, use the Android or iOS development workflow appropriate to your environment.

For cloud builds with **EAS Build**, install and configure the EAS CLI if the maintainers have enabled EAS for this project:

```bash
npm install --global eas-cli
eas login
```

Then follow the project's configured EAS workflow. If an `eas.json` file and an EAS project ID are provided by the maintainers, use the corresponding build profiles and project configuration. Do not assume build profiles or submit configuration that are not present in the repository.

For more information, see the [Expo documentation](https://docs.expo.dev/) and [EAS Build documentation](https://docs.expo.dev/build/introduction/).

## Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before opening a pull request, and follow the project's [Code of Conduct](CODE_OF_CONDUCT.md).

## License

See the [LICENSE](LICENSE) file for license details.
