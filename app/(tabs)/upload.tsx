// IMPROVED UPLOAD SCREEN WITH API INTEGRATION
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useImagePicker } from '@/hooks/useImagePicker';
import { useImageStore } from '@/store/imageStore';
import { useResultsStore } from '@/store/resultsStore';
import { useRouter } from 'expo-router';
import { Camera, ImageIcon, Upload as UploadIcon, Sparkles, AlertCircle } from 'lucide-react-native';
import React, { useState } from 'react';
import { ActivityIndicator, View, Pressable, Alert } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import { Easing } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';
import { detectHairstyle } from '@/services/api';

export default function UploadScreen() {
  const { pickImageFromGallery, takePhoto, isLoading } = useImagePicker();
  const { selectedImage, setSelectedImage } = useImageStore();
  const { setResults } = useResultsStore();
  const router = useRouter();
  const [imageLoading, setImageLoading] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGalleryPick = async () => {
    setError(null);
    const uri = await pickImageFromGallery();
    if (uri) {
      setImageLoading(true);
      setSelectedImage(uri);
    }
  };

  const handleTakePhoto = async () => {
    setError(null);
    const uri = await takePhoto();
    if (uri) {
      setImageLoading(true);
      setSelectedImage(uri);
    }
  };

  const handleAnalyze = async () => {
    if (!selectedImage) {
      Alert.alert('Error', 'Please select an image first');
      return;
    }

    console.log('🚀 Starting analysis...');
    console.log('📸 Image URI:', selectedImage);

    setProcessing(true);
    setError(null);

    try {
      console.log('📡 Calling API...');
      
      const response = await detectHairstyle(selectedImage);
      
      console.log('✅ API Response:', response);

      if (response.success) {
        console.log('✅ Detection successful!');
        console.log('📊 Detections:', response.detections);
        console.log('🎯 Primary:', response.primaryHairstyle);
        console.log('🖼️ Image:', response.image);
        console.log('💡 Recommendations:', response.recommendations);
        
        setResults(
          response.detections,
          response.primaryHairstyle,  
          response.primaryConfidence,
          response.image,             
          response.recommendations
        );

        setTimeout(() => {
          setProcessing(false);
          console.log('🔄 Navigating to results...');
          router.push('/(tabs)/results');
        }, 500);
      } else {
        throw new Error(response.error || 'Detection failed');
      }
    } catch (err) {
      console.error('❌ Analysis error:', err);
      setProcessing(false);
      const errorMessage = err instanceof Error ? err.message : 'Failed to analyze image';
      setError(errorMessage);
      
      Alert.alert(
        'Analysis Failed',
        errorMessage + '\n\nPlease check:\n• Flask server is running\n• Correct API URL\n• Network connection',
        [{ text: 'OK' }]
      );
    }
  };

  return (
    <View className="flex-1 px-6 pb-8 bg-white">
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 450 }}
        className="items-center justify-center gap-6"
      >
        {selectedImage ? (
          <MotiView
            key="image-preview"
            from={{ opacity: 0, translateY: 30, scale: 0.96 }}
            animate={{ opacity: 1, translateY: 0, scale: 1 }}
            transition={{ type: 'timing', duration: 450 }}
            className="items-center w-full gap-4"
          >
            <MotiView
              from={{ translateY: -4 }}
              animate={{ translateY: 6 }}
              transition={{
                loop: true,
                repeatReverse: true,
                duration: 2200,
                type: 'timing',
                easing: Easing.inOut(Easing.sin),
              }}
              className="relative w-full aspect-[3/4] max-h-96 rounded-2xl overflow-hidden border border-gray-200 shadow-md bg-white"
            >
              {imageLoading && (
                <MotiView
                  from={{ translateX: -400 }}
                  animate={{ translateX: 400 }}
                  transition={{ loop: true, duration: 1600, easing: Easing.linear }}
                  className="absolute inset-0 z-10"
                >
                  <LinearGradient
                    colors={['transparent', 'rgba(255,255,255,0.5)', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    className="w-full h-full"
                  />
                </MotiView>
              )}

              <MotiImage
                source={{ uri: selectedImage }}
                style={{ width: '100%', height: '100%' }}
                resizeMode="cover"
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 400 }}
                onLoadEnd={() => setImageLoading(false)}
              />
            </MotiView>

            <Button
              onPress={() => {
                setSelectedImage(null);
                setError(null);
              }}
              variant="outline"
              size="sm"
              className="border border-gray-300"
            >
              <Text className="text-gray-700">Remove Image</Text>
            </Button>
          </MotiView>
        ) : (
          <MotiView
            key="upload-empty"
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 450 }}
            className="items-center w-full gap-5 mt-11"
          >
            <MotiView
              from={{ translateY: -4 }}
              animate={{ translateY: 6 }}
              transition={{
                loop: true,
                repeatReverse: true,
                type: 'timing',
                duration: 2000,
              }}
              className="relative items-center justify-center w-32 h-32 bg-gray-100 rounded-full shadow-md"
            >
              <Icon as={UploadIcon} className="text-gray-700 size-16" />
            </MotiView>

            <View className="items-center gap-2">
              <Text className="text-2xl font-bold text-gray-900">Upload Your Photo</Text>
              <Text className="px-12 text-center text-gray-600">
                Upload a clear photo to get personalized hairstyle recommendations.
              </Text>
            </View>
          </MotiView>
        )}

        {error && !processing && (
          <MotiView
            from={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 300 }}
            className="w-full p-4 border border-red-200 bg-red-50 rounded-xl"
          >
            <View className="flex-row items-start gap-3">
              <Icon as={AlertCircle} className="text-red-600 size-5 mt-0.5" />
              <View className="flex-1">
                <Text className="mb-1 text-sm font-semibold text-red-900">
                  Analysis Failed
                </Text>
                <Text className="text-xs text-red-700">
                  {error}
                </Text>
              </View>
            </View>
          </MotiView>
        )}

        {processing && (
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 300 }}
            className="items-center gap-3 p-6 bg-white border border-gray-200 shadow-sm rounded-2xl"
          >
            <MotiView
              from={{ rotate: '0deg' }}
              animate={{ rotate: '360deg' }}
              transition={{ duration: 1500, loop: true }}
            >
              <Icon as={Sparkles} className="text-gray-700 size-12" />
            </MotiView>

            <Text className="text-lg font-semibold text-gray-900">
              Analyzing...
            </Text>

            <ActivityIndicator size="small" color="#6b7280" />
          </MotiView>
        )}

        {!processing && (
          <MotiView
            from={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 250 }}
            className="w-full gap-3 px-2"
          >
            {isLoading ? (
              <ActivityIndicator size="large" color="#6b7280" />
            ) : !selectedImage ? (
              <>
                <AnimatedButton onPress={handleTakePhoto}>
                  <View className="flex-row items-center justify-center w-full px-6 py-4 bg-gray-900 rounded-xl">
                    <Icon size={20} as={Camera} className="mr-2 text-white" />
                    <Text className="font-semibold text-white">Open Camera</Text>
                  </View>
                </AnimatedButton>

                <AnimatedButton onPress={handleGalleryPick}>
                  <View className="flex-row items-center justify-center w-full px-6 py-4 bg-gray-100 border border-gray-300 rounded-xl">
                    <Icon size={20} as={ImageIcon} className="mr-2 text-gray-700" />
                    <Text className="font-semibold text-gray-800">Choose from Gallery</Text>
                  </View>
                </AnimatedButton>
              </>
            ) : (
              <AnimatedButton onPress={handleAnalyze}>
                <View className="flex-row items-center justify-center w-full px-6 py-4 bg-gray-900 rounded-xl">
                  <Icon size={20} as={Sparkles} className="mr-2 text-white" />
                  <Text className="font-semibold text-white">Analyze Style</Text>
                </View>
              </AnimatedButton>
            )}
          </MotiView>
        )}

        <MotiView
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 300, delay: 100 }}
          className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50"
        >
          <Text className="text-sm text-center text-gray-600">
            PNG, JPG or JPEG (max. 10MB){'\n'}
            For best results, use a clear front-facing photo.
          </Text>
        </MotiView>
      </MotiView>
    </View>
  );
}

function AnimatedButton({ children, onPress }: { children: React.ReactNode; onPress: () => void }) {
  return (
    <MotiView
      from={{ scale: 1 }}
      animate={{ scale: 1 }}
      whileTap={{ scale: 0.94 }}
      transition={{ duration: 90 }}
      className="w-full"
    >
      <Pressable onPress={onPress} className="w-full">
        {children}
      </Pressable>
    </MotiView>
  );
}