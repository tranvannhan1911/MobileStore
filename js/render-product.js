// apple = document.querySelectorAll("div.apple");
product_apple = $("div.apple div.list-product");
product_samsung = $("div.samsung div.list-product");
product_phukien = $("div.phukien div.list-product");
// product_apple = $("div.apple div.list-product");
// console.log(product_apple);
function render_product(data, type){
	// apple
	html = "";
	for(var i = 0; i < data.length; i++){
		if(data[i]["type"] != type)
			continue;
		if(i%5==0)
			html += space();

		html += product_html(data[i]);

		if((i+1) % 5 == 0)
			html += space();
	}

	if(type == "apple")
		product_apple.html(html);
	else if(type == "samsung")
		product_samsung.html(html);
	else if(type == "phukien")
		product_phukien.html(html);
	// product_apple.innerHTML = html;
	// console.log(product_apple.innerHTML);
}

function space(){
	return '<div class="col-lg-1 space"></div>\n';
}

function product_html(data){
	return '<div class="col-lg-2 col-md-4 item col-sm-6 item-product" data-id="'+data["id"]+'" data-price="'+ data["price"] +'">\n'
			+'	<a href="chitietsanpham.html?id='+data["id"]+'">\n'
			+'		<img src="'+data["image"]+'">\n'
			+'	</a>\n'
			+'	<p><a href="chitietsanpham.html?id='+data["id"]+'">'+data["name"]+'</a></p>\n'
			+'	<p>\n'
			+'		<span class="after-price">'+currency_format(data["price"])+'<sup>đ</sup></span>\n'
			+'	</p>\n'
				
			+'</div>\n';
}