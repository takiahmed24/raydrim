# Security Policy

## Supported Versions

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |

## Reporting a Vulnerability

If you discover a security vulnerability within Raydrim or The Dev Vault, please send an e-mail to contact@raydrim.com. All security vulnerabilities will be promptly addressed.

## Security Architecture

- Content-Security-Policy (CSP) Grade A+ with strict script/connect directives
- HSTS 2-Year Max-Age with subdomains and preload
- Clickjack protection via X-Frame-Options: DENY
- Zero-trust token authentication and hardware biometric keychain storage
