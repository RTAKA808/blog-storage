const blogPosts=document.querySelector('#blogposts')



function renderBlog(){
    let storedBlogs=JSON.parse(localStorage.getItem('blogs'));
    if(storedBlogs) {
        const blogPostContainer=document.createElement('div');
        const blogContent=document.createElement('p')
        const blogTitle=document.createElement('p');
        const blogUsername=document.createElement('p');
        
        blogContent.innerHTML=storedBlogs.blog
        blogTitle.innerHTML=storedBlogs.title
        blogUsername.innerHTML=(`Posted by ${storedBlogs.names}`)

        blogPosts.appendChild(blogPostContainer);
        blogPostContainer.appendChild(blogTitle);
        blogPostContainer.appendChild(blogContent);
        blogPostContainer.appendChild(blogUsername);
        blogPostContainer.className="newdiv"


    }}
    document.addEventListener('DOMContentLoaded',renderBlog)