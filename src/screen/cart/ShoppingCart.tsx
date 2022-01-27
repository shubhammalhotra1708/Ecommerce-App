import { View, Text ,FlatList,SafeAreaView} from 'react-native';
import React from 'react';
import styles from '../../assets/styles';

import products from "../../data/cart"
import CartProductItem from '../../components/CartProductItem';
import BigButton from '../../components/BigButton';

const ShoppingCartScreen = () => {
  const totalPrice=products.reduce(
    (summedPrice,product)=>
    summedPrice + product.item.price * product.quantity,
    0);
  return (
    <SafeAreaView style={[styles.page,{marginBottom:105}]}>
      <View >
        <Text style={styles.price}>
          Subtotal ({products.length} items):  
          <Text style={[styles.price,{color:'#e47911'}]}>  ₹{totalPrice.toFixed(2)}</Text> 
        </Text>
        <BigButton label={'Proceed to Checkout'} color={'#fff700'} />
      </View>

      <FlatList
        data={products}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        renderItem={({item})=>
          <CartProductItem cartItem={item} />
        }
      />
    </SafeAreaView>
  );
};

export default ShoppingCartScreen;
