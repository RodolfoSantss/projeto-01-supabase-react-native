import { createBottomTabNavigator }
from '@react-navigation/bottom-tabs'

import HomeScreen
from '../screens/homeScreen'

import CreateMangaScreen
from '../screens/createMangaScreen'

import ProfileScreen
from '../screens/profileScreen'

const Tab = createBottomTabNavigator()

export default function AppRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />

      <Tab.Screen
        name="Cadastrar"
        component={CreateMangaScreen}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileScreen}
      />
    </Tab.Navigator>
  )
}