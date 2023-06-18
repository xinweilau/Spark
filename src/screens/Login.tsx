import React, { useState } from 'react';
import { Image } from 'expo-image';
import { View, Text } from 'react-native';
import { Button, IconButton, TextInput } from 'react-native-paper';
import tw from 'twrnc';
import { LinearGradient } from 'expo-linear-gradient';
import useAuth from '../utils/useAuth';
import { Link } from '@react-navigation/native';

const login = require('../../assets/images/login.svg');

export default function Login() {
    const { logInUser } = useAuth();

    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    }

    // TODO: this will be replaced with the actual login function
    const handleLogin = () => {
        logInUser();
    }

    return (
        <View style={tw`w-full h-full`}>
            <Image
                source={login}
                style={tw`w-full h-full`}
                contentFit="cover"
            />
            <View style={tw`absolute w-full h-2/3 bg-white left-0 bottom-0 right-0 rounded-t-3xl flex flex-col items-center p-5 justify-between`}>
                <View style={tw`flex flex-col gap-4 items-center bg-white w-full`}>
                    <Text style={tw`font-bold text-2xl`}>Log In</Text>

                    <TextInput
                        label="Email"
                        style={tw`bg-transparent p-0 w-full`}
                        underlineColor="#B9B9BB"
                        activeUnderlineColor="#4718AD"
                        right={<TextInput.Icon icon="check-circle" />}
                    />
                    <TextInput
                        label="Password"
                        style={tw`bg-transparent p-0 w-full`}
                        secureTextEntry={isPasswordVisible}
                        underlineColor="#B9B9BB"
                        activeUnderlineColor="#4718AD"
                        right={
                            isPasswordVisible ?
                                <TextInput.Icon icon="eye" onPress={togglePasswordVisibility} /> :
                                <TextInput.Icon icon="eye-off" onPress={togglePasswordVisibility} />
                        }
                    />
                    <Link
                        to="/login"
                        style={tw`ml-auto text-[#796C94]`}
                        onPress={() => console.log("Help Pressed")}>
                        Need Help?
                    </Link>
                    <LinearGradient style={tw`rounded-tl-lg rounded-tr-lg rounded-bl-lg w-7/8 shadow-lg p-4`} colors={['#8658E8', '#4718AD']} locations={[0, 1]} start={{ x: 0.0, y: 1 }} end={{ x: 1, y: 0 }}>
                        <Button style={tw`w-full`} textColor='white' onPress={handleLogin}>
                            PROCEED
                        </Button>
                    </LinearGradient>
                </View>

                <View style={tw`flex flex-col items-center gap-4`}>
                    <Text style={tw`text-[#796C94]`}>Or Log In With</Text>
                    <View style={tw`flex flex-row`}>
                        <IconButton
                            mode="outlined"
                            icon="google"
                            size={40}
                            onPress={() => console.log('Google Pressed')}
                        />
                        <IconButton
                            mode="outlined"
                            icon="facebook"
                            size={40}
                            onPress={() => console.log('Facebook Pressed')}
                        />
                        <IconButton
                            mode="outlined"
                            icon="apple"
                            size={40}
                            onPress={() => console.log('Apple Pressed')}
                        />
                    </View>
                </View>

                <View>
                    <Text style={tw`text-[#796C94]`} >
                        Don't have an account?{'\u00A0'}
                        <Link to="/login" style={tw`text-[#4718AD] font-bold`}>
                            Sign Up
                        </Link>
                    </Text>
                </View>
            </View>
        </View >
    );
};
