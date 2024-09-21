import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import {
  useFonts,
  NunitoSans_400Regular,
  NunitoSans_700Bold,
} from '@expo-google-fonts/nunito-sans';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { Provider } from 'react-redux';

import { useColorScheme } from '@/hooks/useColorScheme';
import { store } from '@/store/store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

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
        </Stack>
      </ThemeProvider>
    </Provider>
  );
}
