// Define the neural network options
const options = {
    inputs: 2, // Number of input neurons
    outputs: 1, // Number of output neurons
    task: 'regression', // Task type: 'classification' or 'regression'
    debug: true // Enable debugging
};

// Create the neural network
const neuralNetwork = ml5.neuralNetwork(options);

// Add training data
neuralNetwork.addData([0, 0], [0]);
neuralNetwork.addData([0, 1], [1]);
neuralNetwork.addData([1, 0], [1]);
neuralNetwork.addData([1, 1], [0]);

// Normalize the data
neuralNetwork.normalizeData();

// Train the model
neuralNetwork.train({ epochs: 32 }, finishedTraining);

// Function to run after training
function finishedTraining() {
    console.log('Model trained!');
    // // Make a prediction
    // neuralNetwork.predict([0, 0], function (err, results) {
    //     console.log(results);
    // });
}