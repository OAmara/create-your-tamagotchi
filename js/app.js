console.log('Tamagotchi Game');

// GOALS:
	// Make game versatile: All prop. increases call method to increase from instance
	//rather than direct object property. Store new tamagochi within array in top game object 
	//and have function that stores additional tamagochi .push into array.
		// this will make previous pets accessible or to have more than one pet.
	//Make a hover over attributes that will show details of each class property and how they behave/ increment.
	//display specific string when value reaches specific range.
		//e.i. this.hunger <= 7 $p.text("starving")

// rules reminder:
	// No -- global scope, COMMITS! FREQUENTLY, 

// Class
class Tamagotchi {
	constructor(hunger, sleepiness, boredom, age, name) {
		this.hunger = hunger
		this.sleepiness = sleepiness
		this.boredom = boredom
		this.age = age // displayed as result of user progress
		this.name = name // Based on user input
	}
	// Make functions for every property.
	eat() {
		this.hunger - 4
	}
	// create methods associated to each button?

}

/*Friendly reminder of ways to instantiate a class object:
In game object, game variable --> tamagoo: new Tamagotchi(asd,asdf,asdfg)
In method within game object --> const tamagoo = new Tamagotchi(asd, asdf, asdfg)
note: properties pre-defined in Class can be changed through dot/index notation,
	  also, new variable can be contained to store instance with newly defined variable.
	  Otherwise, not pre-defined should be defined within new instance.
*/

