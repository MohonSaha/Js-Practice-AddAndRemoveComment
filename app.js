document.getElementById('add-btn').addEventListener('click', function(){
    const value = document.getElementById('text-input').value;
    const container = document.getElementById('parent-container');
    const li = document.createElement('li');
    li.innerText = value;
    // li.classList.add('li-item'); // we can use single or multiple class.
    li.classList.add('new-li', 'li-item');
    container.appendChild(li);
    
    const allList = document.getElementsByClassName('new-li');
    for(const item of allList){
        item.addEventListener('click', function(e){
            // e.target.style.display = 'none';  // It will remove the single item.
            e.target.parentNode.removeChild(e.target); // It will also remove the single item.
        })
    }



    document.getElementById('text-input').value = '';
})