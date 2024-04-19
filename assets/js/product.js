
const filterShowBtn = document.querySelector(".filter-show-btn");
const productsSetContainer = document.querySelector(".products-set-container");
filterShowBtn.addEventListener('click', () => {
    if (!productsSetContainer.classList.contains("active")) {
        productsSetContainer.classList.add("active");
        document.body.style.overflow = "hidden"
    }
    else {
        productsSetContainer.classList.remove("active");
        document.body.style.overflow = "auto"
    }
})
document.querySelector(".close-filter").addEventListener("click", (e) => {
    if (productsSetContainer.classList.contains("active")) {
        productsSetContainer.classList.remove("active");
        document.body.style.overflow = "auto"
    }
})
// cateogory script start
const categoryBtns = document.querySelectorAll('.category-btn');
categoryBtns.forEach(button => {
    button.addEventListener('click', () => {
        // Remove the 'active' class from all tab buttons
        categoryBtns.forEach(button => {
            button.classList.remove('active');
        });

        // Add the 'active' class to the clicked tab button
        button.classList.add('active');
    });
});

const skipSlider = document.getElementById("skipstep");
const skipValues = [
    document.getElementById("skip-value-lower"),
    document.getElementById("skip-value-upper")
];
// category script end

// range slider script start
noUiSlider.create(skipSlider, {
    start: [50, 140],
    connect: true,
    behaviour: "drag",
    step: 1,
    range: {
        min: 0,
        max: 200
    },
    format: {
        from: function (value) {
            return parseInt(value);
        },
        to: function (value) {
            return parseInt(value);
        }
    }
});

skipSlider.noUiSlider.on("update", function (values, handle) {
    skipValues[handle].innerHTML = values[handle];
});
// ===========================================range slider script end========================
// ===========================================pagination script start========================
let itms = 4; // itemsPerPage
let stpg = 0; // startPage
let pltd = 4; // pageLinksToDisplay
let winw = window.innerWidth;

function optionsByWindowSize() {
    winw = window.innerWidth;
    if (winw > 1600) { itms = 4; pltd = 10; }
    else if (winw > 1230) { itms = 4; pltd = 8; }
    else if (winw > 980) { itms = 3; pltd = 6; }
    else if (winw > 750) { itms = 3; pltd = 4; }
    else if (winw > 510) { itms = 2; pltd = 4; }
    else { itms = 1; pltd = 1; }
}

function reportWindowSize() {
    optionsByWindowSize();
    //purePajination Script - START
    if (document.readyState === "complete") {
        var gallery = new purePajinate({
            containerSelector: '.items',
            itemSelector: '.items > div',
            navigationSelector: '.pagination',
            /*wrapAround: true,*/
            pageLinksToDisplay: pltd,
            showFirstLast: true,
            navLabelPrev: '&nbsp;&nbsp;&nbsp;',
            navLabelNext: '&nbsp;&nbsp;&nbsp;',
            navLabelFirst: '&nbsp;&nbsp;&nbsp;',
            navLabelLast: '&nbsp;&nbsp;&nbsp;',
            itemsPerPage: itms,
            startPage: stpg
        });
    } //purePajination Script - END
}

document.onreadystatechange = reportWindowSize;
window.onresize = reportWindowSize;