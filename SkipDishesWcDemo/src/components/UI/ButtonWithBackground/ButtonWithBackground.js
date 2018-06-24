import React from "react";
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  View,
  StyleSheet,
  Platform
} from "react-native";

const buttonWithBackground = props => {
  const content = (
    <View
      style={[
        props.style,
        styles.button,
        { backgroundColor: props.color },
        props.disabled ? styles.disabled : null
      ]}
    >
      <Text style={props.disabled ? styles.disabledText : styles.enabledText}>
        {props.children}
      </Text>
    </View>
  );
  if (props.disabled) {
    return content;
  }
  if (Platform.OS === "android") {
    return (
      <TouchableNativeFeedback onPress={props.onPress}>
        {content}
      </TouchableNativeFeedback>
    );
  }
  return <TouchableOpacity style={styles.touchableStyle}  onPress={props.onPress}>{content}</TouchableOpacity>;
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    margin: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "black",
    justifyContent: 'center',
    alignItems: "center"
  },
  disabled: {
    backgroundColor: "#eee",
    borderColor: "#aaa",
  },
  enabledText:{
    textAlign: "center",
  },
  disabledText: {
    color: "#aaa",
    textAlign: "center",
  },
  touchableStyle:{
    width: "100%",
    alignItems: "center"
  }
});

export default buttonWithBackground;
