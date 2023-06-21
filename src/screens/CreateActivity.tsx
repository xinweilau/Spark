import { ScrollView, Text, View } from "react-native"
import { Button, IconButton, TextInput } from "react-native-paper"
import tw from "twrnc"
import { CATEGORY_DATA } from "../utils/mock"
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { Activity } from "../types/Activity";
import { useEffect, useState } from "react";
import { formatDate, formatTime } from "../utils/dateTime";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import { Dropdown } from 'react-native-element-dropdown';
import GradientButton from "../components/GradientButton";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@tanstack/react-query";
import { createActivity } from "../services/Activity";

export default function CreateActivity() {
    const navigation = useNavigation<HomeScreenProps>();
    const [showStartDatePicker, setShowStartDatePicker] = useState<boolean>(false);
    const [showEndDatePicker, setShowEndDatePicker] = useState<boolean>(false);
    const [selectedCategory, setSelectedCategory] = useState<string>("");
    const [subCategoryData, setSubCategoryData] = useState<{ label: string, value: string }[]>([]);

    const { control, handleSubmit, getValues, setValue, formState: { errors } } = useForm<Activity>({
        defaultValues: {
            title: "",
            description: "",
            category: undefined,
            subCategory: undefined,
            startTime: undefined,
            endTime: undefined,
            location: "",
            maxParticipants: 0,
        }
    });

    const onDateTimeSelect = (control: "startTime" | "endTime", date: Date) => {
        setValue(control, date);

        if (control === "startTime") {
            toggleShowStartDatePicker();
        }
        toggleShowEndDatePicker();
    }


    const onSubmitActivityForm: SubmitHandler<Activity> = (data: Activity) => {
        mutate({
            title: "",
            description: "",
            category: "SPORTS",
            subCategory: "FOOTBALL",
            startTime: new Date(),
            endTime: new Date(),
            location: "",
            maxParticipants: 0,
        });
        navigation.goBack();
    }

    const onDatePickerChangeDate = (dateTime: string): Date => {
        return new Date(dateTime)
    }

    const toggleShowStartDatePicker = () => {
        setShowStartDatePicker(!showStartDatePicker)
    }

    const toggleShowEndDatePicker = () => {
        setShowEndDatePicker(!showEndDatePicker)
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

    const { mutate } = useMutation({
        mutationKey: ['createActivity'],
        mutationFn: (data: Activity) => createActivity(data),
        onSuccess: () => {
            navigation.goBack();
        }
    })

    useEffect(() => {
        if (selectedCategory === "") {
            return
        }

        const subCatData = CATEGORY_DATA[selectedCategory].map((subCategory) => {
            return {
                label: subCategory,
                value: subCategory,
            }
        })
        setSubCategoryData(subCatData)
    }, [selectedCategory])

    const getCategoryData = () => {
        return Object.keys(CATEGORY_DATA).map((key) => {
            return {
                label: key,
                value: key,
            }
        });
    }

    return (
        <ScrollView style={tw`bg-white w-full h-full`}>

            <View style={tw`flex flex-col gap-4 p-4 pb-24`}>
                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold pb-2`}>
                        Start Date and Time
                    </Text>
                    <Controller
                        name="startTime"
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
                                        onPress={toggleShowStartDatePicker} />
                                }
                                error={!!errors.startTime}
                                style={tw`bg-white`}
                                onBlur={onBlur}
                                onPressIn={toggleShowStartDatePicker}
                                onChangeText={(date: string) => {
                                    onChange(onDatePickerChangeDate(date))
                                }}
                                value={value && `${formatDate(value)} at ${formatTime(value)}`} />
                        )}
                    />
                    <DateTimePickerModal
                        isVisible={showStartDatePicker}
                        mode="datetime"
                        onConfirm={(selected: Date) => onDateTimeSelect("startTime", selected)}
                        onCancel={toggleShowStartDatePicker}
                    />
                </View>

                <View style={tw`flex flex-col`}>
                    <Text style={tw`text-[#464646] font-semibold pb-2`}>
                        End Date and Time
                    </Text>
                    <Controller
                        name="endTime"
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
                                        onPress={toggleShowEndDatePicker} />
                                }
                                error={!!errors.endTime}
                                style={tw`bg-white`}
                                onBlur={onBlur}
                                onPressIn={toggleShowEndDatePicker}
                                onChangeText={(date: string) => {
                                    onChange(onDatePickerChangeDate(date))
                                }}
                                value={value && `${formatDate(value)} at ${formatTime(value)}`} />
                        )}
                    />
                    <DateTimePickerModal
                        isVisible={showEndDatePicker}
                        mode="datetime"
                        onConfirm={(selected: Date) => onDateTimeSelect("endTime", selected)}
                        onCancel={toggleShowEndDatePicker}
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
                                data={getCategoryData()}
                                search
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="Search..."
                                placeholderStyle={tw`text-[#48454E]`}
                                value={value}
                                onBlur={onBlur}
                                onChange={(selected) => {
                                    setSelectedCategory(selected.value);
                                    onChange(selected.value);
                                }}
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
                    <Text style={tw`text-[#464646] font-semibold pb-2`}>
                        Sub Category
                    </Text>
                    <Controller
                        name="subCategory"
                        control={control}
                        rules={{
                            required: true,
                        }}
                        render={({ field: { onChange, onBlur, value } }) => (
                            <Dropdown
                                data={subCategoryData}
                                search
                                labelField="label"
                                valueField="value"
                                searchPlaceholder="Search..."
                                placeholderStyle={tw`text-[#48454E]`}
                                value={value}
                                onBlur={onBlur}
                                onChange={(selected) => onChange(selected.value)}
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
                        Max No. of Participants
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