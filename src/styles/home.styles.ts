import { StyleSheet } from "react-native";
import { colors, spacing, typography } from "./colors";

export const homeStyles = StyleSheet.create({
  safeArea: {
    flex: 1,
     backgroundColor: "transparent"
  },

  container: {
    flex: 1
  },

  header: {
    paddingTop: spacing.xl,
    paddingBottom: spacing.md,
    paddingHorizontal: spacing.md,
  },

  title: {
    ...typography.title,
    color: colors.text,
    textAlign: "center"
  },

  subtitle: {
    ...typography.subtitle,
    color: colors.textSecundary,
    textAlign: "center",
    marginTop: spacing.xs
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    padding: spacing.xl
  },

  emptyText: {
    ...typography.body,
    color: colors.textLight,
    textAlign: "center"
  },

  gpsButton: {
    backgroundColor: colors.primary,
    marginHorizontal: spacing.md,
    marginTop: spacing.md,
    paddingVertical: spacing.sm + 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 48,
    marginBottom: 30
  },
  
  gpsText: {
    color: colors.background,
    fontSize: 16,
    fontWeight: "600"
  },

  card: {
  backgroundColor: colors.vidro,
  borderRadius: 17,
  padding: spacing.md,
  marginHorizontal: spacing.md,
  marginVertical: spacing.sm,
  alignItems: "center",
 },

 cityName: {
  ...typography.title,
  color: colors.text,
 },

 weatherIcon: {
  width: 60,
  height: 60,
 },

 temperature: {
  fontSize: 1,
  fontWeight: "bold",
  color: colors.primary,
  marginBottom: spacing.sm
 },

 description: {
  ...typography.subtitle,
  color: colors.text,
  textTransform: 'capitalize',
 },

 detailsContainer: {
  flexDirection: "row",
  marginTop: spacing.md,
  gap: spacing.lg
 },

 detailsItems: {
  alignItems: "center"
 },

 detailsLabel: {
  ...typography.caption,
  color: colors.shadow,
  marginBottom: spacing.xs
 },

 detailsValue: {
  ...typography.caption,
  color: colors.text
 }

})