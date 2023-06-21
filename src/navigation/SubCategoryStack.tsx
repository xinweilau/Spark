import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SubCategory from "../screens/SubCategory";
import SubCategoryActivity from "../screens/SubCategoryActivity";

const SubCategoryStackNav = createNativeStackNavigator<SubCategoryStackParamList>();

export default function SubCategoryStack() {
    return (
        <SubCategoryStackNav.Navigator initialRouteName="SubCategory">
            <SubCategoryStackNav.Screen
                name="SubCategory"
                component={SubCategory}
                options={{
                    headerShown: false,
                    headerTitle: "",
                }} />

            <SubCategoryStackNav.Screen
                name="SubCategoryActivity"
                component={SubCategoryActivity}
                options={{
                    headerShown: false,
                    headerTitle: "",
                }} />
        </SubCategoryStackNav.Navigator>
    )
}
