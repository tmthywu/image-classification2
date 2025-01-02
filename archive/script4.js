/*
 * 👋 Hello! This is an ml5.js example made and shared with ❤️.
 * Learn more about the ml5.js project: https://ml5js.org/
 * ml5.js license and Code of Conduct: https://github.com/ml5js/ml5-next-gen/blob/main/LICENSE.md
 *
 * This example demonstrates training a color classifier through ml5.neuralNetwork.
 */

// Step 1: load data or create some data
let data = [
    { r: 255, g: 0, b: 0, color: "red-ish" },
    { r: 254, g: 0, b: 0, color: "red-ish" },
    { r: 253, g: 0, b: 0, color: "red-ish" },
    { r: 0, g: 255, b: 0, color: "green-ish" },
    { r: 0, g: 254, b: 0, color: "green-ish" },
    { r: 0, g: 253, b: 0, color: "green-ish" },
    { r: 0, g: 0, b: 255, color: "blue-ish" },
    { r: 0, g: 0, b: 254, color: "blue-ish" },
    { r: 0, g: 0, b: 253, color: "blue-ish" },
];

let classifier;
let r = 255;
let g = 0;
let b = 0;

setup();

function setup() {
    // For this example to work across all browsers
    // "webgl" or "cpu" needs to be set as the backend
    ml5.setBackend("webgl");

    // Step 2: set your neural network options
    let options = {
        task: "classification",
        debug: true,
    };

    // Step 3: initialize your neural network
    classifier = ml5.neuralNetwork(options);

    // Step 4: add data to the neural network
    for (let i = 0; i < data.length; i++) {
        let item = data[i];
        let inputs = [item.r, item.g, item.b];
        let outputs = [item.color];
        classifier.addData(inputs, outputs);
    }

    // Step 5: normalize your data;
    classifier.normalizeData();

    // Step 6: train your neural network
    const trainingOptions = {
        epochs: 32,
        batchSize: 12,
    };
    classifier.train(trainingOptions, finishedTraining);
}

// Step 7: use the trained model
function finishedTraining() {
    console.log("finished training");
    classify();
}

// Step 8: make a classification
function classify() {
    const input = [r, g, b];
    classifier.classify(input, handleResults);
}

// Step 9: define a function to handle the results of your classification
function handleResults(results, error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log(results); // {label: 'red', confidence: 0.8};
}
