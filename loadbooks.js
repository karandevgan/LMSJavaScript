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
	var b1 = new Book();
	b1.setName("Spring Pro");
	b1.setAuthor("Karan");
	b1.setEdition(2);
	b1.setIsbn("123-123-123");
	b1.setPages(324);
	b1.setPrice(200);
	b1.setPublisher("Pearson");

	var b2 = new Book();
	b2.setName("Hibernate Pro");
	b2.setAuthor("Ayush");
	b2.setEdition(1);
	b2.setIsbn("23-123-123");
	b2.setPages(324);
	b2.setPrice(100);
	b2.setPublisher("Pearson");

	bookList.push(b1, b2)
})();