
# Contributing to Notakto Mobile

Thank you for your interest in contributing to Notakto Mobile! Contributions such as bug fixes, new features, documentation improvements, and developer-experience enhancements are welcome.

## Getting Started

1. Check the existing [issues](https://github.com/notakto/notakto-mobile/issues) to find work that needs attention.
2. For issues that require assignment, wait for maintainer confirmation before starting work.
3. Fork the [Notakto Mobile repository](https://github.com/notakto/notakto-mobile) on GitHub.
4. Clone your fork and enter the project directory:

   ```bash
   git clone https://github.com/YOUR-USERNAME/notakto-mobile.git
   cd notakto-mobile
   ```

5. Install dependencies:

   ```bash
   npm install
   ```

6. Follow the local setup and Firebase configuration instructions in the [README](README.md).

## Making Changes

1. Create a branch for your contribution:

   ```bash
   git checkout -b type/short-description
   ```

   Choose a descriptive branch name, such as `docs/update-readme` or `fix/settings-screen`.

2. Keep changes focused and consistent with the existing project structure and coding patterns.
3. Use TypeScript types where appropriate and avoid `any` when a more specific type is available.
4. Prefer functional React components and hooks, following existing conventions.
5. Extract reusable logic into components or custom hooks when it improves maintainability.
6. Update relevant documentation when setup instructions, project structure, or behavior changes.
7. Add or update tests when applicable.


## Code Quality and Testing

Before submitting a pull request, run the project's available checks:

```bash
npm run typecheck
npm run check
```

Start the Expo development server to test the app locally:

```bash
npx expo start
```

Test the affected functionality on an appropriate device, emulator, simulator, or supported web target.

Some checks may report pre-existing issues in the repository. Review the output carefully, avoid unrelated formatting changes, and mention any unresolved or unrun checks in your pull request.


## Commit Messages

Use clear, descriptive commit messages. Follow the Conventional Commits format where practical:

```text
type: short description
```

Common types include:

- `feat`: introduce a feature
- `fix`: fix a bug
- `docs`: update documentation
- `refactor`: restructure code without changing behavior
- `test`: add or update tests
- `chore`: perform maintenance

For example:

```text
docs: improve mobile setup instructions
```

## Pull Requests

1. Push your branch to your fork.
2. Open a pull request against the original repository's `main` branch.
3. Explain what changed and why.
4. Link the related issue using a reference such as `Closes #7`, when appropriate.
5. Include screenshots or recordings for user-interface changes when useful.
6. Describe the checks you ran and mention any known limitations.
7. Respond constructively to reviewer feedback and make requested changes.

Maintainers will review contributions and decide when they are ready to merge.

## Code of Conduct

Please treat other contributors respectfully and help maintain a welcoming, collaborative community. Follow the project's `CODE_OF_CONDUCT.md` when available.
