document.getElementById("listbookslink").onclick = showBooksList;
document.getElementById("insertbooklink").onclick = showaddform;
document.getElementById("searchbooklink").onclick = showsearchform;
document.getElementById("searchCriteria").onchange = searchCriteria;

function hideall() {
	document.getElementById("addBookDiv").style.display = 'none';
	document.getElementById("listBooksDiv").style.display = 'none';
	document.getElementById("searchBookDiv").style.display = 'none';
	document.getElementById("updateBookDiv").style.display = 'none';
}

function showsearchform() {
	document.getElementById("searchBookDiv").style.display = 'block';
	document.getElementById("addBookDiv").style.display = 'none';
	document.getElementById("listBooksDiv").style.display = 'none';
}

function searchCriteria() {
	var elem = document.getElementById("searchCriteria");
	var selectedValue = elem.options[elem.selectedIndex].value;
	var t = document.getElementById("searchTextBox");
	if (selectedValue != "searchby") {
		t.innerHTML = "";
		var textBox = document.createElement("input");
		textBox.setAttribute("id", "txtSearch");
		var searchButton = document.createElement("input");
		searchButton.setAttribute("type", "button");
		searchButton.setAttribute("value", "Search");
		var searchParameter = "searchBook(\"" + selectedValue + "\")";
		searchButton.setAttribute("onclick", searchParameter);
		t.appendChild(textBox);
		t.appendChild(searchButton);
	} else {
		t.innerHTML = "";
	}
}

function searchBook(selectedValue) {
	if (document.getElementById("txtSearch").value == "") {
		alert('Please enter search value.');
		return false;
	}

	var resultDiv = document.getElementById("resultDiv");
	resultDiv.innerHTML = "";
	var table = document.createElement("table");
	table.setAttribute("border", "1");

	generateTable(table);
	var isFound = false;

	if (selectedValue == "name") {
		for (var i = 0; i < bookList.length; i++) {
			if (bookList[i].getName() == document.getElementById("txtSearch").value) {
				isFound = true;
				generateTableRow(table, bookList, i);
			}
		}
	}

	if (selectedValue == "author") {
		for (var i = 0; i < bookList.length; i++) {
			if (bookList[i].getAuthor() == document.getElementById("txtSearch").value) {
				isFound = true;
				generateTableRow(table, bookList, i);
			}
		}
	}

	if (selectedValue == "isbn") {
		for (var i = 0; i < bookList.length; i++) {
			if (bookList[i].getIsbn() == document.getElementById("txtSearch").value) {
				isFound = true;
				generateTableRow(table, bookList, i);
			}
		}
	}

	if (isFound)
		resultDiv.appendChild(table);
	else
		alert("No book found.");
}

function showaddform() {
	document.getElementById("addBookDiv").style.display = 'block';
	document.getElementById("listBooksDiv").style.display = 'none';
	document.getElementById("searchBookDiv").style.display = 'none';
}

function hideaddform() {
	document.getElementById("addBookDiv").style.display = 'none';
}

function hideupdateform() {
	document.getElementById("updateBookDiv").style.display = 'none';
}

function showBooksList() {
	document.getElementById("listBooksDiv").style.display = 'block';
	document.getElementById("searchBookDiv").style.display = 'none';
	hideaddform();
	showList();
}

function addBook() {
	if (validateInsertForm()) {
		var b1 = new Book();
		b1.setName(document.getElementById("txtBookName").value);
		b1.setAuthor(document.getElementById("txtBookAuthor").value);
		b1.setEdition(document.getElementById("numEdition").value);
		b1.setIsbn(document.getElementById("txtIsbn").value);
		b1.setPrice(document.getElementById("numPrice").value);
		b1.setPages(document.getElementById("numPages").value);
		b1.setPublisher(document.getElementById("txtPublisher").value);
		bookList.push(b1);
		document.getElementById("addBookForm").reset();
		hideall();
		alert("Book has been added.");
		return true;
	} else {
		return false;
	}
}

function validateInsertForm() {
	var isEmpty = document.getElementById("txtBookName").value == ""
			|| document.getElementById("txtBookAuthor").value == ""
			|| document.getElementById("numEdition").value == ""
			|| document.getElementById("txtIsbn").value == ""
			|| document.getElementById("numPrice").value == ""
			|| document.getElementById("numPages").value == ""
			|| document.getElementById("txtPublisher").value == "";

	if (isEmpty)
		return false;

	if (document.getElementById("numEdition").value < 1) {
		alert("Edition cannot be less than 1");
		return false;
	}
	if (document.getElementById("numPrice").value < 1) {
		alert("Price cannot be less than 1");
		return false;
	}
	if (document.getElementById("numPages").value < 1) {
		alert("Pages cannot be less than 1");
		return false;
	}
	return true;
}

