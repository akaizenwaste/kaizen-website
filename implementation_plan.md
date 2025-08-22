# Implementation Plan

## [Overview]
Complete homepage redesign to mirror Salient Motion's structure, aesthetic, and flow while adapting content for Kaizen Waste's mission-critical waste services.

This implementation will transform the current Kaizen website homepage to match Salient Motion's sophisticated design language, including their minimalist typography, generous whitespace, cinematic media placement, and confident messaging tone. The redesign will follow Salient's exact section sequence and visual hierarchy while substituting waste management content for aerospace content, maintaining the existing Kaizen color palette (tomato red #ff6347, darker red #e74c3c, coral #ff7f50).

## [Types]
New CSS custom properties and component classes to match Salient's design system.

- `.hero-video-background` - Full-screen video container with overlay
- `.section-label` - Small-caps section identifiers 
- `.corner-brackets` - Decorative framing elements
- `.pill-button` - Rounded buttons with subtle shadows
- `.x-ray-graphic` - Semi-transparent technical illustrations
- `.carousel-container` - Horizontal sliding content with arrows
- `.gradient-overlay` - Dark gradients for text readability over images
- `.mission-statement-box` - White content boxes with corner brackets
- Typography scale: Large headlines (4.5rem+), medium subheads (1.8rem), body text (1.1rem)

## [Files]
Complete homepage restructure with new sections and styling.

**Modified Files:**
- `index.html` - Complete restructure following Salient's section sequence
- `css/main.css` - Extensive styling updates for Salient-inspired design system
- `js/script.js` - Add carousel functionality and enhanced interactions

**New Files:**
- `images/placeholder-hero-video.mp4` - Placeholder for Kaizen runners video
- `images/placeholder-operations.jpg` - Placeholder for operations showcase
- `images/placeholder-xray-cart.png` - Placeholder for technical illustration
- `images/placeholder-expertise-carousel/` - Directory for expertise images
- `images/placeholder-team-meeting.jpg` - Placeholder for careers section
- `images/placeholder-aerial-community.jpg` - Placeholder for final hero

## [Functions]
New JavaScript functions for enhanced interactivity.

**New Functions:**
- `initializeCarousel()` - Handle value propositions carousel with arrow navigation
- `handleVideoPlayback()` - Manage hero video autoplay and fallback
- `animateOnScroll()` - Trigger animations when sections enter viewport
- `toggleMobileMenu()` - Enhanced mobile navigation (future-proofing)

**Modified Functions:**
- Enhanced scroll effects for sticky navigation
- Improved smooth scrolling with offset calculations
- Form validation with Salient-style error states

## [Classes]
New CSS classes implementing Salient's design patterns.

**New Classes:**
- `.hero-section` - Full-viewport hero with video background
- `.problem-solution-grid` - Two-column layout for industry problem section
- `.approach-section` - Technical illustration with overlay text
- `.mission-narrative-layout` - Asymmetric content positioning
- `.value-carousel` - Horizontal scrolling cards with navigation
- `.operations-showcase` - Full-bleed image with overlay CTA
- `.expertise-columns` - Three-pillar layout with separating lines
- `.careers-teaser` - Image background with overlay content
- `.final-hero` - Aerial shot with gradient and CTA

**Modified Classes:**
- `.nav-container` - Sticky behavior matching Salient
- `.section-title` - Typography and spacing updates
- `.cta-button` - Pill shape with arrow icons
- `.feature-card` - Enhanced shadows and hover effects

## [Dependencies]
No new external dependencies required.

Current dependencies maintained:
- Font Awesome 6.0.0 (for icons and arrows)
- Inter font family (matches Salient's geometric sans-serif choice)
- Existing CSS custom properties system

## [Testing]
Comprehensive testing approach for design fidelity and functionality.

**Visual Testing:**
- Side-by-side comparison with Salient Motion homepage
- Responsive behavior across desktop, tablet, mobile
- Typography hierarchy and spacing verification
- Color palette consistency check

**Functional Testing:**
- Carousel navigation and keyboard accessibility
- Video autoplay with fallback handling
- Form submission and validation
- Smooth scrolling and anchor navigation
- Performance testing with placeholder media

**Browser Testing:**
- Chrome, Firefox, Safari, Edge compatibility
- Mobile Safari and Chrome mobile testing
- Accessibility compliance (WCAG 2.2 AA)

## [Implementation Order]
Sequential implementation to minimize conflicts and ensure successful integration.

1. **CSS Foundation** - Update color variables, typography scale, and base styles
2. **HTML Structure** - Rebuild homepage sections following Salient's sequence
3. **Hero Section** - Implement full-screen video background with overlay content
4. **Problem/Solution** - Create two-column layout with corner bracket styling
5. **Approach Section** - Add technical illustration and mission statement
6. **Value Carousel** - Build horizontal scrolling component with navigation
7. **Operations Showcase** - Implement full-bleed image with overlay CTA
8. **Expertise Pillars** - Create three-column layout with separating lines
9. **Careers Teaser** - Add background image with overlay content
10. **Final Hero** - Implement aerial shot with gradient and final CTA
11. **JavaScript Enhancement** - Add carousel functionality and scroll animations
12. **Testing & Refinement** - Compare with Salient and adjust details
13. **Performance Optimization** - Optimize placeholder images and animations

The implementation will focus on achieving pixel-perfect alignment with Salient's design while maintaining Kaizen's brand identity through content and color choices.
