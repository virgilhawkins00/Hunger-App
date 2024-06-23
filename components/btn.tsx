import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import Colors from './Colors';
export default function Btn({
    green,
    orange,
    darkGreen,
    lightBase,
    orangeBase
}: {
    green?: string;
    orange?: string;
    darkGreen?: string;
    lightBase?: string;
    orangeBase?: string;
}) { 
    return (
        <TouchableOpacity 
            onPress={() => alert('Button pressed')}
            style={{
                backgroundColor: green? green : orange? orange : darkGreen? darkGreen : lightBase? lightBase : orangeBase? orangeBase : 'transparent',
                borderRadius: 10,
                padding: 10,
                margin: 10,
                justifyContent: 'center',
                alignItems: 'center',
                width: 100,
                height: 100,
            }}>
                <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}>
                    Button
                </Text>
            </TouchableOpacity>
    )
}