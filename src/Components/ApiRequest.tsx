import { dummyApi } from "@/api";
import { Post, PostResponse } from "@/types";
import { useEffect, useState } from "react";
import List from "./Posts/List";

type ApiRequestProps = {
  gender: string;
}

const ApiRequest = ({gender}: ApiRequestProps) => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const { data } = await dummyApi.get<PostResponse>(`posts/tag/${gender}`);
    setPosts(data.posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

    return (
      <List posts={posts}/>
    );
}

export default ApiRequest;