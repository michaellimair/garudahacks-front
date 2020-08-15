import React, { useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import PropTypes from "prop-types";
import { Block, Button, Text } from "galio-framework";

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
      height: "100%",
      padding: "16px",
      boxSizing: "border-box",
    },
    card: {
      width: "100%",
      height: "100%",
      backgroundColor: color1,
      color: color2,
    },
    cardClicked: {
      width: "100%",
      height: "100%",
      backgroundColor: color2,
      color: color1,
    },
  });
};

export default function TopicCategoryCard({ topic }) {
  const [clicked, setClicked] = useState(false);
  const styles = createStyles(topic);

  return (
    <Block flex style={styles.container}>
      <Button
        style={clicked ? styles.cardClicked : styles.card}
        onPress={() => setClicked(!clicked)}
      >
        <Text>{topic}</Text>
      </Button>
    </Block>
  );
}

TopicCategoryCard.propTypes = {
  topic: PropTypes.string.isRequired,
};
