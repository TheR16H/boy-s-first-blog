 const storedPosts = JSON.parse(localStorage.getItem('blog'));
 console.log("Stored Data: ", storedPosts);

// const posts = [
//     {
//         author: 'Alice',
//         title: 'First Post',
//         content: 'This is my first blog post.'
//     },
//     {
//         author: 'Bob',
//         title: 'Second Post',
//         content: 'Here is my second blog post.'
//     }
// ]; 

// function generateBlogPostElement(post){
//     const postElement = document.createElement('div');

//     const authorElement = document.createElement('h3');
//     authorElement.textContent = post.author;

//     const titleElement = document.createElement('h4');
//     titleElement.textContent = post.title;

//     const contentElement = document.createElement('p');
//     contentElement.textContent=post.content;

//     postElement.appendChild(authorElement);
//     postElement.appendChild(titleElement);
//     postElement.appendChild(contentElement);
    
//     return postElement;
// };
// const postsContainer = document.getElementById('postsContainer');

// storedPosts.forEach(post => {
//     const postElement = generateBlogPostElement(post);

//     const postBox = document.createElement('div');
//     postBox.classList.add('post-box');
//     postBox.appendChild(postElement);

//     postsContainer.appendChild(postBox);
// });



// function generateBlogPostElement(post) {
//     const postBox = document.createElement('div');
//     postBox.classList.add('box');

//     const postElement = document.createElement('div');
//     const authorElement = document.createElement('h3');
//     authorElement.textContent = post.author;
//     const titleElement = document.createElement('h4');
//     titleElement.textContent = post.title;
//     const contentElement = document.createElement('p');
//     contentElement.textContent = post.content;

//     postElement.appendChild(authorElement);
//     postElement.appendChild(titleElement);
//     postElement.appendChild(contentElement);

//     postBox.appendChild(postElement);

//     return postBox;
// }

// const postsContainer = document.getElementById('postsContainer');

// storedPosts.forEach(post => {
//     const postElement = generateBlogPostElement(post);
//     postsContainer.appendChild(postElement);
// });
// localStorage.setItem('blogPosts', JSON.stringify(posts));