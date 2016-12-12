var appleCount		= 0;
var bananaCount		= 0;
var orangeCount		= 0;
var strawberryCount	= 0;

$(document).ready(function(){
	$("#appleButton").on("click", function(){
		if ( appleCount == 0 ){
			$("#cart").append("<div id='appleDiv' class='cartItem'>Apple\t$ <span id='applePrice'>.98</span>\t<input id='appleCount' type='text' value='1' /><button onclick='calculate()'>Update Quantity</button> <button id='appleRemove' onclick='$(\"#appleDiv\").remove(); appleCount = 0; calculate();'>Remove from cart</button></div>");
		} else if ( appleCount > 0 ){
			$("#appleCount").val( parseInt( $("#appleCount").val(), 10) + 1);
		}
		calculate();
	});
    $("#orangeButton").on("click", function(){
        if ( orangeCount == 0 ){
            $("#cart").append("<div id='orangeDiv' class='cartItem'>Orange\t$ <span id='orangePrice'>.89</span>\t<input id='orangeCount' type='text' value='1' /><button onclick='calculate()'>Update Quantity</button> <button id='orangeRemove' onclick='$(\"#orangeDiv\").remove(); orangeCount = 0; calculate();'>Remove from cart</button></div>");
        } else if ( orangeCount > 0 ){
            $("#orangeCount").val( parseInt( $("#orangeCount").val(), 10) + 1);
        }
        calculate();
    });
    $("#bananaButton").on("click", function(){
        if ( bananaCount == 0 ){
            $("#cart").append("<div id='bananaDiv' class='cartItem'>Banana\t$ <span id='bananaPrice'>.49</span>\t<input id='bananaCount' type='text' value='1' /><button onclick='calculate()'>Update Quantity</button> <button id='bananaRemove' onclick='$(\"#bananaDiv\").remove(); bananaCount = 0; calculate();'>Remove from cart</button></div>");
        } else if ( bananaCount > 0 ){
            $("#bananaCount").val( parseInt( $("#bananaCount").val(), 10) + 1);
        }
        calculate();
    });
    $("#strawberryButton").on("click", function(){
        if ( strawberryCount == 0 ){
            $("#cart").append("<div id='strawberryDiv' class='cartItem'>strawberry\t$ <span id='strawberryPrice'>.25</span>\t<input id='strawberryCount' type='text' value='1' /><button onclick='calculate()'>Update Quantity</button> <button id='strawberryRemove' onclick='$(\"#strawberryDiv\").remove(); strawberryCount = 0; calculate();'>Remove from cart</button></div>");
        } else if ( strawberryCount > 0 ){
            $("#strawberryCount").val( parseInt( $("#strawberryCount").val(), 10) + 1);
        }
        calculate();
    });

});

function calculate() {
	appleCount = $("#appleCount").val() || 0
	$("#applePrice").text( (appleCount * .98).toFixed(2) );
    orangeCount = $("#orangeCount").val() || 0
    $("#orangePrice").text( (orangeCount * .89).toFixed(2) );
    bananaCount = $("#bananaCount").val() || 0
    $("#bananaPrice").text( (bananaCount * .49).toFixed(2) );
    strawberryCount = $("#strawberryCount").val() || 0
    $("#strawberryPrice").text( (strawberryCount * .25).toFixed(2) );
	var subtotal	= (appleCount * .98) + (bananaCount * .49) + (orangeCount * .89) + (strawberryCount * .25);
	var tax			= subtotal * .075;
	var total		= subtotal + tax;
	$("#subtotal").text( subtotal.toFixed(2));
	$("#tax").text( tax.toFixed(2));
	$("#total").text( total.toFixed(2));
	if (total <=  0){ $("#payCash"   ).remove(); $("#payCredit").remove(); }
	if (total >   0 && $("#payCash"  ).length == 0 ){ $("#totals").append("<button id='payCash' onclick='alert(\"Throw $\" + (((appleCount * .98) + (bananaCount * .49) + (orangeCount * .89) + (strawberryCount * .25)) * 1.075).toFixed(2) + \" at the screen now.\")'>Cash</button>"); }
	if (total > 100 && $("#payCredit").length == 0 ){ $("#totals").append("<button id='payCredit' onclick='alert(\"Please email credit card details to RaymiHennessey@gmail.com\")'>Credit</button>"); }
}
