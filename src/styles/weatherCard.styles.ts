import { StyleSheet } from "react-native";
import {colors, spacing, typography} from './colors'


export  const weatherCardStyles = StyleSheet.create({
 card: {
  backgroundColor: colors.vidro,
  borderRadius: 17,
  padding: spacing.lg,
  marginHorizontal: spacing.md,
  marginVertical: spacing.sm,
  alignItems: "center"
 },

 cityName: {
  ...typography.title,
  color: colors.text,
  marginBottom: spacing.xs
 },

 weatherIcon: {
  width: 65,
  height: 65,
 },

 temperature: {
  fontSize: 35,
  fontWeight: "bold",
  color: colors.primary,
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