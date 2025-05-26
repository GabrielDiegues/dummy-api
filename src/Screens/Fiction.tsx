import ApiRequest from "@/Components/ApiRequest";
import { Home } from "@/types/navigation";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { View, Text } from "react-native";


const Fiction = ({route}: NativeStackScreenProps<Home, 'Fiction'>) => {
    const {gender} = route.params;
    return <ApiRequest gender={gender}/>;;
}

export default Fiction;