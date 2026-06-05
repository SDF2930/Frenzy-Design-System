window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if(loader){
        loader.style.opacity = "0";

        setTimeout(() => {
            loader.style.display = "none";
        }, 500);
    }

});

window.addEventListener("scroll", () => {

    const h = document.querySelector(".hero h1");

    if(h){
        h.style.transform =
        `translateY(${window.scrollY * 0.15}px)`;
    }

});