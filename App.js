import React, { useRef, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Alert, AppState } from 'react-native';
import { Video } from 'expo-av';

export default function App() {
  const video = useRef(null);
  const [timestamp, setTimestamp] = useState(new Date().toLocaleTimeString());
  const [screenshotAttempts, setScreenshotAttempts] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimestamp(new Date().toLocaleTimeString());
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  
  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (nextAppState === "inactive" || nextAppState === "background") {
        
        setScreenshotAttempts(prev => prev + 1);
        Alert.alert("⚠️ Screenshot Detected", "Screenshots are not allowed during playback.");
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'https://www.w3schools.com/html/mov_bbb.mp4',
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />
      <Text style={styles.watermark}>Likitha V | {timestamp}</Text>
      <Text style={styles.screenshotCount}>📸 Screenshots: {screenshotAttempts}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 300,
  },
  watermark: {
    position: 'absolute',
    top: 30,
    left: 20,
    fontSize: 16,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.4)',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  screenshotCount: {
    position: 'absolute',
    bottom: 40,
    color: 'white',
    fontSize: 14,
  },
});
