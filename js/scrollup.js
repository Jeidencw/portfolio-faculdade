document.addEventListener("DOMContentLoaded", () => {
    const scrollUp = document.getElementById("scrollup")

    const handleScroll = () =>{
        if(window.scrollY > 500){
            scrollUp.classList.add("show__scroll")
        }else{
            scrollUp.classList.remove("show__scroll")
        }
    }

    window.addEventListener("scroll", handleScroll)
})