import React from 'react';
import { View, Pressable, Text } from 'react-native';
import styles from '../StyledButton/styles';

const StyledButton = (props) => {

    // const type = props.type;
    // const content = props.content;
    // const onPress = props.onPress;
    //Ces 3 lignes sont égales à la lign ci-dessous
    const {type, content, onPress} = props;
  
    const backgroundColor = type === 'primary' ? '#171A20CC' : '#FFFFFFA6'; // 2 derniers chiffres /lettres pour la transparence

    const textColor = type === 'primary' ? '#FFFFFF' : '#171A20'; // ici pas beosin de transparence    

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, {backgroundColor: backgroundColor}]}
                onPress={() => onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;
