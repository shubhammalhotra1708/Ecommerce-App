import { View, Text,TouchableOpacity } from 'react-native';
import React,{useState}from 'react';
import styles from '../assets/styles';

const QuantitySelector = ({qty,setQty}) => {

  return (
    <View style={styles.qtyCont}>

      <TouchableOpacity onPress={()=>{qty==0?setQty(0):setQty(qty-1)}} style={styles.qtyBox}>
        <Text style={{fontSize:24}}>-</Text>
      </TouchableOpacity>
      <Text style={styles.qtyText}>{qty}</Text>
      <TouchableOpacity onPress={()=>setQty(qty+1)} style={styles.qtyBox}>
        <Text style={{fontSize:22}}>+</Text>
      </TouchableOpacity>

    </View>
  );
};

export default QuantitySelector;
