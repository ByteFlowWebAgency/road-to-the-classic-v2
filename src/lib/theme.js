/**
 * Theme configuration for the application
 * This file contains global theme variables that can be used throughout the application
 */

export const theme = {
  colors: {
    // Primary colors
    primary: "#1a237e",
    primaryHover: "#151c69", // Darker shade for hover states
    primaryLight: "#303f9f", // Lighter shade for active states
    
    // Secondary colors
    secondary: "#ffffff",
    secondaryHover: "#f5f5f5",
    
    // Accent colors (complementary to primary)
    accent: "#000000", // Black accent color
    accentHover: "#333333",
    accentLight: "#666666",
    
    // Text colors
    text: {
      primary: "#1a237e",
      secondary: "#ffffff",
      dark: "#212121",
      light: "#757575",
      white: "#ffffff",
    },
    
    // Background colors
    background: {
      main: "#ffffff",
      light: "#f5f7fa",
      dark: "#1a237e",
      accent: "#000000",
    },
    
    // Border colors
    border: {
      light: "#e0e0e0",
      medium: "#bdbdbd",
      dark: "#9e9e9e",
      primary: "#1a237e",
    },
    
    // States
    success: "#4caf50",
    warning: "#ff9800",
    error: "#f44336",
    info: "#2196f3",
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: 'var(--font-sans, "Inter", sans-serif)',
      mono: 'var(--font-mono, "Roboto Mono", monospace)',
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem',  // 36px
      '5xl': '3rem',     // 48px
    },
    fontWeight: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
  },
  
  // Spacing
  spacing: {
    0: '0',
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    5: '1.25rem',
    6: '1.5rem',
    8: '2rem',
    10: '2.5rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
    32: '8rem',
  },
  
  // Breakpoints
  breakpoints: {
    xs: '480px',
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
  
  // Borders
  borders: {
    radius: {
      sm: '0.125rem',
      md: '0.25rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      full: '9999px',
    },
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  },
}; 