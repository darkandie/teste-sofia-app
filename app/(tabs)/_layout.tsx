import { Tabs } from "expo-router";
import { TabBarIcon } from '@/components/navigation/TabBarIcon';

export default function TabLayout() {
  return(
    <Tabs screenOptions={{headerShown: false }}>
      <Tabs.Screen 
        name="home" 
        options={{
          title: 'Início',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="favorites" 
        options={{
          title: 'Favoritos',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name={'star-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  )
}