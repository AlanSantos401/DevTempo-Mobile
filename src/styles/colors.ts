export const colors = {
  // Cores Principais
  primary: "#4A90E2",
  primaryDark: "#357ABD",

  // Background
  background: "#F5F5F5",
  cardbackground: "#FFFFFF",

  // Texto
  text: "#333333",
  textSecundary: "#666666",
  textLight: "#999999",

  // Status
  error: "#E74C3C",
  sucess: "#2ECC71",
  warning: "#F39C12",

  // Bordas
  border: "#E0E0E0",
  shadow: "#000000",

  // Temperatura
  tempCold: '#1E90FF',        // até 10°
  tempMild: '#4DA3A3',        // 11 a 25°
  tempWarm: '#FF8C00',        // 26 a 35°
  tempHot: '#FF3B30',         // acima de 35°
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const typography = {
  title: {
    fontSize: 28,
    fontWeight: "700" as const,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600" as const,
  },
  body: {
    fontSize: 16,
    fontWeight: "400" as const,
  },
  caption: {
    fontSize: 14,
    fontWeight: "400" as const,
  },
  small: {
    fontSize: 12,
    fontWeight: "400" as const,
  }
}