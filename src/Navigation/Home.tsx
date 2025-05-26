import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home } from "@/types/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBook, faRobot } from "@fortawesome/free-solid-svg-icons";
import History from "@/Screens/History";
import Fiction from "@/Screens/Fiction";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Tabs = createBottomTabNavigator<Home>();
const HomeTab = () => {
  return (
    <Tabs.Navigator screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name="History"
        component={History}
        initialParams={{gender: "history"}}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faBook} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Fiction"
        component={Fiction}
        initialParams={{gender: "fiction"}}
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesomeIcon icon={faRobot} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

export default HomeTab;
