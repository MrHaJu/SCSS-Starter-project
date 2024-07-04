
// Video Play wenn es im Bild ist und Pause Wenn es aus dem Sichtfeld gerät
function checkScroll() {
    const videos = document.querySelectorAll(".story__video");

    for (const video of videos) {
        const boundingRect = video.getBoundingClientRect();
        const visible = (boundingRect.top + boundingRect.height > 0 &&
            boundingRect.top < window.innerHeight);

            if (visible) {
                video.play();
                //console.log("play");
            } else {
                video.pause();
                //console.log("pause");
            }
        
    }
}

checkScroll();
window.addEventListener('load', checkScroll, false);
window.addEventListener('scroll', checkScroll, false);
window.addEventListener('resize', checkScroll, false);

//Mausposition in einer CSS Klasse ausgeben
function addMousePositionToCss() {
    const elements = document.querySelectorAll(".offers__card-container");
    for(const element of elements) {
        element.addEventListener("mousemove", function(e) {
            var rect = element.getBoundingClientRect();
            var x = e.clientX - rect.left; 
            var y = e.clientY - rect.top;
            element.style = "--mouse-x:" + (x / element.offsetWidth) + ";--mouse-y:" + (y / element.offsetHeight) + ";";
        });
        element.addEventListener("mouseleave", function(e) {
            element.style = "";
        });
    }
}
 
if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(addMousePositionToCss, 1);
} else {
window.addEventListener("load", addMousePositionToCss, false);
}