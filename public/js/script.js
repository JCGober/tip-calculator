
// Variables for Tip Calculator
let billAmount = document.getElementById("billAmount").value

let tipAmount = document.getElementById("tipAmount").value

let calc = $("#calc")

let total = $("#total")

// Click event to calculate Tip
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

// Advice(tips) variables
let tipsBtn = $("#tipsBtn")

let advice = $("#advice")

var quotes = ['"A gentleman/woman Always tips"', `"If you don't tip.... You're a jack ass"`, `"If you can't tip don't go out."`]

let div2 = $("<div>")

// Click event that generates random quote for tipping
tipsBtn.on("click", function(){

    console.log("Click is working!")

    let quoteRandom = quotes[Math.floor(Math.random()*quotes.length)]

    div2.html(`<h4> ${quoteRandom} </h4>`)
    div2.attr("style", "margin: 20px")

    div2.appendTo(advice)
})




