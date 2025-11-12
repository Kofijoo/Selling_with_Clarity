# Selling with Clarity - Interactive Training Platform

A comprehensive React-based training application for Josh Agyekum's global sales enablement program. This interactive platform guides sales representatives through 6 progressive scenes to master product knowledge, objection handling, and performance optimization.

## 🚀 Live Demo

**Production Site:** [https://kofijoo.github.io/Selling_with_Clarity/](https://kofijoo.github.io/Selling_with_Clarity/)

## 📋 Table of Contents

- [Features](#features)
- [Scene Overview](#scene-overview)
- [Technology Stack](#technology-stack)
- [Installation](#installation)
- [Development](#development)
- [Deployment](#deployment)
- [Project Structure](#project-structure)
- [Image Assets](#image-assets)
- [Contributing](#contributing)

## ✨ Features

- **Interactive Learning Journey**: 6 progressive scenes with engaging content
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Analytics**: Real-time progress tracking and completion metrics
- **Global Sales Focus**: Multi-region content covering EMEA, APAC, and LATAM
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Production Ready**: Optimized build process for GitHub Pages deployment

## 🎯 Scene Overview

### Scene 1: Global Sales Challenge
**Purpose:** Introduction and regional exploration
- Interactive world map with clickable regions
- Sales representative avatars for each region
- Regional challenge discovery

**Key Image Placement:**
- `map_new.png` - Main world map background
- `sales_rep_Europe.png` - EMEA representative avatar
- `sales_rep_Asia.png` - APAC representative avatar  
- `sales_rep_North_America_blob.png` - LATAM representative avatar

### Scene 2: Product Overview
**Purpose:** Feature exploration and product knowledge
- Interactive feature grid with 5 core products
- Detailed feature cards with value propositions
- Progress tracking for feature exploration

**Key Image Placement:**
- `Payroll.png` - Payroll feature icon
- `Compliance.png` - Compliance feature icon
- `HRIS.png` - HRIS feature icon
- `Equipment.png` - Equipment feature icon
- `Benefits.png` - Benefits feature icon

### Scene 3: Objection Handling
**Purpose:** Interactive scenario-based learning
- Customer objection simulations
- Multiple choice response options
- Real-time feedback and scoring

### Scene 4: Pitch Practice
**Purpose:** Sales pitch development and AI feedback
- Text input for custom pitches
- AI-powered feedback simulation
- Example pitch demonstrations

### Scene 5: Learning Toolkit
**Purpose:** Reinforcement tools and resources
- Quick quiz module
- Objection handling cheat sheet
- Discovery question guide
- Product update timeline

### Scene 6: Performance Analytics
**Purpose:** Learning impact demonstration
- Animated performance dashboard
- Key performance indicators (KPIs)
- Business impact visualization

**Key Image Placement:**
- `scene6_image.png` - Performance analytics visualization (right side of screen)

## 🛠 Technology Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Pure CSS with CSS Grid and Flexbox
- **Deployment:** GitHub Pages
- **Development Server:** Vite Dev Server (Port 3000/3001)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/KOFIJOO/Selling_with_Clarity.git
cd Selling_with_Clarity
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start development server:**
```bash
npm run dev
```

4. **Open in browser:**
Navigate to `http://localhost:3000` (or the port shown in terminal)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

### Development Workflow

1. **Local Development:**
   - Use `npm run dev` for hot-reload development
   - Base path is set to `/` for local development

2. **Production Build:**
   - Run `npm run build` to create optimized production files
   - Built files are generated in `/dist` directory

3. **GitHub Pages Deployment:**
   - Base path automatically set to `/Selling_with_Clarity/`
   - Built files copied to repository root for GitHub Pages

## 🚀 Deployment

### Automatic GitHub Pages Deployment

The project is configured for seamless GitHub Pages deployment:

1. **Build for production:**
```bash
npm run build
```

2. **Copy built files to root:**
```bash
copy /Y dist\index.html index.html
xcopy /E /Y dist\assets assets
```

3. **Commit and push:**
```bash
git add .
git commit -m "Deploy to GitHub Pages"
git push origin main
```

4. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder

## 📁 Project Structure

```
Selling_with_Clarity/
├── src/
│   ├── components/
│   │   ├── Scene1/          # Global sales challenge
│   │   ├── Scene2/          # Product overview
│   │   ├── Scene3/          # Objection handling
│   │   ├── Scene4/          # Pitch practice
│   │   ├── Scene5/          # Learning toolkit
│   │   ├── Scene6/          # Performance analytics
│   │   └── shared/          # Reusable components
│   ├── hooks/               # Custom React hooks
│   ├── styles/              # CSS stylesheets
│   ├── assets/              # Images and static files
│   ├── App.jsx              # Main application component
│   └── main.jsx             # Application entry point
├── public/                  # Public static files
├── dist/                    # Production build output
├── package.json             # Dependencies and scripts
├── vite.config.js          # Vite configuration
└── README.md               # Project documentation
```

## 🖼 Image Assets

### Required Images for Full Functionality

**Scene 1 - Global Map:**
- `map_new.png` - World map background (recommended: 1200x600px)
- `sales_rep_Europe.png` - EMEA avatar (recommended: 100x100px, circular crop)
- `sales_rep_Asia.png` - APAC avatar (recommended: 100x100px, circular crop)
- `sales_rep_North_America_blob.png` - LATAM avatar (recommended: 100x100px, circular crop)

**Scene 2 - Product Features:**
- `Payroll.png` - Payroll icon (recommended: 80x80px)
- `Compliance.png` - Compliance icon (recommended: 80x80px)
- `HRIS.png` - HRIS icon (recommended: 80x80px)
- `Equipment.png` - Equipment icon (recommended: 80x80px)
- `Benefits.png` - Benefits icon (recommended: 80x80px)

**Scene 6 - Analytics:**
- `scene6_image.png` - Performance dashboard visualization (recommended: 400x500px)

**Branding:**
- `ja_logo.png` - Josh Agyekum logo (recommended: 100x100px, circular)

### Image Optimization Guidelines

- **Format:** PNG for icons/logos, JPG for photographs
- **Compression:** Optimize for web (aim for <500KB per image)
- **Responsive:** Provide high-resolution images that scale well
- **Accessibility:** Include descriptive alt text for all images

## 🎨 Customization

### Styling
- Main styles: `/src/styles/globals.css`
- Scene-specific styles: `/src/styles/scene5.css`
- Responsive breakpoints: Mobile (<768px), Tablet (768-1023px), Desktop (1024px+)

### Content Updates
- Scene content: Individual scene component files
- Copy/messaging: Update directly in component JSX
- Branding: Replace logo and update color scheme in CSS

### Adding New Scenes
1. Create new scene directory in `/src/components/`
2. Add scene component and sub-components
3. Update `App.jsx` to include new scene in routing
4. Add corresponding CSS styles

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/new-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary software developed for Josh Agyekum's sales enablement program.

## 📞 Support

For technical support or questions about the training content, please contact the development team or create an issue in the GitHub repository.

---

**Built with ❤️ for global sales excellence**