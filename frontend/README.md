# Wishio Landing Page

A modern, translucent glassmorphism landing page for the Wishio mobile app with automatic multi-language support.

## Features

- 🌍 **16 Languages** - Automatic browser language detection
- 📱 **Responsive** - Mobile-first design
- ✨ **Glassmorphism** - Modern translucent UI
- 🔲 **QR Codes** - Dynamic QR code generation
- ⚡ **Fast** - Static React site, no backend

## Supported Languages

English, Spanish, Portuguese, French, German, Italian, Chinese (Simplified), Japanese, Korean, Arabic, Hindi, Russian, Turkish, Dutch, Polish, Indonesian

The site automatically detects the user's browser language and displays content accordingly. No language switcher needed.

## Configuration

Edit `/src/config/siteConfig.js` to customize:

- **App Store URLs**: Replace placeholder URLs with your actual store links
- **Contact Email**: Update with your support email
- **Social Links**: Add your social media profiles (optional)
- **Company Name**: Update copyright information
- **Company Website**: Link to interware.dev or your company site

## Screenshots

Place your app screenshots in `/public/screenshots/`:

- `phone-mockup.png` - Hero section phone display
- `home.png` - Home screen screenshot
- `calendar.png` - Calendar view screenshot  
- `greeting.png` - Greeting generator screenshot

## Tech Stack

- React 19
- Tailwind CSS 3
- Framer Motion (animations)
- qrcode.react (QR code generation)
- Lucide React (icons)

## Development

```bash
# Install dependencies
yarn install

# Start development server
yarn start

# Build for production
yarn build
```

## Deployment

### Netlify

1. **Drag & Drop**: Build locally with `yarn build`, then drag the `build` folder to Netlify
2. **Git Integration**:
   - Connect your repository
   - Build command: `yarn build`
   - Publish directory: `build`

### Vercel

1. Import your repository
2. Framework Preset: Create React App
3. Build command: `yarn build`
4. Output directory: `build`

### GitHub Pages

1. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/wishio-site"
   ```

2. Install gh-pages:
   ```bash
   yarn add -D gh-pages
   ```

3. Add deploy scripts to `package.json`:
   ```json
   "predeploy": "yarn build",
   "deploy": "gh-pages -d build"
   ```

4. Deploy:
   ```bash
   yarn deploy
   ```

## Customization

### Colors

The site uses a rose/pink color palette. To change colors, edit:
- `tailwind.config.js` for theme colors
- `src/index.css` for CSS variables

### Fonts

The site uses Inter font. To change, update the Google Fonts import in `src/index.css`.

## License

© 2025 Interware SAS