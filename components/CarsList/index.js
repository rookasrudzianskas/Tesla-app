import React from 'react';
import {FlatList, Text, View} from "react-native";
import cars from "./cars";
import CarItem from "../CarItem";

const CarsList = () => {
    return (
        <View>
            <FlatList data={cars} renderItem={({item}) => <CarItem car={item}/> }  showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}/>
        </View>
    );
};

export default CarsList;
