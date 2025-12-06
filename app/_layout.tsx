import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function RootLayout() {
  return (
    <>
      {/* Global Status Bar — stays visible and clean */}
      <StatusBar 
        style="dark"          // dark icons for light background
        backgroundColor="transparent" 
        translucent 
      />

      <Stack
        screenOptions={{
          headerShown: false,

          // Smooth transitions
          animation: 'fade_from_bottom',
          animationDuration: 280,

          // Light clean background
          contentStyle: {
            backgroundColor: '#ffffff', // <— simple white background
          },

          // Smooth gesture navigation
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
