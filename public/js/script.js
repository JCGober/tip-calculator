let billAmount = document.getElementById("billAmount").value

let tipAmount = document.getElementById("tipAmount").value

let calc = $("#calc")

let total = $("#total")

calc.on("click", function(){

    let billAmount =document.getElementById("billAmount").value
        
        billAmount = parseFloat(billAmount)

    let tipAmount = document.getElementById("tipAmount").value

        tipAmount = parseFloat(tipAmount)/100

    let tip = billAmount * tipAmount
        
        tip.toFixed(2)

    let totalCost = parseFloat(billAmount) + tip

    let div = $("<div>")

    div.html(`<h3>Bill: $${billAmount.toFixed(2)}, Tip: $${tip.toFixed(2)}, Total: $${totalCost.toFixed(2)}</h3>`)

    div.attr("style", "margin: 20px")

    div.prependTo(total)

    console.log("Working")

});
