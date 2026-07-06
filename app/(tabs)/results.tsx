// app/(tabs)/results.tsx
import { Button } from '@/components/ui/button';
import { Icon } from '@/components/ui/icon';
import { Text } from '@/components/ui/text';
import { useImageStore } from '@/store/imageStore';
import { useResultsStore } from '@/store/resultsStore';
import { useRouter } from 'expo-router';
import {
  RefreshCw,
  Sparkles,
  Upload,
  CheckCircle,
  AlertCircle,
  Palette,
  Scissors,
  User,
  Heart,
  Sun,
} from 'lucide-react-native';
import React, { useMemo, useEffect } from 'react';
import { ScrollView, View, Image } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';

const API_BASE_URL = 'http://192.168.1.6:5000';

export default function ResultsScreen() {
  const { reset: resetImage } = useImageStore();
  const { 
    detections, 
    primaryHairstyle, 
    primaryConfidence, 
    analyzedImage, 
    recommendations,
    clearResults 
  } = useResultsStore();
  const router = useRouter();

  // Debug logs
  useEffect(() => {
    console.log('🔍 Results Screen Mounted');
    console.log('📊 State:', {
      analyzedImage: analyzedImage ? 'Present' : 'Missing',
      primaryHairstyle,
      primaryConfidence,
      detectionsCount: detections.length,
      recommendationsCount: recommendations.length,
    });
  }, [analyzedImage, primaryHairstyle, primaryConfidence, detections, recommendations]);

  const parsedAttributes = useMemo(() => {
    console.log('🔄 Parsing primaryHairstyle:', primaryHairstyle);

    if (!primaryHairstyle) {
      console.log('❌ No primaryHairstyle');
      return null;
    }

    const cleanedHairstyle = primaryHairstyle.trim().toLowerCase();
    const parts = cleanedHairstyle.split('_');

    console.log('📊 Split parts:', parts);

    if (parts.length >= 3) {
      const result = {
        sex: parts[0].charAt(0).toUpperCase() + parts[0].slice(1),
        faceShape: parts[1].charAt(0).toUpperCase() + parts[1].slice(1),
        skinTone: parts[2].charAt(0).toUpperCase() + parts[2].slice(1),
      };
      console.log('✅ Parsed attributes:', result);
      return result;
    }

    console.log('❌ Invalid format - expected 3 parts, got:', parts.length);
    return null;
  }, [primaryHairstyle]);

  const handleNewAnalysis = () => {
    console.log('🔄 Starting new analysis');
    resetImage();
    clearResults();
    router.push('/(tabs)/upload');
  };

  if (!analyzedImage) {
    console.log('⚠️ No analyzed image - showing empty state');
    return (
      <View className="flex-1 bg-white">
        <StatusBar style="dark" />

        <View className="items-center justify-center gap-6 p-6 bg-white mt-28">
          <MotiView
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'timing', duration: 450 }}
            className="items-center justify-center bg-gray-100 border border-gray-300 rounded-full h-28 w-28">
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
            className="flex-row items-center bg-black">
            <Icon as={Upload} size={18} className="mr-2 text-white" />
            <Text className="text-white">Upload Photo</Text>
          </Button>
        </View>
      </View>
    );
  }

  console.log('✅ Rendering results with image');

  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" />

      <ScrollView
        className="flex-1"
        contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, paddingBottom: 120 }}
        showsVerticalScrollIndicator={false}>
        <View className="gap-5">
          <MotiView
            from={{ opacity: 0, translateY: -10 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 400 }}
            className="items-center gap-1">
            <Text className="text-2xl font-bold text-gray-900">Analysis Complete</Text>
            <Text className="text-sm text-center text-gray-500">
              Your personalized profile & recommendations
            </Text>
          </MotiView>

          <MotiView
            from={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 500 }}
            className="items-center gap-2">
            <Text className="self-start text-base font-semibold text-gray-900">Your Photo</Text>

            <View className="w-40 overflow-hidden bg-gray-100 border border-gray-300 shadow-sm h-52 rounded-xl">
              <MotiImage
                source={{ uri: `${API_BASE_URL}${analyzedImage}` }}
                className="w-full h-full"
                resizeMode="cover"
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 400 }}
              />
            </View>
          </MotiView>

          {primaryHairstyle ? (
            parsedAttributes ? (
              <MotiView
                from={{ opacity: 0, translateY: 20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 500, delay: 200 }}
                className="overflow-hidden rounded-2xl">
                <LinearGradient
                  colors={['#111827', '#1f2937']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  className="p-5">
                  <View className="flex-row items-center mb-4">
                    <Icon as={CheckCircle} className="mr-2 text-green-400" size={22} />
                    <Text className="text-lg font-semibold text-white">Detected Profile</Text>
                  </View>

                  <View className="gap-3 mb-4">
                    <View className="flex-row items-center justify-between p-3 rounded-lg bg-white/10">
                      <View className="flex-row items-center gap-2">
                        <Icon as={User} className="text-gray-400" size={18} />
                        <Text className="text-sm font-medium text-gray-300">Sex</Text>
                      </View>
                      <Text className="text-base font-bold text-white">{parsedAttributes.sex}</Text>
                    </View>

                    <View className="flex-row items-center justify-between p-3 rounded-lg bg-white/10">
                      <View className="flex-row items-center gap-2">
                        <Icon as={Heart} className="text-pink-400" size={18} />
                        <Text className="text-sm font-medium text-gray-300">Face Shape</Text>
                      </View>
                      <Text className="text-base font-bold text-white">
                        {parsedAttributes.faceShape}
                      </Text>
                    </View>

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

                  <View className="pt-3 mt-3 border-t border-white/20">
                    <View className="flex-row items-center justify-between mb-2">
                      <Text className="text-xs text-gray-300">Detection Confidence</Text>
                      <Text className="text-sm font-bold text-white">
                        {(primaryConfidence * 100).toFixed(1)}%
                      </Text>
                    </View>

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
              <MotiView
                from={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 400, delay: 200 }}
                className="p-5 border rounded-2xl border-amber-200 bg-amber-50">
                <View className="flex-row items-start gap-3">
                  <Icon as={AlertCircle} className="mt-1 text-amber-600" size={22} />
                  <View className="flex-1">
                    <Text className="mb-2 text-base font-semibold text-amber-900">
                      Unexpected Profile Format
                    </Text>
                    <Text className="text-sm leading-5 text-amber-700">
                      Detected: "{primaryHairstyle}". Expected format: sex_faceshape_skintone (e.g.,
                      "male_heart_dark")
                    </Text>
                  </View>
                </View>
              </MotiView>
            )
          ) : (
            <MotiView
              from={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 400, delay: 200 }}
              className="p-5 border rounded-2xl border-amber-200 bg-amber-50">
              <View className="flex-row items-start gap-3">
                <Icon as={AlertCircle} className="mt-1 text-amber-600" size={22} />
                <View className="flex-1">
                  <Text className="mb-2 text-base font-semibold text-amber-900">
                    No Profile Detected
                  </Text>
                  <Text className="text-sm leading-5 text-amber-700">
                    We couldn't identify your profile. Try using a clearer photo with visible
                    features, good lighting, and a front-facing angle.
                  </Text>
                </View>
              </View>
            </MotiView>
          )}

          {recommendations && recommendations.length > 0 && (
            <MotiView
              from={{ opacity: 0, translateY: 30 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 600, delay: 400 }}
              className="gap-4">
              <View className="flex-row items-center gap-2 pb-2 mt-2 border-b-2 border-gray-200">
                <Icon as={Sparkles} className="text-purple-600" size={22} />
                <Text className="text-xl font-bold text-gray-900">Recommended for You</Text>
              </View>

              <Text className="text-xs text-gray-600">
                Based on your profile, here are personalized hairstyle visualizations with your face:
              </Text>

              {recommendations.map((recommendation, recIndex) => (
                <View key={recIndex} className="gap-4">
                  {/* Images with Descriptions */}
                  {recommendation.images.map((image, imageIndex) => (
                    <MotiView
                      key={image.id}
                      from={{ opacity: 0, translateX: -30 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      transition={{
                        type: 'timing',
                        duration: 500,
                        delay: 500 + imageIndex * 150,
                      }}
                      className="overflow-hidden bg-white border border-gray-200 shadow-sm rounded-xl">
                      <View className="w-full bg-gray-100 h-80">
                        <Image
                          source={{ uri: `${API_BASE_URL}${image.image_url}` }}
                          className="w-full h-full"
                          resizeMode="cover"
                        />
                      </View>

                      <View className="p-4 bg-white">
                        <View className="pb-3 mb-3 border-b border-gray-200">
                          <View className="mb-1.5 flex-row items-center gap-2">
                            <Icon as={Scissors} className="text-blue-600" size={18} />
                            <Text className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                              Hairstyle
                            </Text>
                          </View>
                          <Text className="text-sm leading-5 text-gray-900">
                            {image.hairStyle}
                          </Text>
                        </View>

                        <View>
                          <View className="mb-1.5 flex-row items-center gap-2">
                            <Icon as={Palette} className="text-pink-600" size={18} />
                            <Text className="text-xs font-semibold tracking-wide text-gray-700 uppercase">
                              Hair Color
                            </Text>
                          </View>
                          <Text className="text-sm leading-5 text-gray-900">
                            {image.hairColor}
                          </Text>
                        </View>
                      </View>
                    </MotiView>
                  ))}
                </View>
              ))}
            </MotiView>
          )}

          {primaryHairstyle && (!recommendations || recommendations.length === 0) && (
            <MotiView
              from={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 400, delay: 400 }}
              className="p-4 border border-gray-200 rounded-xl bg-gray-50">
              <View className="flex-row items-start gap-3">
                <Icon as={AlertCircle} className="mt-1 text-gray-600" size={20} />
                <View className="flex-1">
                  <Text className="mb-1 text-sm font-semibold text-gray-900">
                    Recommendations Not Available
                  </Text>
                  <Text className="text-xs leading-5 text-gray-600">
                    We detected your profile as "{primaryHairstyle.replace(/_/g, ' ')}" but don't
                    have specific recommendations yet.
                  </Text>
                </View>
              </View>
            </MotiView>
          )}

          {detections.length > 1 && (
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ duration: 500, delay: 800 }}
              className="gap-2">
              <Text className="text-base font-semibold text-gray-900">
                Other Detected Profiles ({detections.length - 1})
              </Text>

              {detections.slice(1).map((detection, index) => (
                <View
                  key={index}
                  className="flex-row items-center justify-between px-3 py-2 border border-gray-200 rounded-lg bg-gray-50">
                  <Text className="flex-1 text-xs font-medium text-gray-700 capitalize">
                    {detection.class.replace(/_/g, ' ')}
                  </Text>
                  <View className="rounded-full bg-gray-700 px-2 py-0.5">
                    <Text className="text-xs font-semibold text-white">
                      {(detection.confidence * 100).toFixed(1)}%
                    </Text>
                  </View>
                </View>
              ))}
            </MotiView>
          )}

          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 450, delay: 900 }}
            className="w-full gap-3 mt-4">
            <Button
              onPress={handleNewAnalysis}
              className="flex-row items-center justify-center w-full bg-gray-900">
              <Icon as={Upload} className="mr-2 text-white" size={18} />
              <Text className="font-semibold text-white">Analyze Another Photo</Text>
            </Button>

            <Button
              onPress={() => router.push('/(tabs)/upload')}
              variant="outline"
              className="flex-row items-center justify-center w-full bg-white border-gray-300">
              <Icon as={RefreshCw} className="mr-2 text-gray-700" size={18} />
              <Text className="font-semibold text-gray-900">Back to Upload</Text>
            </Button>
          </MotiView>
        </View>
      </ScrollView>
    </View>
  );
}