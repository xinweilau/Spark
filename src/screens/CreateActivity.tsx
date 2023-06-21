import { ScrollView, Text, View } from "react-native"
import { Button, IconButton, TextInput } from "react-native-paper"
import tw from "twrnc"
import { CATEGORY_DATA } from "../utils/mock"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Activity } from "../types/Activity";
import { useState } from "react";
import { formatDate, formatTime } from "../utils/dateTime";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Dropdown } from 'react-native-element-dropdown';
import GradientButton from "../components/GradientButton";
import { useNavigation } from "@react-navigation/native";

export default function CreateActivity() {
    const navigation = useNavigation<HomeScreenProps>();
    const [showDatePicker, setShowDatePicker] = useState<boolean>(false);

    const { control, handleSubmit, setValue, formState: { errors } } = useForm<Activity>({
        defaultValues: {
            title: "",
            description: "",
            category: undefined,
            dateTime: undefined,
            location: "",
            numParticipants: 0,
            maxParticipants: 0,
        }
    });

    const onDateTimeSelect = (date: Date) => {
        setValue("dateTime", date);
        setShowDatePicker(false);
    }

    const onSubmitActivityForm: SubmitHandler<Activity> = (data: Activity) => {
        console.log(data);
        navigation.goBack();
    }

    const onDatePickerChangeDate = (dateTime: string): Date => {
        return new Date(dateTime)
    }

    const toggleShowDatePicker = () => {
        setShowDatePicker(!showDatePicker)
    }

    const formatFullDateTime = (date: Date) => {
        const formattedDate = date.toLocaleString('en-US', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        });

        return formattedDate
    }

    return (
        <ScrollView style={tw`bg-white w-full h-full`}>

            <View style={tw`flex flex-col gap-4 p-4 pb-24`}>
                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold pb-2`}>
                        Date and Time
                    </Text>
                    <Controller
                        name="dateTime"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                mode="outlined"
                                placeholder={formatFullDateTime(new Date())}
                                placeholderTextColor="#48454E"
                                editable={false}
                                right={
                                    <TextInput.Icon
                                        icon="calendar"
                                        color="#464646"
                                        style={tw`rounded-sm`}
                                        onPress={toggleShowDatePicker} />
                                }
                                error={!!errors.dateTime}
                                style={tw`bg-white`}
                                onBlur={onBlur}
                                onPressIn={toggleShowDatePicker}
                                onChangeText={(date: string) => {
                                    onChange(onDatePickerChangeDate(date))
                                }}
                                value={value && `${formatDate(value)} at ${formatTime(value)}`} />
                        )}
                    />
                    <DateTimePickerModal
                        isVisible={showDatePicker}
                        mode="datetime"
                        onConfirm={onDateTimeSelect}
                        onCancel={toggleShowDatePicker}
                    />
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold`}>
                        Title
                    </Text>
                    <Controller
                        name="title"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                mode="outlined"
                                placeholder="Enter activity title..."
                                placeholderTextColor="#48454E"
                                error={!!errors.title}
                                style={tw`bg-white`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value} />
                        )}
                    />
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold pb-2`}>
                        Category
                    </Text>
                    <Controller
                        name="category"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Dropdown
                                data={CATEGORY_DATA}
                                search
                                labelField="name"
                                valueField="id"
                                searchPlaceholder="Search..."
                                placeholderStyle={tw`text-[#48454E]`}
                                value={value}
                                onBlur={onBlur}
                                onChange={onChange}
                                style={
                                    tw.style(
                                        'border p-2 rounded border-[#78747D]',
                                        errors.category && 'border-[#A53328] border-2'
                                    )
                                }
                            />
                        )}
                    />
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold`}>
                        No. of Participants
                    </Text>
                    <Controller
                        name="maxParticipants"
                        control={control}
                        rules={{
                            required: true,
                            min: 1,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                mode="outlined"
                                placeholder="0"
                                placeholderTextColor="#48454E"
                                error={!!errors.maxParticipants}
                                style={tw`bg-white`}
                                onBlur={onBlur}
                                onChangeText={(value: string) => onChange(+value)}
                                value={`${value}`}
                                keyboardType="numeric" />
                        )}
                    />
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold`}>
                        Description
                    </Text>
                    <Controller
                        name="description"
                        control={control}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                mode="outlined"
                                multiline
                                placeholder="Enter description here..."
                                placeholderTextColor="#48454E"
                                style={tw`bg-white h-[100px] -z-0`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                value={value} />
                        )}
                    />
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold`}>
                        Location
                    </Text>
                    <Controller
                        name="location"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <TextInput
                                mode="outlined"
                                placeholder="Enter location..."
                                placeholderTextColor="#48454E"
                                error={!!errors.location}
                                style={tw`bg-white`}
                                onBlur={onBlur}
                                onChangeText={onChange}
                                left={
                                    <TextInput.Icon
                                        icon="crosshairs-gps"
                                        color="#464646" />
                                }
                                value={value} />
                        )}
                    />
                </View>

                <GradientButton
                    onPress={handleSubmit(onSubmitActivityForm)}
                    buttonLength={tw`w-full`}
                    buttonStyle={tw`rounded-full w-full shadow-lg p-4`}
                    textStyle={tw`font-bold`}
                    colors={['#9DCEFF', '#92A3FD']}
                    locations={[0.5, 1]}
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 0.5, y: 0 }}>
                    Submit
                </GradientButton>
            </View>
        </ScrollView>
    )
}