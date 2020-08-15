import React, { useState, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Block, Text } from "galio-framework";
import { AntDesign } from "@expo/vector-icons";
import categories from "../data/categories";
import TopicCategoryCard from "./TopicCard";

const styles = StyleSheet.create({
  panel: {
    display: "none",
  },
  panelOpen: {
    display: "flex",
    paddingBottom: 8,
    flexWrap: "wrap",
    flexDirection: "row",
  },
  titleText: {
    marginTop: 8,
  },
});

export default function TopicCategoryPanel({ category }) {
  const [open, setOpen] = useState(false);

  return (
    <Block flex>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text size={20} style={styles.titleText}>
          {`${categories[category][category]} `}
          {open ? (
            <AntDesign name="up" size={20} color="black" />
          ) : (
            <AntDesign name="down" size={20} color="black" />
          )}
        </Text>
      </TouchableOpacity>
      <Block flex style={open ? styles.panelOpen : styles.panel}>
        {Object.keys(categories[category]).map((topic, index) => (
          <TopicCategoryCard
            even={index % 2 === 0 ? true : undefined}
            topic={categories[category][topic]}
            key={categories[category][topic]}
          />
        ))}
      </Block>
    </Block>
  );
}
