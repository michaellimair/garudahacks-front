import React, { useState } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text } from "galio-framework";

const stringToColor = (string) => {
  const firstCharAscii = string.charCodeAt(0);
  const colorIndex = firstCharAscii % 6;
  switch (colorIndex) {
    case 0:
      return "#d81b60";
    case 1:
      return "#7b1fa2";
    case 2:
      return "#1976d2";
    case 3:
      return "#00796b";
    case 4:
      return "#e65100";
    default:
      return "#37474f";
  }
};

const createStyles = (topic) => {
  const color1 = "#FFFFFF";
  const color2 = stringToColor(topic);

  return StyleSheet.create({
    container: {
      width: "50%",
      flex: 0,
      height: 120,
      marginTop: 16,
      paddingLeft: 8,
    },
    containerEven: {
      paddingLeft: 0,
      paddingRight: 8,
    },
    card: {
      width: "100%",
      height: "100%",
      padding: 16,
      borderRadius: 4,
      backgroundColor: color1,
      shadowOpacity: 0.5,
      shadowRadius: 4,
      shadowColor: "gray",
      shadowOffset: { height: 0, width: 0 },
    },
    text: {
      color: color2,
    },
    cardClicked: {
      backgroundColor: color2,
      color: color1,
    },
    textClicked: {
      color: color1,
    },
  });
};

export default function TopicCategoryCard({ topic, even }) {
  const [clicked, setClicked] = useState(false);
  const styles = createStyles(topic);

  return (
    <Block flex style={[styles.container, even && styles.containerEven]}>
      <TouchableOpacity onPress={() => setClicked(!clicked)}>
        <Block style={[styles.card, clicked && styles.cardClicked]}>
          <Text size={24} style={clicked ? styles.textClicked : styles.text}>
            {topic}
          </Text>
        </Block>
      </TouchableOpacity>
    </Block>
  );
}
