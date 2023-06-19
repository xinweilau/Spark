/**
 * Type defintions for the screens in the app
 * Learn more at https://reactnavigation.org/docs/typescript/
 */

// HomeStackParamList is an object where the property is the route name and the value is an object with the params in it.
type HomeStackParamList = {
    Home: undefined;
    EventDescription: undefined;
};

type HomeScreenProps = NativeStackScreenProps<HomeStackParamList, 'Home'>;
type EventDescriptionScreenProps = NativeStackScreenProps<EventDescription, 'EventDescription'>;
