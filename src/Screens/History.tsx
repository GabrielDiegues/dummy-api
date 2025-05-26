import { Home } from "@/types/navigation";
import ApiRequest from "@/Components/ApiRequest";
import { NativeStackScreenProps } from "@react-navigation/native-stack";


const History = ({route}: NativeStackScreenProps<Home, 'History'>) => {
  const {gender} = route.params;

  return <ApiRequest gender={gender}/>;
};

export default History;
