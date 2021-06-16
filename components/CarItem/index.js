import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import styles from './styles';
import StyledButton from '../StyledButton';

const CarItem = (props) => {

    const{name, tagline, taglineCTA, image} = props.car;

    return (
        <View style={styles.carContainer}>
            <ImageBackground 
                source= {image}
                style={styles.BgImage}
            />
            <View style={styles.titles}>
                <Text style={styles.title}>{name}</Text>
                <View style={styles.subtitles}>
                    <Text style={styles.subtitle}>{tagline} {' '}</Text> 
                    <Text 
                        style={styles.subtitleCTA} 
                        // onPress={}
                    >
                        {taglineCTA}
                    </Text>
                </View>
                </View>
            <View style={styles.buttonContainer}>
                <StyledButton 
                    type='primary' 
                    content={'Custom order'} 
                    // onPress={() =>} 
                />
                <StyledButton 
                    type='secondary' 
                    content={'Existing inventory'} 
                    // onPress={() =>} 
                />
            </View>
            
        </View>
    );
};

export default CarItem;

