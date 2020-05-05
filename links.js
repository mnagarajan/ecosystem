function writeImageVB() {

	var imgVB = '../banners/vbBannerNEW_free.gif'

	imageTextVB = "<a href='../bookshop/net.html'><p align ='center'><img src=" + imgVB + " border='1'></A></p>"
		//imageTextVB = imageTextVB + imageMap
	document.write(imageTextVB)
}

function writeImageVBTwo() {

	var imgVB = '../../banners/vbBannerNEW_free.gif'

	imageTextVB = "<a href='../../bookshop/net.html'><p align ='center'><img src=" + imgVB + " border='1'></A></p>"
		//imageTextVB = imageTextVB + imageMap
	document.write(imageTextVB)
}

function DoPopUp(URL, width, height) {
msgWindow = window.open(URL, "PopUp", "toolbar=no,width=" + width + ",height=" +height)
}

function eAdd() {
	width = 500
	height = 300
msgWindow = window.open('emailAddress.htm', "PopUp", "toolbar=no,width=" + width + ",height=" +height)
}