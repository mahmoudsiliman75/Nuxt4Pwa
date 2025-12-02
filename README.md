# Nuxt Starter (Nuxt 4 Application)

**Nuxt 4 Starter App** is a modern, full-featured starter app built with a powerful stack of cutting-edge technologies, it built with **Nuxt 4 and Vue 3** the app leverages the latest advancements in the Vue ecosystem to deliver a seamless development experience.

The integration of **Vue Router** ensures smooth navigation and routing, while **Pinia** offers a robust, intuitive state management solution that simplifies handling global and local states.

The app is styled with **Tailwind CSS**, giving you the flexibility to create beautiful, responsive UIs quickly without sacrificing performance. On top of that, **Nuxt UI 4** adds a layer of pre-built, accessible, and customizable components that accelerate development and ensure consistency across your application.

For form handling and validation, the app integrates **Vee Validate** and **Yup**, providing a streamlined way to validate user inputs with clear error messaging and schema-based validation logic.

The entire codebase is written in **TypeScript**, offering enhanced type safety, improved developer experience, and better tooling support, which helps catch errors early and ensures robust code quality.


## Project Overview

This project is built using:
- Nuxt 4
- Vue 3
- Vue Router
- Pinia State Management
- TypeScript
- Tailwindcss
- Nuxt UI 4
- Vee Validate
- Yup Validations

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js (v24.11.0)
- npm (v11.6.1)
- Git

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

## Code formatting & linting

Code formatting with (Prettier):

```bash
# npm
npm run format
```

Code linting with (esLint):

```bash
# npm
npm run lint:fix
```

## Deployment Steps

### 1. Build the Application
```bash
npm run build
```

### 2. Deploy to Production
The application can be deployed to various platforms:

#### Vercel Deployment
1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Configure build settings:
   - Build Command: `npm run build`
   - Output Directory: `.output`
   - Install Command: `npm install`

#### Netlify Deployment
1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Configure build settings:
   - Build Command: `npm run build`
   - Publish Directory: `.output/public`

#### Traditional Server Deployment
1. Build the application: `npm run build`
2. Configure Pm2 to serve the app on the server (ecosystem.config.cjs)
3. Run Pm2: `pm2 start app-name`

## Project Structure

```
app/
├── assets/          # Static assets like images, fonts, etc.
├── components/      # Vue components
├── components/      # Vue composables
├── configs/         # Configuration files
├── layouts/         # Page layouts
├── middleware/      # App middlewares 
├── pages/           # Application pages
├── plugins/         # Vue plugins
├── schemas/         # Vee Validate & Yup validation schemas
├── stores/          # Pinia store files
├── types/           # Application type annotation & declaration files
├── utils/           # Utility and Helpers functions
├── app.config.ts    # Expose reactive configuration
├── app.vue          # The main component of Nuxt application
└── error.vue        # The error page of Nuxt application
public/              # Public static files
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Support

For support, please open an issue in the repository or contact the development team.