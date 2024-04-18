import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import FormField from '../../Components/FormField'
import CustomButton from '../../Components/CustomButton'
import { Link } from 'expo-router'

const SignIn = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const submit = () => {}
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Text className="text-2xl text-white text-semibold mt-10">Login</Text>

          <FormField title="Email" value={form.email} handleChangeText={(e) => setForm({ ...form, email: e })} otherStyles="mt-7" keyboardType="email-address" />
          <FormField title="Password" value={form.password} handleChangeText={(e) => setForm({ ...form, password: e })} otherStyles="mt-7" />
          <CustomButton handlePress={submit} title="Sign In" containerStyle="mt-7" isLoading={isSubmitting} />
          <View className="justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-gray-100">Don't have account?</Text>
              <Link href="/sign-up" className='text-lg text-secondary'>Sign Up</Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})