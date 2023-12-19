// const button = document.getElementById("button");
// button.addEventListener('click',clickingbutton)

// function clickingbutton(){
//     //TODO Create logic for validatiom
//     Toastify({
//         text: "Login Sucessfull!!",
//         duration: 5000,
//         destination: "https://github.com/apvarun/toastify-js",
//         newWindow: true,
//         close: true,
//         gravity: "bottom", // `top` or `bottom`
//         position: "center", // `left`, `center` or `right`
//         stopOnFocus: true, // Prevents dismissing of toast on hover
//         style: {
//           background: "linear-gradient(to right, #00b09b, #96c93d)",
//         },
//         onClick: function(){} // Callback after click
//       }).showToast();
// }


window.onload = (event) => {

   

    Toastify({
        text: "Login Sucessfull!!",
        duration: 5000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();

}
