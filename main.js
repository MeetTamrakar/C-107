function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5soundclassifier('https://teachablemachine.withgoogle.com/models/0E82-sOMM/model.json',modelReady);

}
function modelReady(){
    classifier.classify(gotResults);
    
}
function gotResults(error,results){
    console.log('gotResult');

    
}
