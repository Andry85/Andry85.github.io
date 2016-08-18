var numberRound = 2;
var numberPowRound = 2;

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


module.exports = resultat;