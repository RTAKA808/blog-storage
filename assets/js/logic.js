const darkLight=document.querySelector('#darklight')

let mode='dark'

darkLight.addEventListener('click',function(){  //adds even listener for the dark/light mode button
        
    if (mode==='dark') {
        mode='light';
    document.body.classList.add('light');
    document.body.classList.remove('dark')
    }
    else {
        mode='dark';
        document.body.classList.add('dark');
        document.body.classList.remove('light');

    }
})