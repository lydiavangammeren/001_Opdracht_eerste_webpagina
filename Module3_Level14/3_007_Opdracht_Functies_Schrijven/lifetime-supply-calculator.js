
let calculateSupply = function (age, amountDay) {
let lifetimeSupply = amountDay * (age * 365)
return `You'll need ${lifetimeSupply} to last you until the ripe old age of ${age}`
};

console.log(calculateSupply(90, 5));