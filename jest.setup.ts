// Global test setup. Everything that touches the network or a native module is
// mocked here so the test suite never makes a real request.

// Firebase app wrapper. Tests import this module through "@/src/lib/firebase",
// so replacing it also stops firebase/app and the Google Sign-In SDK from loading.
jest.mock("@/src/lib/firebase", () => ({
  auth: { currentUser: null },
  signInWithGoogle: jest.fn().mockResolvedValue({ uid: "test-uid" }),
  signOutUser: jest.fn().mockResolvedValue(undefined),
  onAuthStateChangedListener: jest.fn(() => jest.fn()),
}));

// Safety net for code that imports the Firebase SDK directly.
jest.mock("firebase/app", () => ({
  initializeApp: jest.fn(() => ({})),
}));

jest.mock("firebase/auth", () => ({
  getAuth: jest.fn(() => ({ currentUser: null })),
  onAuthStateChanged: jest.fn(() => jest.fn()),
  signInWithCredential: jest.fn(),
  signOut: jest.fn(),
  GoogleAuthProvider: { credential: jest.fn() },
}));

// Native module: no real Google Sign-In in Node.
jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    configure: jest.fn(),
    hasPlayServices: jest.fn().mockResolvedValue(true),
    signIn: jest.fn().mockResolvedValue({ data: { idToken: "test-token" } }),
    signOut: jest.fn().mockResolvedValue(undefined),
  },
}));
