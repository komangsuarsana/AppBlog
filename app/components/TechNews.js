import react from "react";
import { View, StyleSheet } from 'react-native';
import HorizotalList from "./HorizotalList";

const TechNews = ({ data }) => {
    return <HorizotalList title='Hari Raya Galungan' data={data} />;
};

const styles = StyleSheet.create({
    container: {},
});

export default TechNews;