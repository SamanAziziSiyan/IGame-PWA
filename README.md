# IranCP PWA — Customer-Facing Web App

## Overview

A Next.js customer-facing PWA for IranCP, a marketplace for buying game CP. The repository contains the frontend application and its PWA configuration.

## Technical Stack

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Axios
- Zustand
- React Hook Form
- Google OAuth
- OTP input
- Workbox / next-pwa
- Jalali/Persian date tooling

## Architecture

The application uses the Next.js App Router. The root layout configures Persian document language, application metadata, and the web app manifest. The home route delegates rendering to the Home component layer.

PWA behavior is configured with `@ducanh2912/next-pwa`, including service-worker registration and runtime caching for static assets and selected external resources.

## Verified PWA Features

- Web app manifest
- Standalone display mode
- Installable PWA asset configuration
- Service-worker generation through next-pwa
- Runtime caching rules for static resources and selected external assets

## Development

Install dependencies with `npm install`.

Run locally with `npm run dev`.

Build with `npm run build`.

## Repository Context

This repository and `IranCP-PWA` contain effectively identical project manifests and the same initial README state. Keep one repository as the primary portfolio reference rather than presenting both as separate projects.

The original iGame system also involved WordPress and .NET backends. Those services are outside this repository, so this README does not claim ownership of the complete platform.

## Security / Configuration

Do not commit API keys, OAuth secrets, private backend credentials, or production configuration. The checked-in PWA configuration should be treated as client-side configuration only.

## Limitations

The public repository does not include the complete backend services or production infrastructure. External service contracts and some application behavior cannot be independently verified from this frontend snapshot alone.

## Project Status

Historical portfolio source snapshot demonstrating a production-oriented Next.js/PWA frontend and multi-service integration context.
