var Api_key = "992ccf8758523ceb2e0e2c0e6917e2ac";
var endPoint = "https://data.fixer.io/api/latest?access_key="+Api_key;
var quotes = "";
var val='';

var dest = "";
var amount = "";
var fxRate = "";

var country = {
    XOF : 557.20,
    TZS : 2289.46,
    GHS : 4.78386,
    NGN : 343.026,
    UGX : 3682.67
}




//currenciesChecker.forEach ( li => li.addEventListener('click',()=>alert(li)))



function resetConverter(){
var amount = document.getElementById("amount");
var value = document.getElementById("result");
   amount.value = 0;
   value.value =  0;
   convertCurrency();
}


function convertCurrency(){
    var rateLabel = document.getElementById('rateLabel');
    rateLabel.setAttribute('style', 'display:flex');
    var leadButton = document.getElementById('m-dropdown').setAttribute('style', 'display:flex');
	var From = document.getElementById("From").textContent;
	var To = document.getElementById("To").textContent;
    
   // console.log('To : ',+To);
    var rates = [];

	var amount = document.getElementById("amount").value;
	var result = document.getElementById("result");
	var fxRate = document.getElementById("rate");

	if (From.length>0 && To.length>0 && amount.length>0){
		var xHttp = new XMLHttpRequest();
		xHttp.onreadystatechange=function(){
			if (xHttp.readyState==4 && xHttp.status==200) {
				var obj=JSON.parse(this.responseText);
                //console.log(obj);
                for (i = 0; i < obj.length; i++) {
                if (obj[i].quote === To){
                    //console.log("Found here : "+obj[i].exchange+" \n Market Price : "+obj[i].price);
                    rates[i] = obj[i].price;
                    } else if (To === "XOF" || To === "GHS" || To === "NGN" || To === "UGX" || To === "TZS" ){
                        for (i = 0; i < obj.length; i++){
                            if (obj[i].quote === "USD"){
                             rates[0] = country[To]*obj[i].price;
                            }
                         }
                    }
                } 

                
                function myFunction() {
                    rates.sort(function(a, b){return b - a});
                }                
                myFunction();
				var fact = rates[0];
				fxRate.innerHTML = "<span>"+Number(fact).toFixed(4)+"</span> <span>"+To+"</span>";
                
				if (fact!=undefined) {
					var value = parseFloat(amount)*parseFloat(fact);
					result.value = value.toFixed(2);
				}
			}
		}
	    xHttp.open('GET',"https://api.nomics.com/v1/markets/prices?key=2018-09-demo-dont-deploy-b69315e440beb145&currency="+From,true);
		xHttp.send();
	}
}