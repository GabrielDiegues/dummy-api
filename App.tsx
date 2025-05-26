import { NavigationContainer, BaseRouter } from "@react-navigation/native";
import HomeTab from "@/Navigation/Home";

export default function App() {
  return (
    <NavigationContainer>
      <HomeTab />
    </NavigationContainer>
  );
}
