import pageLoad from "./pageLoad"
import home from "./tabs/home"
import menu from "./tabs/menu"
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
const chefsBtn = document.getElementById("chefsBtn")
const contactsBtn = document.getElementById("contactsBtn")
const aboutUsBtn = document.getElementById("aboutUsBtn")

homeBtn.addEventListener('click', (e) => {
	variableContent.innerHTML = ""
	home()
})

menuBtn.addEventListener('click', (e) => {
	variableContent.innerHTML = ""
	menu(variableContent)
})

chefsBtn.addEventListener('click', (e) => {
	variableContent.innerHTML = ""
	chefs();
})

contactsBtn.addEventListener('click', (e) => {
	variableContent.innerHTML = ""
	contacts();
})

aboutUsBtn.addEventListener('click', (e) => {
	variableContent.innerHTML = ""
	about();
})