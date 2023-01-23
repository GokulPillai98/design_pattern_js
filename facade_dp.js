import fetch from 'node-fetch'
function getUsers() {
    // return fetch('https://jsonplaceholder.typicode.com/users', {
    //     method: 'GET',
    //     headers: {'Content-Type': 'application/json'}
    // }).then(res => res.json())
    return fetchGET('https://jsonplaceholder.typicode.com/users', {}, {
        headers: {'Content-Type': 'application/json'}
    })
}

function getUserPosts(userId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`, {
        method: 'GET',
        headers: {'Content-Type': 'application/json'}
    }).then(res => res.json())
    return fetchGET('https://jsonplaceholder.typicode.com/posts', {userId: userId}, {
        headers:  {'Content-Type': 'application/json'}
    })
}

getUsers().then(users => {
    users.forEach(user => {
        // console.log(user.id)
        getUserPosts(user.id).then(posts => {
            console.log(user.name)
            console.log(posts.length)
        })
    });
})

/// in above the fetch method is used two times
/// incase of changing the library from fetch to axios we need to change it in two places which is inefficient

/// here comes the facade pattern


function fetchGET(url, params = {}, headers) {
    const queryString = Object.entries(params).map(param => { /// now when we want the change the module we need to change it only here
        return `${param[0]}=${param[1]}`
    }).join('&')
    return fetch(url + '?' + queryString, {
        ...headers,
        method: 'GET'
    }).then(res => res.json())
}

