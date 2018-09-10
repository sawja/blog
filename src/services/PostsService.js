const baseUrl = 'https://jsonplaceholder.typicode.com/posts?_page=7';

class PostsService {
    // not optimal - backend should have an option to get the length of posts
    static getPostsLength() {
        return fetch(baseUrl)
                .then(response => response.json())
                .then(data => data.length)
    };
    static getPosts() {
        return fetch(baseUrl).then(response => response.json())
    };
}

export default PostsService;

