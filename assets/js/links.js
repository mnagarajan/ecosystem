function writeImageVB() {

	var imgVB = '../banners/vb_banner.gif'

	imageTextVB = "<a href='../bookshop/net.html'><p align ='center'><img src=" + imgVB + " border='1'></A></p>"
		
	document.write(imageTextVB)
}

function eAdd() {
	width = 500
	height = 300
msgWindow = window.open('../emailAddress.htm', "PopUp", "toolbar=no,width=" + width + ",height=" +height)
}