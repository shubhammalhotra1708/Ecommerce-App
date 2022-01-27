import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import styles from '../assets/styles';

const BigButton = ({label,color}) => {
  return (
      <TouchableOpacity style={[styles.bigButton,{backgroundColor:color}]}>
        <Text style={{fontSize:16}}>{label}</Text>
      </TouchableOpacity>
      
  );
};

export default BigButton;
