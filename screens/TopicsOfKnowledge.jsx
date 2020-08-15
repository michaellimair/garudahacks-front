import React from 'react'
import PropTypes from 'prop-types'
import { Block } from 'galio-framework';
import TopicCategoryPanel from '../components/TopicCategoryPanel';

function TopicsOfKnowledge() {
  return (
    <Block flex>
      <Text bold size={16} style={styles.title}>
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
