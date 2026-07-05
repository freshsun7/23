# 23 💌 | İyi ki Doğdun Kocam

> *An interactive birthday surprise website for the love of your life* 🎂❤️

## 🌌 About

A beautifully crafted, cinematic interactive birthday gift featuring animations, heartfelt messages, photo galleries, and romantic effects. Built with HTML5, CSS3, and Vanilla JavaScript.

## ✨ Features

### 🎬 Cinematic Sections

1. **🌌 Opening Screen**
   - Black background with fade-in lilac-blue night sky
   - Twinkling stars with floating hearts
   - Typewriter text animation

2. **💌 Interactive Envelope**
   - 3D glass-effect envelope
   - Click to open and trigger music
   - Confetti explosion effect

3. **💌 Heartfelt Letter**
   - Your custom message typed with dactyloscript effect
   - Smooth scrolling
   - Auto-advance after reading

4. **❤️ Time Counter**
   - Live countdown showing days, hours, minutes, seconds together
   - Starting from April 3, 2025
   - Beautiful card-based layout

5. **📸 Polaroid Gallery**
   - 7 falling polaroid-style photos
   - Animated entrance from top
   - Click to expand and interact
   - Each photo has a caption

6. **🌹 Memory Screen**
   - Dedicated memory photo display
   - Touching caption text
   - Smooth transitions

7. **❤️ Forever Screen**
   - "Sonsuza Kadar Sen" (Forever You) with heartbeat animation
   - Fireworks and sparkle effects
   - Celebration of eternal love

8. **🎆 Final Message**
   - Sequential text reveal with pauses
   - Emotional farewell message
   - Date stamp: 03.04.2025 ∞

### 🎵 Music Player
- Spotify-style mini player in bottom-right corner
- Rotating vinyl effect
- Currently plays: "Dolu Kadehi Ters Tut – 23"

### 🎨 Design Features
- Lilac-blue color palette (#8b5fbf, #a565d8)
- Smooth fade transitions between screens
- Animated starfield background
- Floating hearts
- Responsive design for mobile and desktop

## 📁 File Structure

```
23/
├── index.html          # Main HTML structure
├── style.css           # Complete styling and animations
├── script.js           # All interactive features
├── README.md           # This file
└── assets/             # (For future photo storage)
    └── photos/         # 7 polaroid photos
```

## 🚀 How to Use

### View the Website
1. Go to: `https://freshsun7.github.io/23`
2. Click through the screens manually using arrows, or let it auto-play
3. Click the envelope to trigger the music and animations

### Manual Navigation
- **Next Button (➜)**: Move to next screen
- **Previous Button (⬅)**: Return to previous screen
- **Envelope**: Click to open and start the celebration
- **Mini Player**: Click to toggle music
- **Photos**: Click any polaroid to expand

### Customization

Edit these in `script.js`:

```javascript
const CONFIG = {
    startDate: new Date('2025-04-03'),  // Change date together started
    letter: `Your message here...`,      // Replace with your letter
    photos: [...]                        // Update photo array
};
```

## 🎨 Color Palette

- **Primary Purple**: `#8b5fbf`
- **Accent Purple**: `#a565d8`
- **Hot Pink**: `#ff69b4`
- **Dark Background**: `#0a0a1a`

## 🔧 Technologies Used

- **HTML5**: Semantic structure
- **CSS3**: Animations, gradients, transforms, and 3D effects
- **JavaScript**: DOM manipulation, timers, and interactivity
- **No External Dependencies**: Pure vanilla implementation

## 📱 Browser Compatibility

- Chrome/Edge 88+
- Firefox 85+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎵 Music

Currently set to: **Dolu Kadehi Ters Tut – 23**

To change, update the audio element in `index.html` or modify the music player logic in `script.js`.

## 💝 Screen Flow

```
Opening (10s)
    ↓
Envelope (Interactive)
    ↓
Letter (30s)
    ↓
Counter (10s)
    ↓
Gallery (12s)
    ↓
Memories (10s)
    ↓
Forever (12s)
    ↓
Final Message (Sequential reveal)
```

## ✨ Special Touches

- Auto-advance between screens (customizable timing)
- Smooth fade transitions
- Persistent mini player throughout
- Navigation available from letter screen onwards
- Responsive to all screen sizes
- Accessibility features (semantic HTML)

## 🎂 Message Preview

The letter contains your beautiful, heartfelt message expressing:
- A year of memories together
- How well you know each other
- Inside jokes and special moments
- Future hopes and dreams
- Eternal love and commitment

## 📝 Notes

- All 7 photos are integrated into the polaroid gallery
- Music player is functional with play/pause controls
- Counter updates in real-time
- All animations are smooth and performant
- Mobile-friendly layout

## 🌟 Made with Love

Created as a romantic birthday surprise celebrating your love story. Each animation, transition, and message is designed to evoke emotion and joy.

---

**Happy Birthday to the man of your dreams!** 🎂❤️

*"Seni seçtim. Bugün da, yarın da, her zaman... İyi ki doğdun kocam."*
