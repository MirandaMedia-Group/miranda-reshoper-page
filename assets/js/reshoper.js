const competitionRulesButton = document.querySelector(".competition-rules__button");
if (competitionRulesButton) {
    const competitionRulesText = document.querySelector(".competition-rules__text");
    competitionRulesButton.addEventListener("click", function (e) {
        competitionRulesText.classList.toggle("competition-rules__text--expanded");
        if (competitionRulesButton.innerHTML === "Přečíst celé") {
            competitionRulesButton.textContent = "Přečíst méně";
        } else {
            competitionRulesButton.textContent = "Přečíst celé";
        }
    });
}

// Add "active" class for page navigation by click

const pageNavItems = document.querySelectorAll(".page-nav__wrapper ul li a");

if (pageNavItems.length) {
    pageNavItems.forEach((item) => {
        item.addEventListener("click", function () {
            pageNavItems.forEach((item) => {
                item.classList.remove("--active");
            });
            item.classList.add("--active");
        });
    });
}

// Add "active" class for page navigation by scroll

function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset,
    };
}

const sections = document.querySelectorAll("section[id]");

if (sections.length && pageNavItems.length) {
    window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset + document.documentElement.clientHeight / 2;

        sections.forEach((section) => {
            let positionTop = getCoords(section).top;
            let id = section.id;

            console.log();

            if (scroll >= positionTop) {
                pageNavItems.forEach((item) => {
                    item.classList.remove("--active");
                    if (item.href.includes(section.id)) {
                        item.classList.add("--active");
                    }
                });
            }
        });
    });
}

// Animate pageNavItems bar

const pageNavBar = document.querySelector(".page-nav");

if (pageNavBar) {
    let positionY = pageNavBar.getBoundingClientRect().top;

    window.addEventListener("scroll", function () {
        let scroll = window.pageYOffset;

        if (scroll >= positionY) {
            pageNavBar.classList.add("--fixed");
        }
        if (scroll < positionY) {
            pageNavBar.classList.remove("--fixed");
        }
    });
}
