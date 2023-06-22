import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Switch,
} from 'react-native';
import tw from 'twrnc';
import FeatherIcon from 'react-native-vector-icons/Feather';
import GradientButton from '../components/GradientButton';
import useAuth from '../utils/useAuth';
import { useNavigation } from "@react-navigation/native";
import EditProfile from './EditProfile';

const avatar = require('../../assets/images/login.svg');
const SECTIONS = [
  {
    items: [
      { label: 'Change Password', value: false, type: 'input' },
      { label: 'Rewards Center', value: false, type: 'input' },
      { label: 'History', false: 'English', type: 'input' },
      { label: 'Customer Support', value: false, type: 'input' },
    
    ],
  },
];

export default function Settings() {
    const navigation = useNavigation<SettingsScreenProps>();
    const [value, setValue] = React.useState(0);
    const {  items } = React.useMemo(() => {
      return {
        items: SECTIONS[value].items,
      };
    }, [value]);

    const handlePress = () => {
      console.log("Edit Profile")
      navigation.navigate('EditProfile')
    }
    const handleRewards = () => {
      console.log("Rewards")
      navigation.navigate('Rewards')
    }
    const { logOutUser } = useAuth();
    const handleLogout = () => {
      logOutUser();
    }
    return (
      <SafeAreaView style={{ backgroundColor: '#f8f8f8', flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View>
        <View style={tw`flex flex-row flex-nowrap items-center justify-between pt-4`}>
          <Text style={tw`text-2xl font-bold pb-6 px-6`}>Settings</Text>
        </View>
        </View>

        <View style={styles.profile}>
          <View style={styles.profileHeader}>
            <Image
              alt=""
              source={{
                uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80',
              }}
              style={styles.profileAvatar}
            />
          </View>
          
          <View style={styles.profileBody}>
              <Text style={styles.profileName}>John Doe</Text>
            </View>

          <TouchableOpacity
            onPress={handlePress}>
            <View style={styles.profileAction}>
              <Text style={styles.profileActionText}>Edit Name</Text>
              <FeatherIcon color="#fff" name="edit-3" size={16} />
            </View>
          </TouchableOpacity>
        </View>

        
        <View style={[
          styles.rowWrapper,
        ]}>
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Change Password</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
                color="#7f7f7f"
                name="chevron-right"
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
            style={{
              borderBottomColor: '#dedbd7',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

        <View style={[
          styles.rowWrapper,
        ]}>
        <TouchableOpacity
          onPress={handleRewards}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Rewards Center</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
                color="#7f7f7f"
                name="chevron-right"
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
            style={{
              borderBottomColor: '#dedbd7',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

        <View style={[
          styles.rowWrapper,
        ]}>
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>History</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
                color="#7f7f7f"
                name="chevron-right"
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
            style={{
              borderBottomColor: '#dedbd7',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />

        <View style={[
          styles.rowWrapper,
        ]}>
        <TouchableOpacity>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Customer Support</Text>
            <View style={styles.rowSpacer} />
            <FeatherIcon
                color="#7f7f7f"
                name="chevron-right"
                size={20}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
            style={{
              borderBottomColor: '#dedbd7',
              borderBottomWidth: StyleSheet.hairlineWidth,
            }}
          />  

{/* 
{items.map(({ label, type, value }, index) => {
            return (
              <View
                key={label}
                style={[
                  styles.rowWrapper,
                  index === 0 && { borderTopWidth: 0 },
                ]}>
                <TouchableOpacity
                  onPress={() => {
                    // handle onPress
                  }}>
                  <View style={styles.row}>
                    <Text style={styles.rowLabel}>{label}</Text>

                    <View style={styles.rowSpacer} />

                    {type === 'input' && (
                      <Text style={styles.rowValue}>{value}</Text>
                    )}
                    {(type === 'input' || type === 'link') && (
                      <FeatherIcon
                        color="#7f7f7f"
                        name="chevron-right"
                        size={20}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}    */}
          

        <View style={tw`flex flex-col items-center py-45 justify-between`}>
        <GradientButton
          onPress={handleLogout}
          buttonLength={tw`w-7/8`}
          buttonStyle={tw`rounded-tl-lg rounded-tr-lg rounded-bl-lg w-full shadow-lg p-7`}
          textStyle={tw`text-white font-bold`}
          colors={['#8658E8', '#4718AD']}
          locations={[0, 1]}
          start={{ x: 0.0, y: 1 }}
          end={{ x: 1, y: 0 }}>
          LOG OUT
      </GradientButton>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingLeft: 24,
    paddingRight: 24,
    marginBottom: 12,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  profile: {
    paddingTop: 12,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
    alignItems: 'center'
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  profileBody:{
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileAvatar: {
    width: 60,
    height: 60,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 12,
  },
  profileName: {
    fontSize: 17,
    fontWeight: '600',
    color: '#3d3d3d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  profileAction: {
    marginTop: 16,
    paddingVertical: 10,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#007bff',
    borderRadius: 12,
  },
  profileActionText: {
    marginRight: 8,
    fontSize: 15,
    fontWeight: '600',
    color: '#fff',
  },
  tabs: {
    padding: 16,
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    position: 'relative',
    overflow: 'hidden',
  },
  tabWrapper: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    borderColor: '#e5e7eb',
    borderBottomWidth: 2,
  },
  tabText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#6b7280',
    marginLeft: 5,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 50,
    paddingLeft: 24,
    paddingRight: 24,
  },
  rowWrapper: {
    borderTopWidth: 1,
    borderColor: '#e3e3e3',
  },
  rowLabel: {
    fontSize: 17,
    fontWeight: '500',
    color: '#2c2c2c',
  },
  rowValue: {
    fontSize: 15,
    fontWeight: '500',
    color: '#7f7f7f',
    marginRight: 4,
  },
  rowSpacer: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  container: {
    paddingVertical: 24,
  },
  content: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#e3e3e3',
  },
});