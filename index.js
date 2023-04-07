const cards = document.querySelectorAll(".card");

window.onload = function () {
    cards.forEach((card) => {
        let seeMoreBtn = card.querySelector(".see-more-btn");
        let textContent = card.querySelector(".card-content .text")

        if (textContent.scrollHeight == textContent.clientHeight) {
            seeMoreBtn.style.display = "none";
            textContent.style.height = "fit-content";
        } else {
            card.classList.add("gradient")
        }
    });
}

cards.forEach((card) => {
    let seeMoreBtn = card.querySelector(".see-more-btn");
    let textContent = card.querySelector(".card-content .text")

    seeMoreBtn.addEventListener("click", () => {
        card.classList.toggle("active");
        card.classList.toggle("gradient");

        if (card.classList.contains("active")) {
            seeMoreBtn.innerHTML = "See Less";
            textContent.style.height = textContent.scrollHeight + "px";
        } else {
            seeMoreBtn.innerHTML = "See More";
            textContent.style.height = "100px";
        }
    });

});


const cards2 = document.querySelectorAll(".card2");

window.onload = function () {
    cards2.forEach((card2) => {
        let seeMoreBtn2 = card2.querySelector(".see-more-btn2");
        let textContent2 = card2.querySelector(".card-content2 .text2")

        if (textContent2.scrollHeight == textContent2.clientHeight) {
            seeMoreBtn2.style.display = "none";
            textContent2.style.height = "fit-content";
        } else {
            card2.classList.add("gradient")
        }
    });
}

cards2.forEach((card2) => {
    let seeMoreBtn2 = card2.querySelector(".see-more-btn2");
    let textContent2 = card2.querySelector(".card-content2 .text2")

    seeMoreBtn2.addEventListener("click", () => {
        card2.classList.toggle("active");
        card2.classList.toggle("gradient");

        if (card2.classList.contains("active")) {
            seeMoreBtn2.innerHTML = "See Less";
            textContent2.style.height = textContent2.scrollHeight + "px";
        } else {
            seeMoreBtn2.innerHTML = "See More";
            textContent2.style.height = "100px";
        }
    });

});