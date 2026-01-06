// ============================================
// WISHIO SITE CONFIGURATION
// ============================================
// Edit this file to customize your landing page
// ============================================

export const siteConfig = {
  // App Information
  appName: "Wishio",
  
  // Store URLs (replace with your actual URLs)
  iosAppStoreUrl: "https://apps.apple.com/app/idYOUR_ID_HERE",
  googlePlayUrl: "https://play.google.com/store/apps/details?id=YOUR_PACKAGE_HERE",
  
  // Contact Information
  contactEmail: "hello@wishio.site",
  
  // Social Links (optional - set to null or empty string to hide)
  socialLinks: {
    twitter: "",
    instagram: "",
    facebook: "",
  },
  
  // Company Information
  companyName: "Interware SAS",
  companyWebsite: "https://interware.dev",
  
  // Legal Pages (placeholders)
  privacyPolicyUrl: "/privacy",
  termsUrl: "/terms",
  
  // Screenshots paths (replace with your actual screenshots)
  // Place screenshots in /public/screenshots/ folder
  screenshots: [
    {
      src: "/screenshots/home.png",
      captionKey: "screenshotHome",
      descriptionKey: "screenshotHomeDesc"
    },
    {
      src: "/screenshots/calendar.png",
      captionKey: "screenshotCalendar",
      descriptionKey: "screenshotCalendarDesc"
    },
    {
      src: "/screenshots/greeting.png",
      captionKey: "screenshotGreeting",
      descriptionKey: "screenshotGreetingDesc"
    }
  ],
  
  // Phone mockup image path
  phoneMockupImage: "/screenshots/phone-mockup.png",
};

export default siteConfig;