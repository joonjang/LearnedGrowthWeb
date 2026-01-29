/* /scripts/global.js */

document.addEventListener('DOMContentLoaded', () => {
  
  // --- CONFIGURATION: EDIT HERE ---
  const SITE_DATA = {
    // 1. The date your Legal Docs were last updated
    lastUpdated: "January 29, 2026",
    
    // 2. The current year for the Footer copyright
    currentYear: new Date().getFullYear() // Automatically gets 2026, 2027...
  };

  // --- LOGIC: DO NOT EDIT BELOW ---
  
  // Update Legal Dates
  const dateElements = document.querySelectorAll('.dynamic-date');
  dateElements.forEach(el => {
    el.textContent = SITE_DATA.lastUpdated;
  });

  // Update Footer Year
  const yearElements = document.querySelectorAll('.dynamic-year');
  yearElements.forEach(el => {
    el.textContent = SITE_DATA.currentYear;
  });
});