document.body.addEventListener('click', (event) => {
    const clickedElement = event.target
    const imgs = document.querySelectorAll('.img')

    if (!clickedElement.classList.contains("img")){
        imgs.forEach((img) => img.classList.remove("open"));
        return;
    }

    if (clickedElement.classList.contains("open")) {
        clickedElement.classList.remove("open");
        return;
    }

    imgs.forEach((img) => img.classList.remove("open"))
    clickedElement.classList.add("open");
})

