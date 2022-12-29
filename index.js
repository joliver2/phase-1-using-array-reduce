const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
let totalBatteries = 0;

batteryBatches.reduce(function(accumulator, element) {
    totalBatteries = accumulator + element 
    return totalBatteries
}, 0)

