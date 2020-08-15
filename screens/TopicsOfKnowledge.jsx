import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { Text, Block } from 'galio-framework';
import { SafeAreaView } from 'react-native-safe-area-context';
import TopicCategoryPanel from '../components/TopicCategoryPanel';

const styles = StyleSheet.create({
  titleText: {
    marginHorizontal: 16,
  },
});

const DATA = ['social_science', 'arts', 'engineering', 'computer_science', 'science', 'humanities'];

export default function TopicsOfKnowledge() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Block flex>
        <Text bold size={16} style={styles.titleText}>
          Your topics of knowledge
        </Text>
        <FlatList
          data={DATA}
          renderItem={({ item }) => <TopicCategoryPanel category={item} />}
          keyExtractor={(item) => item}
        />
      </Block>
    </SafeAreaView>
  );
}
