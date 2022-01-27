import { View, Text } from 'react-native';
import React, { useState,useRef } from 'react';
import { Picker } from '@react-native-picker/picker';
import product from '../data/product';
import styles from '../assets/styles';

const PickerComp = () => {
  const [selectedOpt,setSelectedOpt] =useState(product.options?product.options[0]:null);
  return (
    <View>
        <Picker style={{backgroundColor:"#dedede",borderRadius:10}}  selectedValue={selectedOpt} onValueChange={(itemValue)=>setSelectedOpt(itemValue)} >
          {product.options.map((item,idx)=>
            <Picker.Item key={idx}  label={item} value={item} />
        )}
        </Picker>
      </View>
  );
};

export default PickerComp;
