import { StyleSheet } from "react-native";
import { colors, spacing } from './colors';


export const DailyForecastStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.vidro,
    borderRadius: 16,
    gap: spacing.md,
    padding: spacing.lg,
    marginHorizontal: spacing.md,
    marginVertical: spacing.sm,

  },

  cardDay: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.textLight,
  },

  Date: {
    alignItems: "center",
    justifyContent: "center"
  }

})