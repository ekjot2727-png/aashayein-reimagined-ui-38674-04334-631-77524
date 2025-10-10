# Aashayein Visual Style Guide
## Professional Blood Donation Platform Design System

---

## 1. Color Palette

### Primary Colors
```css
/* Life-Giving Red - Primary CTAs */
--primary: hsl(0, 85%, 58%)           /* Main CTA buttons */
--primary-hover: hsl(0, 85%, 52%)     /* Hover state */
--primary-active: hsl(0, 85%, 48%)    /* Active/pressed state */
--primary-light: hsl(0, 85%, 95%)     /* Light backgrounds */

Hex Equivalents:
- Primary: #F04438
- Hover: #DC2626
- Active: #B91C1C
```

### Secondary Colors - Professional Navy
```css
/* Trust & Structure */
--secondary: hsl(215, 45%, 25%)       /* Headers, footers, structure */
--secondary-hover: hsl(215, 45%, 20%) /* Hover state */
--navy-deep: hsl(215, 45%, 18%)       /* Deep accents */
--navy-ultra: hsl(215, 50%, 12%)      /* Hero backgrounds */

Hex Equivalents:
- Secondary: #263D5C
- Hover: #1E3047
- Deep: #1A2B3F
```

### Neutral Palette
```css
/* Backgrounds & Text */
--background: hsl(0, 0%, 99%)         /* Main background - pure white */
--foreground: hsl(215, 30%, 12%)      /* Main text - deep navy */
--muted: hsl(210, 30%, 96%)           /* Muted backgrounds */
--muted-foreground: hsl(215, 20%, 45%) /* Secondary text */
--border: hsl(215, 15%, 90%)          /* Borders */

Hex Equivalents:
- Background: #FCFCFC
- Foreground: #1A2332
- Muted: #F4F6F8
```

### Status Colors
```css
/* Success */
--success-green: hsl(142, 76%, 45%)   /* #22C55E */
--success-light: hsl(142, 76%, 95%)   /* Light background */

/* Warning */
--warning-amber: hsl(38, 92%, 50%)    /* #F59E0B */
--warning-light: hsl(38, 92%, 95%)    /* Light background */
```

---

## 2. Typography

### Font Stack
```css
Primary Font: 'Inter', sans-serif
Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
```

### Type Scale
```css
/* Headings */
h1: 3rem (48px) / font-weight: 700 / line-height: 1.2
h2: 2.25rem (36px) / font-weight: 700 / line-height: 1.25
h3: 1.875rem (30px) / font-weight: 600 / line-height: 1.3
h4: 1.5rem (24px) / font-weight: 600 / line-height: 1.4
h5: 1.25rem (20px) / font-weight: 600 / line-height: 1.5

/* Body */
Base: 1rem (16px) / font-weight: 400 / line-height: 1.6
Small: 0.875rem (14px) / font-weight: 400 / line-height: 1.5
Tiny: 0.75rem (12px) / font-weight: 500 / line-height: 1.4
```

### Text Hierarchy
- **Primary Headlines**: Bold (700), Primary color or Navy
- **Body Text**: Regular (400), Foreground color
- **Captions & Labels**: Medium (500), Muted foreground
- **CTAs**: Semibold (600), White on red/navy

---

## 3. Spacing & Layout

### Spacing Scale
```css
xs: 0.25rem (4px)
sm: 0.5rem (8px)
md: 1rem (16px)
lg: 1.5rem (24px)
xl: 2rem (32px)
2xl: 3rem (48px)
3xl: 4rem (64px)
```

### Layout Principles
- **Maximum Width**: 1280px (container)
- **White Space**: Liberal use for breathing room
- **Grid**: 12-column responsive grid
- **Padding**: Sections: 4rem (64px) vertical, 2rem (32px) horizontal

---

## 4. Shadows & Depth

### Shadow Layers
```css
/* Subtle to Strong */
--shadow-xs: 0 1px 2px rgba(26, 35, 50, 0.05)
--shadow-sm: 0 2px 4px rgba(26, 35, 50, 0.06)
--shadow-md: 0 4px 6px rgba(26, 35, 50, 0.08)
--shadow-lg: 0 10px 15px rgba(26, 35, 50, 0.1)
--shadow-xl: 0 20px 25px rgba(26, 35, 50, 0.12)
--shadow-2xl: 0 25px 50px rgba(26, 35, 50, 0.15)

/* Special Effects */
--shadow-blood: 0 10px 30px rgba(240, 68, 56, 0.3)
--shadow-blood-hover: 0 14px 35px rgba(240, 68, 56, 0.4)
--shadow-glow: 0 0 40px rgba(240, 68, 56, 0.15)
```

### Usage Guidelines
- Cards: shadow-md (default), shadow-lg (hover)
- Buttons: shadow-blood for primary CTAs
- Modals/Overlays: shadow-2xl
- Floating Elements: shadow-xl

---

## 5. Border Radius

