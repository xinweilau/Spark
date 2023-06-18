import { LinearGradient, LinearGradientPoint } from "expo-linear-gradient"
import { StyleProp, Text } from "react-native";
import { Button, TouchableRipple } from "react-native-paper";
import tw from "twrnc"

/**
 * GradientButton is a custom button component that has a gradient background.
 * Created with TouchableRipple from react-native-paper and LinearGradient from expo.
 * Uses tailwindcss for styling.
 */
export default function GradientButton(props: GradientButtonProps) {
    return (
        <TouchableRipple
            onPress={props.onPress}
            style={props.buttonLength || tw`w-full`}
            disabled={props.disabled}>
            <LinearGradient style={props.buttonStyle} {...props}>
                <Text style={[props.textStyle, tw`text-center`]}>
                    {props.children}
                </Text>
            </LinearGradient>
        </TouchableRipple >
    )
}

interface GradientButtonProps {
    onPress: () => void;
    colors: string[];
    locations: number[];
    start?: LinearGradientPoint;
    end?: LinearGradientPoint;
    children?: React.ReactNode;
    disabled?: boolean;

    /** textStyle of the button */
    textStyle: StyleProp<any>;
    /** buttonStyle of the button */
    buttonStyle: StyleProp<any>;
    /** length refers to the width of the button */
    buttonLength: StyleProp<any>;
}
