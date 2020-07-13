var mongoose = require("mongoose");
var Post = require("./models/post");
var Comment = require("./models/comment");

var data = [
	// TENNIS
	{
		theme: "Sport",
		topic: "TENNIS NEWS",
		class: "main-tennis",
		title: "WTA unpaved tournament will be held in Prague",
		image: "/images/wta.jpg",
		imageHD: "/images/hd/wta.jpg",
		date: "July 10, 2020",
		shortDescription: "From August 10 to August 15 in Prague will be held WTA unpaved tournament",
		fullDescription: "From 10 to 15 August in Prague (Czech Republic) will be held WTA unpaved tournament, reports "+
						 "Ceska Televize. According to the source, this is a new tournament, which was decided to be held "+
						 "due to the cancellation of the April tournament in Prague. It is reported that the prize fund "+
						 "will be $ 225 thousand (almost € 200 thousand). In addition, the tournament will be able to attend "+
						 "two thousand spectators. Recall, due to the coronavirus pandemic, the holding of international "+
						 "tennis tournaments was suspended in March. Currently, only exhibition tournaments are held in "+
						 "Europe and the USA. The WTA season is scheduled to resume on August 3 at a tournament in Palermo "+
						 "(Italy). In addition, after the resumption of the season, it is planned to hold three Masters, "+
						 "as well as the US Open and Roland Garros, in a short time.",
		numberOfViews: 0
	},
	{
		theme: "Sport",
		topic: "TENNIS NEWS",
		class: "main-right",
		title: "Serbian Prime Minister supports Djokovic",
		image: "/images/novak.jpg",
		imageHD: "/images/hd/novak.jpg",
		date: "null",
		shortDescription: "Serbian Prime Minister supports Djokovic who is...",
		fullDescription: "Serbian Prime Minister Ana Brnabic has come to the defence of under-fire tennis superstar Novak "+
						 "Djokovic after multiple cases of coronavirus emerged from the tournament he organised in the "+
						 "Balkan region. World No. 1 Novak Djokovic and his brother organised the Adria Tour exhibition "+
						 "tennis event to raise money for charity which was intended to help in the fight against coronavirus. "+
						 "Djokovic has been facing flak ever since Dimitrov revealed his positive Covid-19 test, becoming the "+
						 "first player to contract the virus. Videos and pictures of players interacting, embracing each other, "+
						 "playing basketball and partying like they did in pre-COVID-19 days became viral on social media. "+
						 "Djokovic issued two apologies for organising the tournament, the final leg of which had to be "+
						 "cancelled. But Ana Brnabic defended Djokovic urging people to leave him alone.",
		numberOfViews: 0
	},
	{
		theme: "Sport",
		topic: "TENNIS NEWS",
		class: "right right-with-bottom-border",
		title: "5-set battle of Federer and Millman at AO-2020",
		image: "tennis-none",
		imageHD: "/images/hd/federer.jpg",
		date: "null",
		shortDescription: "The official YouTube channel of the Australian Open shows the match of the third round of the "+
						  "tournament in 2020...",
		fullDescription: "The Australian Open YouTube channel showed the third round of the season between No. 3 by Roger "+
						 "Federer and No. 47 John Millman. The meeting, which lasted 4 hours 3 minutes, was for the Swiss "+
						 "the 46th five-set player at the Grand Slam tournaments in his career. He became the sole champion "+
						 "of the Open Era for this indicator, and also interrupted a series of three losses in five-set matches. "+
						 "In total for Federer it was the 100th victory in Melbourne. He is the only tennis player in history "+
						 "to win 100 matches on the Helmet, and he has two of them - Wimbledon (101 victories) and the "+
						 "Australian Open.",
		numberOfViews: 0
	},
	{
		theme: "Sport",
		topic: "TENNIS NEWS",
		class: "right",
		title: "Australian Open classic",
		image: "tennis-none",
		imageHD: "/images/hd/serena.jpg",
		date: "null",
		shortDescription: "Australian Open classic: Serena vs. Halep in the fourth round of 2019",
		fullDescription: "There was a mix-up at the start of Serena Williams’s showdown with Simona Halep last night on "+
						 "Rod Laver Arena, which had the feeling of a final even though there is almost a week of the "+
						 "Australian Open left to run. As the announcer boomed the name of Simona Halep, introducing her "+
						 "as the world No. 1, it was Serena Williams who came striding out of the tunnel. She immediately "+
						 "turned on her heel and went straight back inside. It was an apposite way for the encounter to "+
						 "begin, because there has been plenty of debate about who the real No. 1 might be. The rankings "+
						 "say Halep, but by the time the match was finished, 1hr 47min later, Williams had reaffirmed her "+
						 "real position as tennis’s alpha female.",
		numberOfViews: 0
	},
	// FOOTBALL
	{
		theme: "Sport",
		topic: "FOOTBALL NEWS",
		class: "main-football",
		title: "Liverpool - Premier League champions!",
		image: "/images/liverpool.jpg",
		imageHD: "/images/hd/liverpool.jpg",
		date: "June 26, 2020",
		shortDescription: "Liverpool for the first time in 30 years became Premier League champions",
		fullDescription: "“Liverpool“ football club, which has not been the champion of England for the past 30 years, "+
						 "won the English Premier League ahead of schedule the day before. The team achieved success "+
						 "under the leadership of German coach Jurgen Klopp, who took over the team in 2015. “Liverpool” "+
						 "secured the Premier League title this season thanks to “Chelsea's” 2-1 win over “Manchester city” "+
						 "in the 31st round of the English championship. The gap between “Liverpool“ and “Manchester city“ "+
						 "was 23 points, in the remaining 7 rounds, “citizens“ can score a maximum of 21. This is "+
						 "“Liverpool's” 19th English League title. Only “Manchester United” have more gold medals, they "+
						 "have won the national championship 20 times.",
		numberOfViews: 0
	},
	{
		theme: "Sport",
		topic: "FOOTBALL NEWS",
		class: "main-right",
		title: "Champions League is coming back!",
		image: "/images/league.jpg",
		imageHD: "/images/hd/champions_league.jpg",
		date: "July 12, 2020",
		shortDescription: "The quartefinals, semifinals and the final of the UEFA Champions League 2019/20 will be held...",
		fullDescription: "The 2019/20 UEFA Champions League quarter-finals, semi-finals and final will be played as a "+
						 "straight knockout tournament in Lisbon, Portugal in August. All these ties will be single-leg "+
						 "fixtures. The games will be split between Benfica's Estádio do Sport Lisboa e Benfica (which will "+
						 "host the final) and Sporting CP's Estádio José Alvalade. A decision is pending on whether the "+
						 "remaining round of 16 second legs will take place at the home team's stadium or in Portugal. The "+
						 "Estádio do Dragão in Porto and the Estádio D. Afonso Henriques in Guimarães will host the four "+
						 "outstanding second legs if required. The 2019/20 UEFA Champions League has been on hold since "+
						 "Wednesday 11 March due to the COVID-19 outbreak. The revised schedule to conclude this season's "+
						 "competition was confirmed following Wednesday's UEFA Executive Committee meeting.",
		numberOfViews: 0
	},
	{
		theme: "Sport",
		topic: "FOOTBALL NEWS",
		class: "right right-with-bottom-border",
		title: "Summer transfer window 2020",
		image: "",
		imageHD: "/images/hd/transfers.jpg",
		date: "null",
		shortDescription: "Premier League, Seria A, La Liga, Bundesliga, Ligue 1 transfer news",
		fullDescription: "The summer market was set to return to its traditional end date following a vote from the "+
						 "top-flight clubs earlier this year. At a shareholders’ meeting between the clubs in February, it "+
						 "was decided that the transfer window will shut at the end of August/early September after two "+
						 "seasons where it closed on the eve of the campaign. But the ongoing issues surrounding coronavirus "+
						 "could have unprecedented effects on transfer spending this year. Premier League football is set to "+
						 "return on Wednesday, June 17 with games then coming thick and fast before the campaign finishes at "+
						 "the end of July. Top-flight chief executive Richard Masters has confirmed the window will not open "+
						 "until the season ends on July 26 and there is currently no official dates announced for when the "+
						 "window will close again.",
		numberOfViews: 0
	},
	{
		theme: "Sport",
		topic: "FOOTBALL NEWS",
		class: "right",
		title: "Information on tickets for EURO 2020",
		image: "",
		imageHD: "/images/hd/euro.jpg",
		date: "null",
		shortDescription: "All tickets purchased for the Europian Champioship matches will be valid in summer of 2021 "+
						  "according to the UEFA official website",
		fullDescription: "The UEFA Executive Committee on Wednesday approved the new EURO 2020 schedule - the tournament "+
						 "will be held from June 11 to July 11, 2021. It was also announced that all previously purchased "+
						 "tickets will remain in effect. If it is not possible to use tickets, they can be returned on a "+
						 "special portal, which will continue to operate until 14:00 CET on June 25, 2020. The organizers "+
						 "emphasize that this is the last opportunity for fans to return previously purchased tickets. In "+
						 "total, fans left 28.3 million applications for tickets, which is double the number of applications "+
						 "before EURO 2016. Almost 64% of requests were left by football fans residing in the host countries "+
						 "of the tournament. High demand was shown by their neighboring countries, such as Finland, Austria, "+
						 "France and Poland. In October and November will be held butt games of European qualification. "+
						 "They will determine the last four participants in the final stage of EURO 2020. Their fans will "+
						 "later be able to apply online.",
		numberOfViews: 0
	},
	// MOVIES
	{
		topic: "MOVIES",
		title: "Marvel movies calendar",
		image: "/images/marvel.jpg",
		imageHD: "/images/hd/marvel.jpg",
		date: "July 1, 2020",	
		shortDescription: "Marvel movies and TV series calendar for 2020 and 2021",
		fullDescription: "In 2020, Sony will release two projects based on Marvel comics, Venom 2 and Morbius."+
						 "In July 2021, the third film about Spider-Man with Tom Holland in the lead role will be"+
						 "released, but otherwise the studio has not yet revealed its plans for a franchise about"+
						 "characters related to the popular superhero. Probably, October 2021 is reserved for one"+
						 "of the films, rumors about the development of which periodically appear on the network."+
						 "According to various sources, the studio plans to make solo paintings about several"+
						 "opponents of Spider-Man, including Mysterio, Craven the Hunter and Hobgoblin. No"+
						 "confirmation of upcoming projects has yet been received.",
		numberOfViews: 0
	},
	{
		topic: "MOVIES",
		title: "The Witcher Season 2 (2021)",
		image: "/images/witcher.jpg",
		imageHD: "/images/hd/witcher.jpg",
		date: "July 14, 2020",	
		shortDescription: "The Witcher Season 2 - all news and details of the series",
		fullDescription: "The Witcher season 2 is coming to Netflix, and it'll continue the fantasy adventures of"+
						 "Geralt of Rivia, Ciri and Yennefer. The Witcher series is based on Andrzej Sapkowski's books, "+
						 "and in The Witcher season 2, we're expecting a similar mix of monster hunting and political "+
						 "drama. The Witcher season 1 was a smash hit on Netflix, and one of the best Netflix shows of "+
						 "recent memory. The Witcher season 2 release date is 2021, though no specific date has been set "+
						 "yet, and filming was paused after a health crisis-related production shutdown. Now, though, "+
						 "Netflix has confirmed that The Witcher season 2 will resume filming on August 17, in a tweet "+
						 "styled like a song by Jaskier the bard.",
		numberOfViews: 0
	},
	{
		topic: "MOVIES",
		title: "Eight below: the real story",
		image: "/images/eight-below.jpg",
		imageHD: "/images/hd/eight-below.jpg",
		date: "June 30, 2020",	
		shortDescription: "A story of canine strength and tenacity",
		fullDescription: "In 2006, Disney released “Eight Below”, a film that tells the story of a pack of abandoned "+
						 "sled dogs and their struggle to survive the hostile Antarctic landscape. What you may not know "+
						 "is that this film is based on the Japanese film “Antarctica” (1983), and that both of these "+
						 "films are based on the true story of the ill-fated 1958 Japanese expedition to Antarctica."+
						 "The Japanese Antarctic Research Expedition Program (JARE) had established a research station "+
						 "in 1957 on East Ongul Island. The Syowa Station, as it was called, was to host a team of "+
						 "researchers for the first over-winter expedition. There was a team of 11 researchers, supported "+
						 "by a team of 15 dogs. The dogs, all males, were Sakhalin Huskies (in Japan the breed is known as "+
						 "Karafuto-ken). The dogs were there to pull sledges to and from the base. The idea was for the "+
						 "team to spend an entire year at the base, with another team to replace them the following year. "+
						 "Unfortunately, the relief team’s boat became stuck in ice too far from the base to be of any "+
						 "assistance. The researchers, and their dogs, were stranded. The researchers were soon evacuated "+
						 "by helicopter, but the 15 dogs had to be left behind.",
		numberOfViews: 0
	},
	// AUTO
	{
		topic: "AUTO",
		title: "Mercedes EQC: brand's first electric crossover",
		class: "auto-main",
		image: "/images/mercedes.jpg",
		imageHD: "/images/hd/mercedes.jpg",
		date: "July 11, 2020",	
		shortDescription: "Outside, the new Mercedes EQC 2019 model resembles the concept of the same name two years ago, "+
						  "but still does not repeat it exactly.",
		fullDescription: "Mercedes-Benz EQC- runs exclusively on electricity. It is based on an electric power plant of two "+
						 "motors located on the front and rear axles. Their total return is about 408 horsepower and 765 Nm "+
						 "of torque. With such a herd under the hood, the crossover, with a dry mass of 2345 kilograms, "+
						 "shoots to the first hundred in just 5.1 seconds and can gain up to 180 kilometers per hour. "+
						 "Despite the fact that the actual capabilities of the model are much higher, the manufacturer "+
						 "installed an electronic limiter for security reasons. The power reserve with a fully charged "+
						 "battery will be about 450 kilometers. A special charging station is included with the vehicle. "+
						 "It has a liquid cooling system and is able to replenish energy up to 80% in just 40 minutes.",
		numberOfViews: 0
	},
	{
		topic: "AUTO",
		theme: "auto",
		title: "Legendary movie cars",
		class: "autos movie-autos",
		image: "/images/camaro.jpg",
		imageHD: "/images/hd/camaro.jpg",	
		shortDescription: "Sometimes in the movie, the main roles are assigned not to the actors at all.",
		fullDescription: "Sometimes in the movie the main roles are assigned to actors at all. Here are a few cars that "+
						 "have attracted spectator attention and have taken a place in the history of cinema. At first, the "+
						 "oiceless transformer Bumblebee, forced to communicate with others with the help of successfully "+
						 "caught pieces of radio broadcasts, is a real dream of a stereotypical loser schoolboy who dreams "+
						 "of becoming cool. Not only a stylish yellow-black Chevrolet Camaro, but also a giant robot that "+
						 "can stand up for itself and its driver-friend. Over time, Bumblebee, like the entire franchise, "+
						 "was tired of the order, but this did not stop the producers from the idea of ​​making a separate "+
						 "film about him (of course, in the aesthetics of the 1980s).",
		numberOfViews: 0
	},
	{
		topic: "AUTO",
		theme: "auto",
		title: "BMW X6 test drive",
		class: "",
		image: "/images/bmw.jpg",
		imageHD: "/images/hd/bmw.jpg",
		date: "",	
		shortDescription: "Test drive bmw x6. At one time, it was the BMW X6 that formed the fashion for large hatch crossovers...",
		fullDescription: "At one time, it was the BMW X6 that formed the fashion for large hatch crossovers. The machine of "+
						 "the first generation was produced in the absence of rivals, and only by the release of the second X-sixth "+
						 "began to appear followers. Now they climb like mushrooms after the rain, competition has intensified, and "+
						 "BMW is forced to renew every five years. Moreover, if the previous X6 F16 series can be considered a product "+
						 "of deep modernization of the E71, then the current G06, built on the CLAR platform, is truly new. The "+
						 "increase in size compared to its predecessor almost did not add internal freedom: the unregulated hatchback "+
						 "rear row is still not spacious. And the trunk did not add a liter. Still, the crossover puts dirty sills "+
						 "under the feet of passengers. The interior is different from the interior of the X5 I know in a bit. On the "+
						 "redrawn door panels, grabbing handrails appeared - as compensation for the lack of handles on the ceiling. "+
						 "When the door is open, the backlight built into the handrails goes into the signal light mode: it turns red "+
						 "and starts to blink.",
		numberOfViews: 0
	},
	// MUSIC
	{
		topic: "MUSIC",
		theme: "music",
		title: "Adele's New Album Release Delayed indefinitely",
		class: "no-image-post",
		imageHD: "/images/hd/adel.jpg",
		date: "June 26, 2020",	
		shortDescription: "Adele's new album will not be released as scheduled. This was reported to MusicWeek by the artist’s manager.",
		fullDescription: "Adele's fourth studio album's release date has reportedly been delayed. On Thursday (June 25), "+
						 "a member of the Hello singer's management team, Jonathan Dickins, confirmed in a Music Week "+
						 "interview that the record will no longer be released in September. It isn’t coming in September, "+
						 "it’ll be ready when it’s ready, Dickins said. We’re all in the same boat, you’re doing stuff "+
						 "and then all of a sudden, the world stops, he continued, seemingly referring to the coronavirus "+
						 "pandemic. It’ll come when it’s ready, he adding, sharing that he can’t put a date on that yet. We "+
						 "have music, but we’re still working. Back in March, producer, songwriter and OneRepublic frontman "+
						 "Ryan Tedder revealed to The Sun that he was working on Adele's upcoming project as a songwriter and "+
						 "producer. In February, Adele made the big announcement concerning her upcoming album's original release "+
						 "date at her friend Laura Dockrill’s wedding.It was originally planned to drop in September. The record "+
						 "will follow her third full-length studio album, 25, and will mark the first new music from Adele in "+
						 "almost five years.",
		numberOfViews: 0
	},
	{
		topic: "MUSIC",
		theme: "music",
		title: "Albom 58",
		class: "image-post",
		image: "/images/creed.jpg",
		imageHD: "/images/hd/creed.jpg",
		date: "April 12, 2020",	
		shortDescription: "58 is the third studio album by Russian singer Yegor Creed, released on April 10, 2020.",
		fullDescription: "Yegor Creed released his first independent album 58. The release was released on the label "+
						 "Warner Music Russia, part of the rights belong to Yegor Creed himself. And this is his first "+
						 "release after breaking up with the Black Star label. The album 58 consists of 7 songs, including "+
						 "Duets with Nyusha Mr. & Mrs. Smith. The artist thanked Nyusha, HammAli and Navai, Morgenstern, Dava "+
						 "and for production Alex Davia for their collaboration on this album. In the album, Yegor "+
						 "Creed calls himself the main bachelor of the country, and is ironic about it.",
		numberOfViews: 0
	},
	// VIDEO
	{
		topic: "video",
		title: "Getting Started With JavaScript",
		date: "July 22, 2020",
		image: "/images/js.jpg",
		video: "/video/js.mp4",
		numberOfViews: 0
	},
	{
		topic: "video",
		title: "CSS Flip Card Tutorial",
		date: "July 16, 2020",
		image: "/images/css.jpg",
		video: "/video/css.mp4",
		numberOfViews: 0
	},
	{
		topic: "video",
		title: "Node.js - Tutorial - Introduction",
		date: "July 10, 2020",
		image: "/images/node.jpg",
		video: "/video/node.mp4",
		numberOfViews: 0
	},	
	{
		topic: "video",
		title: "All HTML Tags in One Video",
		class: "last",
		date: "July 14, 2020",
		image: "/images/html.jpg",
		video: "/video/html.mp4",
		numberOfViews: 0
	}
]

function seedDB(){
	Post.remove({}, function(err){
		if(err){
			console.log(err);
		}
		console.log("removed posts!");
		data.forEach(function(seed){
			Post.create(seed, function(err, data){
				if(err){
					console.log(err)
				} else {	
					console.log("added a post");
					// Comment.create(
					// {
					// 	text: "Great news!",
					// 	author: "Dasha"
					// }, function(err, comment){
					// 	data.comments.push(comment);
					// 	data.save();
					// 	console.log("Created a new comment");
					// });
				}
			});
		});
	});
}

module.exports = seedDB;