const home = () => {
	const content = document.getElementById("content");
	const variableContent = document.getElementById("varContent");
	
	const description = document.createElement('div');
	const section1 = document.createElement('section');
	const img = document.createElement('img');
	const section2 = document.createElement('section');
	const header = document.createElement('header');
	const title = document.createElement('h1');
	const para = document.createElement('p');
	description.setAttribute("id","descript");
	description.setAttribute("class", "group");
	section1.setAttribute("id","logo");
	img.setAttribute("src","../src/assets/losPolosHermanos.jpg")
	section2.setAttribute("id","info");
	title.innerHTML = "Los Pollos Hermanos";
	para.innerHTML = "Los Pollos Hermanos (Spanish for The Chicken Brothers) is a fried chicken fast food restaurant that originated in the television series Breaking Bad and Better Call Saul. In the fictional universe of Breaking Bad, Los Pollos Hermanos is a front organization for Gus Fring's meth manufacturing and distribution operation. The set used for the restaurant in the show was at a Twisters branch in South Valley, New Mexico, and Twisters has seen an increase in business attributed to being associated with Breaking Bad. Due to the show's popularity, Los Pollos Hermanos has appeared on numerous occasions and locations as a real-life pop-up restaurant."
	header.appendChild(title);
	section1.appendChild(img);
	section2.appendChild(header);
	section2.appendChild(para);
	description.appendChild(section1);
	description.appendChild(section2);
	variableContent.appendChild(description)


	const gallery = document.createElement('div');
	const slide1 = document.createElement('img');
	const slide2 = document.createElement('img');
	const slide3 = document.createElement('img');
	const slide4 = document.createElement('img');
	gallery.setAttribute("id","gallery");
	slide1.setAttribute("src","../src/assets/lph2.jpg")
	slide2.setAttribute("src","../src/assets/lph3.jpg")
	slide3.setAttribute("src","../src/assets/lph4.jpg")
	slide4.setAttribute("src","../src/assets/lhp6.jpeg")
	gallery.appendChild(slide1);
	gallery.appendChild(slide2);
	gallery.appendChild(slide3)
	gallery.appendChild(slide4)

	const div = document.createElement('div')
	const a = document.createElement('a')
	a.innerHTML = "Developed By: Abhishek Khale"
	a.setAttribute("href","https://github.com/abkhale17")
	div.style.backgroundColor = "#424242"
	a.style.marginTop = "2%";
	a.style.color = "white"
	div.style.paddingTop= "8px";
	div.style.paddingBottom = "8px";
	div.style.paddingLeft= "8px";
	a.style.textDecoration = "none"
	
	div.appendChild(a)
	variableContent.appendChild(gallery)
	variableContent.appendChild(div)
	content.appendChild(variableContent)
}

export default home