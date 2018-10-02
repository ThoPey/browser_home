fetch("data.json")
	.then(file => file.json())
	.then(parseData)
	.catch(console.error);

function parseData(data) {
	for (let key in data) {
		addRow(key, data[key]);
	}
}

function addRow(name, content) {
	let section = document.createElement("div");
	section.classList.add("section");

	let title = document.createElement("div");
	title.innerHTML = name;
	title.classList.add("title");

	let row = document.createElement("div");
	row.classList.add("row");

	for (let key in content) {
		let child = document.createElement("a");
		child.href = content[key];
		child.innerHTML = key;
		row.appendChild(child);
	}

	section.appendChild(title);
	section.appendChild(row);
	document.body.appendChild(section);
}