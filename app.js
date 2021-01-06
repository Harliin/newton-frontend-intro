var scrollToTopbtn = document.getElementById("scrolltoTop")
var rootElement = document.documentElement



function scrollToTop() {
    console.log("hello");
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
      })
}

scrollToTopbtn.addEventListener("click", scrollToTop)