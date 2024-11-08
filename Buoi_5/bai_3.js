
function calculatePersonalIncomeTax(name, annualIncome, dependents) {
    
    let taxableIncome = annualIncome - 4 - (dependents * 1.6);

    
    if (taxableIncome <= 0) {
        return `Customer: ${name}, Tax Due: 0 VND (No taxable income)`;
    }

  
    let totalTax = 0;

  
    if (taxableIncome > 960) {
        totalTax += (taxableIncome - 960) * 0.35;
        taxableIncome = 960;
    }
    if (taxableIncome > 624) {
        totalTax += (taxableIncome - 624) * 0.30;
        taxableIncome = 624;
    }
    if (taxableIncome > 384) {
        totalTax += (taxableIncome - 384) * 0.25;
        taxableIncome = 384;
    }
    if (taxableIncome > 210) {
        totalTax += (taxableIncome - 210) * 0.20;
        taxableIncome = 210;
    }
    if (taxableIncome > 120) {
        totalTax += (taxableIncome - 120) * 0.15;
        taxableIncome = 120;
    }
    if (taxableIncome > 60) {
        totalTax += (taxableIncome - 60) * 0.10;
        taxableIncome = 60;
    }
    totalTax += taxableIncome * 0.05;

    return `Tên khách hàng: ${name}, Tổng thuế: ${totalTax.toFixed(2)} million VND`;
}

// Ví dụ
let name1 = "Nguyen Van A"; 
let annualIncome = 300;    
let dependents = 2;         

console.log(calculatePersonalIncomeTax(name1, annualIncome, dependents));
