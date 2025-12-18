# tm-ui Roadmap

## Design System Reference
[Simple Design System (Figma)](https://www.figma.com/design/oND9HiMKA2t3TnwPjk5T2T/Simple-Design-System--Community-?node-id=368-11410&t=G7AtWlDwDtALSgBl-1)

## Current Status ✅
- [x] Button component with primary/secondary variants
- [x] Three-tier design token system
- [x] Comprehensive test coverage
- [x] TypeScript support
- [x] ESM-only distribution
- [x] Accessible focus and disabled states

## Button Component Enhancements

### Align Variants to Figma Spec
- [ ] Expand from "primary/secondary" → match "Primary, Neutral, Subtle" from design system
- [ ] Ensure each variant has correct default, hover, active, and disabled states
- [ ] Confirm visual design matches spec for each variant
- [ ] Ensure disabled state prevents hover/active changes ✅ (implemented with `:not(:disabled)`)

### Add Size Scale
- [ ] Support Small and Medium sizes as defined in the spec
- [ ] Verify padding, font size, and height match Figma exactly
- [ ] Update token system to support size variations

### Cross-check Focus State
- [x] Decide between design system token or WCAG AA-compliant outline (using WCAG-compliant blue outline)
- [ ] Verify focus state matches Figma if specified
- [ ] Test focus visibility across all variants

### Storybook Integration
- [ ] Add controls to switch between variant, size, and state easily
- [ ] Link Figma URL in stories for side-by-side comparison
- [ ] Add comprehensive variant showcase story ⏳ (in progress)

## Future Components

### Planned Components
- [ ] Input (text, number, email, password)
- [ ] Textarea
- [ ] Checkbox
- [ ] Radio
- [ ] Select/Dropdown
- [ ] Switch/Toggle
- [ ] Card
- [ ] Modal/Dialog
- [ ] Tooltip
- [ ] Badge
- [ ] Alert/Notification
- [ ] Spinner/Loader
- [ ] Layout primitives (Stack, Grid, Container)

## Design System Improvements

### Theming
- [ ] Add dark mode support
- [ ] Create ThemeProvider for runtime theme switching
- [ ] Document theming API

### Tokens
- [ ] Add spacing tokens for layout components
- [ ] Add typography scale tokens
- [ ] Add animation/transition tokens
- [ ] Consider CSS custom properties output option

## Documentation

- [ ] Component API documentation
- [ ] Usage examples for each component
- [ ] Theming guide
- [ ] Migration guide (when applicable)
- [ ] Storybook stories for all components
- [ ] Accessibility documentation

## Developer Experience

- [ ] Add Husky for pre-commit hooks
- [ ] Add Commitlint for conventional commits
- [ ] Consider adding Visual Regression Testing (Chromatic)
- [ ] Add bundle size tracking
- [ ] CI/CD pipeline configuration

## Community

- [ ] Contributing guidelines
- [ ] Code of conduct
- [ ] Issue templates
- [ ] Pull request templates
- [ ] Security policy
