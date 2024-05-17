

// Retrieves data from local storage
blogsArray = JSON.parse(localStorage.getItem('blog'));

// accesses the elements after retrieving the data
const blogForm = document.getElementById('blogForm');
const authorEl = document.getElementById('author');
const titleEl = document.getElementById('title');
const contentEl = document.getElementById('content');

console.log("Stored Data: ", blogsArray)

const postContainer = document.getElementById('postContainer');

blogsArray.forEach(blog => {
    const postElement = document.createElement('div');
    
    const authorEl = document.createElement('h3');
    authorEl.textContent = blog.name;

    const titleEl = document.createElement('h4');
    titleEl.textContent = blog.title;

    const contentEl = document.createElement('p');
    contentEl.textContent = blog.content;

    postElement.append(authorEl);
    postElement.append(titleEl);
    postElement.append(contentEl);

    postContainer.append(postElement);
    console.log("The appends are working...probably")

});


//old data & process before i condensed everything and retyped it a new way.

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
//     const postEl = document.createElement('div');

//     const authorEl = document.createElement('h3');
//     authorEl.textContent = post.author;

//     const titleEl = document.createElement('h4');
//     titleEl.textContent = post.title;

//     const contentEl = document.createElement('p');
//     contentEl.textContent=post.content;

//     postElement.appendChild(authorEl);
//     postElement.appendChild(titleEl);
//     postEl.appendChild(contentEl);
    
//     return postEl;
// };


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

//     postElement.appendChild(authorEl);
//     postElement.appendChild(titleEl);
//     postElement.appendChild(contentEl);

//     postBox.appendChild(postElement);

//     return postBox;
// }

// const postsContainer = document.getElementById('postsContainer');

// storedPosts.forEach(post => {
//     const postElement = generateBlogPostElement(post);
//     postsContainer.appendChild(postElement);
// });
// localStorage.setItem('blogPosts', JSON.stringify(posts));


// if (!storedPosts) {
//     let storedPosts = JSON.parse(localStorage.getItem('blog'));
// }

// // Check if postsContainer is already declared
// if (!postsContainer) {
//     let postsContainer = document.getElementById('posts-container'); // Assuming you have a container in your HTML with id 'posts-container'
// }

// if (storedPosts && postsContainer) {
//     storedPosts.forEach(post => {
//         const postElement = generateBlogPostElement(post);
//         postsContainer.appendChild(postElement);
//     });
// }
// const dataContainer = document.getElementById('postContainer'); 
// // Append data from array1
// blogsArray.forEach(item => {
//     const itemElement = document.createElement('p');
//     itemElement.textContent = item;
//     dataContainer.appendChild(itemElement); 
// });