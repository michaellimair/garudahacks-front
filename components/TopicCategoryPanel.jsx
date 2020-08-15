import React, { useState, useMemo } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";
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
});

export default function TopicCategoryPanel({ category }) {
  const [open, setOpen] = useState(false);
  const styles = useMemo(() => createStyles(open), [open]);

  return (
    <Block flex>
      <TouchableOpacity onPress={() => setOpen(!open)}>
        <Text>{category}</Text>
      </TouchableOpacity>
      <Block flex style={open ? styles.panelOpen : styles.panel}>
        {categories[category].map((topic) => (
          <TopicCategoryCard topic={topic} />
        ))}
      </Block>
    </Block>
  );
}

TopicCategoryPanel.propTypes = {
  category: PropTypes.string.isRequired,
};
