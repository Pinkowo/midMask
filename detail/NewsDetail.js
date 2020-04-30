import React from 'react';
import { StyleSheet,View, ScrollView, TouchableOpacity,Image, Linking } from 'react-native';

const NewsDetail = ({news,navigation}) => {
    return(
        <View style={{flex:1,backgroundColor:"#fff"}}>
            <TouchableOpacity onPress={()=>Linking.openURL(news.link)}>
                <Image source={{uri: news.uri}} style={styles.news}/>
            </TouchableOpacity>
        </View>
    );
};
const styles = StyleSheet.create({
    news:{
        width:null,
        height:150,
        marginTop:15,
        marginLeft:20,
        marginRight:20
    }
});
export default NewsDetail;