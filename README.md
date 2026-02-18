# Mech Feast 2026 Website

A modern, responsive website for the Mechanical Engineering College Fest, built with HTML, TailwindCSS, and Vanilla JavaScript.

## 🚀 Setup & Usage

1.  **Open locally:** simply double-click `index.html` to view the website in your browser.
2.  **No installation required:** The project uses TailwindCSS via CDN, so you don't need `npm` or `node_modules` for basic usage.
3.  **Deployment:** Upload all files to any static host (GitHub Pages, Netlify, Vercel, or your college server).

## 📁 File Structure

```
mech-feast-2026/
├── index.html              # Home Page (Hero, Intro Video, Stats)
├── workshops.html          # Workshops listing & details
├── tech-events.html        # Technical Events
├── non-tech-events.html    # Cultural/Fun Events
├── accommodations.html     # Stay options
├── sponsors.html           # Sponsors listing
├── about.html              # About Dept, Team, Gallery
├── contact.html            # Contact Form & Info
├── css/
│   └── style.css           # Custom styles, animations, and theme variables
├── js/
│   └── main.js             # Logic for intro video, navigation, countdown
├── intro.mp4               # Intro splash video
├── hero-bg.mp4             # Background video for Home Page Hero section
└── page-bg.jpg             # Background image for all internal pages
```

## 🛠️ Customization Guide

### 1. Replacing Media Assets
To update the visuals, simply replace the files in the root folder with your own files (keep the same names, or update the HTML references):

*   **Intro Video:** Replace `intro.mp4`
*   **Home Background:** Replace `hero-bg.mp4`
*   **Page Background:** Replace `page-bg.jpg`
*   **Logo:** Currently text-based. To add an image logo, update the `<header>` section in all HTML files:
    ```html
    <!-- Change this -->
    <a href="index.html" class="...">... MECH FEAST '26</a>
    
    <!-- To this -->
    <a href="index.html" class="..."><img src="logo.png" alt="Logo" class="h-10"></a>
    ```

### 2. Updating Google Form Links
Search for `GOOGLE_FORM_LINK` or placeholder `#` in the HTML files and replace them with your actual Google Form URLs.

Example in `workshops.html`:
```html
<a href="https://docs.google.com/forms/d/e/..." target="_blank" class="...">Register Now</a>
```

### 3. Changing Colors
The website uses TailwindCSS with extended configuration in the `<head>` of each HTML file and CSS variables in `css/style.css`.

**In `css/style.css`:**
```css
:root {
    --primary-color: #4682B4;  /* Update Primary Color */
    --secondary-color: #CD7F32; /* Update Accent Color */
}
```

**In HTML `<head>` script:**
```javascript
colors: {
    primary: '#4682B4',
    secondary: '#CD7F32',
    // ...
}
```

### 4. Updating the Countdown Timer
Open `js/main.js` and find the `countdown` section. Update the target date:
```javascript
const targetDate = new Date('March 20, 2026 09:00:00').getTime();
```

## 📱 Features

*   **Intro Video:** Plays automatically on the first visit. Skips automatically on subsequent visits (stored in `sessionStorage`).
*   **Responsive:** Works on Mobile, Tablet, and Desktop.
*   **Mechanical Theme:** Industrial colors, fonts, and grid animations.
*   **Dark Mode:** Default dark aesthetic for a premium look.

## ⚠️ Requirements
*   **Internet Connection:** Required for loading TailwindCSS and Google Fonts (via CDN).
*   **Web Browser:** Chrome, Firefox, Safari, or Edge (Modern versions).

---
*Developed for Mech Feast 2026*
