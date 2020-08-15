import React, { useState, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text } from "galio-framework";
import categories from "../data/categories";
import TopicCategoryCard from "./TopicCard";

const styles = StyleSheet.create({
  panel: {
    display: "none",
  },
  panelOpen: {
    display: "flex",
    flexWrap: "wrap",
  },
  titleText: {
    marginleft: 16,
  },
});

export default function TopicCategoryPanel({ category }) {
  const [open, setOpen] = useState(false);

  return (
    <Block flex>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text style={styles.titleText}>{categories[category]}</Text>
      </TouchableOpacity>
      <Block flex style={open ? styles.panelOpen : styles.panel}>
        {Object.keys(categories[category]).map((topic) => (
          <TopicCategoryCard
            topic={categories[category][topic]}
            key={categories[category][topic]}
          />
        ))}
      </Block>
    </Block>
  );
}
