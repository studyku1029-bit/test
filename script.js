const paymentForm =
    document.getElementById("paymentForm");

const paymentBox =
    document.getElementById("paymentBox");

const successBox =
    document.getElementById("successBox");

const paidButton =
    document.getElementById("paidButton");



/*
    STEP 1
    User submits their details.
*/

paymentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();


    if (name === "" || email === "") {

        alert("Please fill in all details.");

        return;
    }


    /*
        Show the fake payment screen.
    */

    paymentBox.style.display = "block";

    successBox.style.display = "none";


    paymentBox.scrollIntoView({
        behavior: "smooth"
    });

});



/*
    STEP 2
    User clicks "I Have Paid".
*/

paidButton.addEventListener("click", function() {

    paymentBox.style.display = "none";

    successBox.style.display = "block";


    /*
        Fake successful payment.
    */

    successBox.scrollIntoView({
        behavior: "smooth"
    });

});



/*
    STEP 3
    Reset the form.
*/

function resetPayment() {

    paymentForm.reset();

    successBox.style.display = "none";

    paymentForm.scrollIntoView({
        behavior: "smooth"
    });

}
