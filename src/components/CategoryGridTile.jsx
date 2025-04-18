import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Fonts } from '../constants'

const CategoryGridTile = ({ title, onSelect, color }) => {
    return (
        <View style={styles.gridItem}>
            <TouchableOpacity style={{ flex: 1 }} onPress={onSelect}>
                <View style={{
                    ...styles.container, backgroundColor: color,
                }}>
                    <Text style={styles.title} numberOfLines={2}>{title}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default CategoryGridTile

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 7,
        // borderWidth:1,
    },
    container: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    title: {
        fontSize: 22,
        fontFamily: Fonts.POPPINS_BOLD,
        textAlign: 'right'
    }
})