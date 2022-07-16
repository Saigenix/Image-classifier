// Your code will go here
// open up your console - if everything loaded properly you should see the correct version number
console.log('ml5 version:', ml5.version);
function previewFile() {
    var preview = document.querySelector('img');
    var txt = document.querySelector('#pre');
    var file    = document.querySelector('input[type=file]').files[0];
    var pro = document.querySelector('#pro');
    var reader  = new FileReader();
  
    reader.onloadend = function () {
      // console.log(reader.result);
      preview.src = reader.result;
      txt.innerHTML = "loading...";
      pro.innerHTML = "loading...";
      ml5.imageClassifier('MobileNet')
  .then(classifier => classifier.classify(preview))
  .then(results => {
    console.log(results);
    txt.innerText = results[0].label;
    pro.innerText = (results[0].confidence.toFixed(3))*100 + "%";
  });
    }
  
    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  }

    