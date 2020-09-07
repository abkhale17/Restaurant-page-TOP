const veg = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");

	const table = document.createElement("table")
	table.setAttribute("class", "Tables")
	const tr1 = document.createElement("tr")
	const th1 = document.createElement("th")
	const th2 = document.createElement("th")
	const th3 = document.createElement("th")

	th1.innerHTML = "Dish Name"
	th2.innerHTML = "Stars"
	th3.innerHTML = "Votes"

	tr1.appendChild(th1)
	tr1.appendChild(th2)
	tr1.appendChild(th3)
	table.appendChild(tr1)

	const tr2 = document.createElement("tr")
	const td1 = document.createElement("td")
	const td2 = document.createElement("td")
	const td3 = document.createElement("td")

	td1.innerHTML = "Palak Paneer"
	td2.innerHTML = "10"
	td3.innerHTML = "9.5M"
	tr2.appendChild(td1)
	tr2.appendChild(td2)
	tr2.appendChild(td3)
	table.appendChild(tr2)

	const tr3 = document.createElement("tr")
	const td4 = document.createElement("td")
	const td5 = document.createElement("td")
	const td6 = document.createElement("td")

	td4.innerHTML = "Rajma (Red Kidney Bean Curry)"
	td5.innerHTML = "10"
	td6.innerHTML = "18M"

	tr3.appendChild(td4)
	tr3.appendChild(td5)
	tr3.appendChild(td6)
	table.appendChild(tr3)


	const tr4 = document.createElement("tr")
	const td8 = document.createElement("td")
	const td9 = document.createElement("td")
	const td10 = document.createElement("td")

	td8.innerHTML = "Mutter Paneer (Peas and Cottage Cheese)"
	td9.innerHTML = "9"
	td10.innerHTML = "10M"

	tr4.appendChild(td8)
	tr4.appendChild(td9)
	tr4.appendChild(td10)
	table.appendChild(tr4)

	const tr5 = document.createElement("tr")
	const td11 = document.createElement("td")
	const td12 = document.createElement("td")
	const td13 = document.createElement("td")

	td11.innerHTML = "Aaloo Paratha (Potato Paratha)"
	td12.innerHTML = "8.9"
	td13.innerHTML = "7.2M"

	tr5.appendChild(td11)
	tr5.appendChild(td12)
	tr5.appendChild(td13)
	table.appendChild(tr5)

	variableContent.appendChild(table)
	content.appendChild(variableContent)
}

export default veg