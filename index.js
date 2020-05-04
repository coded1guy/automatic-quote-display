window.onload = (event) => {
	setInterval(function(){   
		document.getElementById('quote').innerHTML = Quotes[Math.floor((Math.random()*Quotes.length))];
	}, 30000);
};
var Quotes = [
	"“" + '<span class="spQuote">' + 
	"You know you’re in love when you can’t fall asleep because reality is finally better than your dreams."
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– Dr. Suess" + '</span>',
	"“" + '<span class="spQuote">' + 
	"I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best."
	 + "”" + '</span>' + '<br>' + '<br>' + '<span class="spAuthor">' + "– Marilyn Monroe" + '</span>',
	"“" + '<span class="spQuote">' + 
	"Life is what happens when you’re busy making other plans." 
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– John Lennon" + '</span>',
	"“" + '<span class="spQuote">' + 
	"Get busy living or get busy dying." 
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– Stephen King" + '</span', 
	"“" + '<span class="spQuote">' + 
	"The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself." 
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– Mark Caine" + '</span>', 
	"“" + '<span class="spQuote">' + 
	"When one door of happiness closes, another opens; but often we look so long at the closed door that we do not see the one which has been opened for us." 
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– Helen Keller" + '</span>', 
	"“" + '<span class="spQuote">' + 
	"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do." 
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– Mark Twain" + '</span>', 
	"“" + '<span class="spQuote">' + 
	"When I dare to be powerful – to use my strength in the service of my vision, then it becomes less and less important whether I am afraid." 
	+ '</span>' + "”" + '<br>' + '<br>' + '<span class="spAuthor">' + "– Audre Lorde" + '</span>'
];