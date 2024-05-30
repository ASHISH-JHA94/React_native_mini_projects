import React from 'react';
import { FlatList, View, StyleSheet, Text, ScrollView } from 'react-native';

export default function FlatListComp() {
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

    return (
        // <FlatList
        //     data={data}
        //     renderItem={({ item }) => <Text style={styles.item}>{item.name}</Text>}
        //     keyExtractor={item => item.id}
        // />
        <View>
            <ScrollView>
            {data.map((item)=><Text style={styles.item} key={item.id}>{item.name}</Text>)}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'blue',
        fontSize: 20,
        borderColor: 'black',
        borderWidth: 2,
        margin: 2,
        color: '#8ff',
        textAlign: 'center',
        padding: 10,
    }
});
