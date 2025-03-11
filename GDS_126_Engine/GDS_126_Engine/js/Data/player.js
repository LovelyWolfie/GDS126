/*----------------------------------------------
This file contains the data used to render the player's sprites
Properties:
	Object: info | information about the sprite file
		String: info.src | The location of the spritesheet
	Object: states | contains the data for each animation state
		Object: [`state name`] | The data used to render the idle state
			Number: fps | The frame rate in which to render the animation
			Boolean: cycle | Whether or not the animation will loop
			Array: frames| Contains objects with geometric data for each frame of animtati.
					Must contain at least one frame object.
					The animation will run for however many frame objects are added to the array
				Object: [index number] | A frame of animation
					Number: width | the actual 1/1 horizontal size of the portion of image file to be rendered
					Number: height | the actual 1/1 vertical size of the portion of image file to be rendered
					Number: startX | the horizontal starting point of the portion of image file to be rendered
					Nunber: startY | the vertical starting point of the portion of image file to be rendered
/*----------------------------------------------*/

var playerData ={
	// info:{
	// 	idle:`images/player.png`,
	// 	walk:`images/player.png`,
	// 	jump:`images/player.png`,
	// 	crouch:`images/player.png`,
	// 	attack:`images/player.png`,
	// 	bullet:`images/float.png`
	// },
	info:{
		src:`images/player.png`,
		eye: `images/float.png`
	},
	states:{
		//The idle animation 
    	idle:
		{
			fps:15,
			cycle:true,
			frames:
			[
				{width:89, height:128, startX:100, startY:0},
				{width:89, height:128, startX:105, startY:0},
				{width:89, height:128, startX:105, startY:0}
				
			]
		},
		//The walwidth:128, height:128,
		walk:
		{
			fps:1,
			cycle:true,
			frames:
			[
				{width:89, height:128, startX:360, startY:0},
				{width:89, height:128, startX:383, startY:0},
				{width:89, height:128, startX:471, startY:0},
				{width:89, height:128, startX:550, startY:0}
				
			]
		},
		//The jump animation 
		jump:
		{
			fps:15,
			cycle:false,
			frames:
			[
				{width:89, height:128, startX:637, startY:0},
				{width:89, height:128, startX:711, startY:0},
				{width:89, height:128, startX:802, startY:0}
			]
		},
		//The crouch animation 
		crouch:
		{
			fps:15,
			cycle:true,
			frames:
			[
		
				{width:89, height:128, startX:1153, startY:0}
			]
		},
		//The attack animation 
		attack:
		{
			fps:3,
			cycle:false,
			//width:300,
			frames:
			[
				{width:89, height:128, startX:1263, startY:0},
				{width:89, height:128, startX:1350, startY:0},
				{width:89, height:128, startX:1436, startY:0}
				
			]
		},
		//The shoot animation
		eye:
		  {
		  fps:15,
		  cycle:true,
		  frames:
		  [
		  {width:128, height:128, startX:1499, startY:1},
		  {width:128, height:128, startX:1624, startY:0},
		  {width:128, height:128, startX:1761, startY:2}

		  ]

		}
	}
}
