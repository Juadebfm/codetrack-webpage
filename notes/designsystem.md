# CodeTrack Design System

**Mission**: Build the habit, watch the streak grow. Colors, type, spacing, and every core component.

---

## Colors

### Primary - Green

- **Primary**: `#16A34A` - Main brand color for growth & streaks
- **Deep / Hover**: `#15803D` - Interactive state
- **Soft Fill**: `#DCFCE7` - Light background usage

### Accents

- **Teal**: `#0D9488` - Secondary accent
- **Amber**: `#F59E0B` - Warning/emphasis
- **Danger / Red**: `#DC2626` - Destructive actions & alerts

### Neutrals

- **Ink**: `#0F1419` - Primary text (black)
- **Body**: `#3A4250` - Secondary text
- **Muted**: `#6B7280` - Tertiary text
- **Subtle**: `#F4F7F5` - Light backgrounds
- **Border**: `#E5E9E7` - Borders & dividers

### Heatmap Intensity

Green intensity scale for visual data representation (less → more):

- Lightest: `#EBEDF0`
- Light: `#9BE3B8`
- Medium: `#4ECB7E`
- Dark: `#16A34A`
- Darkest: `#0E6E3C`

---

## Typography

### Font Stack

- **Display & Headlines**: Space Grotesk
- **Body & UI**: Inter
- **Code & Monospace**: JetBrains Mono

### Type Scale

- **Display**: Space Grotesk - 700 weight - headlines & big numbers
- **Body**: Inter - 400-600 weight - UI & prose, 14-18px
- **Mono**: JetBrains Mono - stats, dates, tags

---

## Buttons

### Primary Variants

1. **Get started** - Primary green, action-oriented
2. **See how it works** - Secondary/outline variant
3. **Log in** - Ghost/text-link variant
4. **Create account** - Black/dark variant
5. **Delete** - Red/danger variant

### Sizes & States

- **Small**: Compact button for dense layouts
- **+ Log today**: Primary with icon (plus sign)
- **Large**: Primary CTA buttons
- **Saving**: Active state with visual feedback (spinner)
- **Disabled**: Muted appearance, non-interactive
- **Search**: Icon-only button variant
- **+ (icon-only)**: Circular primary button, plus sign only

---

## Forms

### Input Styling

- **Green focus ring**: Brand-consistent focus state
- **Red inline errors**: For validation feedback
- **Password strength indicator**: "Use at least 8 characters"

### Components

- **Email input**: Standard text input with validation
- **Password input**: Masked input with SHOW toggle
- **Checkbox**: "Remember me" pattern (checked state)
- **Checkbox**: "Send weekly streak recaps" opt-in (unchecked state)

---

## Badges, Tags & Avatars

### Badge Variants

- **● On track** - Success state (green dot + text)
- **Streak at risk** - Warning state (amber)
- **New** - Info state (teal)
- **Draft** - Neutral state

### Tag Styles

- **# react** - Success tag (soft green, hash prefix)
- **mastered** - Achievement tag (green)
- **# algorithms** - Neutral tag (hash prefix)

### Avatar Variants

- **AR** - Initials format
- **MC** - Color-coded initials
- **M** - Single initial
- **SK** - User identification
- **JJ** - Team/group avatars
- **TB** - User identification

---

## Spacing, Radius & Elevation

### Spacing Scale (PX)

- `4px` - Micro spacing
- `8px` - Extra small
- `12px` - Small
- `16px` - Base unit
- `24px` - Medium
- `32px` - Large
- `48px` - Extra large
- `64px` - X-large

### Corner Radius

- **sm - 6px** - Subtle rounding
- **md - 10px** - Small/medium radius
- **lg - 12px** - Medium radius (cards)
- **xl - 14px** - Large radius (cards, containers)
- **full - 999px** - Fully rounded (pills, badges)

### Elevation / Shadow Levels

- **xs** - Flat / barely-there elevation
- **sm** - Subtle elevation
- **md** - Medium elevation
- **lg** - Strong elevation (modals/overlays)

---

## Brand & Signature Elements

### CodeTrack Logo Variants

1. **Logo + Text (light)**: Full brand lockup with "CodeTrack" on light background
2. **Logo + Text (dark)**: Full brand lockup on black pill background
3. **Logo Icon Only**: Grid-based icon, no wordmark
4. **Streak Badge**: Yellow/amber pill - "🔥 12-day streak"

### Usage

- Primary logo for header/navigation
- Dark lockup for footers/dark sections
- Icon variant for app icon/favicon
- Streak badge for achievement display

---

## Data & Stats Display

### Key Metrics Format

- **Current streak**: Icon + large number + "days"
  - Example: `12 days` with flame icon
- **Days this month**: Large bold number + label
  - Example: `18 days this month`
- **Hours / week**: Large number + unit
  - Example: `9.5 hrs`
- **Best**: Supporting stat line
  - Example: "Best: 40"

### Data Visualization

- **Progress bars**: Green for primary goal, teal for secondary goal
  - Example: "Learn React" (green) - 12 of 20 hours
  - Example: "DS&A topics" (teal) - 7 of 10 topics
- **Bar charts**: Green bars on plain background with baseline
  - 14-day activity visualization

---

## Component Patterns

### Form Patterns

- Green focus rings for all inputs
- Red error messages below field
- Validation indicators (checkmarks, X)
- Label positioning: Above input
- Helper text in gray/muted color

### Button Patterns

- Primary action: Brand green
- Secondary action: Ghost/outline
- Destructive action: Red
- Loading state: "Saving" with animation
- Disabled state: Reduced opacity

### Card & Container Patterns

- **lg radius**: 12px default
- **Subtle shadow**: Soft elevation
- **Soft fill background**: Light green or gray
- **Padding**: Consistent 16-24px

### Badge & Tag Patterns

- **Small padding**: 4-8px horizontal
- **Rounded corners**: Full or sm (6px)
- **Icon + text**: Optional left icon
- **Color coding**: By status/type

---

## Accessibility Considerations

- **Color contrast**: All text meets WCAG AA minimum
- **Focus states**: Visible green ring on all interactive elements
- **Error messaging**: Red color + descriptive text (not color alone)
- **Icons with text**: Always paired with label text
- **Disabled state**: Clear visual distinction

---

## Notes for Development

- Use consistent spacing units (4px base)
- Apply border-radius consistently per component category
- Maintain focus ring color across all states (green #16A34A)
- Error states always in red (#DC2626)
- Success states in primary green
- Respect dark mode considerations where applicable
- Test all interactive components for accessibility
