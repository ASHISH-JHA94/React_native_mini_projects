import { StyleSheet, View ,Text} from "react-native";

export default function Grid(){
    const data = [
        { id: 1, name: "ayush jha" },
        { id: 2, name: "ashish jha" },
        { id: 3, name: "ayushi jha" },
        { id: 4, name: "sukuna jha" },
        { id: 5, name: "sutra jha" },
        { id: 6, name: "gojo jha" },
        { id: 7, name: "ayushi jha" },
        { id: 8, name: "sukuna jha" },
        { id: 9, name: "sutra jha" },
        { id: 10, name: "gojo jha" },
    ];
    return(
        <View style={{flex:1,flexDirection:"row",flexWrap:'wrap'}}>
            {data.map((item)=><Text style={styles.item} key={item.id}>{item.name}</Text>)}

        </View>
    )
}

const styles=StyleSheet.create({
    item:{
        width:80,
        height:80,
        textAlign:'center',
        textAlignVertical:'center',
        backgroundColor:'blue',
        color:'white',
        borderColor:'black',
        borderWidth:2,
        padding:10,
        margin:5
    }
})