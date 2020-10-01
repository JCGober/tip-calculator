let billAmount = document.getElementById("billAmount").value

let tipAmount = document.getElementById("tipAmount").value

let calc = $("#calc")

let total = $("#total")

calc.on("click", function(){

    let billAmount =document.getElementById("billAmount").value

    let tipAmount = document.getElementById("tipAmount").value

    let tip = parseFloat(billAmount) * parseFloat(tipAmount)

    let totalCost = parseFloat(billAmount) + tip


    console.log(tip)

    let div = $("<div>")

    div.html(`Bill: ${billAmount}, Tip $${tip}, Total: $${totalCost}`)

    div.appendTo(total)

    console.log("Working")

});
