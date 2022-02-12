
var		total = Math.floor(Math.random() * 100000) + 50000;
var		totalv = Math.floor(Math.random() * 100000) + 50000;
	var	today = Math.floor(Math.random() * 100000) + 50000;
	var	yesterday = Math.floor(Math.random() * 100000) + 50000;
	var	posts = Math.floor(Math.random() * 100000) + 50000;
	var	comments = Math.floor(Math.random() * 100000) + 50000;
	var	onlines = Math.floor(Math.random() * 100000) + 50000;
		var qoqnuse_khaste = "khubi dayyii??";	
		
		function amarkharabkon(){
			total=Math.floor(Math.random() * 10000) + 000;
			totalv=Math.floor(Math.random() * 10000) + 000;
			today=Math.floor(Math.random() * 10000) + 000;
			yesterday=Math.floor(Math.random() * 10000) + 000;
			posts=Math.floor(Math.random() * 10000) + 0;
			comments=Math.floor(Math.random() * 10000)  ;
			onlines=Math.floor(Math.random() * 10000) ;
				document.getElementById("value_VIEW_STAT_TOTAL").innerHTML=total;
				document.getElementById("value_HIT_STAT_TOTAL").innerHTML=totalv;
		document.getElementById("value_VIEW_STAT_TODAY").innerHTML=today;
		document.getElementById("value_VIEW_STAT_YESTERDAY").innerHTML=yesterday;
		document.getElementById("value_VIEW_STAT_POSTS_COUNT").innerHTML=posts;
		document.getElementById("value_VIEW_STAT_COMMENTS_COUNT").innerHTML=comments;
		document.getElementById("value_VIEW_STAT_ONLINE_USER").innerHTML=onlines;
		setTimeout(amarkharabkon, 500);	
		}
		amarkharabkon();
