// function imgSwap(id) {
//   document.getElementById("ps4c").src = id;
// }

// var setTwo = document.getElementById("ps4c");

// // A = cross B = circle Y = triangle X = square

// // setTwo.addEventListener("dblclick", function () {
// //   document.getElementById("circle").src = "images/b.jpg";
// //   document.getElementById("cross").src = "images/a.jpg";
// //   document.getElementById("triangle").src = "images/y.jpg";
// //   document.getElementById("square").src = "images/x.jpg";
// // });

// var toggle = 0;

// document.getElementById("buttons").addEventListener("dblclick", function(){
//   if(toggle == 0)
//   {
// document.getElementById("circle").src = "images/b.jpg";
// toggle = 1;
//   }
//   else{
//     document.getElementById("circle").src = "images/circle.jpg";
//     toggle = 0;
//   }
// })
var psB = [
  "circle.png",
  "cross.png",
  "square.png",
  "triangle.png",
];
var xBox = ["b.jpg", "a.jpg", "y.jpg", "x.jpg"];
var path = "images/";
var toggle = 0;
document.getElementById("buttons").addEventListener("dblclick", function () {
  if (toggle == 0) {
    changeImages(psB);
    toggle = 1;
  }
   else {
    changeImages(xBox);
    toggle = 0;
  }
});
function changeImages(anArray) {
  document.getElementById("psB1").src = path + anArray[0];
  document.getElementById("psB2").src = path + anArray[1];
  document.getElementById("psB3").src = path + anArray[2];
  document.getElementById("psB4").src = path + anArray[3];
}
