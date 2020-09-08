import pageLoad from "./pageLoad"
import home from "./tabs/home"
import veg from "./tabs/veg"
import nonveg from "./tabs/nonveg"
import chefs from "./tabs/chefs"
import contacts from "./tabs/contacts"
import about from "./tabs/aboutus"

pageLoad()

const content = document.getElementById("content");
const variableContent = document.getElementById("varContent");

const description = document.getElementById('descript');
const gallery = document.getElementById('gallery');

const homeBtn = document.getElementById("homeBtn")
const menuBtn = document.getElementById("menuBtn")
const dropdown = document.querySelector(".dropdown-content")

const vegBtn = document.getElementById("veg")
const nonvegBtn = document.getElementById("nonveg")
const chefsBtn = document.getElementById("chefsBtn")
const contactsBtn = document.getElementById("contactsBtn")
const aboutUsBtn = document.getElementById("aboutUsBtn")

const closeMenuDrop = () => {
	if(dropdown.style.display == "block"){
		dropdown.style.display = "none"
	}
}

var tabs = [homeBtn , vegBtn, nonvegBtn, chefsBtn, contactsBtn, aboutUsBtn]
var funcs = [home, veg, nonveg, chefs, contacts, about]

tabs.forEach( (tab, index) => {
	tab.addEventListener('click', (e) => {
		closeMenuDrop()
		variableContent.innerHTML = ""
		var curTab = funcs[index]
		curTab()
	})
})

menuBtn.addEventListener('click', (e) => {
	if(dropdown.style.display == "block"){
		dropdown.style.display = "none"
	} else {
		dropdown.style.display = "block"
	}
})

variableContent.addEventListener('click', (e) => {
	closeMenuDrop();
})
