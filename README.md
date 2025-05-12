# E-Commerce Next.js Project - Nascent Group - Technical Challege 

## Project Overview

This project is a mini product showcase web application built using Next.js 15 as part of the Front-End Developer Technical Challenge for Nascent Group. It features a responsive product listing page (powered by Static Site Generation), a dynamic product detail page (using Server-Side Rendering), and a simple contact form submitted via Next.js API routes. Product data is sourced from Fake Store API or a local JSON file, offering a smooth and efficient user experience.

## Getting Started

### Prerequisites
- Node.js (recommended version 18.x or later)
- npm, yarn, pnpm, or bun package manager

### Installation

1. Clone the repository
```bash
git clone https://github.com/Afras-cyber/project-showcase.git
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application

## Rendering Strategies

This project leverages Next.js 15's flexible rendering options:

### Static Site Generation (SSG)
For static page generation:
```javascript
export const dynamic = "force-static";
```

### Server-Side Rendering (SSR)
For dynamic server-side rendering:
```javascript
export const dynamic = "force-dynamic";
```

## Page Structure

The application consists of four main pages:

1. **Home Page** 
   - Landing page with featured products and site overview
   - Provides an inviting entry point to the e-commerce experience

2. **Shop Page**
   - Comprehensive product catalog
   - Allows browsing and exploring available products
   - Potentially includes filtering and sorting capabilities

3. **Product Details Page**
   - Detailed view of individual products
   - Provides in-depth information, images, pricing, and purchase options

4. **Contact Us Page**
   - Customer communication interface
   - Includes contact form or contact information

## User Interface

The UI design was carefully crafted using inspiration from:
- Behance design portfolios
- Google references

## Tech Stack

- **Framework**: Next.js 15
- **Language**: JavaScript
- **Styling**: Tailwind CSS 
- **Icons**: react-icons
- **Rendering**: Supports both SSG and SSR

## Contact

**Developer**: Ahamed Afras

- Email : afras975@gmail.com
- Contact No : +94 77 675 6287

---

**Note**: This is a Mini Product Showcase developed to showcase web development skills and Next.js capabilities.