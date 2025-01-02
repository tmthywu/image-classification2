// set global - needed for external libraries
/* globals ml5 */

let message = document.querySelector("#message");
let myNeuralNetwork;

start()

function start() {
  const options = {
    dataUrl: './iris.csv',
    inputs: ['sepal_length', 'sepal_width', 'petal_length', 'petal_width'],
    outputs: ['species'],
    task: 'classification',
    debug: true
  }

  // uncomment to create the neural network
  myNeuralNetwork = ml5.neuralNetwork(options, dataLoaded)
}

function dataLoaded() {
  message.innerHTML = "Finished loading - Start training"

  myNeuralNetwork.normalizeData()
  const trainingOptions = {
    epochs: 32,
    batchSize: 12
  }

  myNeuralNetwork.train(trainingOptions, finishedTraining)
}

function finishedTraining() {
  console.log("Finished training!")
  message.innerHTML = "Finished training"

  // to do: test if we can classify a new flower

  // to do: save the model. in part 2 we will load the model
  myNeuralNetwork.save()

}

// function classify(input) {
//     nn.classify(input, handleResults)
// }

// function handleResults(error, result) {
//     if (error) console.error(error)
//     console.log(result[0].label + " confidence:" + result[0].confidence)
// }

