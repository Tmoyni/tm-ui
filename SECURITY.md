# Security Policy

## Supported Versions

We actively support the following versions of tm-ui with security updates:

| Version | Supported          |
| ------- | ------------------ |
| 0.0.x   | :white_check_mark: |

## Reporting a Vulnerability

We take security vulnerabilities seriously. If you discover a security issue in tm-ui, please report it responsibly.

### How to Report

**Please do NOT report security vulnerabilities through public GitHub issues.**

Instead, please report security vulnerabilities by emailing:

**[your.email@example.com]**

Include the following information:

- Type of vulnerability
- Full paths of affected source file(s)
- Location of the affected source code (tag/branch/commit or direct URL)
- Step-by-step instructions to reproduce the issue
- Proof-of-concept or exploit code (if possible)
- Impact of the vulnerability
- Potential severity assessment

### What to Expect

- **Response Time**: We aim to acknowledge your report within 48 hours
- **Investigation**: We'll investigate and determine the severity and impact
- **Updates**: We'll keep you informed of our progress
- **Fix**: We'll work on a fix and coordinate disclosure timing with you
- **Credit**: We'll credit you in the security advisory (unless you prefer to remain anonymous)

### Security Update Process

1. Issue is reported and acknowledged
2. Vulnerability is confirmed and assessed
3. Fix is developed and tested
4. Security advisory is published
5. Fixed version is released
6. Public disclosure (coordinated with reporter)

## Security Best Practices

When using tm-ui in your application:

### Dependency Management

- Keep tm-ui and its peer dependencies up to date
- Regularly run `npm audit` to check for known vulnerabilities
- Monitor GitHub security advisories for tm-ui

### Safe Usage

- Always sanitize user input before passing it to components
- Be cautious with `dangerouslySetInnerHTML` in your application
- Follow React security best practices
- Validate props when extending or wrapping components

### Example of Unsafe Usage

```tsx
// ❌ DON'T DO THIS - XSS vulnerability
<Button onClick={() => eval(userInput)}>Click</Button>

// ✅ DO THIS - Safe
<Button onClick={handleClick}>Click</Button>
```

## Known Security Considerations

### styled-components

tm-ui uses styled-components for styling. Be aware:

- CSS injection is possible if you interpolate unsanitized user input into styled components
- Always validate and sanitize dynamic styles

```tsx
// ❌ Unsafe - if userColor contains malicious CSS
const UnsafeButton = styled.button`
  color: ${props => props.userColor};
`;

// ✅ Safe - validate against whitelist
const SafeButton = styled.button`
  color: ${props => ALLOWED_COLORS.includes(props.color) ? props.color : 'blue'};
`;
```

### React

- We support React 18+ which includes automatic XSS protection
- We follow React security best practices in all components
- All components properly escape user content

## Security Advisories

Security advisories for tm-ui will be published:

- On GitHub Security Advisories: [https://github.com/yourusername/tm-ui/security/advisories](https://github.com/yourusername/tm-ui/security/advisories)
- In release notes for patched versions
- Via npm advisory database

## Vulnerability Disclosure Policy

We follow a coordinated vulnerability disclosure policy:

1. **Private disclosure**: Report sent to maintainers (Day 0)
2. **Acknowledgment**: We respond within 48 hours (Day 1-2)
3. **Fix development**: We develop and test fix (Day 3-14)
4. **Coordinated release**: Fixed version released (Day 14-30)
5. **Public disclosure**: Advisory published after users have time to update (Day 30+)

We request that security researchers:

- Give us reasonable time to fix the vulnerability before public disclosure
- Make a good faith effort to avoid privacy violations, data destruction, and interruption of service
- Do not exploit the vulnerability beyond what is necessary to demonstrate it

## Bug Bounty Program

We currently do not have a bug bounty program. However, we deeply appreciate security research and will:

- Publicly acknowledge your contribution (if you wish)
- List you in our security contributors in the CHANGELOG
- Provide credit in the security advisory

## Contact

For security-related inquiries:

- **Email**: [your.email@example.com]
- **GitHub Security**: Use GitHub's private vulnerability reporting feature

For general questions:

- **GitHub Issues**: [https://github.com/yourusername/tm-ui/issues](https://github.com/yourusername/tm-ui/issues)
- **GitHub Discussions**: [https://github.com/yourusername/tm-ui/discussions](https://github.com/yourusername/tm-ui/discussions)

---

Last Updated: 2025-12-17
