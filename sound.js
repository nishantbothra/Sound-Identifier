function start_recording() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/6cxl3nQUC/model.json", modelLoaded);
}
function modelLoaded() {
    console.log("model is initialized");
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;
        document.getElementById("sound_name").innerHTML = results[0].label;
        document.getElementById("sound_accuracy").innerHTML = (results[0].confidence * 100).toFixed(2) + "%";
        document.getElementById("sound_name").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";       
        document.getElementById("sound_accuracy").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")";       
        img = document.getElementById("alien_one");
        img1 = document.getElementById("alien_two");
        img2 = document.getElementById("alien_three");
        img3 = document.getElementById("alien_four");
        if (results[0].label == "Clap") {
            img.src = "alien_one.gif";
            img1.src = "alien_twopng.png";
            img2.src = "animal_one_dog.png";
            img3.src = "animal_two_lion.png";
        }
        else if (results[0].label == "Whistle") {
            img.src = "alien_one.png";
            img1.src = "alien_two.gif";
            img2.src = "animal_one_dog.png";
            img3.src = "animal_two_lion.png";
        }
        else if (results[0].label == "Bark") {
            img.src = "alien_one.png";
            img1.src = "alien_twopng.png";
            img2.src = "animal_one_dog.gif";
            img3.src = "animal_two_lion.png";
        }
        else if (results[0].label == "Roar") {
            img.src = "alien_one.png";
            img1.src = "alien_twopng.png";
            img2.src = "animal_one_dog.png";
            img3.src = "animal_two_lion.gif";
        }
        else {
            img.src = "backgroun.gif";
            img1.src = "backgroun.gif";
            img2.src = "backgroun.gif";
            img3.src = "backgroun.gif";

        }
    }
}

































