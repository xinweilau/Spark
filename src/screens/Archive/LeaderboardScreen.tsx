// import React, {  Component } from 'react';
// import { View, Alert, Image, Text } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Leaderboard from './index';
// import tw from 'twrnc';

// export default class LeaderboardScreen extends Component {

//     state = {
//         globalData: [
//             { name: 'We Tu Lo', score: null, iconUrl: 'https://st2.depositphotos.com/1006318/5909/v/950/depositphotos_59094043-stock-illustration-profile-icon-male-avatar.jpg' },
//             { name: 'Adam Savage', score: 12, iconUrl: 'https://www.shareicon.net/data/128x128/2016/09/15/829473_man_512x512.png' },
//             { name: 'Derek Black', score: 244, iconUrl: 'http://ttsbilisim.com/wp-content/uploads/2014/09/20120807.png' },
//             { name: 'Erika White', score: 0, iconUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-eskimo-girl.png' },
//             { name: 'Jimmy John', score: 20, iconUrl: 'https://static.witei.com/static/img/profile_pics/avatar4.png' },
//             { name: 'Joe Roddy', score: 69, iconUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-braindead-zombie.png' },
//             { name: 'Ericka Johannesburg', score: 101, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShPis8NLdplTV1AJx40z-KS8zdgaSPaCfNINLtQ-ENdPvrtMWz' },
//             { name: 'Tim Thomas', score: 41, iconUrl: 'http://conserveindia.org/wp-content/uploads/2017/07/teamMember4.png' },
//             { name: 'John Davis', score: 80, iconUrl: 'http://www.lovemarks.com/wp-content/uploads/profile-avatars/default-avatar-afro-guy.png' },
//             { name: 'Tina Turner', score: 22, iconUrl: 'https://cdn.dribbble.com/users/223408/screenshots/2134810/me-dribbble-size-001-001_1x.png' },
//             { name: 'Harry Reynolds', score: null, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsSlzi6GEickw2Ft62IdJTfXWsDFrOIbwXhzddXXt4FvsbNGhp' },
//             { name: 'Betty Davis', score: 25, iconUrl: 'https://landofblogging.files.wordpress.com/2014/01/bitstripavatarprofilepic.jpeg?w=300&h=300' },
//             { name: 'Lauren Leonard', score: 30, iconUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr27ZFBaclzKcxg2FgJh6xi3Z5-9vP_U1DPcB149bYXxlPKqv-' },
//         ],
//         filter: 0,
//         userRank: 1,
//         user: {
//             name: 'Joe Roddy',
//             score: 69,
//         }
//     }


//     alert = (title: any, body:any) => {
//         Alert.alert(
//             title, body, [{ text: 'OK', onPress: () => { } },],
//             { cancelable: false }
//         )
//     }
    
//     // To sort the list and also set the current user's ranking (eg. 4th place)
//     sort = (data:any) => {
//         const sorted = data && data.sort((item1:any, item2:any) => {
//             return item2.score - item1.score;
//         })
//         let userRank = sorted.findIndex((item:any) => {
//             return item.name === this.state.user.name;
//         })
//         this.setState({ userRank: ++userRank });
//         return sorted;
//     }

//     renderHeader() {
//       return (
//             <SafeAreaView>
//             <View style={{padding: 15, paddingTop: 30, alignItems: 'center' }}>
//                 <Text style={tw`text-2xl font-bold`}>Leaderboard</Text>
//             </View>
//             <View style={tw`flex flex-row items-center gap-1`}>
//                     <Ionicons name="trophy" size={18} color='#808080' />
//                     <Text style={tw`text-2xl font-medium`}>
//                         {ordinal_suffix_of(this.state.userRank)} place
//                     </Text>
//                     <Ionicons name="trophy" size={18} color='#808080' />
//             </View>
//             </SafeAreaView>
//         )
//     }

//     render() {
//         const props = {
//             labelBy: 'name',
//             sortBy: 'score',
//             data: this.state.globalData,
//             icon: 'iconUrl',
//             onRowPress: (item:any, index:any) => { this.alert(item.name + " clicked", item.score + " points, wow!") },
//             sort: this.sort,
//             currentRowColor: 'black'
//         }

//         return (
//             <View style={{ flex: 1, backgroundColor: 'white', }}>
//                 {this.renderHeader()}
//                 <Leaderboard {...props} />
//             </View>
//         )
//     }
// }

// // To obtain the corresponding suffix for its ranking (eg. first = 1st)
// const ordinal_suffix_of = (i:any) => {
//     var j = i % 10,
//         k = i % 100;
//     if (j == 1 && k != 11) {
//         return i + "st";
//     }
//     if (j == 2 && k != 12) {
//         return i + "nd";
//     }
//     if (j == 3 && k != 13) {
//         return i + "rd";
//     }
//     return i + "th";
// }
