import react from "react";
import { View, StyleSheet } from 'react-native';
import Title from "./Title";
import FlatCard from "./FlatCard";

const VerticalList = ({title, data}) => {
    return (
        <View>
            <Title>{title}</Title>
             <View style={styles.container}></View>
            {data.map(item => ( 
                <FlatCard item={item} key={item.id}/>
            ))}
        </View>
       
    );
};

const styles = StyleSheet.create({
    container:{
        marginVertical: 15,
    },
});

export default VerticalList;