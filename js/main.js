function reverse(s){
    return s.split("").reverse().join("");
}

function currency_format(price){
	price = reverse(String(price));
	currency = "";
	for(var i=0; i<price.length; i++){
		if(i != 0 && i % 3 == 0)
			currency += ".";
		currency += price[i];
	}
	currency = reverse(String(currency));
	return currency
}

function get_product(id){
	for(var i=0; i<data.length; i++){
		if(data[i]["id"] == id){
			id_product = id;
			return data[i];
		}
	}
	window.location.href = "index.html";
}

function remove_product(id){
	var cart = get_cart();
	for(var i =0; i<cart.length; i++){
		if(cart[i]["id"] == String(id)){
			cart.splice(i, 1);
			localStorage["cart"] = JSON.stringify(cart);
			return;
		}
	}
}

function update_cart(id, count, color){
	var cart = get_cart();
	for(var i =0; i<cart.length; i++){
		if(cart[i]["id"] == String(id)){
			cart[i]["count"] = count;
			cart[i]["color"] = color;
			localStorage["cart"] = JSON.stringify(cart);
			return;
		}
	}
}

function get_cart(){
	var cart;
	try{
		cart = JSON.parse(localStorage["cart"]);
	}catch{
		cart = new Array();
	}
	return cart;
}

function decrease(){
	sec_quantity = $(this).parent();
	txtNumber = $(sec_quantity).find("span");
	if(txtNumber.text() <= 1){
		return;
	}
	$(txtNumber).text(Number($(txtNumber).text())-1);
}

$(".btn-decrease").click(decrease);

function increase(){
	sec_quantity = $(this).parent();
	txtNumber = $(sec_quantity).find("span");
	$(txtNumber).text(Number($(txtNumber).text())+1);
}

$(".btn-increase").click(increase);

function cal_total(){
	var cart = get_cart();
	var total = 0;
	for(var i =0; i<cart.length; i++){
		var product = get_product(cart[i]["id"]);
		total += Number(cart[i]["count"])*product["price"];
	}

	$(".total").text(currency_format(total));

}