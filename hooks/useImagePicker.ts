import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import { Alert } from 'react-native';

export const useImagePicker = () => {
  const [isLoading, setIsLoading] = useState(false);

  // Request ONLY the permission needed
  const requestMediaPermissions = async () => {
    const mediaPermission = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!mediaPermission.granted) {
      Alert.alert(
        'Permission Required',
        'Please allow photo library access to pick images.',
        [{ text: 'OK' }]
      );
      return false;
    }
    return true;
  };

  const requestCameraPermissions = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (!cameraPermission.granted) {
      Alert.alert(
        'Permission Required',
        'Please allow camera access to take a photo.',
        [{ text: 'OK' }]
      );
      return false;
    }
    return true;
  };

  // PICK IMAGE FROM GALLERY
  const pickImageFromGallery = async () => {
    try {
      setIsLoading(true);

      const hasPermission = await requestMediaPermissions();
      if (!hasPermission) return null;

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 0.8,
      });

      if (!result.canceled && result.assets?.[0]) {
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image from gallery.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  // TAKE PHOTO
  const takePhoto = async () => {
    try {
      setIsLoading(true);

      const hasPermission = await requestCameraPermissions();
      if (!hasPermission) return null;

      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [3, 4],
        quality: 0.8,
      });

      if (!result.canceled && result.assets?.[0]) {
        return result.assets[0].uri;
      }

      return null;
    } catch (error) {
      Alert.alert('Error', 'Failed to take photo.');
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    pickImageFromGallery,
    takePhoto,
    isLoading,
  };
};
