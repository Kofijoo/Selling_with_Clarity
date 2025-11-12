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
- [Scene Navigation](#scene-navigation)
- [Contributing](#contributing)

## ✨ Features

- **Interactive Learning Journey**: 6 progressive scenes with engaging content
- **Scene Navigation**: Skip to any scene with dropdown selector
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Performance Analytics**: Real-time progress tracking and completion metrics
- **Global Sales Focus**: Multi-region content covering EMEA, APAC, and LATAM
- **Modern UI/UX**: Clean, professional interface with smooth animations
- **Production Ready**: Optimized build process for GitHub Pages deployment

## 🎯 Scene Overview

### Scene 1: Global Sales Challenge
**Purpose:** Introduction and regional exploration
- Interactive world map with clickable regions
- Sales representative avatars positioned on map coordinates
- Regional challenge discovery through popup dialogs
- Progress tracking: 3/3 regions must be explored to continue

**Key Components:**
- `WelcomeScreen.jsx` - Initial landing with Josh Agyekum branding
- `InteractiveMap.jsx` - Main map interface with hotspots
- `SalesRepAvatar.jsx` - Clickable avatar components
- `RegionPopup.jsx` - Modal dialogs for region information

**Key Image Placement:**
- `map_new.png` - Main world map background (1200x600px recommended)
- `sales_rep_Europe.png` - EMEA representative avatar (100x100px, circular)
- `sales_rep_Asia.png` - APAC representative avatar (100x100px, circular)
- `sales_rep_North_America_blob.png` - LATAM representative avatar (100x100px, circular)
- `ja_logo.png` - Josh Agyekum logo (100x100px, circular)

### Scene 2: Product Overview
**Purpose:** Feature exploration and product knowledge
- Interactive feature grid with 5 core products
- Detailed feature cards with value propositions and AI tips
- Progress tracking for feature exploration (5/5 required)

**Key Components:**
- `ProductOverview.jsx` - Main container with feature grid
- `FeatureIcon.jsx` - Clickable feature icons
- `FeatureCard.jsx` - Modal cards with detailed information
- `ProgressBar.jsx` - Visual progress indicator

**Key Image Placement:**
- `Payroll.png` - Payroll feature icon (80x80px)
- `Compliance.png` - Compliance feature icon (80x80px)
- `HRIS.png` - HRIS feature icon (80x80px)
- `Equipment.png` - Equipment feature icon (80x80px)
- `Benefits.png` - Benefits feature icon (80x80px)

### Scene 3: Objection Handling
**Purpose:** Interactive scenario-based learning
- 3 customer objection simulations
- Multiple choice response options (A, B, C)
- Real-time feedback with correct/incorrect indicators
- Final scoring with performance summary

**Key Components:**
- `CustomerScenario.jsx` - Individual scenario presentation
- `ScenarioFeedback.jsx` - Feedback modal after each response
- `ScoreDisplay.jsx` - Final results with star rating

### Scene 4: Pitch Practice
**Purpose:** Sales pitch development and AI feedback
- Text input for custom sales pitches
- AI-powered feedback simulation with scoring
- Example pitch demonstration with video mockup
- Key elements breakdown

**Key Components:**
- `PitchInput.jsx` - Text area for pitch composition
- `AIFeedback.jsx` - Simulated AI analysis and scoring
- `ExamplePitch.jsx` - Video mockup with transcript

### Scene 5: Learning Toolkit
**Purpose:** Reinforcement tools and resources
- Quick quiz module with multiple questions
- Objection handling cheat sheet with modal details
- Discovery question guide by category
- Product update timeline with impact indicators

**Key Components:**
- `ToolkitMenu.jsx` - Main module selection grid
- `QuickQuiz.jsx` - Interactive quiz with scoring
- `CheatSheet.jsx` - Objection handling reference
- `DiscoveryGuide.jsx` - Question categories and examples
- `ProductUpdates.jsx` - Timeline of recent updates

### Scene 6: Performance Analytics
**Purpose:** Learning impact demonstration
- Animated performance dashboard with 3 key metrics
- Business impact visualization with progress bars
- Two-column layout with analytics image
- Final completion actions

**Key Components:**
- `PerformanceDashboard.jsx` - Animated metrics display
- `FinalActions.jsx` - Download playbook and completion options

**Key Image Placement:**
- `scene6_image.png` - Performance analytics visualization (400x500px, right side)

## 🛠 Technology Stack

- **Frontend Framework:** React 18.2.0
- **Build Tool:** Vite 5.0.8
- **Styling:** Pure CSS with CSS Grid and Flexbox
- **State Management:** React Hooks (useState, useEffect)
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
Navigate to `http://localhost:3001/` (or the port shown in terminal)

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally

### Development Workflow

1. **Local Development:**
   - Use `npm run dev` for hot-reload development
   - Base path automatically set to `/` for local development
   - All images load from `/src/assets/` directory

2. **Production Build:**
   - Run `npm run build` to create optimized production files
   - Built files generated in `/dist` directory with asset hashing
   - Base path automatically set to `/Selling_with_Clarity/` for GitHub Pages

3. **GitHub Pages Deployment:**
   - Built files copied to repository root for GitHub Pages compatibility
   - Assets folder contains all optimized images and bundles

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
   - Site will be available at: https://kofijoo.github.io/Selling_with_Clarity/

## 📁 Project Structure

```
Selling_with_Clarity/
├── src/
│   ├── components/
│   │   ├── Scene1/
│   │   │   ├── Scene1.jsx              # Main scene controller
│   │   │   ├── WelcomeScreen.jsx       # Initial landing screen
│   │   │   ├── InteractiveMap.jsx      # World map with hotspots
│   │   │   ├── SalesRepAvatar.jsx      # Clickable avatar components
│   │   │   └── RegionPopup.jsx         # Region information modals
│   │   ├── Scene2/
│   │   │   ├── Scene2.jsx              # Product overview controller
│   │   │   ├── ProductOverview.jsx     # Feature grid container
│   │   │   ├── FeatureIcon.jsx         # Individual feature icons
│   │   │   └── FeatureCard.jsx         # Detailed feature modals
│   │   ├── Scene3/
│   │   │   ├── Scene3.jsx              # Objection handling controller
│   │   │   ├── CustomerScenario.jsx    # Scenario presentation
│   │   │   ├── ScenarioFeedback.jsx    # Response feedback
│   │   │   └── ScoreDisplay.jsx        # Final scoring screen
│   │   ├── Scene4/
│   │   │   ├── Scene4.jsx              # Pitch practice controller
│   │   │   ├── PitchInput.jsx          # Text input interface
│   │   │   ├── AIFeedback.jsx          # AI analysis simulation
│   │   │   └── ExamplePitch.jsx        # Video demonstration
│   │   ├── Scene5/
│   │   │   ├── Scene5.jsx              # Learning toolkit controller
│   │   │   ├── ToolkitMenu.jsx         # Module selection grid
│   │   │   ├── QuickQuiz.jsx           # Interactive quiz
│   │   │   ├── CheatSheet.jsx          # Objection handling guide
│   │   │   ├── DiscoveryGuide.jsx      # Question categories
│   │   │   └── ProductUpdates.jsx      # Update timeline
│   │   ├── Scene6/
│   │   │   ├── Scene6.jsx              # Analytics controller
│   │   │   ├── PerformanceDashboard.jsx # Animated metrics
│   │   │   └── FinalActions.jsx        # Completion options
│   │   └── shared/
│   │       ├── Button.jsx              # Reusable button component
│   │       ├── ProgressBar.jsx         # Progress indicator
│   │       ├── SceneTransition.jsx     # Scene animation wrapper
│   │       └── SceneNavigation.jsx     # Scene selector dropdown
│   ├── hooks/
│   │   └── useSceneProgress.js         # Scene state management
│   ├── styles/
│   │   ├── globals.css                 # Main stylesheet
│   │   └── scene5.css                  # Scene 5 specific styles
│   ├── assets/                         # Image assets
│   ├── App.jsx                         # Main application component
│   └── main.jsx                        # Application entry point
├── dist/                               # Production build output
├── assets/                             # Production assets (GitHub Pages)
├── package.json                        # Dependencies and scripts
├── vite.config.js                      # Vite configuration
├── index.html                          # Production HTML (GitHub Pages)
└── README.md                           # Project documentation
```

## 🖼 Image Assets

### Required Images for Full Functionality

**Scene 1 - Global Map:**
- `map_new.png` - World map background (1200x600px recommended)
- `sales_rep_Europe.png` - EMEA avatar (100x100px, circular crop)
- `sales_rep_Asia.png` - APAC avatar (100x100px, circular crop)
- `sales_rep_North_America_blob.png` - LATAM avatar (100x100px, circular crop)
- `ja_logo.png` - Josh Agyekum logo (100x100px, circular)

**Scene 2 - Product Features:**
- `Payroll.png` - Payroll icon (80x80px)
- `Compliance.png` - Compliance icon (80x80px)
- `HRIS.png` - HRIS icon (80x80px)
- `Equipment.png` - Equipment icon (80x80px)
- `Benefits.png` - Benefits icon (80x80px)

**Scene 6 - Analytics:**
- `scene6_image.png` - Performance dashboard visualization (400x500px)

### Image Optimization Guidelines

- **Format:** PNG for icons/logos with transparency, JPG for photographs
- **Compression:** Optimize for web (aim for <500KB per image)
- **Responsive:** Provide high-resolution images that scale well across devices
- **Accessibility:** Include descriptive alt text for all images
- **Naming:** Use descriptive, lowercase names with underscores

## 🎮 Scene Navigation

The application includes a scene navigation dropdown in the top-right corner that allows users to:

- **Skip to any scene** without completing previous requirements
- **Review completed content** by jumping back to earlier scenes
- **Demo specific features** for presentations or testing
- **Access all 6 scenes** directly from the dropdown menu

**Usage:**
- Click the "Scene X/6" dropdown in the top-right corner
- Select any scene from the list to jump directly there
- Useful for demos, testing, and content review

## 🎨 Customization

### Styling Architecture
- **Main styles:** `/src/styles/globals.css` - Core styling and responsive design
- **Scene-specific:** `/src/styles/scene5.css` - Scene 5 toolkit specific styles
- **Responsive breakpoints:** 
  - Mobile: <768px
  - Tablet: 768-1023px  
  - Desktop: 1024px+

### Content Updates
- **Scene content:** Individual scene component files contain all copy and messaging
- **Branding:** Update logo in `/src/assets/ja_logo.png` and color scheme in CSS
- **Images:** Replace images in `/src/assets/` with same filenames for automatic updates

### Adding New Scenes
1. Create new scene directory in `/src/components/SceneX/`
2. Add scene component and sub-components following existing patterns
3. Update `App.jsx` to include new scene in switch statement
4. Add scene to `SceneNavigation.jsx` dropdown options
5. Update `useSceneProgress.js` hook if needed
6. Add corresponding CSS styles to globals.css

### Performance Optimization
- Images are automatically optimized during build process
- CSS is minified and bundled
- JavaScript is tree-shaken and code-split
- Assets are cached with content hashing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Make your changes following the existing code patterns
4. Test locally with `npm run dev`
5. Build and test production version with `npm run build && npm run preview`
6. Commit changes (`git commit -m 'Add new feature'`)
7. Push to branch (`git push origin feature/new-feature`)
8. Open a Pull Request with detailed description

## 📄 License

This project is proprietary software developed for Josh Agyekum's sales enablement program. All rights reserved.

## 📞 Support

For technical support or questions about the training content:
- Create an issue in the GitHub repository
- Contact the development team
- Review the comprehensive documentation above

---

**Built with ❤️ for global sales excellence**

*Last updated: December 2024*