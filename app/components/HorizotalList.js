import React from "react";
import { View, StyleSheet, FlatList } from 'react-native'
import Title from "./Title";
import SmallCard from "./SmallCard";

const HorizotalList = ({title, data}) => {
    return (
        <>
            <View style={styles.listStyle}>
            <Title size={20}>{title}</Title>
            <FlatList
                data={data}
                keyExtractor={item => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => <SmallCard item={item} />}
            />
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    listStyle:{
        marginVertical: 10,
    },
});

export default HorizotalList;
