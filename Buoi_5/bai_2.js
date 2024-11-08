
function calculateElectricityBill(name, consumption) {
    let totalCost = 0;
    

    if (consumption > 350) {
        totalCost += (consumption - 350) * 1300;
        consumption = 350;
    }
    if (consumption > 200) {
        totalCost += (consumption - 200) * 1100;
        consumption = 200;
    }
    if (consumption > 100) {
        totalCost += (consumption - 100) * 850;
        consumption = 100;
    }
    if (consumption > 50) {
        totalCost += (consumption - 50) * 650;
        consumption = 50;
    }
    totalCost += consumption * 500; 

    return `Tên khách hàng: ${name}, Tổng hóa đơn: ${totalCost} VND`;
}

// Ví dụ
let name = "Nguyen Van A";  
let consumption = 275;      

console.log(calculateElectricityBill(name, consumption));
