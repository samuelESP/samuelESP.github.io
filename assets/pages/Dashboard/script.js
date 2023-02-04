
/*Income elements */
let dataIncome= [2500,2800,3000,1000,2000,1200,2500,1380,3000,1000,2000,1200];
const BTNIncome= document.querySelector('.btnIncome');//Income Button
const valueInputIncome = document.querySelector('.valordeIncome');//Income Input
const MonthIncome = document.querySelector('#monthsI');//Income Month
const IncomeSpan= document.querySelector('.icomespan');//Income message value


/*Expenses elements */
let dataExpenses= [2000,1380,2300,1000,1222,700,1806,654,2331,1000,2000,1100];
const BTNExpenses= document.querySelector('.btnExpenses');//Expenses Button
const valueInputExpenses = document.querySelector('.valordeExpenses');//Expenses Input
const MonthExpenses = document.querySelector('#monthsE');//Expenses Months
const ExpensesSpan= document.querySelector('.expensesspan');//Expenses message value


/* Tax elements*/
let dataTax= [];
const TaxSpan= document.querySelector('.taxspan');//message value


/*Total elements */
const saved = document.getElementById('SavedChart');
const SpanTotal = document.querySelector('.TotalSpan');
let dataSaved = [];
let color = [];


//----------------------------------------------------------------------//


//Calc of Tax(IRF)
function CalcOfTax() {//function to calculate the amount of IRF that will be paid in the month
    for (let i = 0; i < 12; i++) {
        if (dataIncome[i] < 1903) {
    
            dataTax[i] = 0;
        
        }else if(dataIncome[i] > 1903 & dataIncome[i] < 2827){
        
            dataTax[i] = dataIncome[i] * 0.075;
            
        } else if(dataIncome[i] > 2827 & dataIncome[i] < 3751){
        
            dataTax[i] = dataIncome[i] * 0.15;
    
        } else if(dataIncome[i] > 3751 & dataIncome[i] < 4665){
    
            dataTax[i] = dataIncome[i] * 0.225;
    
        } else {
    
            dataTax[i] = dataIncome[i] * 0.275;

        }
    }

    

    let total = 0;

    dataTax.forEach((currentValue) =>{ //sum of tax amounts

    total += parseFloat(currentValue);
    });

    TaxSpan.innerHTML = "$" + total.toFixed(3);//screen print
}

CalcOfTax();

//Tax Canvas
const Tax = document.getElementById('MyTax');

let NewTax = new Chart(Tax, {
type: 'bar',
data: {
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul',"Aug","Sep","Oct","Nov","Dec"],
    datasets:[{
        label:"How much Tax",
        data:dataTax,
        backgroundColor: '#1882fc',
    }]
},
options: {
    responsive: true,
    plugins:{
    }
}
})


//----------------------------------------------------------------------//



/*Income*/


BTNIncome.addEventListener('click', () =>{
    let valorInput = valueInputIncome.value;//Value of Income Input
    let valorMon = MonthIncome.value;//value of Income Month

    
    if (true === isNaN(valorInput)) {//Not number?

        alert('Valor necessita ser um número');

    }else if(valorInput === "" | valorInput === " "){//Bar Space?

        alert("Espaços em branco não são aceitos");

    }else{//Numbers?

        switch (valorMon) {
            case 'January':
                dataIncome[0] = valorInput;
                
                break;
            case 'February':
                dataIncome[1] = valorInput;
                
                break;
            case "March":
                dataIncome[2] = valorInput;
                
                break;
            case "April":
                dataIncome[3] = valorInput;

                break;
            case "May":
                dataIncome[4] = valorInput;

                break;
            case "June":
                dataIncome[5] = valorInput;

                break;
            case "July":
                dataIncome[6] = valorInput;

                break;
            case "August":
                dataIncome[7] = valorInput;

                break;
            case "September":
                dataIncome[8] = valorInput;

                break;
            case "October":
                dataIncome[9] = valorInput;

                break;
            case "November":
                dataIncome[10] = valorInput;

                break;
            case "December":
                dataIncome[11] = valorInput;
                break;
        
            default:
                alert('Ocorreu algum tipo de erro, por favor confira o console ou atualize a página e tente novamente. Caso o erro persista, entre em contato com a nossa equipe por meio do email : .......@email.com');
                break;
        }

    }
    NewIncome.update();//Att Canvas Income
    CalcOfTax();//Call the function to calculate the amount of IRF that will be paid in the month
    NewTax.update();//Att Canvas Tax
    

    let total = 0;
    dataIncome.forEach((currentValue ) =>{//sum of Income amounts
    
    total += parseFloat(currentValue);
    
    });
    IncomeSpan.innerHTML = "$"+total.toFixed(3);
    
    
    CalcTotal();//Calc of Total money you had save or last
    NewSaved.update();
})


