import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';


interface Banner {
    id: number;
    title: string;
    image: string;
}

const BannerSlider: React.FC<{ banners: Banner[] }> = ({ banners }) => {
    const renderItem = ({ item}: { item: Banner }) => (
        <View style={styles.bannerContainer}>
            <Image source={{ uri: item.image }} style={styles.bannerImage} />
            <Text style={styles.bannerTitle}>{item.title}</Text>
        </View>
    )


return (
    <Carousel
        layout="default"
        data={banners}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={300}
        />
    )
}

const styles = StyleSheet.create({
    bannerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f9c2ff',
        borderRadius: 8,
        padding: 20,
    },
    bannerImage: {
        width: '100%',
        height: Dimensions.get('window').width * 0.2,
        resizeMode: 'contain',
        borderRadius: 8,
    },
    bannerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,

    }
});

export default BannerSlider;