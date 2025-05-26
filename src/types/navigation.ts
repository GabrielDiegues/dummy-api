import { RouteProp } from "@react-navigation/native";
import { Post } from ".";

type Home = {
  History: {gender: string};
  Fiction: {gender: string};
  PostData: {post: Post};
};

export { Home };
