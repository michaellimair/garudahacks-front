import React from 'react';
import { StyleSheet, Dimensions, ScrollView, TouchableWithoutFeedback, Image } from 'react-native';
import { Button, Block, Text, theme } from 'galio-framework';

import { Icon, Product } from '../components';
import Search from '../components/Search';

const { width } = Dimensions.get('screen');
import products from '../constants/products';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FlatList } from 'react-native-gesture-handler';
import users from '../data/users';

const styles = StyleSheet.create({
  product: {
    backgroundColor: theme.COLORS.WHITE,
    marginVertical: theme.SIZES.BASE / 2,
    borderWidth: 0,
    minHeight: 60,
  },
  productTitle: {
    flexWrap: 'wrap',
    paddingBottom: 6,
  },
  productDescription: {
    padding: theme.SIZES.BASE / 2,
    flexDirection: 'row'
  },
  imageContainer: {
    elevation: 1,
  },
  image: {
    borderRadius: 3,
    marginHorizontal: theme.SIZES.BASE / 2,
    marginTop: -16,
  },
  horizontalImage: {
    width: 'auto',
  },
  fullImage: {
    width: width - theme.SIZES.BASE * 3,
  },
  shadow: {
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    shadowOpacity: 0.1,
    elevation: 2,
  },
  home: {
    width: width,    
  },
  search: {
    height: 48,
    width: width - 32,
    marginHorizontal: 16,
    borderWidth: 1,
    borderRadius: 3,
  },
  header: {
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: theme.COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    elevation: 4,
    zIndex: 2,
  },
  tabs: {
    marginBottom: 24,
    marginTop: 10,
    elevation: 4,
  },
  tab: {
    backgroundColor: theme.COLORS.TRANSPARENT,
    width: width * 0.50,
    borderRadius: 0,
    borderWidth: 0,
    height: 24,
    elevation: 0,
  },
  tabTitle: {
    lineHeight: 19,
    fontWeight: '300'
  },
  divider: {
    borderRightWidth: 0.3,
    borderRightColor: theme.COLORS.MUTED,
  },
  products: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE * 2,
  },
});

const ChatBlock = ({ item }) => {
  return (
    <Block row card style={[styles.product, styles.shadow]}>
      <React.Fragment>
        <TouchableWithoutFeedback>
          <Block flex space="between" style={styles.productDescription}>
            <Image source={{uri: item.image}} style={{width: 40, height: 40, margin: 8, borderRadius: 30}} />
            <Block flex style={{ marginLeft: 16, justifyContent: 'center' }}>
              <Text size={14} style={styles.productTitle}>{item.fullName}</Text>
              <Text size={12} >
                {item.about}
              </Text>

            </Block>
          </Block>
        </TouchableWithoutFeedback>
      </React.Fragment>
    </Block>
  )
}

export default class ChatScreen extends React.Component {
  renderSearch = () => {
    const { navigation } = this.props;

    return (
      <Search
        navigation={navigation}
      />
    )
  }
  
  renderTabs = () => {
    const { navigation } = this.props;

    return (
      <Block row style={styles.tabs}>
        <Button shadowless style={[styles.tab, styles.divider]} >
          <Block row middle>
            <Icon name="grid" family="feather" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Categories</Text>
          </Block>
        </Button>
        <Button shadowless style={styles.tab} >
          <Block row middle>
            <Icon size={16} name="camera-18" family="GalioExtra" style={{ paddingRight: 8 }} />
            <Text size={16} style={styles.tabTitle}>Best Deals</Text>
          </Block>
        </Button>
      </Block>
    )
  }

  renderProducts = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.products}>
        <Block flex>
          <Product product={products[0]} horizontal />
          <Product product={products[0]} horizontal />
          <Product product={products[0]} horizontal />
          <Product product={products[0]} horizontal />
          <Block flex row>
            <Product product={products[1]} style={{ marginRight: theme.SIZES.BASE }} />
            <Product product={products[2]} />
          </Block>
          <Product product={products[3]} horizontal />
          <Product product={products[4]} full />
        </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        {Object.values(users).map((user) => (
          <ChatBlock item={user} key={user.id} />
        ))}
      </SafeAreaView>
    );
  }
}