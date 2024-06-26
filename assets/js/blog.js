const blogPosts=document.querySelector('#blogposts')
const button=document.querySelector('.button')

const body=document.querySelector('body')



function renderBlog(){
    let storedBlogs=JSON.parse(localStorage.getItem('blogs'));  //retrieves the form data from local storage as an array full of object(s)
    if(storedBlogs) {       //if there are stored blogs then it loops through the array
        for(let index=0; index<storedBlogs.length;index++){
            let storedBlog=storedBlogs[index];  //variable which contains each thing in the array
        let blogPostContainer=document.createElement('div');   //variable for creating a new div to act as the container for the posts
        let blogContent=document.createElement('p')  //variable for creating new paragraphs inside of the container for each field of text that was entered in the previous page
        let blogTitle=document.createElement('p');
        let blogUsername=document.createElement('p');
        
        
        blogContent.innerHTML=storedBlog.blog  //prints the text content with the associated key into the newly created "p"
        blogTitle.innerHTML=storedBlog.title
        blogUsername.innerHTML=(`Posted by ${storedBlog.names}`)

        
        blogPosts.appendChild(blogPostContainer); //targets the original div and "appends" aka creates the new div for the associated object
        blogPostContainer.appendChild(blogTitle); //adds a new "p" inside of the created div
        blogPostContainer.appendChild(blogContent);
        blogPostContainer.appendChild(blogUsername);
        blogPostContainer.className="newdiv"    //gives the new div/post container a class to be modified in css
        }

    }}

 

    button.addEventListener('click',function(){    //adds functionality to "back" button that links back to the landing page
        location.href='./index.html'
    })
    document.addEventListener('DOMContentLoaded',renderBlog)