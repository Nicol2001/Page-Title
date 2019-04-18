// Starting steps:
// 1. Write the jQuery click handler for the button (remember, you will need more than one button, so what's the best way to make sure you are just targeting the one button?)
// 2. In the click handler, how do you grab the two values from the input? You'll also want to give the inputs something to help you target them...
// 3. What kind of variable can we add the name to? The price to? Remember we need to remember the names and prices of ALL the items
var names=[];
var prices=[];
var totalPrice=0;
var priceNow;

$("#cart").click(function() {
    var name =$("#name").val();
    var price=$("#price").val() ;
    names.push(name);
    prices.push(price);
    var totalItems=names.length;
    $(".list").append("<div class='header'><p>" + name + "</p>" + "<p>" + price + "</p> <p>"+totalItems+"</div>");
    prices.forEach(function(number){
        priceNow= totalPrice;
        // parseInt(priceNow, 10)
        totalPrice= priceNow + number;
    });
    $(".price").html(totalPrice);
});                                      