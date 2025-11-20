import CategoryScreen from '@/screens/CategoryScreen';
import CategoryScreen1 from '@/screens/CategoryScreen1';
import CategoryScreen2 from '@/screens/CategoryScreen2';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

export function TopNavigator() {
  return (
    <Tab.Navigator
      options={{}}
    >
      <Tab.Screen name="Category1" component={CategoryScreen} />
      <Tab.Screen name="Category2" component={CategoryScreen1} />
      <Tab.Screen name="Category3" component={CategoryScreen2} />
    </Tab.Navigator>
  );
}