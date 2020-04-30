import React,{useState} from 'react';
import { StyleSheet, Text, View, Image,Dimensions } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

import MyText from './MyText';

var deviceWidth = Dimensions.get('window').width;

const fetchFonts = () => {
    return Font.loadAsync({
    'NotoSansTC-Medium': require('../assets/fonts/NotoSansTC-Medium.otf'),
    });
   };

const MaskDetail =({mask,navigation}) => {
    const [dataLoaded,setDataLoaded] = useState(false);
    if(!dataLoaded){
        return(
            <AppLoading
                startAsync={fetchFonts}
                onFinish={()=>setDataLoaded(true)}    
            />
        );
    }
    return(
        <View style={styles.card}>
            <View style={{backgroundColor:mask.cardColor,
            borderRadius:20,borderWidth: 1,borderColor: '#fff',
            width:deviceWidth*0.8,height:185,padding:10}}>
                <View style={styles.firstLine}>
                    <Image
                    source={{uri: mask.profile}}
                    style={styles.profile}
                    />
                    <MyText style={styles.name}>{mask.name}</MyText>
                    <MyText style={styles.way}>{mask.way}購買</MyText>
                </View>
                <View  style={styles.between}>
                    <View>
                        <MyText style={styles.everyDay}>上次領取時間：{mask.lastDay}</MyText>
                        <MyText style={styles.everyDay}>預購時間：{mask.buyDay}</MyText>
                        <MyText style={styles.everyDay}>繳費時間：{mask.payDay}</MyText>
                        <MyText style={styles.everyDay}>領取時間：{mask.nextDay}</MyText>
                    </View>
                    <View style={{marginTop:10}}>
                        <MyText style={styles.daysLeft}>預購剩{mask.daysLeft1}天</MyText>
                        <MyText style={styles.daysLeft}>領取剩{mask.daysLeft2}天</MyText>
                    </View>
                </View>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    card:{
        alignItems: 'center',
        marginTop:15,
    },
    firstLine:{
        flexDirection:"row",
        justifyContent:"flex-start",
        marginBottom:15
    },
    profile:{
        width:40,
        height:40,
    },
    name:{
        fontSize:20,
        color:"#595959",
        marginLeft:10,
        lineHeight:40,
        fontFamily:"NotoSansTC-Medium"
    },
    way:{
        fontSize:16,
        color:"#595959",
        marginLeft:10,
        lineHeight:40,
        fontFamily:"NotoSansTC-Medium"
    },
    between:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        //borderWidth: 1,borderColor: '#000'
    },
    everyDay:{
        marginLeft:10,
        color:"#595959",
        lineHeight:25,
        fontFamily:"NotoSansTC-Medium",
        fontSize:14,
    },
    daysLeft:{
        color:"#9A4949",
        backgroundColor:"#fff",
        fontSize:20,
        paddingLeft:5,
        paddingRight:5,
        height:30,
        lineHeight:35,
        fontFamily:"NotoSansTC-Medium",
        marginRight:10,
        marginTop:10
    }
});

export default MaskDetail;