function validateUpdateForm() {
	var isEmpty = document.getElementById("txtUpdateBookName").value == ""
			|| document.getElementById("txtUpdateBookAuthor").value == ""
			|| document.getElementById("numUpdateEdition").value == ""
			|| document.getElementById("txtUpdateIsbn").value == ""
			|| document.getElementById("numUpdatePrice").value == ""
			|| document.getElementById("numUpdatePages").value == ""
			|| document.getElementById("txtUpdatePublisher").value == "";

	if (isEmpty) {
		alert("Please fill all the fields.");
		return false;
	}

	if (document.getElementById("numUpdateEdition").value < 1) {
		alert("Edition cannot be less than 1");
		return false;
	}
	if (document.getElementById("numUpdatePrice").value < 1) {
		alert("Price cannot be less than 1");
		return false;
	}
	if (document.getElementById("numUpdatePages").value < 1) {
		alert("Pages cannot be less than 1");
		return false;
	}
	return true;
}

function showList() {
	var table = document.getElementById("listBookTable");
	generateTable(table);
	for (var i = 0; i < bookList.length; i++) {
		generateTableRow(table, bookList, i);
	}
}

function generateTable(table) {
	table.innerHTML = "";
	var tr = document.createElement("tr");
	table.appendChild(tr);
	var heading = [ "Book Name", "Author", "Edition", "ISBN", "Price", "Pages",
			"Publisher" ];
	for (var i = 0; i < heading.length; i++) {
		var th = document.createElement("th");
		th.appendChild(document.createTextNode(heading[i]));
		tr.appendChild(th);
	}
}

function generateTableRow(table, bookList, i) {
	var tr = document.createElement("tr");
	table.appendChild(tr);
	var td1 = document.createElement("td");
	td1.appendChild(document.createTextNode(bookList[i].getName()));
	var td2 = document.createElement("td");
	td2.appendChild(document.createTextNode(bookList[i].getAuthor()));
	var td3 = document.createElement("td");
	td3.appendChild(document.createTextNode(bookList[i].getEdition()));
	var td4 = document.createElement("td");
	td4.appendChild(document.createTextNode(bookList[i].getIsbn()));
	var td5 = document.createElement("td");
	td5.appendChild(document.createTextNode(bookList[i].getPrice()));
	var td6 = document.createElement("td");
	td6.appendChild(document.createTextNode(bookList[i].getPages()));
	var td7 = document.createElement("td");
	td7.appendChild(document.createTextNode(bookList[i].getPublisher()));
	var td8 = document.createElement("td");
	var deleteButton = document.createElement("input");
	deleteButton.setAttribute("type", "button");
	deleteButton.setAttribute("value", "Delete");
	deleteButton.setAttribute("onclick", "deleteBook(" + i + ")");
	td8.appendChild(deleteButton);

	var td9 = document.createElement("td");
	var updateButton = document.createElement("input");
	updateButton.setAttribute("type", "button");
	updateButton.setAttribute("value", "Update");
	updateButton.setAttribute("onclick", "updateBookForm(" + i + ")");
	td9.appendChild(updateButton);

	tr.appendChild(td1);
	tr.appendChild(td2);
	tr.appendChild(td3);
	tr.appendChild(td4);
	tr.appendChild(td5);
	tr.appendChild(td6);
	tr.appendChild(td7);
	tr.appendChild(td8);
	tr.appendChild(td9);
}

function deleteBook(i) {
	var c = confirm("Are you sure you want to delete this book?");
	if (c) {
		hideall();
		bookList.splice(i, 1);
		alert("The book has been deleted.");
	}
}

function updateBookForm(i) {
	document.getElementById("updateBookDiv").style.display = 'block';
	document.getElementById("listBooksDiv").style.display = 'none';
	document.getElementById("searchBookDiv").style.display = 'none';

	document.getElementById("txtUpdateBookName").value = bookList[i].getName();
	document.getElementById("txtUpdateBookAuthor").value = bookList[i]
			.getAuthor();
	document.getElementById("numUpdateEdition").value = bookList[i]
			.getEdition();
	document.getElementById("txtUpdateIsbn").value = bookList[i].getIsbn();
	document.getElementById("numUpdatePrice").value = bookList[i].getPrice();
	document.getElementById("numUpdatePages").value = bookList[i].getPages();
	document.getElementById("txtUpdatePublisher").value = bookList[i]
			.getPublisher();

	document.getElementById("updateBookButton").setAttribute("onclick",
			"return updateBook(" + i + ")");
}

function updateBook(i) {
	console.log(document.getElementById("numUpdateEdition").value);
	if (validateUpdateForm()) {
		var b1 = new Book();
		b1.setName(document.getElementById("txtUpdateBookName").value);
		b1.setAuthor(document.getElementById("txtUpdateBookAuthor").value);
		b1.setEdition(document.getElementById("numUpdateEdition").value);
		b1.setIsbn(document.getElementById("txtUpdateIsbn").value);
		b1.setPrice(document.getElementById("numUpdatePrice").value);
		b1.setPages(document.getElementById("numUpdatePages").value);
		b1.setPublisher(document.getElementById("txtUpdatePublisher").value);
		bookList.splice(i, 1, b1);
		document.getElementById("updateBookForm").reset();
		hideall();
		alert("Book has been updated.");
		return true;
	} else {
		return false;
	}
}