//Income Canvas
const Income = document.getElementById('MyIncone');

let NewIncome = new Chart(Income, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul',"Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:"How much Income",
            data:dataIncome,
            backgroundColor: '#00FF00',
        }]
    },
    options: {
        responsive: true,
        plugins:{
        }
    }
})


//----------------------------------------------------------------------//


/*Expenses*/


BTNExpenses.addEventListener('click', () =>{
    let valorInput = valueInputExpenses.value;//Expenses Button value 
    let valorMon = MonthExpenses.value;//Expenses Months value

    
    if (true === isNaN(valorInput)) {//Not number?
        
        alert('Valor necessita ser um número');

    }else if(valorInput === "" | valorInput === " "){//Bar Space?

        alert("Espaços em branco não são aceitos");

    }else{//Numbers?

        switch (valorMon) {
            case 'January':
                dataExpenses[0] = valorInput;
                
                break;
            case 'February':
                dataExpenses[1] = valorInput;
                
                break;
            case "March":
                dataExpenses[2] = valorInput;
                
                break;
            case "April":
                dataExpenses[3] = valorInput;

                break;
            case "May":
                dataExpenses[4] = valorInput;

                break;
            case "June":
                dataExpenses[5] = valorInput;

                break;
            case "July":
                dataExpenses[6] = valorInput;

                break;
            case "August":
                dataExpenses[7] = valorInput;

                break;
            case "September":
                dataExpenses[8] = valorInput;

                break;
            case "October":
                dataExpenses[9] = valorInput;

                break;
            case "November":
                dataExpenses[10] = valorInput;

                break;
            case "December":
                dataExpenses[11] = valorInput;
                break;
        
            default:
                alert('Ocorreu algum tipo de erro, por favor confira o console ou atualize a página e tente novamente. Caso o erro persista, entre em contato com a nossa equipe por meio do email : .......@email.com');
                break;

        }
    }
    
    NewExpenses.update();//Att canvas Expenses

    let total = 0;
    dataExpenses.forEach((currentValue ) =>{//sum of Expenses amounts
    
    total += parseFloat(currentValue);
    
    });
    ExpensesSpan.innerHTML = "$" + total.toFixed(3);
    CalcTotal();//Calc of Total money you had save or last
    NewSaved.update();
})

//Expenses Canvas
const Expenses = document.getElementById('MyExpenses');

let NewExpenses = new Chart(Expenses, {
    type: 'bar',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul',"Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:"How much Expenses",
            data:dataExpenses,
            backgroundColor: '#fa2b2b',
        }]
    },
    options: {
        responsive: true,
        plugins:{
        }
    }
})


//----------------------------------------------------------------------//



//Calculo de cores do Span e do Gráfico Tota, junto com o funcionamento do próprio gráfico Total
function CalcTotal() {
    
    let totalIncome = 0;
    let totalExpenses = 0;
    let totalTax = 0;
    
    totalIncome = parseFloat(IncomeSpan.textContent.slice(1));
    totalExpenses = parseFloat(ExpensesSpan.textContent.slice(1));
    totalTax = parseFloat(TaxSpan.textContent.slice(1));

    let CalcOfLiving = totalIncome - (totalExpenses + totalTax);

    
        if (CalcOfLiving < 0) {
            SpanTotal.style.color = '#fc1703';
        }else if(CalcOfLiving == 0){
            SpanTotal.style.color = '#f4fc03'
        }
         else {
            SpanTotal.style.color = "#5efc03"
        }
    

    SpanTotal.innerHTML = "$" + CalcOfLiving.toFixed(3);

    
    
    

    for (let i = 0; i < 12; i++) {
        dataSaved[i] = (dataIncome[i] - (parseFloat(dataExpenses[i]) + dataTax[i]));/*Both dataIncome[i] and dataExpenses[i] will return a string into the array after clicking a button, but dataExpenses is the only one that needs the parseFloat function, but why?
        Simple, dataExpenses[i] participates in a sum operation, that is, if I try to add a number (type: string) with a number (type: number) it will concatenate the two, in case I do other operations other than sum it performs a mathematical operation */


        if (dataSaved[i] < 0) {
            color[i] = '#fc1703';
        }else if(dataSaved[i] == 0){
            color[i] = '#f4fc03';
        }
        else{
            color[i]="#5efc03"
        }
       
    }
    
    
    
}
CalcTotal();


//Total Canvas
let NewSaved = new Chart(saved, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul',"Aug","Sep","Oct","Nov","Dec"],
        datasets:[{
            label:"How much money",
            data:dataSaved,
            backgroundColor: color,
            borderWidth: 1,
            borderColor: '#000000',
        }]
    },
    options: {
        responsive: true,
        plugins:{
            legend: {
                display: false
            }
        }
    }
})