import { Post } from "@/types";
import {
  faEye,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import PostData from "./PostData";

type ListItemProps = {
  post: Post;
};

const ListItem = ({ post }: ListItemProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => <PostData post={post}/>}>
        <Text style={styles.title}>{post.title}</Text>
        <View style={styles.reactions}>
          <FontAwesomeIcon icon={faHeart} color="red" />
          <Text>{post.reactions.likes}</Text>
          <FontAwesomeIcon icon={faHeartBroken} color="#5539CC" />
          <Text>{post.reactions.dislikes}</Text>
          <FontAwesomeIcon icon={faEye} />
          <Text>{post.views}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 6,
    gap: 4,
  },
  title: {
    fontSize: 16,
    color: "#1f1f1f",
  },
  reactions: {
    flex: 1,
    flexDirection: "row",
    gap: 8,
  },
});

export default ListItem;
