import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAME_NAVIGATION} from '../constant/constant';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Detail} from '../screen/detail/Detail';
import {Porolio} from '../screen/porfolio/Porolio';
import {Trade} from '../screen/trade/Trade';
import {Marker} from '../screen/market/Marker';
import {Profile} from '../screen/profile/Profile';
import {Home} from '../screen/home/Home';
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
      <Stack.Screen name={NAME_NAVIGATION.PORFOLIO} component={Porolio} />
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
      }}>
      <BottomTab.Screen name={NAME_NAVIGATION.HOME} component={Home} />
      <BottomTab.Screen name={NAME_NAVIGATION.PORFOLIO} component={Porolio} />
      <BottomTab.Screen name={NAME_NAVIGATION.TRADE} component={Trade} />
      <BottomTab.Screen name={NAME_NAVIGATION.MARKET} component={Marker} />
      <BottomTab.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} />
    </BottomTab.Navigator>
  );
}
