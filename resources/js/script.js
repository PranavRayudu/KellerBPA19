// // Set the date we're counting down to
// var countDownDate = new Date("May 5, 2020").getTime();
//
// // Update the count down every 1 second
// var x = setInterval(function() {
//
//     // Get today's date and time
//     var now = new Date().getTime();
//
//     // Find the distance between now and the count down date
//     var distance = countDownDate - now;
//
//     // Time calculations for days, hours, minutes and seconds
//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     // Display the result in the element with id="demo"
//     document.getElementById("timer").innerHTML = days + "d";
//
//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("timer").innerHTML = "It has Started!";
//     }
// }, 1000);

AOS.init({
    delay: 500,
    duration: 500,
    anchorPlacement: 'center-bottom'
});