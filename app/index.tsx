import { useEffect } from 'react';
import { useRouter } from 'expo-router';
import { View, ActivityIndicator } from 'react-native';
import 'react-native-reanimated';

export default function Index() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/(tabs)/upload');
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="items-center justify-center flex-1 bg-white">
      <ActivityIndicator size="large" color="#64748b" />
    </View>
  );
}
