const loadPostsButton = document.getElementById('load-posts-button');
const postsContainer = document.getElementById('postscontainer');
const storedPosts = JSON.parse(localStorage.getItem('blogPosts'));


const button = document.getElementById('toggleDarkMode');

  function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
      localStorage.setItem('mode', 'light');
      body.classList.remove('dark-mode');
    } else {
      localStorage.setItem('mode', 'dark');
      body.classList.add('dark-mode');
    }
  }

  const mode = localStorage.getItem('mode');
  if (mode === 'dark') {
    document.body.classList.add('dark-mode');
  }

  button.addEventListener('click', function(event) {
    console.log("Clicked...");
    toggleDarkMode();
  });

  