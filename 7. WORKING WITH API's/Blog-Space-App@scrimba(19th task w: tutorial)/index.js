const form = document.getElementById('new-blog')
const postEl = document.getElementById('post-title')
const bodyEl = document.getElementById('post-body')
let blogsArray = []

function renderPosts() {
    let html = ""
    blogsArray.forEach(post => {
        html += `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <hr />
    `
    })
    document.getElementById('blogs-list').innerHTML = html
}

fetch('https://apis.scrimba.com/jsonplaceholder/posts')
    .then(res => res.json())
    .then(data => {
        blogsArray = data
        // blogsArray = data.slice(0, 5)
        renderPosts()
    })
    
form.addEventListener('submit', (e) => {
    e.preventDefault()
    const postTitle = postEl.value.trim()
    const postBody = bodyEl.value.trim()

    if(!postTitle || !postBody) {
        alert('enter something you fool!')
        return
    }

    const data = {
        title: postTitle,
        body: postBody
    }
    fetch('https://apis.scrimba.com/jsonplaceholder/posts', {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(res => res.json())
    .then(data => {
        blogsArray.unshift(data)
        renderPosts()
        postEl.value = ""
        bodyEl.value = ""
    })
})



