import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { faBookBookmark, faBookmark, faBowlFood, faHouse, faMagnifyingGlass, faSave, faShop, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faHouse} color={color} 
          />,
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesomeIcon
                    icon={faBowlFood}
                    size={25}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Restaurantes',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={ faMagnifyingGlass } color={color} />,
        }}
      />
      <Tabs.Screen
        name="three"
        options={{
          title: 'Pedidos',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={ faBookmark } color={color} />,
        }}
        />
        <Tabs.Screen
        name="four"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesomeIcon icon={ faUser } color={color} />,
        }}
        />
    </Tabs>
  );
}
