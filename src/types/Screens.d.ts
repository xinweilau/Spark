/**
 * Type defintions for the screens in the app
 * Learn more at https://reactnavigation.org/docs/typescript/
 */

// HomeStackParamList is an object where the property is the route name and the value is an object with the params in it.
type HomeStackParamList = {
    Home: undefined;
    EventDetail: undefined;
    SubCategory: undefined;
};

type SettingsStackParamList = {
    Settings: undefined;
    EditProfile: undefined;
    Rewards: undefined;
}
type SettingsScreenProps = NativeStackScreenProps<SettingsStackParamList, 'Settings'>;
type EditProfileScreenProps = NativeStackScreenProps<SettingsStackParamList, 'EditProfile'>;
type RewardsScreenProps = NativeStackScreenProps<SettingsStackParamList, 'Rewards'>;

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type EventDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'EventDetail'>;

type SubCategoryStackParamList = {
    SubCategory: undefined;
    SubCategoryActivity: undefined;
};

type EventCategoryScreenProps = NativeStackScreenProps<SubCategoryStackParamList, 'SubCategory'>;
type EventCategoryListScreenProps = NativeStackScreenProps<SubCategoryStackParamList, 'SubCategoryActivity'>;
