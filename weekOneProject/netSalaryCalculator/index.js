const form = document.querySelector('form#salaryForm');
const salary = document.getElementById('basicSalary');
const allowance = document.getElementById('allowance');
const htmlNssf = document.getElementById('nssf')
const htmlNhif = document.querySelector('p#nhif')
const payee = document.getElementById('paye')
const htmlNet = document.getElementById('mynet')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    const basic = salary.value; 
    console.log(basic)
    calcNetSalary(basic)});
function calcNetSalary(input){
    const nssf = nssfDeduction(input);
    const nhif = nhifDeduction(input);
    const payeTax = checkPayee(input);
    const grossSalary = parseFloat(input) + parseFloat(allowance.value);
    const netSalary = grossSalary - payeTax -nssf -nhif;
    htmlNet.innerHTML = `Net Salary: ${netSalary}`
}

function checkPayee(input){
    if(input >=0 && input <= 24000){ 
        let payeeValue = 0.1*input      
        payee.innerHTML = `PAYE: ${payeeValue}`
        return payeeValue
    }else if(input >24000 && input <= 32333){ 
        let payeeValue = 0.25*input     
        payee.innerHTML = `PAYE: ${payeeValue}`
        return payeeValue
    }else if(input > 32333){ 
        let payeeValue = 0.30*input       
        payee.innerHTML = `PAYE: ${payeeValue}`
        return payeeValue
    }
}

function nhifDeduction(input){
    if(input>0 && input<=5999){
        let value = 150
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=6000 && input<=7999){
        let value = 300
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=8000 && input<=11999){
        let value = 400
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=12000 && input<=14999){
        let value = 500
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=15000 && input<=19999){
        let value = 600
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=20000 && input<=24999){
        let value = 750
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=25000 && input<=29999){
        let value = 850
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=30000 && input<=34999){
        let value = 900
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=35000 && input<=39999){
        let value = 950
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=40000 && input<=44999){
        let value = 1000
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=45000 && input<=49999){
        let value = 1100
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=50000 && input<=59999){
        let value = 1200
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=60000 && input<=69999){
        let value = 1300
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=70000 && input<=79999){
        let value = 1400
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=80000 && input<=89999){
        let value = 1500
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=90000 && input<=99999){
        let value = 1600
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }else if(input>=100000){
        let value = 1700
        htmlNhif.innerHTML = `NHIF: ${value}`
        return value
    }
}
function nssfDeduction(input){
    const deduction = input*0.06
    htmlNssf.innerHTML = `NSSF: ${deduction}`
    return deduction
}