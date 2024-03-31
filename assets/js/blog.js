const blogPosts=document.querySelector('#blogposts')
const button=document.querySelector('.button')
const darkLight=document.querySelector('#darklight')
const body=document.querySelector('body')

let mode='dark'

function renderBlog(){
    let storedBlogs=JSON.parse(localStorage.getItem('blogs'));
    if(storedBlogs) {
        for(let index=0; index<storedBlogs.length;index++){
            let storedBlog=storedBlogs[index];
        let blogPostContainer=document.createElement('div');
        let blogContent=document.createElement('p')
        let blogTitle=document.createElement('p');
        let blogUsername=document.createElement('p');
        
        
        blogContent.innerHTML=storedBlog.blog
        blogTitle.innerHTML=storedBlog.title
        blogUsername.innerHTML=(`Posted by ${storedBlog.names}`)

        
        blogPosts.appendChild(blogPostContainer);
        blogPostContainer.appendChild(blogTitle);
        blogPostContainer.appendChild(blogContent);
        blogPostContainer.appendChild(blogUsername);
        blogPostContainer.className="newdiv"
        }

    }}

    darkLight.addEventListener('click',function(){
        
        if (mode==='dark') {
            mode='light';
        body.setAttribute('class','light')
        }
        else {
            mode='dark';
            body.setAttribute('class','dark');
        }
    })

    button.addEventListener('click',function(){
        location.href='./landing.html'
    })
    document.addEventListener('DOMContentLoaded',renderBlog)