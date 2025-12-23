# Quantiliom Website

Enterprise software solutions website for Quantiliom - a leading software development company based in Amsterdam, Netherlands.

## Prerequisites

- **Node.js**: Version 20.19+ or 22.12+ (required for Vite 7.2.4)
- **npm**: Comes with Node.js
- **nvm** (Node Version Manager): Recommended for managing Node.js versions

## Getting Started

### Step 1: Install Node.js (if not already installed)

If you don't have Node.js installed or have an older version, use nvm to install the latest LTS version:

```bash
nvm install --lts
```

This will install the latest Long-Term Support (LTS) version of Node.js, which is compatible with this project.

### Step 2: Set Node.js Version

Switch to the LTS version:

```bash
nvm use --lts
```

This activates the latest LTS Node.js version for your current terminal session.

### Step 3: Set Default Node.js Version (Optional but Recommended)

To avoid running `nvm use --lts` every time you open a new terminal:

```bash
nvm alias default node
```

This sets the default Node.js version to the latest installed version, so it will automatically be used in new terminal sessions.

### Step 4: Install Dependencies

Install all required packages:

```bash
npm install
```

### Step 5: Run the Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port shown in your terminal).

## Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## Project Structure

```
Quantiliom-website/
├── src/
│   ├── pages/          # Page components (Services, Team, About, Contact, ServiceDetail)
│   ├── App.tsx         # Main app component with routing
│   ├── App.css         # Main stylesheet
│   └── index.css       # Global styles
├── public/             # Static assets
├── index.html          # HTML entry point
└── package.json        # Dependencies and scripts
```

## Features

- **Dark/Light Theme Toggle** - Switch between dark and light modes
- **Responsive Design** - Works on desktop, tablet, and mobile devices
- **Multi-page Navigation** - Home, Services, Team, About, Contact pages
- **Service Detail Pages** - Individual pages for each of the 17 service categories
- **Google Maps Integration** - Company location map
- **Contact Form** - Functional contact form
- **Smooth Animations** - Professional transitions and hover effects

## Technology Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Vite 7** - Build tool and dev server
- **React Router** - Client-side routing
- **CSS3** - Styling with CSS custom properties for theming

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- The project requires Node.js 20.19+ or 22.12+ due to Vite 7 requirements
- If you encounter version errors, use `nvm use --lts` to switch to a compatible version
- The development server supports hot module replacement (HMR) for instant updates

## Company Information

- **Company**: Quantiliom
- **Established**: 2023
- **Location**: B. Amsterdam, Amsterdam, Netherlands
- **Email**: info@quantiliom.com
- **LinkedIn**: https://www.linkedin.com/company/quantiliom
- **X (Twitter)**: https://x.com/quantiliom
