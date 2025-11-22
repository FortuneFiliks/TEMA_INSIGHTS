$(".menu").toggle(view_Menu, close_Menu);

function view_Menu(){
	$(".mobile_menu_section").css({"display":"block"});
	$(":root").css({"overflow-y":"hidden"});
}

function close_Menu(){
	
	$(".mobile_menu_section").css({"display":"none"});
	$(":root").css({"overflow-y":"visible"});
}


const get_Strategize_Word = document.querySelector(".left_word");

function animate_Strategize_Word(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_strategize_class");
		}else{
			
			entry.target.classList.remove("animate_strategize_class");
		}
		
	});
	
	
	
}

strategize_Word_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : "0.6",
}

strategize_Word_Intersection_Api = new IntersectionObserver(animate_Strategize_Word, strategize_Word_Root);
strategize_Word_Intersection_Api.observe(get_Strategize_Word);


const get_Convert_Word = document.querySelector(".right_word");

function animate_Convert_Word(entries){
	entries.forEach( (entry) => {
		if(entry.isIntersecting){
			entry.target.classList.add("animate_convert_class");
		}else{
			
			entry.target.classList.remove("animate_convert_class");
		}
		
	});
	
	
	
}

convert_Word_Root = 
{
	root : null,
	rootMargin : "0px",
	threshold : "0.6",
}

convert_Word_Intersection_Api = new IntersectionObserver(animate_Convert_Word, convert_Word_Root);
convert_Word_Intersection_Api.observe(get_Convert_Word);
