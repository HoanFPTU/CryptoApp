import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {COLORS, ICONS, NAME_NAVIGATION} from '../utils/constant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Detail} from '../screen/detail/Detail';
import {Portfolio} from '../screen/portfolio/Portfolio';
import {Trade} from '../screen/trade/Trade';
import {Marker} from '../screen/market/Marker';
import {Profile} from '../screen/profile/Profile';
import {Home} from '../screen/home/Home';
import TabIcon from '../components/TabIcon';
import {Screen} from 'react-native-screens';
const Stack = createNativeStackNavigator();
const BottomTab = createBottomTabNavigator();
export const Navigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name={NAME_NAVIGATION.MAINBOTTOMAPPBAR}
        component={HomeTab}
      />
      <Stack.Screen name={NAME_NAVIGATION.DETAIL} component={Detail} />
      <Stack.Screen name={NAME_NAVIGATION.PORTFOLIO} component={Portfolio} />
      <Stack.Screen name={NAME_NAVIGATION.TRADE} component={Trade} />
      <Stack.Screen name={NAME_NAVIGATION.MARKET} component={Marker} />
      <Stack.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
};
export function HomeTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 64,
          backgroundColor: COLORS.bgGrayBlack,
        },
      }}>
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <TabIcon source={ICONS.HOME} text={NAME_NAVIGATION.HOME} />
          ),
        }}
        name={NAME_NAVIGATION.HOME}
        component={Home}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <TabIcon
              source={ICONS.PORTFOLIO}
              text={NAME_NAVIGATION.PORTFOLIO}
            />
          ),
        }}
        name={NAME_NAVIGATION.PORTFOLIO}
        component={Portfolio}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <TabIcon source={ICONS.TRADE} text={NAME_NAVIGATION.TRADE} />
          ),
        }}
        name={NAME_NAVIGATION.TRADE}
        component={Trade}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <TabIcon source={ICONS.MARKET} text={NAME_NAVIGATION.MARKET} />
          ),
        }}
        name={NAME_NAVIGATION.MARKET}
        component={Marker}
      />
      <BottomTab.Screen
        options={{
          tabBarIcon: () => (
            <TabIcon source={ICONS.PROFILE} text={NAME_NAVIGATION.PROFILE} />
          ),
        }}
        name={NAME_NAVIGATION.PROFILE}
        component={Profile}
      />
    </BottomTab.Navigator>
  );
}
