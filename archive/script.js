const classifier = ml5.imageClassifier("darknet");

function loadFile(event) {
    var image = document.getElementById("image");
    image.src = URL.createObjectURL(event.target.files[0]);
}

function predict() {
    classifier.classify(image, gotResult);
} 

function gotResult(results) {
    console.log(results)
    for (let o of results) {
        console.log("label: " + o.label);
        console.log("confidence: " + o.confidence);
    }
}