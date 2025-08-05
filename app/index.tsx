import { StatusBar, StyleSheet, Text, TextInput, View } from "react-native"
import theme from "./global/globalStyles"

import { MagnifyingGlass, SlidersHorizontalIcon } from "phosphor-react-native"
import { useState } from "react"
import Button from "./components/Button"
import Header from "./components/Header"
import Modal from "./components/Modal"

export default function Index() {
  const [filterModalVisible, setFilterModalVisible] = useState(false)
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
      <View style={styles.inputContainer}>
        <MagnifyingGlass size={30} color="#757575" weight="duotone" />
        <TextInput
          placeholder="Busque uma casa aqui"
          placeholderTextColor="#757575"
          style={styles.textInput}
        />

        <Button onPress={() => setFilterModalVisible(!filterModalVisible)}>
          <SlidersHorizontalIcon size={30} color="#1ab65c" weight="duotone" />
        </Button>
      </View>
      {filterModalVisible && (
        <Modal
          visible={filterModalVisible}
          onClose={() => setFilterModalVisible(false)}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 16 }}>
            Filtros
          </Text>
          <Text style={{ marginBottom: 24 }}>
            Aqui você pode aplicar filtros de busca.
          </Text>
          <Button onPress={() => setFilterModalVisible(false)}>
            <Text style={{ color: "#1ab65c", fontWeight: "bold" }}>Fechar</Text>
          </Button>
        </Modal>
      )}
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
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: theme.colors.Background,
    borderRadius: 8,
    padding: 8,
  },
  textInput: {
    flex: 1,
    height: 40,
    marginLeft: 8,
    color: theme.colors.inativeIconColor,
  },
})