// Game; stored data as variables, functions, ...
const game = {
	// I have to store these varaibles inside of instance instead, especially 
	//if I were to have more than one instance. Priority #1 = it works. 
	hours: 0, // available value that can be added to conditional for sleeping
	hunger: 0,
	sleepiness: 0,
	boredom: 0,
	// determines image progression & incentivies user to progress/ try again.
	age: 0,
	// ID for interval(window timer)
	intervalId: 0,
	// instance created here to be easily accessible throughout functions.
	tommy: new Tamagotchi(0, 0, 0, 0, ""),
	// game starts here after input submit event.
	gameStart() {
		// taking submit event, storing in variable, then displaying as h1.
		const $input = $('#class-name').val()
		console.log($input);
		const $hello = $input
		console.log($hello);

		const $h1 = $('<h1 class="pet"></h1>')
		$h1.text($input).prependTo(document.body)
		$h1.css({
			textAlign: 'center',
			color: 'darkred'
		})

		// sets default image for new pet
		const $img = $('<img class="fire" src="https://i.imgur.com/x7FCCDz.png">')
		$img.css({
			display: 'block',
			BackgroundColor: 'red',
			height: '300px',
			margin: 'auto'
		})
		$img.insertAfter($h1)

		// Currently unused instantiated class object
		// const tommy = new Tamagotchi(0, 0, 0, 0, $hello)
		this.tommy.name = $hello
		console.log(this.tommy);

		// After user input: Displays new text then slowly hides game
		$('#start-game').text(". . . signed your soul for a Devil").hide(5100)
		$('#intro').hide(900)
		this.gameTimer()
		console.log(this.tommy);
		console.log($hello);
	},
	gameTimer() {
		this.intervalId = setInterval(() => {
			this.hours += 1
			this.tommy.hunger += 2
			this.tommy.sleepiness += 1
			this.tommy.boredom += 2
			this.tommy.age += 1
			// console.log(game.hunger);

			this.printStats()
		}, 1500) //bring to 10k digit nearly stop timer, return to 1000
	},
	printStats() {
		// Will display age as well as user's motivation as result screen gives incentive to 
		//progress age. Other motivation would include further age images.
		$('.hunger').text(`hunger: ${this.tommy.hunger}`)
		$('.sleepiness').text(`tired: ${this.tommy.sleepiness}`)
		$('.boring').text(`Dullness: ${this.tommy.boredom}`)
		// this.gameOver() // calling this here 
		console.log(this.tommy);
		this.evolve()
	},
	feedPet() {
		if (this.tommy.hunger >= 1) {
			this.tommy.hunger -= 1
			// this.sleepiness += 1// too hard
			this.printStats()
		}
	},
	lightsOut() {
			// made if sleepiness > 4 , because pet won't sleep if not tired!
			if(this.tommy.sleepiness >= 4){
				this.tommy.sleepiness -= 4
				this.tommy.boredom = 1
				this.tommy.hunger = 1
				//function for lights
					//try using setTimeout()
				this.printStats()
				$(document.body).css({
					backgroundImage: 'url("https://i.imgur.com/e18s260.png")',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					filter: 'blur(1px)',
					backgroundColor: 'rgba(190, 81, 42, 1)'
				})	
				this.boredom -= 1

				setTimeout(() => {
					$(document.body).css({
						backgroundImage: 'none',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center',
						filter: 'blur(0px)',
						backgroundColor: 'coral'
					})
					this.calmPet()
				},2500)
				// if(this.hours === true){//this.hours % 3 === 0 //&& this.hours % 3 === 0 )
				// }
			}
	
	},
	calmPet() {
		// URGENT -- create light effect when pressed. Last specific interval or length
			//REQUIREMENT
		if(this.tommy.sleepiness >= 1 && this.tommy.hunger >= 1 && this.tommy.boredom >= 1) {
			this.tommy.sleepiness -= 1
			this.tommy.hunger -= 1
			this.tommy.boredom -= 1
			this.printStats()
		}
	},
	entertainPet() {
		if(this.tommy.boredom >= 1) {
			this.tommy.boredom -= 1
			// this.sleepiness += 1
			// this.sleepiness += 1//too hard
			this.printStats()
		}
	},
	evolve() {
		if (this.tommy.age > 3 && this.tommy.age < 6) {
			$('.fire').attr("src", "https://i.imgur.com/o7ZCkz9.png")
			this.gameOver()
		}
		if (this.tommy.age > 5 && this.tommy.age < 8) {
			$('.fire').attr("src", "https://i.imgur.com/YyoHrsU.png")
			this.gameOver()
		}
		if (this.tommy.age > 7 && this.tommy.age < 100) {
			$('.fire').attr("src", "https://i.imgur.com/neWrJMI.gif")
			this.gameOver()
		}
	},
	gameOver() {
		if(this.tommy.hunger >= 10 || this.tommy.sleepiness >= 10 || this.tommy.boring >= 10){
			clearInterval(this.intervalId)
			// Instead of Tag, use change image
			// this will be done by: i.e. (get class, .attr, 'src', 'image source'...)
			$('.div').css('filter', 'blur(2px)')
			const $h1 = $('<h1 class="game-over">Game Over<h3 class="hint">hint: calm > feed > play</h3></h1>')
			$h1.prependTo(document.body)
			$('.fire').attr("src", "https://i.imgur.com/7LVtzKF.png").css('filter', 'blur(2px)')
			// displays age when gameover
			const $h2 = $('<h2/>')
			$h2.text(`Your pet made it to age: ${this.tommy.age}, before being banished to it's biological Father down south.`)
			$h2.css({
				textAlign: 'center',
				fontSize: '1.7em',
				filter: 'blur(0px)'
			})
			$h2.insertBefore($('.div'))
		}
	}


}//--> gameStart/ call will be in event listener in form 'submit'

// Event Listeners
//	Game start upon form submission
$('#start-game').on('submit', (e) => {
	// prevents reload upon submitting input
	e.preventDefault()

	$(e.target)
	// console.log($(e.target));

	//start game
	game.gameStart()
})

$('.feed').on('click', (e) => {
	game.feedPet()
})

$('.sleep').on('click', (e) => {
	game.lightsOut()
	// game.calmPet()
})

$('.play').on('click', (e) => {
	game.entertainPet()
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


