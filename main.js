const categories = [
    {
        id: 1,
        category: "Watches",
    },
    {
        id: 2,
        category: "Telephones",
    },
    {
        id: 3,
        category: "Power Banks",
    },
    {
        id: 4,
        category: "Headphones",
    },
    {
        id: 5,
        category: "Audio",
    },
];

const products = [
    {
        id: 1,
        category_id: 2,
        name: "Apple",
        description:
            "Overprice phones.",
    },
    {
        id: 2,
        category_id: 5,
        name: "Sven",
        description:
            "MS-2050.",
    },
    {
        id: 3,
        category_id: 2,
        name: "Google pixel",
        description:
            "Best camera phone.",
    },

    {
        id: 4,
        category_id: 3,
        name: "Lenues",
        description:
            "Bla bla for Lenues.",
    },
    {
        id: 5,
        category_id: 3,
        name: "Powercase",
        description:
            "Bla bla for Powercase.",
    },
    {
        id: 6,
        category_id: 2,
        name: "Xiaomi",
        description:
            "Low price phones.",
    },
    {
        id: 7,
        category_id: 4,
        name: "Sony",
        description:
            "WH-1000XM3B.",
    },
    {
        id: 8,
        category_id: 1,
        name: "Samsung",
        description: "Smart on your hand.",
    },
    {
        id: 9,
        category_id: 4,
        name: "B & O",
        description:
            "Bang & Olufsen Beoplay Portal PC PS Black Anthracite.",
    },
    {
        id: 10,
        category_id: 3,
        name: "Lenovo",
        description:
            "Bla bla for Lenovo.",
    },
    {
        id: 11,
        category_id: 1,
        name: "Garmin",
        description:
            "Survival watches.",
    },
    {
        id: 12,
        category_id: 4,
        name: "Bose",
        description:
            "QuietComfort 45.",
    },
    {
        id: 13,
        category_id: 2,
        name: "One plus",
        description:
            "Phones for geeks.",
    },
    {
        id: 14,
        category_id: 5,
        name: "JBL",
        description:
            "Flip.",
    },
    {
        id: 15,
        category_id: 5,
        name: "Philips",
        description:
            "TAR-2506.",
    },
];

const container = document.querySelector(".container");
const productsUl = document.querySelector("#products");
const description = document.querySelector("#description");
const buyButton = document.querySelector("#buy-button");

container.addEventListener("click", (e) => {
    const target = e.target;
    let productsByCategory;

    if (target.closest("#categories")) {
        showProductList(productsByCategory, target);
    }

    if (target.closest("#products")) {
        showProductInfo(target, products);
    }

    if (target.closest("#buy-button")) {
        returnInitialState();
    }
});

function createArrayByCategory(categoryId) {
    const arrayCategory = products.filter((el) => {
        return el.category_id === categoryId;
    });
    return arrayCategory;
}

function showProductList(list, target) {
    list = createArrayByCategory(Number(target.dataset.categoryId));
    let productsList = productsUl.querySelectorAll("li");

    if (list.length > productsList.length) {
        const countIteration = list.length - productsList.length;

        for (let i = 0; i < countIteration; i++) {
            const li = document.createElement("li");
            productsUl.appendChild(li);
            console.log(productsUl.length);
        }
        productsList = productsUl.querySelectorAll("li");
    }

    productsList.forEach((el) => {
        el.innerText = "";
    });

    list.forEach((el, index) => {
        productsList[index].innerText = el.name;
    });

    productsUl.style.visibility = "visible";
}

function showProductInfo(target, listProduct) {
    const product = listProduct.find((el) => el.name === target.innerText);
    description.innerText = product.description;
    description.style.visibility = "visible";
    buyButton.style.visibility = "visible";
}

function returnInitialState() {
    const message = document.querySelector("#message");
    message.style.visibility = "visible";
    setTimeout(() => {
        message.style.visibility = "hidden";
        buyButton.style.visibility = "hidden";
        description.style.visibility = "hidden";
        productsUl.style.visibility = "hidden";
    }, 1000);
}