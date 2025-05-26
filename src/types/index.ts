type Reaction = {
    likes: number;
    dislikes: number
}

type Post = {    
    id: number;
    title: string;
    body: string;
    reactions: Reaction;
    views: number;
    tags: string[]
}

type PostResponse = {
    posts: Post[]
}

type PostInformation = {

}
export {PostResponse, Post}