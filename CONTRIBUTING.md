# Contributing to tm-ui

Thank you for your interest in contributing to tm-ui! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report, please check existing issues to avoid duplicates. When creating a bug report, include:

- A clear, descriptive title
- Detailed steps to reproduce the issue
- Expected behavior vs actual behavior
- Screenshots or code examples if applicable
- Your environment (Node version, OS, browser)

Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md) when filing issues.

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:

- Use a clear, descriptive title
- Provide detailed description of the proposed feature
- Explain why this enhancement would be useful
- Include mockups or examples if applicable

Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md) when suggesting features.

### Pull Requests

1. **Fork and Clone**
   ```bash
   git clone https://github.com/yourusername/tm-ui.git
   cd tm-ui
   ```

2. **Set Up Development Environment**
   ```bash
   # Install Node 20+ (using nvm)
   nvm use

   # Install dependencies
   npm install
   ```

3. **Create a Branch**
   ```bash
   git checkout -b feature/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```

4. **Make Your Changes**
   - Write clean, maintainable code
   - Follow existing code style (enforced by ESLint/Prettier)
   - Add tests for new functionality
   - Update documentation as needed

5. **Test Your Changes**
   ```bash
   # Format code
   npm run format

   # Lint code
   npm run lint:fix

   # Type check
   npm run typecheck

   # Run tests
   npm test

   # Check coverage
   npm run test:coverage

   # Build the library
   npm run build
   ```

6. **Commit Your Changes**

   We use [Conventional Commits](https://www.conventionalcommits.org/):

   ```bash
   # Format: <type>(<scope>): <subject>

   git commit -m "feat(button): add size variants"
   git commit -m "fix(tokens): correct primary color contrast"
   git commit -m "docs(readme): update installation instructions"
   git commit -m "test(button): add keyboard navigation tests"
   ```

   **Types:**
   - `feat`: New feature
   - `fix`: Bug fix
   - `docs`: Documentation changes
   - `style`: Code style changes (formatting, no logic change)
   - `refactor`: Code refactoring
   - `test`: Adding or updating tests
   - `chore`: Build process or tooling changes

7. **Push and Create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

   Then open a Pull Request on GitHub using the [PR template](.github/PULL_REQUEST_TEMPLATE.md).

## Development Workflow

### Project Structure

```
tm-ui/
├── src/
│   ├── components/     # React components
│   ├── tokens/         # Design tokens (primitives, semantic, components)
│   ├── stories/        # Storybook examples (not published)
│   └── index.ts        # Main entry point
├── dist/               # Build output (generated)
├── .storybook/         # Storybook configuration
└── [config files]      # TypeScript, ESLint, Prettier, etc.
```

### Available Scripts

```bash
# Development
npm run storybook          # Start Storybook dev server (port 6006)
npm run format             # Format code with Prettier
npm run format:check       # Check formatting without modifying
npm run lint               # Check for lint errors
npm run lint:fix           # Auto-fix lint errors

# Testing
npm test                   # Run unit tests
npm run test:watch         # Run tests in watch mode
npm run test:coverage      # Generate coverage report
npm run test:storybook     # Run Storybook tests

# Building
npm run typecheck          # Check TypeScript types
npm run build              # Build the library
npm run build-storybook    # Build Storybook static site
```

### Code Style

Code style is enforced automatically:

- **Prettier**: Formats code on save (single quotes, 2 spaces, 100 char width)
- **ESLint**: Catches code quality issues and enforces React/TypeScript best practices
- **EditorConfig**: Ensures consistent editor settings

Your editor should pick these up automatically. If not:
- VS Code: Install Prettier and ESLint extensions
- Other editors: Check EditorConfig support

### Writing Tests

All components must have comprehensive test coverage:

```typescript
// Button.test.tsx example
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from './Button';

describe('Button', () => {
  it('renders with children', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument();
  });

  it('calls onClick when clicked', async () => {
    const handleClick = vi.fn();
    const user = userEvent.setup();
    render(<Button onClick={handleClick}>Click</Button>);

    await user.click(screen.getByRole('button'));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
```

**Test Requirements:**
- Unit tests for all components
- Test all props and variants
- Test user interactions (click, focus, keyboard)
- Test accessibility features
- Aim for 100% coverage on component logic

### Adding New Components

1. **Create component files:**
   ```
   src/components/
   ├── NewComponent.tsx          # Component implementation
   ├── NewComponent.Styles.ts    # Styled components
   ├── NewComponent.stories.tsx  # Storybook stories
   └── NewComponent.test.tsx     # Unit tests
   ```

2. **Use design tokens:**
   ```typescript
   import { tokens } from '../tokens';

   const StyledComponent = styled.div`
     padding: ${tokens.semantic.spacing.component.padding};
     color: ${tokens.semantic.colors.text.primary};
   `;
   ```

3. **Export from index.ts:**
   ```typescript
   export * from './components/NewComponent';
   ```

4. **Write comprehensive tests**

5. **Add Storybook stories**

6. **Update documentation**

### Design Tokens

We use a three-tier token system:

1. **Primitives** (`tokens/primitives.ts`): Raw values (colors, spacing, font sizes)
2. **Semantic** (`tokens/semantic.ts`): Contextual meanings (brand colors, text colors)
3. **Components** (`tokens/components.ts`): Component-specific tokens

Always reference tokens from the appropriate tier. See [ROADMAP.md](ROADMAP.md) for token architecture details.

### Documentation

When adding or changing features:

1. Update component JSDoc comments
2. Update README.md if API changes
3. Add/update Storybook stories
4. Update CHANGELOG.md (in Unreleased section)
5. Update ROADMAP.md if completing roadmap items

## Review Process

### What We Look For

- ✅ Code follows project style and conventions
- ✅ All tests pass
- ✅ Test coverage maintained or improved
- ✅ TypeScript types are correct
- ✅ Changes are documented
- ✅ Commit messages follow Conventional Commits
- ✅ No breaking changes (or properly documented)
- ✅ Accessibility considerations addressed

### After Submitting

- A maintainer will review your PR
- Automated checks (tests, linting, type checking) must pass
- Address any review comments
- Once approved, a maintainer will merge your PR

## Getting Help

- 💬 Open a [GitHub Discussion](https://github.com/yourusername/tm-ui/discussions) for questions
- 🐛 Open an [Issue](https://github.com/yourusername/tm-ui/issues) for bugs
- 📖 Check existing documentation and issues first

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (ISC).

## Recognition

Contributors will be recognized in our README.md and release notes. Thank you for making tm-ui better! 🎉
