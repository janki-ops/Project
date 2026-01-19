const navlist=document.getElementById('navlist')
const hamburger=document.getElementById('hamburger')

addEventListener('click',()=>{
    navlist.classList.toggle('navlist-active')
})

var icon=document.getElementById("icon");
icon.onclick=function(){
    document.body.classList.toggle("dark-theme")
    if(document.body.classList.contains("dark-theme")){
        icon.src="images/moon.png";
    }
   
}