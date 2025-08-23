# Salient Motion Design System Documentation

## Overview
This document outlines the design system inspired by Salient Motion (https://salientmotion.com/) for consistent implementation across Kaizen Waste website development.

## Core Design Principles

### 1. Typography
- **Font Family**: System fonts stack for optimal performance
  ```css
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
  ```

- **Font Weights**: Lightweight, clean approach
  - Body text: `font-weight: 300`
  - Headings: `font-weight: 300-400`
  - Strong emphasis: `font-weight: 400-500`

- **Line Height**: Generous spacing for readability
  - Body: `line-height: 1.6-1.7`
  - Headings: `line-height: 1.1-1.3`

### 2. Color Palette

#### Primary Colors
```css
--salient-text: #2c3e50;        /* Dark blue-gray for primary text */
--salient-text-light: #7f8c8d;  /* Medium gray for secondary text */
--salient-text-muted: #bdc3c7;  /* Light gray for muted/disabled text */
--salient-bg: #ffffff;          /* Pure white background */
--salient-light-bg: #f8f9fa;    /* Very light gray for subtle backgrounds */
--salient-border: rgba(0,0,0,0.1); /* Subtle border colors */
```

#### Kaizen Brand Colors (Retained for brand consistency)
```css
--primary-color: #e74c3c;       /* Muted red */
--secondary-color: #c0392b;     /* Deeper red */
--accent-color: #e67e22;        /* Muted orange-red */
```

### 3. Spacing System
Based on REM units for scalability:
```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 2rem;      /* 32px */
--spacing-lg: 4rem;      /* 64px */
--spacing-xl: 6rem;      /* 96px */
--spacing-xxl: 8rem;     /* 128px */
```

### 4. Layout & Grid
- **Max Width**: `1400px` for content containers
- **Grid Gaps**: `4rem` between major sections, `2rem` between grid items
- **Padding**: Generous white space with `4rem` vertical, `2rem` horizontal

### 5. Border Radius
```css
--border-radius: 8px;           /* Standard corners */
--border-radius-large: 16px;    /* Large rounded corners */
```

### 6. Shadows
```css
--shadow: 0 8px 25px rgba(0,0,0,0.08);     /* Standard shadow */
--shadow-light: 0 4px 12px rgba(0,0,0,0.06); /* Light shadow */
--shadow-heavy: 0 16px 50px rgba(0,0,0,0.12); /* Heavy shadow */
```

## Component Styles

### Header/Navigation
```css
.header {
    background: var(--salient-bg);
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    border-bottom: 1px solid var(--salient-border);
}

.nav-link {
    color: var(--salient-text);
    font-weight: 300;
    font-size: 0.875rem;
    text-transform: none;
    letter-spacing: normal;
}

.nav-link:hover {
    color: var(--primary-color);
    opacity: 1;
}
```

### Hero Sections
```css
.hero-section {
    background: var(--salient-bg);
    padding: 4rem 2rem 2rem;
    text-align: left;
    border-bottom: 1px solid var(--salient-border);
}

.hero-title {
    font-size: 3rem;
    font-weight: 300;
    color: var(--salient-text);
    line-height: 1.1;
}

.hero-subtitle {
    font-size: 1.125rem;
    font-weight: 300;
    color: var(--salient-text-light);
}
```

### Content Grids
```css
.content-grid {
    max-width: 1400px;
    margin: 0 auto;
    padding: 4rem 2rem;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 4rem;
    align-items: start;
}
```

### Feature Lists
```css
.feature-list {
    list-style: none;
    padding: 0;
    margin: 3rem 0;
}

.feature-item {
    display: flex;
    gap: 1.5rem;
    align-items: flex-start;
    padding: 2rem 0;
    border-bottom: 1px solid var(--salient-border);
}

.feature-icon {
    flex-shrink: 0;
    width: 40px;
    height: 40px;
    color: var(--salient-text-light);
    opacity: 0.8;
}

.feature-content h4 {
    font-size: 1.25rem;
    font-weight: 400;
    color: var(--salient-text);
    line-height: 1.3;
}

.feature-content p {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.6;
    color: var(--salient-text-light);
}
```

### Cards & Info Blocks
```css
.info-card {
    background: var(--salient-bg);
    border: 1px solid var(--salient-border);
    border-radius: 8px;
    padding: 2rem;
}

.cta-section {
    background: var(--salient-light-bg);
    padding: 2rem;
    border-radius: 8px;
    text-align: center;
}

.cta-button {
    display: inline-flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.875rem 2rem;
    border: 1px solid var(--salient-border);
    background: var(--salient-bg);
    color: var(--salient-text);
    border-radius: 50px;
    font-weight: 300;
    font-size: 0.875rem;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background: var(--salient-light-bg);
    border-color: var(--salient-text-light);
    transform: translateY(-1px);
}
```

### Step Indicators
```css
.step-container {
    display: flex;
    gap: 1rem;
    align-items: flex-start;
}

.step-number {
    flex-shrink: 0;
    width: 30px;
    height: 30px;
    background: var(--salient-text);
    color: var(--salient-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 400;
}

.step-text {
    font-size: 0.95rem;
    font-weight: 300;
    line-height: 1.6;
    color: var(--salient-text-light);
}
```

## Responsive Design

### Breakpoints
```css
/* Tablet */
@media (max-width: 1024px) {
    .content-grid {
        grid-template-columns: 1fr;
        gap: 3rem;
    }
}

/* Mobile */
@media (max-width: 768px) {
    .hero-title {
        font-size: 2.5rem;
    }
    
    .content-grid {
        padding: 3rem 1rem;
    }
    
    .feature-item {
        flex-direction: column;
        text-align: center;
        gap: 1rem;
    }
}
```

## Implementation Guidelines

### 1. Typography Hierarchy
- H1: `3rem / 300 / 1.1`
- H2: `2rem / 300 / 1.2` 
- H3: `1.5rem / 300 / 1.3`
- H4: `1.25rem / 400 / 1.3`
- Body: `1.125rem / 300 / 1.7`
- Small: `0.95rem / 300 / 1.6`

### 2. Color Usage
- Primary text: `var(--salient-text)`
- Secondary text: `var(--salient-text-light)`
- Muted text: `var(--salient-text-muted)`
- Backgrounds: `var(--salient-bg)` or `var(--salient-light-bg)`
- Borders: `var(--salient-border)`
- Brand accents: Use Kaizen colors sparingly for CTAs and highlights

### 3. Spacing Rules
- Section padding: `4rem` vertical, `2rem` horizontal
- Grid gaps: `4rem` between major sections
- Component spacing: `2rem` between related elements
- Text spacing: `1.5-2rem` between paragraphs and headings

### 4. Interactive States
- Hover effects: Subtle transforms (`translateY(-1px)`) and color changes
- Transitions: `all 0.3s ease` for smooth animations
- Focus states: Clear visual indicators for accessibility

## Example Implementation

```html
<section class="hero-section">
    <div class="hero-content">
        <h1 class="hero-title">Page Title</h1>
        <p class="hero-subtitle">Supporting description text</p>
    </div>
</section>

<div class="content-grid">
    <main class="main-content">
        <h2>Section Heading</h2>
        <p>Content paragraph with generous line height and light font weight.</p>
        
        <ul class="feature-list">
            <li class="feature-item">
                <div class="feature-icon">
                    <i class="fas fa-icon"></i>
                </div>
                <div class="feature-content">
                    <h4>Feature Title</h4>
                    <p>Feature description with light text color.</p>
                </div>
            </li>
        </ul>
    </main>
    
    <aside class="sidebar">
        <div class="info-card">
            <h3>Card Title</h3>
            <p>• List item one</p>
            <p>• List item two</p>
        </div>
    </aside>
</div>
```

## Best Practices

1. **Consistency**: Use the defined variables and classes consistently
2. **Whitespace**: Embrace generous spacing for clean, professional appearance
3. **Typography**: Stick to lightweight fonts and proper hierarchy
4. **Color**: Use the muted palette with brand colors for strategic emphasis
5. **Responsiveness**: Ensure all components work well on mobile devices
6. **Accessibility**: Maintain proper contrast ratios and focus states

## File Structure
- Main styles: `css/main.css` (contains base variables and components)
- Page-specific overrides: Inline styles in HTML files when needed
- This documentation: `salient-design-system.md` for reference

## Version History
- v1.0 (2025-08-22): Initial documentation based on Salient Motion analysis
