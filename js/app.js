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
		this.hunger = game.hunger
		this.sleepiness = game.sleepiness // increment?
		this.boredom = game.boredom // what will happen per specific value
		this.age = game.age// what does 0 mean?
		this.name = name // Based on user input
	}
	eat() {
		this.hunger - 4
	}

	// create methods associated to each button?
}

// Game; variables/ stored data, functions,
const game = {
	// Yes Reuben, I have to place these varaibles to change inside of instance instead, especially if I were to have more than one instance. Priority #1 = it works. 
	hours: 0,
	hunger: 0,
	sleepiness: 0,
	boredom: 0,
	age: 0,
	tamagotchi: null,
	intervalId: 0,
	gameStart() {
		const $input = $('#class-name').val()
		console.log($input);

		const $h1 = $('<h1 class="pet"></h1>')
		$h1.text(`${$('#class-name').val()}`).prependTo(document.body)
		$h1.css({
		textAlign: 'center',
		color: 'darkred'
		})
		const $img = $('<img class="bag" src="https://i.imgur.com/h9JL9Kt.png">')
		$img.css({
			display: 'block',
			BackgroundColor: 'red',
			height: '300px',
			margin: 'auto'

		})
		$img.insertAfter($h1)
		const tommy = new Tamagotchi($(this.hunger), $(this.sleepiness), $(this.boredom), $(this.age), $input)
		game.tamagotchi = tommy
		console.log(tommy);
		$('#start-game').text("signed your soul for a Devil").hide(5000)
		this.gameTimer()

	},
	gameTimer() {
		this.intervalId = setInterval(() => {
			this.hours += 1
			this.hunger += 2
			this.sleepiness += 1
			this.boredom += 2
			this.age += 1
			console.log(game.hunger);

			this.printStats()
		}, 1000) //reduce 1 digit to start timer, return to 1000
	},
	printStats() {
		$('.hunger').text(`hunger ${this.hunger}`)
		$('.sleepiness').text(this.sleepiness)
		$('.boring').text(this.boredom)
		this.gameOver()
	},
	feedPet() {
		if(this.hunger >= 1) {
			this.hunger -= 1
			this.printStats()
		}
	},
	gameOver() {
		if(this.hunger >= 10 || this.sleepiness >= 10 || this.boring >= 10){
			clearInterval(this.intervalId)
			// Instead of Tag, use change image
			// this will be done by: i.e. (get class, .attr, 'src', 'image source'...)
			$('<h1>Game Over</h1>').prependTo(document.body)
		}
	}


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

$('.feed').on('click', (e) => {
	console.log($(e.target));
	game.feedPet()
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




