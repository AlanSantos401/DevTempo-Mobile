import { StyleSheet } from "react-native";
import { colors, spacing } from "./colors";

export const searchBarStyles = StyleSheet.create({
  container: {
    padding: spacing.md,
  },

  inputContainer: {
    flexDirection: "row",
    gap: spacing.md
  },

  input: {
    flex: 1,
    backgroundColor: colors.cardbackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 12,
    padding: spacing.md,
    fontSize: 16,
    color: colors.text
  },

  button: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: spacing.md,
    paddingHorizontal: spacing.lg,
    alignItems: "center",
    justifyContent: "center"
  },

  buttonText: {
    color: colors.cardbackground,
    fontSize: 16,
    fontWeight: "600"
  }

})