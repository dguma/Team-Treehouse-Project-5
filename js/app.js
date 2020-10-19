window.addEventListener('load', function() { 
	baguetteBox.run('.photo-gallery-container', {
		buttons: true
	});
	const search = new Filter('search', 'data-caption');
});

var Hay = "I love hay bales. Took this snap on a drive through the countryside past some straw fields.";
var Lake = "The lake was so calm today. We had a great view of the snow on the mountains from here.";
var Canyon = "I hiked to the top of the mountain and got this picture of the canyon and trees below.";
var Iceberg = "It was amazing to see an iceberg up close, it was so cold but didn’t snow today. ";
var Desert = "The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.";
var Fall = "Fall is coming, I love when the leaves on the trees start to change color.";
var Plantation = "I drove past this plantation yesterday, everything is so green!";
var Dunes = "My summer vacation to the Oregon Coast. I love the sandy dunes!";
var Countryside = "We enjoyed a quiet stroll down this countryside lane.";
var Sunset = "Sunset at the coast! The sky turned a lovely shade of orange.";
var Cave = "I did a tour of a cave today and the view of the landscape below was breathtaking.";
var Bluebells = "I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.";

var images = new Array(Hay, Lake, Canyon, Iceberg, Desert, Fall, Plantation, Dunes, Countryside, Sunset, Cave, Bluebells);

var imagesAlt = new Array("Hay", "Lake", "Canyon", "Iceberg", "Desert", "Fall", "Plantation", "Dunes", "Countryside", "Sunset", "Cave", "Bluebells");

for (let i = 0; i <= 11; i++ ){
		document.getElementById("photo-images").innerHTML += `<a href="images/${i}.jpg" data-caption="${images[i]}"><img src="images/thumbnails/${i}.jpg" alt="${imagesAlt[i]}"></a>`;
}






