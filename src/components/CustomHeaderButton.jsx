import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { HeaderButton } from 'react-navigation-header-buttons'
import { Colors } from '../constants'

const CustomHeaderButton = props => {
    return (
        <HeaderButton
            {...props}
            IconComponent={MaterialIcons}
            iconSize={30}
            color={Colors.DEFAULT_WHITE}
        />
    )
}

export default CustomHeaderButton
