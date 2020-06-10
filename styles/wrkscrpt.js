const bear = document.createElement( "button");
bear.textContent = "growl";
bear.addEventListener("click", function(e) {
    console.log('GRRR')
}, false)
document.body.appendChild(bear);

let answere = 42;

getAnswere = function() {
    let msg = "The answere to life, the universe, everything is: ";
        console.log(msg + answere);
}

 getAnswere()

// new file 

var newItemCounter = 1;
var ourList = document.getElementById('ourList');
var ourButton = document.getElementById('ourButton');
var ourHeadline = document.getElementById('ourHeadLine');
var listItems = document.getElementById('ourList').getElementsByTagName('li');

ourList.addEventListener('click', activateItem);

function activateItem(e) {
    if ( e.target.nodeName  == 'LI') {
        ourHeadline.innerHTML = e.target.innerHTML;
        for ( i = 0 ; i < e.target.parentNode.children.length; i++) {
            e.target.parentNode.children[i].classList.remove('active');
        }
        e.target.classList.add('active');
    }
}

ourButton.addEventListener('click', createNewItem);





/*
for ( i = 0; i < listItems.length; i++) {
    listItems[i].addEventListener('click', activateItem);
}

function activateItem() {
    ourHeadline.innerHTML = this.innerHTML;

}
classList.remove('active')

*/