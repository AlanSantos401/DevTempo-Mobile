import { StyleSheet } from "react-native";
import { colors, spacing } from './colors';


export const HourlyForescastStyles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: colors.vidro,
    borderRadius: 17,
    gap: spacing.md,
    padding: spacing.md,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,
    alignItems: "center",
    justifyContent: "space-between"
  },
  
  cardHourly: {
    alignItems: "center",
    gap: spacing.sm,
    justifyContent: "center"
  }
})