const nonveg = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");

	const div = document.createElement('div')
	div.innerHTML = "nonveg tab"
	variableContent.appendChild(div)
	content.appendChild(variableContent)
}

export default nonveg