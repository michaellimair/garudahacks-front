import React from 'react';
import { Text, Block } from 'galio-framework';
import TopicCategoryPanel from '../components/TopicCategoryPanel';

export default function TopicsOfKnowledge() {
  return (
    <Block flex>
      <Text bold size={16}>
        Your topics of knowledge
      </Text>
      <TopicCategoryPanel category="social_science" />
      <TopicCategoryPanel category="arts" />
      <TopicCategoryPanel category="engineering" />
      <TopicCategoryPanel category="computer_science" />
      <TopicCategoryPanel category="science" />
      <TopicCategoryPanel category="humanities" />
    </Block>
  );
}
