import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";


export const detailsStyles = StyleSheet.create({
  safeAre: {
    flex: 1,
    backgroundColor: colors.background
  },

  container: {
    flex: 1,
  },

  background: {
    flex: 1
  },

  backButton: {
    position: "absolute",
    top: 25,
    zIndex: 1000,
    width: 40,
    height: 40,
    backgroundColor: colors.vidro,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },

  hearder: {
    paddingHorizontal: spacing.md,
    paddingBottom: spacing.md,
    color: colors.primaryDark,
    marginTop: 50
  },

  title: {
    ...typography.title,
    textAlign: "center"
  },

  subtitle: {
    ...typography.subtitle,
    textAlign: "center",
    marginTop: spacing.xs,
    color: colors.textSecundary
  },

  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: spacing.xl * 2
  },

  loadingText: {
    ...typography.body,
    color: colors.textSecundary,
    marginTop: spacing.md
  },

  erroContainer: {
    padding: spacing.md,
    textAlign: "center"
  },

  erroText: {
    color: colors.error,
    fontSize: 20,
    textAlign: "center",
    marginBottom: spacing.md,
    fontWeight: "600"
  },

  retryButton: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    padding: spacing.md,
    paddingHorizontal: spacing.lg,
    marginTop: spacing.md
  },

  retryButtonText: {
    color: colors.cardbackground,
    fontSize: 16,
    fontWeight: '600',
    textAlign: "center"
  },
})