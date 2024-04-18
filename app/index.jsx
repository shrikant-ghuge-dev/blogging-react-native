import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import {Link} from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <SafeAreaView className="h-full">
            <ScrollView contentContainerStyle={{height: '100%'}}>
                <View className="flex-1 items-center justify-center bg-white">
                    <Text className="text-3xl">Blogging!</Text>
                    <StatusBar style="auto" />
                    <Link href="/home" className="text-red-600">Profile1</Link>
                    <Link href="/sign-in" className="text-red-600">signin</Link>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
