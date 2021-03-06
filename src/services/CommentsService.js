const baseUrl = 'https://jsonplaceholder.typicode.com/comments';

class CommentsService {
    // not optimal - backend should have an option to get the length of posts
    static getCommentsLengthById(id) {
        return fetch(`${baseUrl}?postId=${id}`)
                .then(response => response.json())
                .then(data => data.length)
    };
    static getCommentsById(id) {
        return fetch(`${baseUrl}?postId=${id}`)
                .then(response => response.json())
    };
}

export default CommentsService;

