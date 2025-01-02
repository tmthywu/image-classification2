let circles = [];
let squares = [];
let triangles = [];

preload();

function preload() {
    for (let i = 0; i < 100; i++) {
        let index = padNum(i + 1, 4);
        console.log(index);

        let img1 = new Image();
        img1.src = `data/circle${index}.png`;
        circles[i] = img1;
        let img2 = new Image();
        img2.src = `data/square${index}.png`;
        squares[i] = img2;
        let img3 = new Image();
        img3.src = `data/triangle${index}.png`;
        triangles[i] = img3;

    }
}

let shapeClassifier;

setup();

function setup() {
    //background(0);
    //image(squares[0], 0, 0, width, height);
    
    let options = {
        inputs: [64, 64, 4],
        outputs: ['label'],
        task: 'imageClassification',
        debug: true
    };
    shapeClassifier = ml5.neuralNetwork(options);

    for (let i = 0; i < circles.length; i++) {
        shapeClassifier.addData({image: circles[i]}, {label: 'circle'});
        shapeClassifier.addData({image: squares[i]}, { label: 'square' });
        shapeClassifier.addData({image: triangles[i]}, { label: 'triangle' });
    }
    
    shapeClassifier.normalizeData();

    shapeClassifier.train({ epochs: 50 }, finishedTraining);
}

function finishedTraining() {
    console.log('finished training!');
    shapeClassifier.save();
}

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