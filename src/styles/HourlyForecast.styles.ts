import { StyleSheet } from "react-native";
import { colors, spacing } from './colors';


export const HourlyForescastStyles = StyleSheet.create({
  container: {
    backgroundColor: colors.vidro,
    borderRadius: 17,
    gap: spacing.xs,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    alignItems: "center",
    justifyContent: "space-between"
  },

  text: {
    fontSize: 18,
    fontWeight: "bold",
    alignItems: "center",
    color: colors.text,
    marginBottom: spacing.sm
  },

  cardHourly: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing.md - 4,
    justifyContent: "center"
  },
  
  icon: {
    height: 40,
    width: 40
  }
})