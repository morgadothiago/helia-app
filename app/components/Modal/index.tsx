import { ReactNode } from "react"
import { StyleSheet, TouchableWithoutFeedback, View } from "react-native"

interface ModalProps {
  visible: boolean
  onClose: () => void
  children: ReactNode
}

export default function Modal({ visible, onClose, children }: ModalProps) {
  if (!visible) return null
  return (
    <View style={styles.overlay}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.background} />
      </TouchableWithoutFeedback>
      <View style={styles.content}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1000,
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  content: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    alignItems: "center",
    zIndex: 1001,
  },
})
