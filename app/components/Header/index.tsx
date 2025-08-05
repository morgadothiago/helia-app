import theme from "@/app/global/globalStyles"
import {
  BellIcon,
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
} from "phosphor-react-native"
import React, { useState } from "react"
import { Text, View } from "react-native"
import ButtonHeader from "../ButtonHeader"
import styles from "./styles"

export default function Header() {
  const [notification, setNotification] = useState(true)
  const [bookmark, setBookMark] = useState({
    id: 1,
    name: "casa na praia grande",
    description: "Casa de praia grande com 4 quarto e 1 switch",
    isFavorite: true,
  })

  setTimeout(() => {
    setNotification(false)
  }, 10000)

  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <View style={styles.logoContainer}>
          <ChatsTeardropIcon
            size={30}
            color={theme.colors.Background}
            weight="duotone"
          />
        </View>

        <Text style={styles.headerLeftText}>Helia</Text>
      </View>

      {/* Area do userInfo */}
      <View style={styles.headerRight}>
        {notification ? (
          <ButtonHeader>
            <BellIcon
              size={30}
              color={theme.colors.inativeIconColor}
              weight="duotone"
            />
          </ButtonHeader>
        ) : (
          <ButtonHeader>
            <BellRingingIcon
              size={30}
              color={theme.colors.inativeIconColor}
              weight="duotone"
            />
          </ButtonHeader>
        )}
        <ButtonHeader>
          <BookmarkIcon
            size={30}
            color={theme.colors.inativeIconColor}
            weight="duotone"
          />
        </ButtonHeader>
      </View>
    </View>
  )
}
