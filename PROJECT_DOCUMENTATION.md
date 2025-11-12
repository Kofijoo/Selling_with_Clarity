# Selling with Clarity - Project Documentation

## Project Overview
Interactive learning platform for Josh Agyekum's sales training with progressive scene-based navigation.

## Technical Stack
- **React**: JavaScript library for building user interfaces
- **Modern React**: Using functional components with hooks (useState, useEffect)
- **Responsive Design**: Mobile-first approach for 2025/2026 standards

## Screen Size Standards (2025/2026)
### Mobile (Primary)
- **Width**: 375px - 428px (iPhone 12-15 Pro Max range)
- **Breakpoint**: 320px minimum, 480px maximum

### Desktop (Secondary)  
- **Width**: 1440px - 1920px (most common)
- **Breakpoint**: 1024px minimum for desktop experience

---

## Scene Documentation

### Scene 1: Welcome / The Challenge
**Screen Title**: "Selling Smarter, Everywhere."

**Goal**: Establish context & relevance - recognize need for consistent sales messaging globally

**Visuals**:
- Global map background with animated pins (EMEA, APAC, LATAM)
- Floating avatars of 3 sales reps (sales_rep_Asia, sales_rep_Europe, sales_rep_North_America_blob)
- JA logo subtly in corner

**Copy**: "Our sellers work across 150+ countries — but our message doesn't always sound the same. Let's align on what makes Josh Agyekum unbeatable."

**Components Needed**:
- WelcomeScreen component
- InteractiveMap component  
- RegionPopup component
- SalesRepAvatar component

**User Flow**:
```
Start → "Selling Smarter, Everywhere" Screen → Interactive Map (3 regions)
→ Click EMEA → Pop-up: "Clients love Josh Agyekum, but explaining compliance in multiple countries is tricky."
→ Click APAC → Pop-up: "I need faster ways to learn about new features."
→ Click LATAM → Pop-up: "Handling objections takes time—I need better examples."
→ All regions viewed → CTA: "Let's fix this together" → Transition to Scene 2
```

**State Management**:
- `exploredRegions`: Array tracking which regions user clicked
- `allRegionsExplored`: Boolean (true when all 3 regions clicked)
- `showNextButton`: Boolean (appears when allRegionsExplored = true)

**Technical Requirements**:
- Track user interaction with each region
- Prevent progression until all regions explored
- Smooth transitions between states
- Responsive map that works on mobile and desktop

---

### Scene 2: Product Deep Dive  
**Goal**: Build understanding of Josh Agyekum's platform and differentiators

**Components Needed**:
- ProductOverview component
- FeatureIcon component (reusable)
- FeatureCard component  
- ProgressBar component

**User Flow**:
```
"Know What You're Selling" Screen → 5 clickable icons → Click icon → Mini card opens
→ All 5 icons explored → Progress bar 100% → CTA: "Next: Try It Out" → Scene 3
```

**Features to Cover**:
1. **Payroll**: Global payroll processing
2. **Compliance**: Legal compliance automation  
3. **HRIS**: Human Resources Information System - employee data management
4. **Equipment**: Hardware/software provisioning
5. **Benefits**: Employee benefits administration

**State Management**:
- `exploredFeatures`: Array of explored feature IDs
- `progressPercentage`: Number (0-100)
- `selectedFeature`: Object (currently opened feature card)

---

## Development Approach

### Phase 1: Project Setup
1. Initialize React project with Vite (faster than Create React App)
2. Set up folder structure
3. Install essential dependencies
4. Configure responsive design system

### Phase 2: Scene 1 Development
1. Create basic components
2. Implement state management
3. Add interactive map functionality
4. Test user flow completion

### Phase 3: Scene 2 Development  
1. Build feature exploration system
2. Implement progress tracking
3. Create smooth transitions
4. Test completion logic

### Phase 4: Integration & Polish
1. Connect scenes with routing
2. Add animations/transitions
3. Responsive testing
4. Performance optimization

---

## Key Definitions

- **React**: JavaScript library for building user interfaces using components
- **Component**: Reusable piece of UI code that returns JSX (JavaScript XML)
- **State**: Data that changes over time and affects what the user sees
- **Hook**: Special React function (starts with 'use') that lets you use React features
- **JSX**: JavaScript XML - syntax that looks like HTML but is JavaScript
- **Props**: Properties passed from parent component to child component
- **Vite**: Build tool that's faster than traditional bundlers like Webpack
- **CTA**: Call To Action - button or element that prompts user interaction
- **HRIS**: Human Resources Information System
- **SaaS**: Software as a Service

---

## File Structure (Planned)
```
src/
├── components/
│   ├── Scene1/
│   │   ├── WelcomeScreen.jsx
│   │   ├── InteractiveMap.jsx
│   │   └── RegionPopup.jsx
│   ├── Scene2/
│   │   ├── ProductOverview.jsx
│   │   ├── FeatureIcon.jsx
│   │   └── FeatureCard.jsx
│   └── shared/
│       ├── ProgressTracker.jsx
│       └── Button.jsx
├── hooks/
│   └── useSceneProgress.js
├── styles/
│   └── globals.css
└── App.jsx
```