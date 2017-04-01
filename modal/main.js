console.log("hello");
// call elementby id
var modal = document.getElementById("my-modal");
// me creating funtion
function myModal(){
  // chosing element styles for chsnge on event
  modal.style.display ="block";
}
// calling event listener
modal.addEventListener("load",setTimeout(myModal, 3000))

document.querySelector('form').addEventListener('submit', function(event){
  event.preventDefault()
})





// setTimeout("alert"("hi"))












// ===================================================
// getElementById ("someId").addEventListener("click",funtion(event){
//   alert('you clicked me')
// })
// changin the click to mouse enter or any other event will change
// paragraph.addEventListener("click", funtion(){
//   alert("you have clicked me")
// })
// setTimeout(function functionName() {
// alert("hello")
// },2000)
// when DOM is ready
// $(document).ready(function () {
//
//      // Attach Button click event listener
//     $("#myBtn").click(function(){
//
//          // show Modal
//          $('#myModal').modal('show');
//     });
// });
// this will load the page
// window.onload = function() {
//   console.log("welcome")
