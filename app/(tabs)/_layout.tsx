import { Tabs } from 'expo-router';
import { Upload, Sparkles } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

export default function TabLayout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('#ffffff'); // light nav bar
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, []);

  return (
    <>
      {/* Status Bar for light UI */}
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Tabs
        screenOptions={{
          headerShown: true,               // <-- SHOW HEADER
          headerTitleAlign: 'center',      // centered header
          headerShadowVisible: false,      // cleaner UI

          // Soft black title color (not pure black)
          headerTintColor: '#1f2937',      // charcoal gray
          headerStyle: {
            backgroundColor: '#ffffff',     // white header
          },

          animation: 'shift',

          // Light tab bar
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#ffffff',     // simple white
            height: Platform.OS === 'ios' ? 85 : 65,
            paddingBottom: Platform.OS === 'ios' ? 16 : 10,
            paddingTop: Platform.OS === 'ios' ? 10 : 6,

            borderTopWidth: 1,
            borderColor: '#e5e7eb',         // soft light gray border

            shadowOpacity: 0,               // minimalistic design
            elevation: 0,
          },

          tabBarActiveTintColor: '#1f2937', // charcoal gray
          tabBarInactiveTintColor: '#6b7280',

          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: '600',
          },

          tabBarItemStyle: {
            justifyContent: 'center',
            alignItems: 'center',
          },

          tabBarHideOnKeyboard: true,
        }}
      >

        {/* UPLOAD TAB */}
        <Tabs.Screen
          name="upload"
          options={{
            title: 'Upload Photo', // <-- header title
            tabBarLabel: 'Upload',
            tabBarIcon: ({ color, focused }) => (
              <Upload
                size={focused ? 27 : 24}
                color={color}
                strokeWidth={focused ? 2.6 : 2}
              />
            ),
          }}
        />

        {/* RESULTS TAB */}
        <Tabs.Screen
          name="results"
          options={{
            title: 'Your Results', // <-- header title
            tabBarLabel: 'Results',
            tabBarIcon: ({ color, focused }) => (
              <Sparkles
                size={focused ? 27 : 24}
                color={color}
                strokeWidth={focused ? 2.6 : 2}
              />
            ),
          }}
        />

      </Tabs>
    </>
  );
}
