import { View, FlatList, Image } from 'react-native';
import React, { useCallback, useState,useRef } from 'react';
import { useWindowDimensions,LogBox} from 'react-native';
import styles from '../assets/styles';

const ImageCarousel = ({images}) => {
  //hide warning
  LogBox.ignoreAllLogs();
  const [activeImage,setActiveImage]=useState(0);
  const window=useWindowDimensions();
  const onFlatlistUpdate=useCallback(({viewableItems})=>{
    console.log("view item: ",viewableItems);
    if(viewableItems.length>0){
      setActiveImage(viewableItems[0].index||0);
    }
  },[]);
  // const onViewRef=useRef(({viewableItems}: any)=>{
  //   console.log("view item: ",viewableItems);
  //   if(viewableItems.length>0){
  //     setActiveImage(viewableItems[0].index||0);
  //   }
  // })
  // const viewConfigRef=useRef({viewAreaCoveragePercentThreshold:50});
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({item})=>
          <Image style={[styles.imageCar,{width:window.width-40}]} resizeMode='contain' source={{uri:item}} />
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment={'center'}
        snapToInterval={window.width-20}
        decelerationRate={'fast'}
        viewabilityConfig={{viewAreaCoveragePercentThreshold:50}}
        onViewableItemsChanged={onFlatlistUpdate}
      />
      <View style={styles.dots}>
        {images.map((img: any,idx: number)=>(
          <View style={[styles.dot,{backgroundColor:idx==activeImage?'#c9c9c9':'#ededed'}]} />
          ))}
      </View>
    </View>
  );
};

export default ImageCarousel;
