import { View, Text, Image } from 'react-native';
import React from 'react';
import styles from '../assets/styles';
import Icon from "react-native-vector-icons/FontAwesome"

interface ProductItemProps {
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

const ProductItem = ({ item }: ProductItemProps) => {
  return (
    <View style={[styles.root,styles.alignViaRow]}>
      <Image style={{ flex: 2, height: 150 }} resizeMode='contain' source={{ uri: item.image }} />
      <View style={styles.rightContainer}>
        <Text numberOfLines={3} style={styles.title}>{item.title}</Text>
        {/*stars */}
        <View style={styles.ratingsContainer}>
          {[0, 0, 0, 0, 0].map((el, i) => <Icon key={`${item.id}-${i}`} style={styles.star} name={i < Math.floor(item.avgRating) ? "star" : "star-o"} size={18} color="#e47911" />)}
          <Text style={{ marginLeft: 5 }}>{item.ratings}</Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: "center", flex: 1 }} >
          <Text style={styles.price}>from ₹{item.price}</Text>
          {item.oldPrice && <Text style={styles.oldPrice}>₹{item.oldPrice}</Text>}
        </View>
      </View>
    </View>
  );
};

export default ProductItem;
