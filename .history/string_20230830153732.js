function processString(input) {
    const inputArray = input.split("");

    const containerA = [];
    const containerB = [];
    const containerD = [];
    const containerY = [];

    for (let i = 0; i < inputArray.length; i++) {
        const character = inputArray[i];
        if (character === "a") {
            containerA.push(character);
        } else if (character === "b") {
            containerB.push(character);
        } else if (character === "d") {
            containerD.push(character);
        } else if (character === "y") {
            containerY.push(character);
        }
    }

    console.log(containerA.length);
    console.log(containerB.length);
    console.log(containerD.length);
    console.log(containerY.length);
}

processString("abdsgyhidsaadgbdaasbvcydsaabdgsaayre");
