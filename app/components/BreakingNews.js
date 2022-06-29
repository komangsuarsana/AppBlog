import react from "react";
import { View, StyleSheet } from 'react-native';
import HorizotalList from "./HorizotalList";

const BreakingNews = ({ data }) => {
    return <HorizotalList title='Bali News' data={data} />;
};

const styles = StyleSheet.create({
    container:{}
});

export default BreakingNews;