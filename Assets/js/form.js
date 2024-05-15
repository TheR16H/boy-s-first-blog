const blogForm = document.getElementById('blogForm')
const titleEl = document.getElementById('title')
const authorEl = document.getElementById('author')
const contentEl = document.getElementById('content')

var blogsArray = []

blogForm.addEventListener('submit', function(event) {
    event.preventDefault();
    console.log("Submitting...");

    // we need to caputer the input data
    console.log(titleEl.value)
    console.log(authorEl.value)
    console.log(contentEl.value)
    
    var author = authorEl.value
    var title = titleEl.value
    var content = contentEl.value
    // what should we do with our data?
    // create a temp dataset
    var newBlog = {
        name: author,
        title: title,
        content: content
    }
    console.log("new Data: ", newBlog);
    console.log("type Data: ", typeof newBlog);  // object

    // we want to PERSIST or SAVE the data to LOCAL STORAGE

    //localStorage.getItem('key')
    //localStorage.setItem("key", data)
    var jsonData = JSON.stringify(newBlog) 
    console.log("JSOn data: ", jsonData)
    console.log("JSOn type: ", typeof jsonData)
    
    // JSON Dataset  --> stringify()  parse()
    
    var currentData = checkLocalStorage();
    // how do i ADD new data
    currentData.push(newBlog);

    console.log("data: ", currentData)
    console.log("type: ", typeof currentData)  // js Object type
    
    var newJSONdata = JSON.stringify(currentData);
    console.log("data: ", newJSONdata)
    console.log("type: ", typeof newJSONdata)  // JSON STRING type

    // Here we are SETTING data into LOCAL STORAGE
    localStorage.setItem('blog', newJSONdata);

    // Array --> [1, 2, 3, 4] || ["one", "two", "three"] || [ {}, {}]

   location.href = "./blog.html";
})


function checkLocalStorage() {

    // dataset initalization (does it exisit yet? if not set a value)
    if(localStorage.getItem('blog')) {
        blogsArray = JSON.parse(localStorage.getItem('blog'))
    } else {
        blogsArray = []
    }

    // we have the saved data (in JS format)

    return blogsArray;
}


