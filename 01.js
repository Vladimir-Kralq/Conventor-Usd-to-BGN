function convert (input) {
//1 USD = 1.79549 BGN.
let usd = Number(input[0]);
let bgn = usd * 1.79549;
console.log(bgn);

}

convert(["100"]);