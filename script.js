const btn = document.querySelector(".drop-btn");
const dropcontent = document.querySelector(".drop-items");
var flag = false;
btn.addEventListener("click",function(){
    if(!flag){
        dropcontent.style.display = "block";
        dropcontent.style.transform = "scale(1.0)";
        flag = true
    }
    else{
        dropcontent.style.display = "none";
        flag = false;
    }
})