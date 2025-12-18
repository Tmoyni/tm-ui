# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Button component with primary and secondary variants
- Three-tier design token system (primitives, semantic, components)
- New color scales: green, pink, red, yellow
- Comprehensive test suite with 26 unit tests
- ESLint and Prettier configuration
- TypeScript strict mode configuration
- Test coverage reporting
- EditorConfig for consistent coding styles
- Storybook integration for component development
- AllVariants story for comprehensive button showcase
- ROADMAP.md for future development plans
- CHANGELOG.md for tracking changes
- CONTRIBUTING.md with development guidelines
- SECURITY.md with vulnerability reporting process
- GitHub issue templates (bug report, feature request)
- GitHub pull request template
- CI/CD workflows (automated testing and npm publishing)
- Commitlint with Conventional Commits enforcement
- Husky git hooks (pre-commit linting/formatting, commit message validation)
- Bundle size tracking with size-limit (15 KB limit)

### Changed
- Node.js requirement updated to >=20 (from >=18)
- Excluded sandbox files from TypeScript compilation
- Enhanced TypeScript configuration with stricter compiler options
- Updated color token scale from 50-900 to 100-1000 to match design system
- Renamed blue color scale to brand scale for better semantic clarity

### Fixed
- Hover and active states now properly guarded with `:not(:disabled)`
- Focus state now uses WCAG-compliant outline
- Code formatting inconsistencies resolved with Prettier
- ESLint violations fixed

### Security
- No known security vulnerabilities

## [0.0.1] - Initial Release

### Added
- Initial project setup
- Basic Button component
- styled-components integration
- TypeScript support
- ESM-only package distribution
- Peer dependencies: React 18+, styled-components ^6.1.19

[Unreleased]: https://github.com/yourusername/tm-ui/compare/v0.0.1...HEAD
[0.0.1]: https://github.com/yourusername/tm-ui/releases/tag/v0.0.1
