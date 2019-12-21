console.log('Tamagotchi Game');

// GOALS:
	// Make game versatile: All prop. increases call method to increase from instance
	//rather than direct object property. Store new tamagochi within array in top game object 
	//and have function that stores additional tamagochi .push into array.
		// this will make previous pets accessible or to have more than one pet.
		// Place each new pet in own .div and create tab to change .divs between pets.
	// Make a hover over attributes that will show details of each class property and how they behave/ increment.
	//display specific string when value reaches specific range.
		//e.i. this.hunger <= 7 $p.text("starving")
	// Save space! Place some css made in js into CSS file. Values will be grabbed when 
	//.show called or .class created with jQuery

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

/*Friendly self-reminder of ways to instantiate a class object:
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
		// storing name in new variable to save for future use in class object.
		// $input will be unfound when .hide is passed.
		const $pet1Name = $input

		// HTML containing Class object name replacing intro text and form input
		const $h1 = $('<h1 class="pet"></h1>')
		$h1.text($input).prependTo(document.body)
		$h1.css({
			textAlign: 'center',
			color: 'darkred'
		})

		// sets default, initial image for new pet w/ css
		const $img = $('<img class="fire" src="https://i.imgur.com/x7FCCDz.png">')
		$img.css({
			display: 'block',
			BackgroundColor: 'red',
			height: '300px',
			margin: 'auto'
		})
		// image inserted after pet name display
		$img.insertAfter($h1)

		this.tommy.name = $pet1Name
		console.log(this.tommy);

		// After user input: Displays new text, slowly hides intro text, followed by hiding new text
		//used for cryptic purposes.
		$('#start-game').text(". . . signed your soul for a Devil").hide(5100)
		$('#intro').hide(900)
		this.gameTimer()
	},
	// window timer for whole game.
	// (Future itteration: new class objects will be added in automatically by create another pet func.
	//same func. that .push new pet into array?)
	gameTimer() {
		this.intervalId = setInterval(() => {
			this.hours += 1 // not used at this time.
			this.tommy.hunger += 2
			this.tommy.sleepiness += 1
			this.tommy.boredom += 2
			this.tommy.age += 1

			this.printStats()
		}, 1500) //bring to 10k digit nearly stop timer, return to 1000
	},
	// (Future Itteration: This will contain class methods that contain what is currently
	//occupying printStats)--> will simplify readability between pets.
	printStats() {
		// Will display age as user's motivation as result screen gives incentive to 
		//progress age. Other motivation would include further age images.
		$('.hunger').text(`hunger: ${this.tommy.hunger}`)
		$('.sleepiness').text(`tired: ${this.tommy.sleepiness}`)
		$('.boring').text(`Dullness: ${this.tommy.boredom}`)
		
		// console.log(this.tommy);
		this.evolve()
	},
	//(read notes over printStats...applies to all similar property changing methods)
	feedPet() {
		if (this.tommy.hunger >= 1) {
			this.tommy.hunger -= 1
			// this.sleepiness += 1// too hard
			this.printStats()
		}
	},
	// Sleep method. Will display "fire demon pet" sleeping in furnace.
	// replaces calmPet for click event
	lightsOut() {
			// made if sleepiness > 4 , because pet won't sleep if not tired!
			// Perhaps create indicator that `${this.pet.name} is not ready for bed yet`
			if(this.tommy.sleepiness >= 4){
				this.tommy.sleepiness -= 3
				this.tommy.boredom = 1
				this.tommy.hunger = 1

				this.printStats()

				// Pet's bed
				$(document.body).css({
					backgroundImage: 'url("https://i.imgur.com/e18s260.png")',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'center',
					filter: 'blur(1px)',
					backgroundColor: 'rgba(190, 81, 42, 1)'
				})	
				this.tommy.boredom -= 1
				this.tommy.sleepiness -= 1

				// return css to original properties and call calmPet after (2.5) seconds
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
	// called after putting pet to sleep
	calmPet() {
		if(this.tommy.sleepiness >= 1 && this.tommy.hunger >= 1 && this.tommy.boredom >= 1) {
			this.tommy.sleepiness -= 1
			this.tommy.hunger -= 1
			this.tommy.boredom -= 1
			this.printStats()
		}
	},
	// Play pet button
	entertainPet() {
		if(this.tommy.boredom >= 1) {
			this.tommy.boredom -= 1
			// this.sleepiness += 1
			// this.sleepiness += 1//too hard
			this.printStats()
		}
	},
	//!!!!!! Huge current game motivator for progression. Should probably display age for incentive
	//rather than waiting until pet is deceased to visualize. Include text for increased motivation:
	//"keep on taking care of that demon, how strong can he get?"
	//	age property utilized to "evolve", change image/ progress.
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
	// EndGame if pet properties reach 10.
	gameOver() {
		if(this.tommy.hunger >= 10 || this.tommy.sleepiness >= 10 || this.tommy.boring >= 10){
			// stops window timer.
			clearInterval(this.intervalId)

			// css will blur entire window, except for gamover, hint, and age progress text:

			$('.div').css('filter', 'blur(2px)')
			const $h1 = $('<h1 class="game-over">Game Over<h3 class="hint">hint: calm > feed > play</h3></h1>')
			$h1.prependTo(document.body)
			$('.fire').attr("src", "https://i.imgur.com/7LVtzKF.png").css('filter', 'blur(2px)')
			// displays age when gameover. Find way to emphasize age text.
			const $h2 = $('<h2/>')
			$h2.text(`Your pet made it to age: ${this.tommy.age}, before being banished to it's biological Father down south.`)
			$h2.css({
				textAlign: 'center',
				fontSize: '1.7em',
				filter: 'blur(0px)'
			})
			// placed before buttons in order to blur remaining tags.
			$h2.insertBefore($('.div'))
		}
	}


}//--> Game Start/ call will be in event listener in form 'submit'

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
	// feed pet button
	game.feedPet()
})

$('.sleep').on('click', (e) => {
	// place pet in bed/ calm button
	game.lightsOut()
	// game.calmPet()
})

$('.play').on('click', (e) => {
	// play button
	game.entertainPet()
})


//NEEDS & RULES:
	// HTML Form for user input(listener w/ func. call) to create pet, this is 
	//how Class is instantiated. Form input will also start the game:

// *	While the pet is alive, it must move somehow. You can use CSS or jQuery animation, 
// or you can swap out GIFs, or you can somehow manually have it moving around the screen by 
// changing the HTML with some kind of timer. There must be some kind of 
// motion when it's alive, and it should stop when it's dead.

// *	Important: There should be only one setInterval() running in your entire app. See your 
// instructors if this a source of confusion for you.

// *	The feed and play buttons can just change the values, but the light switch must function 
// differently. The page should change visually to reflect the lights being off for a limited 
// amount of time, and during that time, the sleepiness should go down instead of up (it's up 
// to you what happens with hunger and boredom while your pet is sleeping). After a 
// specific time interval, the lights should automatically come back on, and the game should 
// go back to working the way it did before you turned them off.

// *	You must morph your pet at certain ages.


