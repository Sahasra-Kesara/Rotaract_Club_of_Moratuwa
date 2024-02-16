document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (validateForm()) {
            // If the form is valid, you can proceed with form submission or other actions
            alert("Form submitted successfully!"); // Placeholder for actual submission logic

            // Clear the form after successful submission
            form.reset();
        }
    });

    function validateForm() {
        const fullName = document.getElementById("fullName").value.trim();
        const dobYear = document.getElementById("dobYear").value.trim();
        const dobMonth = document.getElementById("dobMonth").value.trim();
        const dobDay = document.getElementById("dobDay").value.trim();
        const civilStatus = document.getElementById("civilStatus").value.trim();
        const address = document.getElementById("address").value.trim();
        const mobileNumber = document.getElementById("mobileNumber").value.trim();
        const email = document.getElementById("email").value.trim();

        // Basic validation for required fields
        if (
            fullName === "" ||
            dobYear === "" ||
            dobMonth === "00" ||
            dobDay === "" ||
            civilStatus === "select" ||
            address === "" ||
            mobileNumber === "" ||
            email === ""
        ) {
            alert("Please fill in all required fields.");
            return false;
        }
        return true; // Form is valid
    }
});