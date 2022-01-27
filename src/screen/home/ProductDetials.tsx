import {View, Text ,ScrollView} from 'react-native';
import React, { useState } from 'react';
import product from '../../data/product';
import styles from '../../assets/styles';
import PickerComp from '../../components/Picker';
import QuantitySelector from '../../components/QuantitySelector';
import BigButton from '../../components/BigButton';
import ImageCarousel from '../../components/ImageCarousel';

const ProductDetials = () => {
  const [qty,setQty]=useState(1);
  return (
      <ScrollView style={[styles.page]}>

          {/*text */}
          <Text style={styles.title}>{product.title}</Text>

          {/*image carousel */}
          <ImageCarousel images={product.images} />

          {/*picker */ }
          <PickerComp/>

          {/*details */}
          <Text style={[styles.price,{paddingHorizontal:10, marginTop:5}]}>₹ {product.price} </Text>
          <Text style={{padding:10,lineHeight:25}}>{product.description}</Text>

          {/*quantity */}
          <QuantitySelector qty={qty} setQty={setQty} />

          {/*buttons */}
          <BigButton label="Add To Cart" color="#fff700" />
          <BigButton label="Buy Now" color="#e47911" />

      </ScrollView>
  );
};

export default ProductDetials;
