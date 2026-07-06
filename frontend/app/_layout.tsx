import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function RootLayout() {
  return (
    <>
      <StatusBar 
        style="dark"
        backgroundColor="transparent" 
        translucent 
      />

      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade_from_bottom',
          animationDuration: 280,
          contentStyle: {
            backgroundColor: '#ffffff',
          },
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          fullScreenGestureEnabled: true,
        }}
      >
        <Stack.Screen 
          name="index" 
          options={{ 
            headerShown: false,
            animation: 'fade',
          }} 
        />

        <Stack.Screen 
          name="(tabs)" 
          options={{ 
            headerShown: false,
            animation: 'slide_from_right',
            animationDuration: 300,
          }} 
        />
      </Stack>
    </>
  );
}
