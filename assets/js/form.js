const nameInput=document.querySelector('#username');
const titleInput=document.querySelector('#title');
const blogInput=document.querySelector('#blogpost');
const button= document.querySelector('.button');




button.addEventListener('click',function(event) {
event.preventDefault();
let storeBlogs={
    names:nameInput.value,
    title:titleInput.value,
    blog:blogInput.value,
   }

let blog=JSON.parse(localStorage.getItem('blogs'))

if(!blog){
    blog=[]
}
blog.push(storeBlogs);

if (!storeBlogs.names){
    alert('You must enter a name');
}else if (!storeBlogs.title){
    alert('You must enter a title');
}else if (!storeBlogs.blog) {
    alert('You must write something to post');
}else{

localStorage.setItem('blogs',JSON.stringify(blog));
location.href= './blog.html';

}

})
