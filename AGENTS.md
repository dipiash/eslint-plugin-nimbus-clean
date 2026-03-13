# Repository Guidelines

## Project Structure & Module Organization
This package is an ESLint plugin built from `lib/` and published from `dist/`.

- `lib/index.js`: main entry that composes and exports config presets (`recommended`, `react`, `typescript`, etc.).
- `lib/rules/*.js`: rule-group modules (for example `common.js`, `import.js`, `react-hooks.js`, `typescript.js`) that export plain rule maps.
- `lib/index.d.ts`: TypeScript declarations for consumers.
- `dist/`: generated publish output; do not edit by hand.
- `scripts/`: release helpers (`prepublish.sh`, `prepareTOCinReadme.sh`).
- `.github/workflows/`: CI (`ci.yml`) and release automation (`release.yml`).

## Build, Test, and Development Commands
- `npm run init`: clean install flow (`clean` + `npm i`).
- `npm run lint`: runs all checks (`lint:js` and `lint:syncpack`).
- `npm run lint:js`: runs ESLint across the repository.
- `npm run lint:syncpack`: checks dependency version consistency.
- `npm run build`: recreates `dist/` from `lib/`.
- `npm run pack`: creates npm tarball in `dist/`.
- `npm run prepare-publish`: packs and moves tarball into `assets/`.
- `npm run update:eslint-docs`: regenerates ESLint docs output.

## Coding Style & Naming Conventions
- Runtime and modules: Node `>=20`, ESM-only (`"type": "module"`).
- Formatting baseline comes from `.editorconfig`: UTF-8, LF, 2-space indentation, trim trailing whitespace.
- Keep rule files focused by domain in `lib/rules/`, using lowercase filenames with hyphens for multi-word names (for example `react-refresh.js`).
- Export style: use `export default` objects/arrays for rule maps and config blocks, consistent with existing files.

## Testing Guidelines
There is no separate unit test suite in this repo; linting is the test gate.

- Run `npm run lint` before opening a PR.
- For rule/config changes, also run `npm run build` to validate packaging output.
- CI currently enforces `npm run lint:js` and `npm run lint:syncpack` on pushes and pull requests.

## Commit & Pull Request Guidelines
- Commit format follows Conventional Commits and is enforced by commitlint: `<type>(<scope>): <description>`.
- Recent history favors prefixes like `fix(eslint): ...`, `chore(eslint): ...`, and `chore: release x.y.z`.
- Use `npm run commit` (Commitizen + cz-git) for guided commits.
- PRs should include: concise summary, linked issue (`Closes #123` when applicable), and notes about README/changelog updates for user-facing changes.
