
function calculateBill(customerType, numberOfConnections, numberOfPremiumChannels) {
    let processingFee, basicServiceFee, premiumChannelFee, totalBill;

    if (customerType === "Nhà dân") {
  
        processingFee = 4.5;
        basicServiceFee = 20.5;
        premiumChannelFee = 7.5 * numberOfPremiumChannels;
        totalBill = processingFee + basicServiceFee + premiumChannelFee;
    } else if (customerType === "Doanh nghiệp") {
  
        processingFee = 15;
        

        if (numberOfConnections <= 10) {
            basicServiceFee = 75;
        } else {
            basicServiceFee = 75 + (numberOfConnections - 10) * 5;
        }
        
        premiumChannelFee = 50 * numberOfPremiumChannels;
        totalBill = processingFee + basicServiceFee + premiumChannelFee;
    } else {
        return "Loại khách hàng không hợp lệ";
    }

    return totalBill;
}

// Ví dụ
let customerType = "Doanh nghiệp"; 
let numberOfConnections = 15; 
let numberOfPremiumChannels = 5;

let billAmount = calculateBill(customerType, numberOfConnections, numberOfPremiumChannels);
console.log(`Tổng hóa đơn là: $${billAmount}`);