```css
--radius: 0.875rem (14px)     /* Base border radius */

Small: 0.5rem (8px)           /* Badges, small elements */
Medium: 0.75rem (12px)        /* Buttons, inputs */
Large: 1rem (16px)            /* Cards */
XL: 1.25rem (20px)            /* Hero sections, modals */
```

---

## 6. Animation & Transitions

### Timing Functions
```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)
--transition-bounce: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55)
--transition-gentle: all 0.25s ease-out
--transition-snappy: all 0.15s ease-in-out
```

### Key Animations

#### 1. Button Hover Lift
```css
.hover-lift:hover {
  transform: translateY(-2px);
  box-shadow: var(--shadow-lg);
}
```

#### 2. Urgent Pulse (CTAs)
```css
@keyframes pulse-urgent {
  0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(240, 68, 56, 0.7); }
  50% { opacity: 0.95; box-shadow: 0 0 0 12px rgba(240, 68, 56, 0); }
}
```

#### 3. GPS Pulse Animation
```css
@keyframes gps-pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.8; }
}
```

#### 4. Success Checkmark Pop
```css
@keyframes success-pop {
  0% { transform: scale(0); opacity: 0; }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); opacity: 1; }
}
```

#### 5. Shimmer Loading Effect
```css
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## 7. Component Styling Guidelines

### Cards
```css
Base Style:
- Background: white
- Border: 1px solid rgba(border, 0.5)
- Border Radius: 1rem (16px)
- Shadow: shadow-md
- Padding: 1.5rem (24px)

Hover State:
- Shadow: shadow-lg
- Transform: translateY(-4px)
- Transition: 300ms smooth
```

### Buttons - Primary CTA
```css
Background: Gradient from primary to primary-hover
Text: White, Semibold (600)
Shadow: shadow-blood
Padding: 0.625rem 1.5rem (10px 24px)
Border Radius: 0.875rem (14px)

Hover:
- Shadow: shadow-blood-hover
- Transform: translateY(-2px) scale(1.02)

Active:
- Transform: translateY(0) scale(1)
```

### Icon Style
- Use thin-line icons (Lucide React - strokeWidth: 1.5-2)
- Size: 20px-24px for standard UI
- Color: Match text color or use accent colors

---

## 8. Responsive Breakpoints

```css
Mobile: 0-640px
Tablet: 641px-1024px
Desktop: 1025px-1280px
Large: 1281px+
```

### Responsive Typography
```css
Mobile:
  h1: 2rem (32px)
  h2: 1.75rem (28px)
  Body: 0.875rem (14px)

Desktop:
  h1: 3rem (48px)
  h2: 2.25rem (36px)
  Body: 1rem (16px)
```

---

## 9. Accessibility Standards

### Color Contrast
- Text on Background: Minimum 4.5:1 ratio
- Large Text: Minimum 3:1 ratio
- Interactive Elements: Clear focus states with ring

### Focus States
```css
focus-visible:outline-none
focus-visible:ring-2
focus-visible:ring-primary
focus-visible:ring-offset-2
```

---

## 10. Special UI Elements

### GPS Location Marker
- Base: Primary red with white center
- Animation: Gentle pulse (gps-pulse)
- Size: 32px with 12px center dot
- Shadow: shadow-blood

### Achievement Badges
- Shape: Circular with icon
- Size: 64px diameter
- Background: Gradient (gold/silver/bronze)
- Animation: Scale-in on earn + success-pop

### Progress Bars
- Height: 8px
- Background: muted
- Fill: Primary with gradient
- Animation: Progress-fill (1s ease-out)
- Border Radius: Full (9999px)

### AI Chatbot Button
- Position: Fixed bottom-right (24px, 24px)
- Shape: Circular, 56px diameter
- Background: Primary gradient
- Icon: Bot icon, white
- Animation: Gentle pulse every 3s
- Shadow: shadow-xl

---

## 11. Implementation Checklist

### Essential CSS Techniques
1. **CSS Custom Properties (Variables)**: Use HSL color system for easy theme adjustments
2. **Cubic Bezier Transitions**: Smooth, premium feel without jarring movements
3. **Transform-based Animations**: Use translate/scale for performance (GPU-accelerated)
4. **Box Shadow Layering**: Multiple shadows for realistic depth
5. **Pseudo-element Animations**: For underlines, loaders, and decorative effects

### Performance Best Practices
- Use `transform` and `opacity` for animations (not `top`/`left`)
- Avoid animating `box-shadow` (use pseudo-elements for glow effects)
- Implement `will-change` for heavy animations sparingly
- Lazy-load images and defer non-critical CSS
- Use CSS containment for isolated components

---

## 12. Design Principles Summary

1. **Professional & Trustworthy**: Deep navy structure + clean white space
2. **Urgent Yet Calm**: Vibrant red CTAs without overwhelming the user
3. **Smooth & Delightful**: Every interaction has a micro-animation
4. **Accessible First**: High contrast, clear focus states, semantic HTML
5. **Performance Optimized**: Transform-based animations, minimal reflows

---

**Version**: 1.0  
**Last Updated**: 2025-10-09  
**Project**: Aashayein - The Life Saviours Blood Donation Platform
