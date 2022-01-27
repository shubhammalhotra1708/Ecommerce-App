import { StyleSheet, Dimensions } from 'react-native';
const WIDTH = Dimensions.get('window').width;

const colors = {
  purple: '#291D62',
  san_marino: '#5070AF',
  chambray: '#315181',
  ming: '#366782',
  neon_carrot: '#FF9644',
  mantis: '#8DD070',
  science_blue: '#0068C9',
  white: '#fff',
  primary_background: '#5167B6',
  black: '#000',
  white_smoke: '#F5F5F5',
  light_blue: '#B9E5FF',
  dark_blue: '#291D62',
  grey: '#757575',
  primary_blue: '#5B42CF',
};

export default StyleSheet.create({
  // global_colors
  main_background: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },

  // colored backgrounds
  darkBlueBackground: {
    backgroundColor: colors.dark_blue,
  },

  background_lightBlue: {
    backgroundColor: colors.light_blue,
  },

  background_white: {
    backgroundColor: colors.white,
  },
  // colors_to_be_used
  whiteText: { color: colors.white },
  greenText: { color: colors.mantis },
  darkBlue: { color: colors.dark_blue },
  lightBlue: { color: colors.light_blue },
  primaryBlue: { color: colors.primary_blue },
  grey: { color: colors.grey },
  black: { color: colors.black },

    // positions

  absolute: {
    position: 'absolute',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  alignItemsRight: {
    alignItems: 'flex-end',
  },
  alignViaColumn: {
    flexDirection: 'column',
  },
  alignViaRow: {
    flexDirection: 'row',
  },
  alignViewCenter: {
    justifyContent: 'center',
  },
  alignViewSplit: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  justifyBetween: {
    justifyContent: 'space-between',
  },
  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },  

  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "#d1d1d1",
    margin: 5,
  },
  rightContainer: {
    marginHorizontal: 10,
    flex: 3,
    padding: 3,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice: {
    marginLeft: 3,
    fontSize: 12,
    textDecorationLine: "line-through",
  },
  ratingsContainer: {
    flexDirection: 'row',
    marginTop: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    paddingTop: 3
  },
  star: {
    marginHorizontal: 1,
  },
  page: {
    padding: 13,
    paddingBottom:40,
    backgroundColor:"#fff"
  },
  qtyCont: {
    flexDirection:"row",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "#fff",
    borderColor: "#d1d1d1",
    marginVertical: 5,
    alignItems:"center",
    justifyContent:"flex-start",
    width:113
  },
  qtyBox: {
    backgroundColor:"#dedede",
    paddingVertical:5,
    paddingHorizontal:15,
  },
  qtyText: {
    fontSize:20,
    color:"#48a3c6",
    paddingHorizontal:10,
  },
  bigButton: {
    backgroundColor:"#e47911",
    alignItems:"center",
    justifyContent:"center",
    padding:10,
    borderWidth:1,
    borderRadius:10,
    marginVertical:5,
  },
  imageCar: {
    height:250,
    marginVertical:10,
    alignItems:'center',
    justifyContent:'center',
  },
  dot: {
    height:10,
    width:10,
    borderWidth:1,
    borderRadius:10,
    marginHorizontal:8,
  },
  dots: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center',
    flex:1,
    margin:10,
  },

})
