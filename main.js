$(document).ready(() => {
    
    var quoteSource=[
		{
			quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
			author:"Francis of Assisi"
	    },
	    {
	    	quote:"Believe you can and you're halfway there.",
	    	author:"Theodore Roosevelt"
	    },
	    {
	    	quote:"It does not matter how slowly you go as long as you do not stop.",
	    	author:"Confucius"
	    },
	    {
	    	quote:"Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
	    	author:"Thomas A. Edison"
	    },
	    {
	    	quote:"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
	    	author:"Confucius"
	    },
	    {
	    	quote:"Don't watch the clock; do what it does. Keep going.",
	    	author:"Sam Levenson"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	author:"Ayn Rand"
	    },
	    {
	    	quote:"A creative man is motivated by the desire to achieve, not by the desire to beat others.",
	    	author:"Ayn Rand"
	    },
	    {
	    	quote:"Expect problems and eat them for breakfast.",
	    	author:"Alfred A. Montapert"
	    },
	    {
	    	quote:"Start where you are. Use what you have. Do what you can.",
	    	author:"Arthur Ashe"
	    },
	    {
	    	quote:"Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
	    	author:"Samuel Beckett"
        }
    ]

    let colorsSource = ["#8B008B", "#663399", "#6A5ACD", "#9400D3", "#FF7F50", "#C71585","#BDB76B", "#32CD32", "#008080", "#4169E1", "#800000"]

    //Define the onclick action of the button
    $('#new-quote').on("click", event => {

        //Set length of the source array and use it as maximum for random numbers
        let sourceLength  = quoteSource.length
		let colorLength = colorsSource.length
		
        //set new quote with the relative author
        for(let i = 0; i < sourceLength; i++) {

			let randomNumber =  Math.floor(Math.random() * sourceLength)
			let randomColor = colorsSource[Math.floor(Math.random() * colorLength)]

            $('#text').html(quoteSource[randomNumber].quote).css("color", randomColor)
            $('#author').html("-" + quoteSource[randomNumber].author)
			$("body").css("background-color", randomColor)
			$(".badge").css("background-color", randomColor)
			$("#new-quote").css("background-color", randomColor)

            break;
		}

		//Prevent browser's default action
        event.preventDefault()
	})
	
	//Handle the tweet quote link
	$("#tweet-btn").on("click", () => {
		$("#tweet-quote").attr("href", 'https://twitter.com/intent/tweet?text=' + $('#text').text() +" "+ $('#author').text())
	})

	$("#tumblr-btn").on("click", () => {
		$('#tumblr-quote').attr('href', 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption='
		+ $('#author').text() +'&content=' + $('#text').text() +'&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button');
	})

})

