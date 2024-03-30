const nameInput=document.querySelector('#username');
const titleInput=document.querySelector('#title');
const blogInput=document.querySelector('#blogpost');
const button= document.querySelector('.button');

button.addEventListener('click',function(event) {
event.preventDefault();
const name=nameInput.value;
const title=titleInput.value;
const blog=blogInput.value;

if (name===''){
    displayMessage('You must enter a name');
}else if (title===''){
    displayMessage('You must enter a title');
}else if (blog==='') {
    displayMessage('You must write something to post');
}

localStorage.setItem('name',name);
localStorage.setItem('title', title);
localStorage.setItem('blog', blog);



})
