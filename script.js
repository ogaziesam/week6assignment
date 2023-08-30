let items = "rice,yam,beans,cocoyam,banana,semo,table,tyre,milk,phone,watch,chair";
let arrItems = items.split(",");
let edible = [];
let nonEdible = [];

for (let i = 0; i < arrItems.length; i++) {
    if (
        arrItems[i] === "rice" ||
        arrItems[i] === "yam" ||
        arrItems[i] === "beans" ||
        arrItems[i] === "cocoyam" ||
        arrItems[i] === "banana" ||
        arrItems[i] === "semo" ||
        arrItems[i] === "milk"
    ) {
        edible.push(arrItems[i]);
    } else {
        nonEdible.push(arrItems[i]);
    }
}

function edibleOutput() {
    console.log("Edible items:", edible.join(", "));
}

function nonEdibleOutput() {
    console.log("Non-edible items:", nonEdible.join(", "));
}

edibleOutput();
nonEdibleOutput();
