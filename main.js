var currentHeight = 0;
var pageHeight = document.documentElement.scrollHeight;
document.addEventListener('scroll', function(){
    console.log("akash noob");
    // var scrollLeft = (window.pageXOffset !== undefined) ? window.pageXOffset : (document.documentElement || document.body.parentNode || document.body).scrollLeft;
    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
    // scrollTop = scrollTop + window.innerHeight;
    var percent = scrollTop/(pageHeight - window.innerHeight)*100;
    percent = Math.floor(percent);
    console.log('akash poo poo', scrollTop, percent);
    var viewPercent = document.getElementById('view-percentage');
    viewPercent.innerText = percent + "% Viewed";
})
// var scroll = setInterval(function(){

//     if(currentHeight >= pageHeight){
//         clearInterval(scroll);
//         return;
//     }
//     // currentPos = pageHeight / 100;
//     // for(var i = pageHeight/100; i <= pageHeight; i*2){
//     //     currentHeight = pageHeight / i;
//     // }
//     var percent = document.getElementById('view-percentage');
//     percent.innerText = currentHeight + "%" + " percent" 
//     window.scrollBy(0,50);

// },50)


    // for(var i = pageHeight/100; i< pageHeight; i*2){
    //     currentHeight = pageHeight / i;
    // }
    // var percent = document.getElementById('view-percentage');
    // percent.innerText = currentHeight + "%" + " Viewed" ;
    // window.scrollBy(0,50);