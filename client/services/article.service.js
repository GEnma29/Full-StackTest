
export const articleService = {
    delete: _delete
};

function _delete(id) {
    const requestOptions = {
        method: 'DELETE'
    };
    const url =`http://localhost:5000/articles/${id}`

    return fetch(url,requestOptions);
}