import React, { useState } from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
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
    const [isPressed, setIsPressed] = useState(false);

    const iconColorNotPressed = '#EB5F1A';
    const iconColorPressed = '#DEEB1A';

    return (
        <Pressable
            onPress={() => setIsPressed(!isPressed)}
            style={{ backgroundColor: isPressed ? iconColorPressed : 'transparent' }}
        >
            <FontAwesome
                size={28}
                style={{ marginBottom: -3, color: isPressed ? 'white' : props.color }}
                {...props}
            />
        </Pressable>
    );
}

const borderColor = '#EB5F1A';
const iconColorNotPressed = '#EB5F1A';
const iconColorPressed = '#DEEB1A';

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation<any>();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: false
                //useClientOnlyValue(false, true),
            }}>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Hunger',
                    tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faShop} color={color} />,
                }}
            />
            <Tabs.Screen
                name="two"
                options={{
                    title: 'Restaurantes',
                    tabBarIcon: ({ color }) => <FontAwesomeIcon icon={faMagnifyingGlass} color={color} />,
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
                name="ProfileScreen"
                options={{
                    title: 'Perfil',
                    tabBarIcon: ({ color }) => <FontAwesomeIcon icon={ faUser } color={color} />,
                }}
            />
        </Tabs>
    );
}