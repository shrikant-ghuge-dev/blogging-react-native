import { StyleSheet, Text, View } from 'react-native'
import { Slot, Stack } from 'expo-router'

const RootLayout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{headerShown: false}} />
        </Stack>
        // <>
        //     <Text>Header</Text>
        //     < Slot />
        //     <Text>Footer</Text>
        // </>
    )
}

export default RootLayout

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})