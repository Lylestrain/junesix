 //     Java Script Event Listeners
 // Event-driven programing: your program waits for events and uses them 
 // as triggers to run the next function(s).

 //  object.addEventListener(event, function)


 //  myDiv.addEventListener('click', doSomething)

 //  function doSomethng(ev) {
 //    console.log(ev.type)
 //    console.log( ev.target)
 //    return 7;
 //  }

 document.addEventListener('DOMContentLoaded', init);

 function init(){

    let btn = document.getElementById('btn');
    let lnk = document.getElementById('lnk');
    let txt = document.getElementById('txt');

    txt.addEventListener('input', ev =>{
        console.log( ev.type, ev.target, ev.target.value);
    });
    txt.addEventListener('change', ev =>{
        console.log( ev.type, ev.target, ev.target.value);
    });
    txt.addEventListener('blur', ev =>{
        console.log( ev.type, );
    });
    lnk.addEventListener('click', ev =>{
        ev.preventDefault();
        console.log( ev.type, ev.target, ev.currentTarget );
    });

    btn.addEventListener('click', buttonClicked);

}
 function buttonClicked(ev) {
     console.log( ev.type, ev.target, ev.currentTarget )
 }

 /*

 //  The following two blocks of code are the same:
 //  The first block is reusable because the function is named.

lnk.addEventListener('click', linkClicked);
 function linkClicked(ev) {
     ev.preventDefault(); // stops the link from being followed.
     console.log( ev.type, ev.target, ev.currentTarget )
 }
 lnk.addEventListener('click', ev =>{
    ev.preventDefault();
    console.log( ev.type, ev.target, ev.currentTarget );
 });

*/