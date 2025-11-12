# Selling with Clarity - Project Documentation

## Project Overview
Interactive learning platform for Josh Agyekum's sales training with progressive scene-based navigation.

## Design Requirements
### Frame Specifications
- **Container**: 16:9 aspect ratio with blue borders
- **Sizing**: 95vw × 95vh (mobile: 98vw × 98vh)
- **Padding**: Minimal (1.5rem desktop, 1rem mobile)
- **Typography**: Scaled down for perfect fit
- **Spacing**: Reduced margins and gaps
- **Elements**: All content must fit within frame without scrolling

### Visual Standards
- **Colors**: Primary #3b82f6 (blue), backgrounds #f0f9ff to #e0f2fe
- **Borders**: 2-3px solid, rounded corners 8-12px
- **Shadows**: Subtle (0 3px 8px rgba(0,0,0,0.04))
- **Typography**: Scaled hierarchy (2rem → 1.6rem → 1rem → 0.85rem)
- **Interactive**: Hover effects with minimal transforms

---

## Complete Scene Documentation

### Scene 1: Global Sales Challenge
**Title**: "Selling Smarter, Everywhere"
**Goal**: Establish need for consistent global messaging

**Components**:
- WelcomeScreen, InteractiveMap, RegionPopup, SalesRepAvatar

**Flow**: Welcome → Map (3 regions) → All explored → Next

**Key Elements**:
- World map with clickable regions (EMEA, APAC, LATAM)
- Floating sales rep avatars positioned on map points
- Region popups with sales challenges
- Progress tracking until all regions explored

---

### Scene 2: Product Knowledge
**Title**: "Know What You're Selling"
**Goal**: Build understanding of Josh Agyekum platform

**Components**:
- ProductOverview, FeatureIcon, FeatureCard, ProgressBar

**Flow**: Overview → 5 Features → All explored → Next

**Features**:
1. Payroll - Global processing
2. Compliance - Legal automation
3. HRIS - Employee data management
4. Equipment - Hardware/software provisioning
5. Benefits - Employee benefits administration

---

### Scene 3: Objection Handling
**Title**: "Your Turn: Objection Handling"
**Goal**: Practice handling customer objections

**Components**:
- CustomerScenario, ScenarioFeedback, ScoreDisplay

**Flow**: Scenario → Response → Feedback → Next → Score

**Scenarios**:
1. Local payroll provider objection
2. Pricing concerns
3. Feature availability questions

**Scoring**: 3 scenarios, immediate feedback, final score display

---

### Scene 4: Pitch Practice (Future)
**Title**: "Your 60-Second Pitch"
**Goal**: Reinforce message fluency

**Components**: PitchInput, AIFeedback, ExamplePitch

**Flow**: Prompt → Input → AI Feedback → Example → Next

---

### Scene 5: Reinforcement Toolkit (Future)
**Title**: "Keep Getting Better"
**Goal**: Support long-term retention

**Components**: QuickQuiz, CheatSheet, DiscoveryGuide, ProductUpdates

**Flow**: Menu → Resource Selection → Completion → Finish

---

## Technical Implementation

### State Management
- `useSceneProgress` hook for navigation
- Scene-specific state (explored items, scores, selections)
- Progress tracking and completion logic

### Responsive Design
- Mobile-first approach
- Breakpoints: 767px (mobile), 1023px (tablet), 1024px+ (desktop)
- Scaled typography and spacing
- Touch-friendly interactions

### Performance
- Vite build system
- Component lazy loading
- Optimized images and assets
- Minimal bundle size

---

## Frame Fitting Requirements

### Typography Scale
- **H1**: 2.4rem → 1.8rem (mobile)
- **H2**: 2rem → 1.6rem (mobile)
- **H3**: 1.3rem → 1.1rem (mobile)
- **Body**: 0.95rem → 0.85rem (mobile)
- **Small**: 0.85rem → 0.8rem (mobile)

### Spacing Scale
- **Container**: 1.5rem → 1rem (mobile)
- **Sections**: 1.5rem → 1rem (mobile)
- **Elements**: 0.8rem → 0.6rem (mobile)
- **Gaps**: 1.5rem → 1rem (mobile)

### Component Sizing
- **Buttons**: 12px 32px → 10px 24px (mobile)
- **Icons**: 60px → 45px (mobile)
- **Avatars**: 60px → 40px (mobile)
- **Cards**: Reduced padding by 25%

---

## File Structure
```
src/
├── components/
│   ├── Scene1/ (WelcomeScreen, InteractiveMap, RegionPopup, SalesRepAvatar)
│   ├── Scene2/ (ProductOverview, FeatureIcon, FeatureCard)
│   ├── Scene3/ (CustomerScenario, ScenarioFeedback, ScoreDisplay)
│   └── shared/ (Button, ProgressBar, SceneTransition)
├── hooks/ (useSceneProgress.js)
├── styles/ (globals.css)
├── assets/ (images, icons)
└── App.jsx
```