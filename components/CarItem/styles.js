import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({  
    carContainer: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    titles: {
        marginTop: '30%',
        alignItems: 'center',
        width: '100%',
    },
    title: {
        fontSize: 40,
        fontWeight: '500',
    },
    subtitles: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#5c5e62',
    },
    subtitleCTA: {
        fontSize: 16,
        fontWeight: '300',
        borderBottomColor: '#5c5e62',
        borderBottomWidth: 1,
        // textDecorationLine: 'underline',
        // textDecorationColor: 'black',
    },
    BgImage: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover', // prend tout l'espace y compris la statusBar
        position: 'absolute',
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%',
    },
});

export default styles;