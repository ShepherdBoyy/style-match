import { Tabs } from 'expo-router';
import { Upload, Sparkles } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useEffect } from 'react';

export default function TabLayout() {
  useEffect(() => {
    if (Platform.OS === 'android') {
      NavigationBar.setBackgroundColorAsync('#ffffff');
      NavigationBar.setButtonStyleAsync('dark');
    }
  }, []);

  return (
    <>
      <StatusBar style="dark" backgroundColor="transparent" translucent />

      <Tabs
        screenOptions={{
          headerShown: true,
          headerTitleAlign: 'center',
          headerShadowVisible: false,
          headerTintColor: '#1f2937',
          headerStyle: {
            backgroundColor: '#ffffff',
          },
          animation: 'shift',
          tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#ffffff',
            height: Platform.OS === 'ios' ? 85 : 65,
            paddingBottom: Platform.OS === 'ios' ? 16 : 10,
            paddingTop: Platform.OS === 'ios' ? 10 : 6,
            borderTopWidth: 1,
            borderColor: '#e5e7eb',
            shadowOpacity: 0,
            elevation: 0,
          },
          tabBarActiveTintColor: '#1f2937',
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

        <Tabs.Screen
          name="upload"
          options={{
            title: 'Upload Photo',
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

        <Tabs.Screen
          name="results"
          options={{
            title: 'Your Results',
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
