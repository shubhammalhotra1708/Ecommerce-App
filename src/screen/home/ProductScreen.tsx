import { FlatList, View } from 'react-native';
import React from 'react';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';
const ProductScreen = () => {
  return (
    <View>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
      />
    </View>
  );
};

export default ProductScreen;
