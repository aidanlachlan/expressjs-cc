const output = document.getElementById('output');
const button = document.getElementById('get-posts-btn');
const form = document.getElementById('app-post-form');

// get and show posts
async function showPosts() {
    try {
            const res = await fetch('http://localhost:8000/api/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch posts')
    }    
    
    const posts = await res.json()
    output.innerHTML = '';

    posts.forEach((post) => {
        const postEl = document.createElement('div');
        postEl.textContent = post.title;
        output.appendChild(postEl);
    })
    } catch (error) {
        console.log('error fetching posts:', error);
    }

}

// submit new post
async function addPost(e) {
    e.preventDefault()
    const formData = new FormData(this)
    const title = formData.get('title')

    try {
        const res = await fetch('http://localhost:8000/api/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title })
        })

        if (!res.ok) {
            throw new Error('Failed to add post')
        }

        const newPost = await res.json()

        const postEl = document.createElement('div');
        postEl.textContent = newPost.title;
        output.appendChild(postEl);
        showPosts();
    } catch (error) {
        console.error('Error adding post')
    }
}

// Event listeners
button.addEventListener('click', showPosts);
form.addEventListener('submit', addPost);
