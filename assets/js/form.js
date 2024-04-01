const nameInput=document.querySelector('#username');
const titleInput=document.querySelector('#title');
const blogInput=document.querySelector('#blogpost');
const button= document.querySelector('.button');




button.addEventListener('click',function(event) {
event.preventDefault();
let storeBlogs={   //stores the inputs as an object
    names:nameInput.value,
    title:titleInput.value,
    blog:blogInput.value,
   }

let blog=JSON.parse(localStorage.getItem('blogs'))  //check to see if there are any previously stored blogs

if(!blog){    //if there are no stored blogs, it creates an empty array for new blogs to be stored
    blog=[]
}
blog.push(storeBlogs); //pushes new stored blogs into the array we created so that it doesnt overwrite

if (!storeBlogs.names){              //if there are any empty fields an alert pops up
    alert('You must enter a name');
}else if (!storeBlogs.title){
    alert('You must enter a title');
}else if (!storeBlogs.blog) {
    alert('You must write something to post');
}else{

localStorage.setItem('blogs',JSON.stringify(blog)); //establishes how the blogs will be stored in local storage 
location.href= './blog.html';  //when we click the submit button we get sent to the second page

}

})
