const chefs = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");

	const div = document.createElement('div')
	div.innerHTML = "chef tab"
	variableContent.appendChild(div)
	content.appendChild(variableContent)
}

export default chefs