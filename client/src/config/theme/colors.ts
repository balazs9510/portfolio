export type AppPalette = {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  textPrimary: string;
  textSecondary: string;
  border: string;
};

export const lightPalette: AppPalette = {
  primary: "#0077B6", // Vibrant blue
  secondary: "#00B4D8", // Lighter blue
  background: "#FFFFFF", // White
  surface: "#F1F5F9", // Light grey
  textPrimary: "#212529", // Dark grey for main text
  textSecondary: "#495057", // Slightly lighter grey
  border: "#DEE2E6", // Subtle grey for dividers/borders
};

export const darkPalette: AppPalette = {
  primary: "#00B4D8", // Light blue
  secondary: "#90E0EF", // Softer blue
  background: "#121212", // Dark grey
  surface: "#1E1E1E", // Slightly lighter dark grey
  textPrimary: "#E9ECEF", // Light grey for main text
  textSecondary: "#ADB5BD", // Muted grey
  border: "#343A40", // Subtle grey for dividers/borders
};
