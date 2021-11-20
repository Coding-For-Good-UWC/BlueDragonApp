import React, {useEffect, useState} from 'react'
import { Text, View, SafeAreaView, Pressable } from 'react-native'

import { Video, Audio } from 'expo-av';
import * as Speech from 'expo-speech';

import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles } from '../styles'
import Loading from './Loading'

export default function TestVid({ route, navigation }) {
  const [sound, setSound] = useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
       require('../static/audioTest.m4a')
    );
    setSound(sound);

    await sound.playAsync(); }

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync(); }
      : undefined;
  }, [sound]);

    return (
        <View>
		<Text style={{fontSize: 40, fontWeight: '700', marginTop: 75, alignSelf: 'center', textAlign: 'center'}}>
			Video and Audio
		</Text>
                <Video
                source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                style={[styles.video, {marginTop:30}]}
                /> 
                <Pressable onPress={() => {Speech.stop(); Speech.speak("Text-to-Speech")}}>
			<Text style={{fontSize: 40, fontWeight: '500', marginTop: 30, alignSelf: 'center', textAlign: 'center'}}>
				Text-to-Speech
			</Text>
        	</Pressable>
		<Pressable onPress={playSound}>
		        <Text style={{fontSize: 40, fontWeight: '500', marginTop: 30, alignSelf: 'center', textAlign: 'center'}}>
                                Audio File
                        </Text>
		</Pressable>
        </View>
    );
}
