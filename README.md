# Gravity Team Website

A modern, responsive crypto trading website built with Tailwind CSS and GSAP animations.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with seamless desktop experience
- **GSAP Animations**: Professional scroll-triggered animations and transitions
- **Modern UI**: Clean, crypto-focused design with gradient effects
- **Interactive Elements**: Hover effects, smooth scrolling, and animated counters
- **Performance Optimized**: Minified CSS and optimized assets

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **Tailwind CSS**: Utility-first CSS framework
- **GSAP**: Professional animation library with ScrollTrigger
- **JavaScript**: Interactive functionality
- **Node.js**: Build tooling

## 📁 Project Structure

```
gravity-team-website/
├── public/                 # Production-ready files
│   ├── index.html         # Main HTML file
│   ├── css/               # Compiled CSS
│   │   └── styles.css     # Minified Tailwind CSS
│   └── assets/            # Images and media files
├── src/                   # Source files
│   └── input.css          # Tailwind CSS input file
├── package.json           # Project configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # Project documentation
```

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gravity-team-website
```

2. Install dependencies:
```bash
npm install
```

3. Build the CSS:
```bash
npm run build
```

4. Start development server:
```bash
npm run dev
```

## 📜 Available Scripts

- `npm run dev` - Start development server with CSS watching
- `npm run build` - Build production-ready CSS
- `npm run start` - Build and serve the website
- `npm run serve` - Serve the built website

## 🌐 Deployment

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `public` folder to Netlify:
   - Drag and drop the `public` folder to Netlify dashboard
   - Or connect your Git repository with build command: `npm run build` and publish directory: `public`

### Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel --prod
```

3. Set build settings:
   - Build Command: `npm run build`
   - Output Directory: `public`

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  background: '#0a0a0a',
  light: '#f8f8f8',
  secondary: '#b0b0b0',
  primary: '#8B5CF6',
  accent: '#EC4899',
}
```

### Animations

GSAP animations are configured in the main JavaScript section of `index.html`. Modify timing, easing, and effects as needed.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Build Configuration

The project uses Tailwind CSS with custom configuration:

- **Content Sources**: `./public/**/*.{html,js}`, `./src/**/*.{html,js}`
- **Plugins**: @tailwindcss/forms, @tailwindcss/typography
- **Custom Animations**: Marquee scrolling, GSAP transitions

## 🚀 Performance Features

- Minified CSS for production
- Optimized images and assets
- Efficient GSAP animations using transforms
- Mobile-first responsive design
- CDN-hosted external libraries

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👨‍💻 Author

**Prakshil Patel**
- Professional Web Developer
- Crypto Trading Solutions Specialist

---

*Building the future of crypto trading experiences* 🚀
