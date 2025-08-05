import theme from "@/app/global/globalStyles"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    marginTop: 80,
    justifyContent: "space-between",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  logoContainer: {
    backgroundColor: theme.colors.activeIconColor,
    borderRadius: 5,
    padding: 3,
  },
  headerLeftText: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  headerRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
})

export default styles
