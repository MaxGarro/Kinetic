var animation = function(heroe,imagen,escenario){


	var explodeAnim = {
		    explode :[{
		        x:0,
		        y:0,
		        width:159,
		        height:170
		    },
		    {
		        x:200,
		        y:0,
		        width:159,
		        height:170
		    },
		    {
		        x:400,
		        y:0,
		        width:159,
		        height:170
		    },
		    {
		        x:600,
		        y:0,
		        width:159,
		        height:170
		    },
		    {
		        x:800,
		        y:0,
		        width:159,
		        height:170
		    },
		    {
		        x:35,
		        y:200,
		        width:159,
		        height:170
		    },
		    {
		        x:235,
		        y:200,
		        width:159,
		        height:170
		    }
		    ]
		};

		explosionSprite = new Kinetic.Sprite({
		    x:0,y:0,
		    image:imagen,
		    animation:"explode",
		    animations:explodeAnim,
		    frameRate:5
		});

		explosionSprite.hide();
		escenario.add(explosionSprite);  
}