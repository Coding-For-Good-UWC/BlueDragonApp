import React from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'

import { Video } from 'expo-av';
import * as Speech from 'expo-speech';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles'
import Loading from './Loading'

export default function TestVid({ route, navigation }) {
    return (
        <View>
                <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{ width: 300, height: 300 }}
                /> 
                <Pressable onPress={() => Speech.speak("Example Text")}>
        			<Text style={styles.title}>
        				Example Text
		        	</Text>
        		</Pressable>
        </View>
    );
}
