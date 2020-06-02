window.onscroll = function(){
	if (document.documentElement.scrolltop > 100){
		document.queryselector('.go-top-container')
		.classlist.add('show');
		}else{
			document.queryselector('.go-top-container')
			.classlist.remove('show');
		}
};