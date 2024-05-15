const loadPostsButton = document.getElementById('load-posts-button');
const postsContainer = document.getElementById('postscontainer');
const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));


const button = document.getElementById('toggleDarkMode');

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'dark');
    } else {
      localStorage.setItem('mode', 'light');
    }
  }

  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
  }

  button.addEventListener('click', function(event) {
    toggleDarkMode();
  });

  function generateBlogPostElement(post) {
    const postBox = document.createElement('div');
    postBox.classList.add('box');

    const postElement = document.createElement('div');
    const authorElement = document.createElement('h3');
    authorElement.textContent = post.author;
    const titleElement = document.createElement('h4');
    titleElement.textContent = post.title;
    const contentElement = document.createElement('p');
    contentElement.textContent = post.content;

    postElement.append(authorElement);
    postElement.append(titleElement);
    postElement.append(contentElement);

    postBox.append(postElement);

    return postBox;
}

storedPosts.forEach(post => {
    const postElement = generateBlogPostElement(post);
    postsContainer.appendChild(postElement);
});
localStorage.setItem('blogPosts', JSON.stringify(posts));