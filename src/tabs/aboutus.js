const about = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");

	const div = document.createElement('div')
	div.innerHTML = "about us tab"
	variableContent.appendChild(div)
	content.appendChild(variableContent)
}

export default about