import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

interface homeProps {
    
}

const Home: React.FunctionComponent<homeProps> = (props) => {
    return (
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
