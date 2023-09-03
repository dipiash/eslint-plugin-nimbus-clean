# Contributing Guide

Welcome to our project! We're thrilled that you're considering contributing. Here's a comprehensive guide to help you get started:

## Getting Started

1. Fork the repository to your GitHub account.
2. Clone the forked repository to your local machine.
3. Run `npm run init` to install the project dependencies.
4. Familiarize yourself with the project's structure and codebase.

## Branching

1. Create a new branch for your contribution: git checkout -b feature/my-feature.
2. Keep your branch up to date with the main branch: `git pull origin main`.

## Committing with Conventional Commits and Commit-lint

1. We follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification for our commit messages.
2. Ensure your commit messages adhere to the format: `<type>(<scope>): <description>`.
   - Example: `feat(prettier): add prettier settings`.
3. Types can be one of the following: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, and others.
4. Use `scope` to indicate which part of the codebase your change affects.
5. Craft descriptive and concise commit messages.
6. Write in the present tense, such as "Add feature" instead of "Added feature".
7. Link to related issues using keywords like "Fixes #123".
8. Our project uses commit-lint to ensure commit messages adhere to the Conventional Commits format. If your commit message doesn't follow the format, you'll be prompted to adjust it.

You can use the command to automate this flow:
- `cz` in you terminal
- or `npm run commit`.

## Pull Requests

1. Push your changes to your forked repository.
2. Create a Pull Request (PR) from your branch to the main repository's main branch.
3. Provide a clear PR title and an explanatory description of your changes.
4. Reference relevant issues using keywords like "Closes #123".

## Issues

1. Should you come across a bug or have an idea, check for existing issues. If none exist, create one.
2. Utilize the provided issue template for comprehensive details.
3. Approach feedback and suggestions with a respectful and receptive attitude.

Thank you for considering contributing to our project. Your dedication contributes to its growth and quality. Enjoy the collaborative journey!
