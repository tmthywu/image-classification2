const classifier = ml5.imageClassifier('darknet', () => console.log('Model Loaded'));
let image = document.getElementById('image');;
image.src = "";

function loadFile(event) {
    image.src = URL.createObjectURL(event.target.files[0]);
}

function predict() {
    if (image.src === "file:///Users/jiabaowu/repos/image-classification/index9.html") {
        alert('Please upload an image first!');
        return;
    }
    classifier.classify(image, (results) => {
        const output = results[0].label + " " + Math.round(results[0].confidence*1000)/10 + "%";
        console.log(results);
        document.getElementById('output').textContent = output;
    });
}