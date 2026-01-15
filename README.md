# Adeoluwa Gberno Ayomide - Portfolio Website

A modern, responsive portfolio website built with Next.js 16, showcasing my work as a Full Stack Developer and Software Engineer. Features smooth animations, interactive components, and a clean, minimal design aesthetic.

## 🚀 Features

- **Modern Design**: Clean, minimal interface with custom design system
- **Smooth Animations**: Powered by Framer Motion, GSAP, and custom animation components
- **Interactive Elements**: 
  - Interactive grid pattern in hero section
  - Scroll-revealed text animations
  - Border beam effects on project cards
  - Animated text components
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Complete metadata, structured data, and sitemap
- **Performance**: Built with Next.js 16 for optimal performance
- **Loading Screen**: Custom loading animation on page load

## 🛠️ Tech Stack

### Core
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety

### Styling & Animation
- **Tailwind CSS 4** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **GSAP** - Advanced animations and scroll triggers
- **Anime.js** - Additional animation support

### UI Components
- **Lucide React** - Icon library
- **React Icons** - Additional icons
- Custom components:
  - BorderBeam - Animated border effects
  - TextAnimate - Text animation component
  - RippleButton - Interactive button with ripple effect
  - InteractiveGridPattern - Interactive grid background
  - ScrollReveal - Scroll-triggered text reveals

### Fonts
- **Calluna** - Custom serif font for headings
- **Poppins** - Sans-serif for body text
- **Questrial** - Brand font
- **Gugi** & **Agbalumo** - Additional display fonts

## 📁 Project Structure

```
adeoluwav2/
├── app/
│   ├── layout.tsx          # Root layout with metadata & SEO
│   ├── page.tsx            # Homepage
│   ├── loading.tsx         # Loading state
│   ├── sitemap.ts          # Sitemap generation
│   └── globals.css         # Global styles & design system
├── components/
│   ├── about-variations/   # About section component
│   ├── blog/               # Blog section component
│   ├── contact/            # Contact section component
│   ├── hero-variations/    # Hero section component
│   ├── projects-variations/# Projects section component
│   ├── work-experience/    # Work experience component
│   ├── ui/                 # Reusable UI components
│   ├── Footer.tsx          # Footer component
│   ├── LoadingScreen.tsx   # Loading screen component
│   ├── Magnet.tsx         # Magnetic button effect
│   ├── Navbar.tsx          # Navigation component
│   ├── ScrollReveal.tsx    # Scroll reveal animation
│   └── Shuffle.tsx         # Text shuffle animation
├── public/
│   ├── work/               # Project images
│   ├── fonts/              # Custom fonts
│   └── favicons/           # Favicon files
└── lib/
    └── utils.ts            # Utility functions
```

## 🎨 Design System

### Colors
- **Primary**: `#F0DCDC` - Light pink/beige
- **Secondary**: `#C0B6B6` - Muted gray
- **Dark**: `#1A1A1A` - Almost black
- **Accent**: `#93A091` - Sage green

### Typography
- **Headings**: Calluna (serif)
- **Body**: Poppins (sans-serif)
- **Brand**: Questrial

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
cd adeoluwav2
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🌐 Sections

1. **Hero** - Introduction with animated text and interactive grid
2. **About** - Personal story with scroll-revealed text and interests
3. **Projects** - Portfolio of work with images and descriptions
4. **Work Experience** - Companies I've worked with
5. **Blog** - Blog section (currently empty)
6. **Contact** - Contact information with animated email
7. **Footer** - Social links and copyright

## 🔧 Customization

### Update Personal Information
- Edit `components/about-variations/AboutVariation1.tsx` for about content
- Edit `components/projects-variations/ProjectVariation1.tsx` for projects
- Edit `components/work-experience/WorkExperience.tsx` for companies
- Edit `components/contact/ContactSection.tsx` for contact email
- Edit `components/Footer.tsx` for social links

### Update SEO
- Edit `app/layout.tsx` metadata section
- Update domain URLs in metadata
- Add OG image at `/public/og-image.png`

### Update Colors
- Edit `app/globals.css` in the `@theme` section

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktops (1024px+)
- Large screens (1440px+)

## 🎯 Performance

- Optimized images with Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- SEO best practices implemented

## 📄 License

This project is private and proprietary.

## 👤 Author

**Adeoluwa Gberno**
- Portfolio: [adeoluwa.dev](https://adeoluwa.dev)
- GitHub: [@ajanixoxo](https://github.com/ajanixoxo)
- LinkedIn: [Adeoluwa Gberno](https://www.linkedin.com/in/adeoluwa-gberno-4b755525a/)
- Twitter: [@dexcoded01](https://x.com/dexcoded01)
- Email: joelayomide35@gmail.com

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- Styled with [Tailwind CSS](https://tailwindcss.com)
- Animations by [Framer Motion](https://www.framer.com/motion/) and [GSAP](https://gsap.com)
