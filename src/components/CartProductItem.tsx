import { View, Text, Image } from 'react-native';
import React, { useState } from 'react';
import styles from '../assets/styles';
import QuantitySelector from './QuantitySelector';
import Icon from "react-native-vector-icons/FontAwesome"

interface CartItemProps {
  cartItem:{
    id:string,
    quantity:number,
    option?:string,
    item: {
      id: string,
      title: string,
      image: string,
      avgRating: number,
      ratings: number,
      price: number,
      oldPrice?: number,
      }
  }
}

function CartProductItem({ cartItem }: CartItemProps) {
  const { quantity, item } = cartItem;
  const [qty,setQty]= useState(1);
  return (
    <View style={[styles.root]}>
      <View style={styles.alignViaRow}>
        <Image style={{ flex: 2, height: 150 }} resizeMode='contain' source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
          {/*stars */}
          <View style={styles.ratingsContainer}>
            {[0, 0, 0, 0, 0].map((el, i) => <Icon key={`${item.id}-${i}`} style={styles.star} name={i < Math.floor(item.avgRating) ? "star" : "star-o"} size={18} color="#e47911" />)}
            <Text style={{ marginLeft: 5 }}>{item.ratings}</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }}>
            <Text style={styles.price}>from ₹{item.price}</Text>
            {item.oldPrice && <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>}
          </View>
        </View>
      </View>
      <View style={styles.qtyRoot} >
        <QuantitySelector qty={qty} setQty={setQty} />
      </View>
    </View>
  );
}

export default CartProductItem;
