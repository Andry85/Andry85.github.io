		
var number = +prompt('Введите число которые вы хотете возвести в степень?', '');
var numberRound = Math.round(number);
var numberPow = +prompt('Введите степень?', '');
var numberPowRound = Math.round(numberPow);

if (number == 0 || numberPow == 0) {
         alert ('Вы не ввели число либо степнь.');
}

function powFunct(a,n) {
    
        var pow = a;
        var powPlus = n * -1;

        
        if (n>0) {
            for (var i = 1; i < n; i++) {
                    pow = pow * a;
             
            }
            return pow;
        }
        else if (n < 0) {
                for (var j = 1; j < powPlus; j++) {
                    pow = pow * a;        
                }
                var powResult = 1/pow;
                return powResult;                                                                               
            }

        else if (n == 0) {
            pow = 1;
            return pow;
        }  

         
}

var resultat = powFunct(numberRound, numberPowRound);

console.log(result);



module.exports = result;
