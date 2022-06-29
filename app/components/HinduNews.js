import react from "react";
import { View, StyleSheet } from 'react-native';
import VerticalList from "./VerticalList";

const HinduNews = ({data}) => {
    return <VerticalList title="Hari Raya Nyepi News" data={data} />
};

export default HinduNews;