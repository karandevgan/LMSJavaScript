function hideall() {
	hidediv("addBookDiv");
	hidediv("listBooksDiv");
	hidediv("searchBookDiv");
	hidediv("updateBookDiv");
}

function hidediv(divName) {
	document.getElementById(divName).style.display = "none";
}

function showdiv(divName) {
	document.getElementById(divName).style.display = "block";
}

var Book = function() {
	var name;
	var author;
	var edition;
	var isbn;
	var price;
	var pages;
	var publisher;

	return {
		getName : function() {
			return name;
		},
		setName : function(n) {
			name = n;
		},
		getAuthor : function() {
			return author;
		},
		setAuthor : function(a) {
			author = a;
		},
		getPrice : function() {
			return price;
		},
		setPrice : function(p) {
			price = p;
		},
		getIsbn : function() {
			return isbn;
		},
		setIsbn : function(i) {
			isbn = i;
		},
		getEdition : function() {
			return edition;
		},
		setEdition : function(e) {
			edition = e;
		},
		getPublisher : function() {
			return publisher;
		},
		setPublisher : function(p) {
			publisher = p;
		},
		getPages : function() {
			return pages;
		},
		setPages : function(n) {
			pages = n;
		}
	};
};

var bookList = [];

(function() {
	hideall();
	var httpRequest = new XMLHttpRequest();

	httpRequest.onreadystatechange = function(){
		if (httpRequest.readyState == 4) {
			var jsonData = JSON.parse(httpRequest.responseText);
			var b1 = new Book();
			b1.setName(jsonData.name);
			b1.setAuthor(jsonData.author);
			b1.setEdition(jsonData.edition);
			b1.setIsbn(jsonData.isbn);
			b1.setPages(jsonData.pages);
			b1.setPrice(jsonData.price);
			b1.setPublisher(jsonData.publisher);
			bookList.push(b1);
		}
	};
	httpRequest.open("GET", "bookData.json", true);
	httpRequest.send();
})();

