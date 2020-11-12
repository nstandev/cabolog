var header = document.getElementById("header")
console.log("Header", header)
window.onscroll = () => {
    if(document.documentElement.scrollTop > 50){
        // console.log(document.querySelectorAll(".nav-menu a"))
        // document.querySelectorAll(".nav-menu a").forEach((item)=>{
        //     console.log(item)
        //     item.style.color = "white"
        // })
        header.classList.add("bg-header-scroll");

        console.log(header)
        return
    }else{
        // alert("less")
        console.log(document.documentElement.scrollTop)
        // console.log("scrollY")
        header.classList.remove("bg-header-scroll")
    }  
}