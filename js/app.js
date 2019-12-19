console.log('Tamagotchi Game');

// GOALS:
	//Make a hover over attributes that will show details of each class property
	//display specific string when value in class property reaches specific range.
		//e.i. this.hunger <= 7 $p.text("starving")
		//hunger will increase sleepiness and reduce boredom

// rules reminder:
	// No -- global scope, COMMITS! FREQUENTLY, 

// Class
class Tamagotchi {
	constructor(hunger, sleepiness, boredom, age, name) {
		this.hunger = 0
		this.sleepiness = 0 // increment?
		this.boredom = 0 // what will happen per specific value
		this.age = 0// what does 0 mean?
		this.name = name // Based on user input
	}

}

// Game; variables/ stored data, functions,
const game = {
	hour: 0,
	gameStart() {
		this.gameTimer()
			const input = $('#class-name').val()
		console.log(input);

		const $h1 = $('<h1 class="pet"></h1>')
		$h1.text(`${$('#class-name').val()}`).appendTo(document.body)
		$h1.css({
		textAlign: 'center',
		color: 'darkred'
		})
		const tommy = new Tamagotchi(0, 0, 0, 0, `${$('#class-name').val()}`)
		console.log(tommy);
		$('#start-game').text("signed your soul for a Devil").hide(4000)

	},
	gameTimer() {
		const hour = setInterval(() => {
			this.hour++
			
			console.log(this.hour);
		}, 1000) //reduce 1 digit to start timer
	},

	//function ->class object --> created when player inputs name
	//function ->timer for overall game
		//if/else for variables when timer values reach certain point

}//--> gameStart/ call will be in event listener in form 'submit'

// Event Listeners
//	Game start upon form submission
$('#start-game').on('submit', (e) => {
	// prevents reload upon submitting input
	e.preventDefault()

	$(e.target)
	console.log($(e.target));



	//start game
	game.gameStart()
})


//NEEDS & RULES:
	// HTML Form for user input(listener w/ func. call) to create pet, this is 
	//how Class is instantiated. Form input will also start the game:

// *	The game should display a character of your choice (and its name) on the screen to represent 
// your pet. While the pet is alive, it must move somehow. You can use CSS or jQuery animation, 
// or you can swap out GIFs, or you can somehow manually have it moving around the screen by 
// changing the HTML with some kind of timer. It's up to you. But there must be some kind of 
// motion when it's alive, and it should stop when it's dead.

// *	Clearly display the pet's age, and its hunger, boredom, and sleepiness metrics for your pet. 
// They should be updated on the screen as they change.

// *	Increase your pet's age every [how ever long you want].

// *	Increase your pet's hunger, sleepiness, and boredom metrics at intervals of your choosing.

// *	Important: There should be only one setInterval() running in your entire app. See your 
// instructors if this a source of confusion for you.

// *	You pet should die if hunger, boredom, or sleepiness hits 10.

// *	Add UI elements to the page to let the user feed your pet, turn off the lights, and play 
// with your pet.

// *	The feed and play buttons can just change the values, but the light switch must function 
// differently. The page should change visually to reflect the lights being off for a limited 
// amount of time, and during that time, the sleepiness should go down instead of up (it's up 
// to you what happens with hunger and boredom while your pet is sleeping). After a 
// specific time interval, the lights should automatically come back on, and the game should 
// go back to working the way it did before you turned them off.

// *	You must morph your pet at certain ages.




