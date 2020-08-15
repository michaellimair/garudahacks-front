import React from "react";
import { StyleSheet, ScrollView } from "react-native";
import { Text, Block, Button } from "galio-framework";
import { SafeAreaView } from "react-native-safe-area-context";
import TopicCategoryPanel from "../components/TopicCategoryPanel";

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
  },
  titleText: {
    marginHorizontal: 16,
    marginTop: 80,
    marginBottom: 64,
    textAlign: "center",
  },
  continue: {
    marginTop: 24,
    width: "100%",
  },
});

const categories = [
  "social_science",
  "arts",
  "engineering",
  "computer_science",
  "science",
  "humanities",
];

export default function TopicsOfKnowledge() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block flex style={styles.container}>
        <ScrollView>
          <Text bold size={36} style={styles.titleText}>
            What do you want to learn?
          </Text>
          {categories.map((category) => (
            <TopicCategoryPanel key={category} category={category} />
          ))}
          <Button style={styles.continue}>Continue</Button>
        </ScrollView>
      </Block>
    </SafeAreaView>
  );
}
