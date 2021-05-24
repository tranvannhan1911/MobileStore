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

function removeAscent (str) {
	if (str === null || str === undefined) return str;
	str = str.toLowerCase();
	str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
	str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
	str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
	str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
	str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
	str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
	str = str.replace(/đ/g, "d");
	return str;
}

function check_regex(elm, pattern, msg){
	var str = $(elm).val().trim();
	str = removeAscent(str);
	if(pattern.test(str) == false){
		$(elm).parent().find("div").text(msg);
		return false;
	}
	return true;
}

function check_fullname(){
	return check_regex($("[name=fullname]"), /^[a-zA-Z ]+$/, "Họ tên chỉ chứa các ký tự và khoảng trắng.");
}

function check_phone(){
	return check_regex($("[name=phone]"), /^0[1-9]\d{8}$/, "Số điện thoại không hợp lệ.");
}

function check_diachi(){
	return check_regex($("[name=address]"), /^[a-zA-Z0-9_/|\\\.@#!\?\$\^, ]+$/, "Địa chỉ không hợp lệ.");
}

function check_pass(){
	return check_regex($("[name=pass]"), /^[^0-9]{4,}$/, "Mật khẩu không hợp lệ.");
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