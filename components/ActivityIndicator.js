import React from "react";
import { ActivityIndicator, Modal, StyleSheet, View } from "react-native";
import COLORS from "../consts/color";
export default function ActivityIndicatorScreen({ open }) {
  return (
    <Modal transparent={true} visible={open}>
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color={COLORS.green} />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: `rgba(0,0,0,0.6)`,
  },
});
