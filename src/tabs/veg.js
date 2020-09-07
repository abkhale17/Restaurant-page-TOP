const veg = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");

	const div = document.createElement('div')
	div.innerHTML = "veg tab"
	variableContent.appendChild(div)
	content.appendChild(variableContent)
}

export default veg