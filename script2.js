var tab=document.getElementsByClassName("tab")
var tabcontent=document.getElementsByClassName("tabcontent")

function opentab(name){
    for(t of tab)
        t.classList.remove("activetab");
    for(tc of tabcontent)
        tc.classList.remove("activecontent");
    event.currentTarget.classList.add("activetab")//used when a part of html is to be attached at a time and removed at the other operation
    document.getElementById(name).classList.add("activecontent")
}
/*event.currentTarget refers to the element the event listener was attached to — not the element that was clicked inside it (that’s event.target).
In this case, inside opentab(event):

    event.currentTarget → the actual <button> clicked

    event.target → can be <button> or an element inside it if nested HTML
    */