let myNeuralNetwork;
let almonds = [];
let brazilNuts = [];
let cashews = [];
let coconut = [];
let hazelnuts = [];
let macadamia = [];
let pecans = [];
let pineNuts = [];
let pistachios = [];
let walnuts = [];

preload();
setup();

function preload() {
  for (let i = 1; i <= 109; i++) {
    let image = new Image();
    image.src = "archive/train/almonds/" + padNum(i, 3) + ".jpg";
    almonds.push(image);
  }

  for (let i = 1; i <= 138; i++) {
    let image = new Image();
    image.src = "archive/train/brazil nuts/" + padNum(i, 3) + ".jpg";
    brazilNuts.push(image);
  }

  for (let i = 1; i <= 136; i++) {
    let image = new Image();
    image.src = "archive/train/cashews/" + padNum(i, 3) + ".jpg";
    cashews.push(image);
  }

  for (let i = 1; i <= 94; i++) {
    let image = new Image();
    image.src = "archive/train/coconut/" + padNum(i, 2) + ".jpg";
    coconut.push(image);
  }

  for (let i = 1; i <= 120; i++) {
    let image = new Image();
    image.src = "archive/train/hazelnuts/" + padNum(i, 3) + ".jpg";
    hazelnuts.push(image);
  }

  for (let i = 1; i <= 101; i++) {
    let image = new Image();
    image.src = "archive/train/macadamia/" + padNum(i, 3) + ".jpg";
    macadamia.push(image);
  }

  for (let i = 1; i <= 161; i++) {
    let image = new Image();
    image.src = "archive/train/pecans/" + padNum(i, 3) + ".jpg";
    pecans.push(image);
  }

  for (let i = 1; i <= 98; i++) {
    let image = new Image();
    image.src = "archive/train/pine nuts/" + padNum(i, 2) + ".jpg";
    pineNuts.push(image);
  }

  for (let i = 1; i <= 110; i++) {
    let image = new Image();
    image.src = "archive/train/pistachios/" + padNum(i, 3) + ".jpg";
    pistachios.push(image);
  }

  for (let i = 1; i <= 96; i++) {
    let image = new Image();
    image.src = "archive/train/walnuts/" + padNum(i, 2) + ".jpg";
    walnuts.push(image);
  }
}

function setup() {
  ml5.setBackend("webgl");
  let options = {
    inputs: [224, 224, 4],
    task: "classification",
    debug: true
  };

  console.log(myNeuralNetwork);
  myNeuralNetwork = ml5.neuralNetwork(options);
  console.log(myNeuralNetwork);

  for (let i = 0; i < almonds.length; i++) {
    myNeuralNetwork.addData(almonds[i], { label: "almonds" });
  }
  console.log(myNeuralNetwork);
  for (let i = 0; i < brazilNuts.length; i++) {
    myNeuralNetwork.addData(brazilNuts[i], { label: "brazil nuts" });
  }
  console.log(myNeuralNetwork);
  for (let i = 0; i < cashews.length; i++) {
    myNeuralNetwork.addData(cashews[i], { label: "cashews" });
  }
  for (let i = 0; i < coconut.length; i++) {
    myNeuralNetwork.addData(coconut[i], { label: "coconut" });
  }
  for (let i = 0; i < hazelnuts.length; i++) {
    myNeuralNetwork.addData(hazelnuts[i], { label: "hazelnuts" });
  }
  for (let i = 0; i < macadamia.length; i++) {
    myNeuralNetwork.addData(macadamia[i], { label: "macadamia" });
  }
  for (let i = 0; i < pecans.length; i++) {
    myNeuralNetwork.addData(pecans[i], { label: "pecans" });
  }
  for (let i = 0; i < pineNuts.length; i++) {
    myNeuralNetwork.addData(pineNuts[i], { label: "pine nuts" });
  }
  for (let i = 0; i < pistachios.length; i++) {
    myNeuralNetwork.addData(pistachios[i], { label: "pistachios" });
  }
  for (let i = 0; i < walnuts.length; i++) {
    myNeuralNetwork.addData(walnuts[i], { label: "walnut" });
  }

  myNeuralNetwork.normalizeData();
  const trainingOptions = {
    epochs: 32,
    batchSize: 12,
  };
  myNeuralNetwork.train(trainingOptions, finishedTraining);
  console.log(myNeuralNetwork);
}

function finishedTraining() {
  console.log("finished training");
  console.log(myNeuralNetwork)
  // classify();
}

// function classify() {
//   let image = new Image();
//   image.src = "archive/test/almonds/1.jpg";
//   let input = image;
//   myNeuralNetwork.classify(input, handleResults);
// }

// function handleResults(results, error) {
//   if (error) {
//       console.log(error);
//       return;
//   }
//   console.log(results); 
// }


function padNum(num, paddingDigits) {
  let numDigits = 0;
  let tempNum = num;
  while (tempNum > 0) {
    tempNum = Math.floor(tempNum / 10);
    numDigits++;
  }

  let padding = "";
  for (let i = 0; i < paddingDigits - numDigits; i++) {
    padding += "0";
  }

  return padding + num;
}