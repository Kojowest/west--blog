import * as React from 'react';
import { View, Text, SafeAreaView, FlatList, StyleSheet } from 'react-native';


const DATA =[
    {
        id : 1,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 2,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 3,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 4,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 5,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 6,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 7,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 8,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },
    {
        id : 9,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 10,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 11,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 12,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 13,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 14,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },

    {
        id : 15,
        title : "ODC LUNCHING",
        description: "lorem ipsum come on  lorm ipsum",
    },



];

const Item = ({ title, description }) =>(
    <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>description</Text>



    </View>
);




export default function DetailsScreen ({ navigation }) {

    const renderItem= ({item}) =>(
        <Item title ={item.title} description={item.description}/>
    );
    return (
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item=> item.id}  
            />
            
            
               </SafeAreaView>

   
    );

}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#fff',
        marginTop:10,

    },
    item:{
        backgroundColor:'#f9C2ff',
        padding:10,
        marginVertical:8,
        marginHorizontal:16,
        borderRadius:15,

    },
    title:{
        fontSize:20,
    },
    
    description:{
        fontSize:10,
    },

})
