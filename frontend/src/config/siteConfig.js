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
  
  // Hero Videos for phone mockup carousel
  heroVideos: [
    "https://customer-assets.emergentagent.com/job_8e2fcd51-b262-4f92-820a-d9dccb4a0369/artifacts/swbq6rsw_wishio_birthday_gifts2.mp4",
    "https://customer-assets.emergentagent.com/job_8e2fcd51-b262-4f92-820a-d9dccb4a0369/artifacts/91vxfna1_wishio_birthday_reminder.mp4",
  ],
  
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