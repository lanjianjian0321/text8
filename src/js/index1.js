let data = [{
        "title": "导航1"
    },
    {
        "title": "导航1"
    },
    {
        "title": "导航1"
    },
    {
        "title": "导航1"
    },
    {
        "title": "导航1"
    },
    {
        "title": "导航1"
    }
]

function init() {
    let nav1 = document.querySelector(".nav1");
    console.log(nav1);

    nav1.innerHTML = data.map(item => {
        return ` <li>${item.title}</li>`
    }).join("");
}
init()