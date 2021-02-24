Webcam.set({
    width:310,
    height:300,
    image_format:"png",
    png_quality:90,
    constraints:{
        facingMode:"enviornment"
    }
})
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("camera").innerHTML="<img id='onoda' src='"+data_uri+"'/>";
    }
    )
}
console.log(ml5.version,"ml5.version");
classifier=ml5.imageClassifier("MobileNet",modelLoaded);
function modelLoaded(){
  console.log("model");
}
function modelLoaded45(){
    console.log("model");
  }
function check(){
    img=document.getElementById("onoda");
    classifier.classify(img, gotResult);
}
function gotResult(error,result){
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("object_name_1").innerHTML=result[0].label;
        document.getElementById("object_name_2").innerHTML=","+result[1].label;
    }
    }