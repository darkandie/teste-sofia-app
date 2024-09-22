import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
  NunitoSans_600SemiBold
} from '@expo-google-fonts/nunito-sans';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import { store } from '@/store/store';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
    NunitoSans_600SemiBold
  });

  function CustomBackButton() {
    return (
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="close" size={30} color="black" />
      </TouchableOpacity>
    );
  }

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{
              headerShown: false,
              headerBackTitleVisible: false
            }}
          />
          <Stack.Screen 
            name="register" 
            options={{
              headerBackTitleVisible: false,
              headerTitle: "Criar nova conta",
              headerTitleAlign: 'left',
              headerTitleStyle: {fontSize: 16}
            }}
          />
          <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
          <Stack.Screen 
            name="post/[postId]" 
            options={{
              title: "Publicação",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen 
            name="profile/[userId]" 
            options={{
              title: "Perfil",
              headerBackTitleVisible: false,
            }}
          />
          <Stack.Screen 
            name="newPost/index" 
            options={{
              title: "Nova publicação",
              headerBackTitleVisible: false,
              headerLeft: () => <CustomBackButton />,
            }}
          />
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
