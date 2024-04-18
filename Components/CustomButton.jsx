import { TouchableOpacity, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title, handlePress, containerStyle, textStyles, isLoading}) => {
    return (
        <TouchableOpacity onPress={handlePress}  activeOpacity={0.7} className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${isLoading ? 'opacity-50':''}`} disabled={isLoading}>
            <Text className={`text-primary text-lg ${textStyles}`}>{title}</Text>
            {isLoading && (
                <ActivityIndicator
                    animating={isLoading}
                    color="#fff"
                    size="small"
                    className="ml-2"
                />
            )}
        </TouchableOpacity>
        
    )
}

export default CustomButton