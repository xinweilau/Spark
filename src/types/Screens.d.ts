/**
 * Type defintions for the screens in the app
 * Learn more at https://reactnavigation.org/docs/typescript/
 */

// HomeStackParamList is an object where the property is the route name and the value is an object with the params in it.
type HomeStackParamList = {
    Home: undefined;
    EventDetail: undefined;
    EventCategory: undefined;
};

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type EventDetailScreenProps = NativeStackScreenProps<HomeStackParamList, 'EventDetail'>;
