import { StatusBar, StyleSheet, Text, View } from "react-native"
import theme from "./global/globalStyles"

import Header from "./components/Header"

export default function Index() {
  const name = "Morgado"
  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor={theme.colors.Background}
        barStyle={"light-content"}
        translucent
      />
      <Header />
      <Text style={styles.userName}>Ola, {name}</Text>
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.Background,
    padding: 16,
  },
  userName: {
    color: theme.colors.inativeIconColor,
    fontSize: 20,
    fontWeight: 800,
    paddingTop: 30,
    paddingBottom: 30,
  },
})
