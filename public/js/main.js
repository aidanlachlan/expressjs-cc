const output = document.getElementById('output');
const button = document.getElementById('get-posts-btn');

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

// Event listeners
button.addEventListener('click', showPosts);