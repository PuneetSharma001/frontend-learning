const fetchBtn = document.getElementById('fetchBtn');
const postsContainer = document.getElementById('postsContainer');

fetchBtn.addEventListener('click', async () => {
  try {
    postsContainer.innerHTML = "<p>Loading posts...</p>";

    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    postsContainer.innerHTML = "";

    posts.slice(0, 20).forEach(post => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${post.title}</h3>
        <p>${post.body}</p>
      `;
      postsContainer.appendChild(card);
    });

  } catch (error) {
    postsContainer.innerHTML = "<p style='color:red;'>Failed to load posts!</p>";
    console.error(error);
  }
});
