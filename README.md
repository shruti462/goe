# Gamare Overseas Exim - Premium Export Company Website

A complete, modern, and premium export company website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Premium Design**: Fortune 500 inspired design language with glassmorphism, premium shadows, and green gradients
- **Fully Responsive**: Mobile-first design that looks stunning on all devices
- **Advanced Animations**: Framer Motion powered animations including parallax, fade-in, scale, and floating elements
- **Smooth Navigation**: Sticky navbar with active link detection and smooth scrolling
- **Interactive Sections**:
  - Hero with autoplay background slider
  - About with floating cards
  - Products grid with hover effects
  - Animated process timeline
  - Testimonials from global clients
  - Vision section with animated particles
  - Contact form with validation
  - Live statistics banner
  
## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Navigate to the project directory
cd gamare-overseas

# Install dependencies (already done)
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
gamare-overseas/
├── app/
│   ├── globals.css          # Global styles with custom animations
│   ├── layout.tsx            # Root layout with metadata
│   └── page.tsx              # Main page
├── components/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ProductsSection.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── VisionSection.tsx
│   │   ├── CtaSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── StatsBanner.tsx
│   ├── ui/
│   │   ├── CountUp.tsx       # Animated counter component
│   │   └── SectionHeading.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
└── public/
    └── images/               # Place custom images here
```

## 🎨 Design System

### Colors
- **Primary**: `#0B6E4F` (Green)
- **Secondary**: `#14532D` (Dark Green)
- **Accent**: `#FFD54F` (Gold)
- **Background**: `#FFFFFF` (White)
- **Dark**: `#101820` (Almost Black)
- **Text**: `#202124` (Charcoal)

### Typography
- **Headings**: Poppins (Bold/ExtraBold)
- **Body**: Inter
- **Buttons**: Inter Semibold

### Key Design Elements
- Large white spaces
- Rounded corners (12-32px)
- Glassmorphism effects
- Premium shadows
- Green gradients
- Smooth transitions (300-400ms)

## 🛠 Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion + GSAP
- **Icons**: Lucide React
- **Forms**: React Hook Form
- **Image Slider**: Swiper (if needed)

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🌐 Deployment

This Next.js app can be deployed to:
- **Vercel** (recommended)
- **Netlify**
- **AWS Amplify**
- Any Node.js hosting platform

## 📝 Customization

### Update Company Information

Edit the following files:
- `app/layout.tsx` - Metadata and SEO
- `components/sections/ContactSection.tsx` - Contact details
- `components/Footer.tsx` - Footer information

### Add Custom Images

Place images in `public/images/` and update image references in components.

### Modify Colors

Update color values in `app/globals.css` CSS variables and Tailwind classes throughout components.

## 📄 License

© 2026 Gamare Overseas Exim Pvt. Ltd. All rights reserved.

---

**Built with precision and passion for Gamare Overseas Exim** 🇮🇳
