const bill_total = document.querySelector("#bill-total");
const tip_slider = document.querySelector("#tip");
const tip_percentage = document.querySelector("#tip-percentage");
const tip_amount = document.querySelector("#tip-amount");
const total_amount = document.querySelector("#total");

// Event listeners for input changes
bill_total.addEventListener("change", calculateTip);
tip_slider.addEventListener("input", calculateTip);

function calculateTip() {
    // Validate the bill total input
    if (isNaN(bill_total.value) || bill_total.value.trim() === "") {
        alert("ENTER A VALID INPUT NUMBER");
        bill_total.value = ""; // Optionally clear the invalid input
        return;
    }

    // Check if the bill total is a negative number or zero
    if (parseFloat(bill_total.value) <= 0) {
        alert("Bill total must be a positive number.");
        bill_total.value = ""; // Optionally clear the invalid input
        return;
    }
    // Parse and format the bill total value
    let bill = parseFloat(bill_total.value);
    bill_total.value = bill.toFixed(2);

    // Get the tip percentage from the slider
    let tip = parseFloat(tip_slider.value);
    tip_percentage.value = `${tip}%`; // Corrected line

    // Calculate the tip amount
    let total_tip = parseFloat(((tip * bill) / 100).toFixed(2));
    tip_amount.value = total_tip.toFixed(2);

    // Calculate total bill including tip
    let total = bill + total_tip;
    total_amount.value = total.toFixed(2);
}
