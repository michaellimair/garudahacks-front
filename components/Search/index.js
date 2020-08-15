import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import {
  Button, Block, Text, Input, theme,
} from 'galio-framework';
import Icon from '../Icon';

const iconCamera = () => <Icon size={16} color={theme.COLORS.MUTED} name="zoom-in" family="material" />;

const styles = StyleSheet.create({
  search: {
    height: 48,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
});

const Search = ({ navigation }) => (
  <Input
    right
    color="black"
    style={styles.search}
    iconContent={iconCamera}
    placeholder="What are you looking for?"
    onFocus={() => navigation.navigate('Pro')}
  />
);

export default Search;
