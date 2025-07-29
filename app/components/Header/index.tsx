import theme from "@/app/global/globalStyles"
import {
  BellRingingIcon,
  BookmarkIcon,
  ChatsTeardropIcon,
} from "phosphor-react-native"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <ChatsTeardropIcon size={30} color="#1ab65c" weight="duotone" />
        <Text style={styles.headerLeftText}>Helia</Text>
      </View>

      {/* Area do userInfo */}
      <View style={styles.headerRight}>
        <TouchableOpacity>
          <BellRingingIcon
            size={30}
            color={theme.colors.inativeIconColor}
            weight="duotone"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <BookmarkIcon
            size={30}
            color={theme.colors.inativeIconColor}
            weight="duotone"
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
