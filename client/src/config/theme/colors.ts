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
  primary: "#212529", // Dark gray (for primary text or accents)
  secondary: "#495057", // Lighter gray (for secondary text or borders)
  background: "#FFFFFF", // White
  surface: "#F8F9FA", // Light gray (for surfaces)
  textPrimary: "#212529", // Dark gray for main text
  textSecondary: "#6C757D", // Muted gray for secondary text
  border: "#DEE2E6", // Subtle light gray for dividers/borders
};

export const darkPalette: AppPalette = {
  primary: "#212529", // Dark gray
  secondary: "#495057", // Lighter gray
  background: "#121212", // Dark background
  surface: "#1E1E1E", // Slightly lighter dark gray for surfaces
  textPrimary: "#E9ECEF", // Light gray for text
  textSecondary: "#ADB5BD", // Muted gray for secondary text
  border: "#343A40", // Subtle dark gray for dividers/borders
};

export const chipColors = [
  "#6C757D", // Muted gray (matches textSecondary)
  "#ADB5BD", // Lighter gray with a hint of blue
  "#B0BEC5", // Cool light gray
  "#CED4DA", // Very light gray
  "#D6D8DB", // Soft, cool gray
  "#E9ECEF", // Very light gray (matches textPrimary)
];

export const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * chipColors.length);
  return chipColors[randomIndex];
};
