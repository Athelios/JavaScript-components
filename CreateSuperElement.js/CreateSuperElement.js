var element;
var table;

function createSuperElement(type, attributes=0, innerHTML=0) {
	element = document.createElement(type);

	if (innerHTML && typeof innerHTML === 'object') element.appendChild(innerHTML);
	else if (innerHTML) element.innerHTML = innerHTML;

	if (attributes) {
		for (var i in attributes) {
			element.setAttribute(i, attributes[i]);
		}
	}

	return element;
}

function createSuperTable(data, attributes=0) {
	table = createSuperElement('table', attributes);

	for (var i in data) { // rows
		table.appendChild(createSuperElement('tr'));

		for (var j in data[i]) { // cells
			table.lastChild.appendChild(createSuperElement('td', data[i][j][1], data[i][j][0]));
		}
	}

	return table;
}