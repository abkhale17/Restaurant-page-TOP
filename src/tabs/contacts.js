const contacts = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");

	const div = document.createElement('div')
	div.innerHTML = "If you have any suggestions, good or bad, simply call us or drop a message. Follow us on twitter, facebook"
	div.style.backgroundColor = "#424242"
	div.style.marginTop = "2%";
	div.style.color = "white"
	div.style.padding= "12px"
	const table = document.createElement("table")
	table.setAttribute("class", "Tables")
	const tr1 = document.createElement("tr")
	const th1 = document.createElement("th")
	const th2 = document.createElement("th")
	const th3 = document.createElement("th")

	th1.innerHTML = "Phone"
	th2.innerHTML = "E-mail"
	th3.innerHTML = "Social Network"

	tr1.appendChild(th1)
	tr1.appendChild(th2)
	tr1.appendChild(th3)
	table.appendChild(tr1)

	const tr5 = document.createElement("tr")
	const td11 = document.createElement("td")
	const td12 = document.createElement("td")
	const td13 = document.createElement("td")

	td11.innerHTML = "+91 987654321"
	td12.innerHTML = "sggest@chef"
	td13.innerHTML = "@restochef"

	tr5.appendChild(td11)
	tr5.appendChild(td12)
	tr5.appendChild(td13)
	table.appendChild(tr5)

	variableContent.appendChild(table)
	variableContent.appendChild(div)
	content.appendChild(variableContent)
}

export default contacts