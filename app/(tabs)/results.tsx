// app/(tabs)/results.tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useImageStore } from '@/store/imageStore';
import { useResultsStore } from '@/store/resultsStore';
import { useRouter } from 'expo-router';
import { RefreshCw, Sparkles, Upload, CheckCircle, AlertCircle, Palette, Scissors, User, Heart, Sun } from 'lucide-react-native';
import React, { useMemo } from 'react';
import { ScrollView, View } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { recommendedData } from './recommendationsData';

export default function ResultsScreen() {
  const { reset: resetImage } = useImageStore();
  const { 
    detections, 
    primaryHairstyle, 
    primaryConfidence, 
    analyzedImage,
    clearResults 
  } = useResultsStore();
  const router = useRouter();

  // Parse the detected attributes (e.g., "female_heart_dark" -> sex, face shape, skin tone)
  const parsedAttributes = useMemo(() => {
    if (!primaryHairstyle) return null;

    const parts = primaryHairstyle.split('_');
    
    if (parts.length >= 3) {
      return {
        sex: parts[0].charAt(0).toUpperCase() + parts[0].slice(1), // Capitalize first letter
        faceShape: parts[1].charAt(0).toUpperCase() + parts[1].slice(1),
        skinTone: parts[2].charAt(0).toUpperCase() + parts[2].slice(1),
      };
    }
    
    return null;
  }, [primaryHairstyle]);

  // Find matching recommendations based on primary hairstyle
  const matchedRecommendations = useMemo(() => {
    if (!primaryHairstyle) return null;
    
    const match = recommendedData.find(
      data => data.attributes.toLowerCase() === primaryHairstyle.toLowerCase()
    );
    
    return match?.recommendations || null;
  }, [primaryHairstyle]);

  const handleNewAnalysis = () => {
    resetImage();
    clearResults();
    router.push('/(tabs)/upload');
  };

  // When no image is analyzed
  if (!analyzedImage) {
    return (
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />

        <View className="items-center justify-center gap-6 p-6 bg-white mt-28">
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 450 }}
            className="items-center justify-center bg-gray-100 border border-gray-300 rounded-full w-28 h-28"
          >
            <Icon as={Sparkles} className="text-gray-700 size-14" />
          </MotiView>

          <View className="items-center gap-2">
            <Text className="text-xl font-semibold text-gray-900">No Results Yet</Text>
            <Text className="px-8 text-center text-gray-500">
              Upload a photo to get AI-powered hairstyle detection results.
            </Text>
          </View>

          <Button 
            onPress={() => router.push('/(tabs)/upload')} 
            className="flex-row items-center bg-black"
          >
            <Icon as={Upload} size={18} className="mr-2 text-white" />
            <Text className="text-white">Upload Photo</Text>
          </Button>
        </View>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}
      >
        <View className="gap-5">
          {/* ANALYZED IMAGE - SMALLER SIZE */}
          <MotiView
            from={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 500 }}
            className="items-center gap-2"
          >
            <Text className="self-start text-base font-semibold text-gray-900">Your Photo</Text>

            <View className="w-40 overflow-hidden bg-gray-100 border border-gray-300 shadow-sm h-52 rounded-xl">
              <MotiImage
                source={{ uri: analyzedImage }}
                className="w-full h-full"
                resizeMode="cover"
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 400 }}
              />
            </View>
          </MotiView>

          {/* DETECTED PROFILE WITH BREAKDOWN */}
          {primaryHairstyle && parsedAttributes ? (
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 500, delay: 200 }}
              className="overflow-hidden rounded-2xl"
            >
              <LinearGradient
                colors={['#111827', '#1f2937']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
                className="p-5"
              >
                {/* Header */}
                <View className="flex-row items-center mb-4">
                  <Icon as={CheckCircle} className="mr-2 text-green-400" size={22} />
                  <Text className="text-lg font-semibold text-white">
                    Detected Profile
                  </Text>
                </View>

                {/* Profile Attributes */}
                <View className="gap-3 mb-4">
                  {/* Sex */}
                  <View className="flex-row items-center justify-between p-3 rounded-lg bg-white/10">
                    <View className="flex-row items-center gap-2">
                      <Icon as={User} className="text-blue-400" size={18} />
                      <Text className="text-sm font-medium text-gray-300">Sex</Text>
                    </View>
                    <Text className="text-base font-bold text-white">
                      {parsedAttributes.sex}
                    </Text>
                  </View>

                  {/* Face Shape */}
                  <View className="flex-row items-center justify-between p-3 rounded-lg bg-white/10">
                    <View className="flex-row items-center gap-2">
                      <Icon as={Heart} className="text-pink-400" size={18} />
                      <Text className="text-sm font-medium text-gray-300">Face Shape</Text>
                    </View>
                    <Text className="text-base font-bold text-white">
                      {parsedAttributes.faceShape}
                    </Text>
                  </View>

                  {/* Skin Tone */}
                  <View className="flex-row items-center justify-between p-3 rounded-lg bg-white/10">
                    <View className="flex-row items-center gap-2">
                      <Icon as={Sun} className="text-yellow-400" size={18} />
                      <Text className="text-sm font-medium text-gray-300">Skin Tone</Text>
                    </View>
                    <Text className="text-base font-bold text-white">
                      {parsedAttributes.skinTone}
                    </Text>
                  </View>
                </View>

                {/* Confidence */}
                <View className="pt-3 mt-3 border-t border-white/20">
                  <View className="flex-row items-center justify-between mb-2">
                    <Text className="text-xs text-gray-300">
                      Detection Confidence
                    </Text>
                    <Text className="text-sm font-bold text-white">
                      {(primaryConfidence * 100).toFixed(1)}%
                    </Text>
                  </View>

                  {/* Confidence Bar */}
                  <View className="h-2 overflow-hidden rounded-full bg-white/20">
                    <MotiView
                      from={{ width: '0%' }}
                      animate={{ width: `${primaryConfidence * 100}%` }}
                      transition={{ type: 'timing', duration: 1000, delay: 400 }}
                      className="h-full bg-green-400 rounded-full"
                    />
                  </View>
                </View>
              </LinearGradient>
            </MotiView>
          ) : (
            // NO DETECTION FOUND
            <MotiView
              from={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 400, delay: 200 }}
              className="p-5 border bg-amber-50 border-amber-200 rounded-2xl"
            >
              <View className="flex-row items-start gap-3">
                <Icon as={AlertCircle} className="mt-1 text-amber-600" size={22} />
                <View className="flex-1">
                  <Text className="mb-2 text-base font-semibold text-amber-900">
                    No Profile Detected
                  </Text>
                  <Text className="text-sm leading-5 text-amber-700">
                    We couldn't identify your profile. Try using a clearer photo with visible features, good lighting, and a front-facing angle.
                  </Text>
                </View>
              </View>
            </MotiView>
          )}

          {/* RECOMMENDATIONS SECTION */}
          {matchedRecommendations && matchedRecommendations.length > 0 && (
            <MotiView
              from={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 600, delay: 400 }}
              className="gap-4"
            >
              {/* Section Header */}
              <View className="flex-row items-center gap-2 pb-2 mt-2 border-b-2 border-gray-200">
                <Icon as={Sparkles} className="text-purple-600" size={22} />
                <Text className="text-xl font-bold text-gray-900">
                  Recommended for You
                </Text>
              </View>

              <Text className="text-xs text-gray-600">
                Based on your profile, here are personalized hairstyle and color recommendations:
              </Text>

              {/* Recommendation Cards */}
              {matchedRecommendations.map((recommendation, index) => (
                <MotiView
                  key={recommendation.id}
                  from={{ opacity: 0, translateX: -30 }}
                  animate={{ opacity: 1, translateX: 0 }}
                  transition={{ 
                    type: 'timing',
                    duration: 500, 
                    delay: 500 + index * 150 
                  }}
                  className="overflow-hidden border border-gray-200 rounded-xl bg-gradient-to-br"
                >
                  {/* Card Header */}
                  <View className="flex-row items-center justify-between px-4 py-3 bg-gray-900">
                    <Text className="text-base font-bold text-white">
                      Option {recommendation.id}
                    </Text>
                    {index === 0 && (
                      <View className="flex-row items-center gap-1 px-2 py-1 bg-yellow-400 rounded-full">
                        <Text className="text-xs font-bold text-gray-900">⭐ Top Pick</Text>
                      </View>
                    )}
                  </View>

                  {/* Card Content */}
                  <View className="p-4 bg-white">
                    {/* Hairstyle */}
                    <View className="pb-3 mb-3 border-b border-gray-200">
                      <View className="flex-row items-center gap-2 mb-1.5">
                        <Icon as={Scissors} className="text-blue-600" size={18} />
                        <Text className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                          Hairstyle
                        </Text>
                      </View>
                      <Text className="text-sm leading-5 text-gray-900">
                        {recommendation.hairStyle}
                      </Text>
                    </View>

                    {/* Hair Color */}
                    <View>
                      <View className="flex-row items-center gap-2 mb-1.5">
                        <Icon as={Palette} className="text-pink-600" size={18} />
                        <Text className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                          Hair Color
                        </Text>
                      </View>
                      <Text className="text-sm leading-5 text-gray-900">
                        {recommendation.hairColor}
                      </Text>
                    </View>
                  </View>
                </MotiView>
              ))}
            </MotiView>
          )}

          {/* NO RECOMMENDATIONS AVAILABLE */}
          {primaryHairstyle && !matchedRecommendations && (
            <MotiView
              from={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 400, delay: 400 }}
              className="p-4 border border-gray-200 bg-gray-50 rounded-xl"
            >
              <View className="flex-row items-start gap-3">
                <Icon as={AlertCircle} className="mt-1 text-gray-600" size={20} />
                <View className="flex-1">
                  <Text className="mb-1 text-sm font-semibold text-gray-900">
                    Recommendations Not Available
                  </Text>
                  <Text className="text-xs leading-5 text-gray-600">
                    We detected your profile as "{primaryHairstyle.replace(/_/g, ' ')}" but don't have specific recommendations yet.
                  </Text>
                </View>
              </View>
            </MotiView>
          )}

          {/* ALL DETECTIONS (Collapsed) */}
          {detections.length > 1 && (
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 500, delay: 800 }}
              className="gap-2"
            >
              <Text className="text-base font-semibold text-gray-900">
                Other Detected Profiles ({detections.length - 1})
              </Text>

              {detections.slice(1).map((detection, index) => (
                <View
                  key={index}
                  className="flex-row items-center justify-between px-3 py-2 border border-gray-200 rounded-lg bg-gray-50"
                >
                  <Text className="flex-1 text-xs font-medium text-gray-700 capitalize">
                    {detection.class.replace(/_/g, ' ')}
                  </Text>
                  <View className="bg-gray-700 px-2 py-0.5 rounded-full">
                    <Text className="text-xs font-semibold text-white">
                      {(detection.confidence * 100).toFixed(1)}%
                    </Text>
                  </View>
                </View>
              ))}
            </MotiView>
          )}

          {/* ACTION BUTTONS */}
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 450, delay: 900 }}
            className="w-full gap-3 mt-4"
          >
            <Button
              onPress={handleNewAnalysis}
              className="flex-row items-center justify-center w-full bg-gray-900"
            >
              <Icon as={Upload} className="mr-2 text-white" size={18} />
              <Text className="font-semibold text-white">Analyze Another Photo</Text>
            </Button>

            <Button
              onPress={() => router.push('/(tabs)/upload')}
              variant="outline"
              className="flex-row items-center justify-center w-full bg-white border-gray-300"
            >
              <Icon as={RefreshCw} className="mr-2 text-gray-700" size={18} />
              <Text className="font-semibold text-gray-900">Back to Upload</Text>
            </Button>
          </MotiView>
        </View>
      </ScrollView>
    </View>
  );
}