import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

// import { icons } from "../constants/icons";

const FormField = ({
    title,
    value,
    placeholder,
    handleChangeText,
    otherStyles,
    ...props
}) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <View className={`space-y-2 ${otherStyles}`}>
            <Text className="text-base text-gray-100">{title}</Text>

            <View className="w-full min-h-[85vh] px-4 bg-white rounded-2xl border-2 border-black-200 focus:border-secondary flex flex-row items-center">
                <TextInput
                    className="flex-1 text-white text-base"
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor="#7B7B8B"
                    onChangeText={handleChangeText}
                    secureTextEntry={title === "Password" && !showPassword}
                    {...props}
                />

                {title === "Password" && (
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Image
                            // source={!showPassword ? icons.home : icons.home}
                            className="w-6 h-6"
                            resizeMode="contain"
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    );
};

export default FormField;