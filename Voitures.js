function Voitures(ligne,x,v){
	
	if(ligne == 1){
		var posX = x;
		var posY = 162;
		var image = new Image();
		image.src = "Images/Voiture1.png";
		var l = ligne;
		var vit = v;
		var larg = 24;
	}else if(ligne == 2){
		var posX = x;
		var posY = 137;
		var image = new Image();
		image.src = "Images/Voiture2.png";
		var l = ligne;
		var vit = v;
		var larg = 28;
	}else if(ligne == 3){
		var posX = x;
		var posY = 105;
		var image = new Image();
		image.src = "Images/Voiture3.png";
		var l = ligne;
		var vit = v;
		var larg = 25;
	}else if(ligne == 4){
		var posX = x;
		var posY = 79;
		var image = new Image();
		image.src = "Images/Camion.png";
		var l = ligne;
		var vit = v;
		var larg = 45;
	}else if(ligne == 5){
		var posX = x;
		var posY = 50;
		var image = new Image();
		image.src = "Images/Voiture4.png";
		var l = ligne;
		var vit = v;
		var larg = 23;
	}
	
	Object.defineProperties(this, {
		posX: {
			get: function() { 
				return posX; }, 
			set: function(newValue) {
				posX = newValue;}},
		posY: {
			get: function() { 
				return posY; }, 
			set: function(newValue) {
				posY = newValue;}},
		image: {
			get: function() { 
				return image; }, 
			set: function(newValue) {
				image = newValue;}},
		l: {
			get: function() { 
				return l; }, 
			set: function(newValue) {
				l = newValue;}},
		vit: {
			get: function() {
				return vit;	},
			set: function(newValue) {
				vit = newValue;}},
		larg: {
			get: function() {
				return larg;	},
			set: function(newValue) {
				larg = newValue;}}
				
	});
}

Voitures.prototype.bouger = function(vit){
	if(this.l == 1){//Voitures de la ligne 1
		if(this.posX <= 400)
			this.posX += this.vit;
		else
			this.posX = -40;
	}else if(this.l == 2){//Voitures de la ligne 2
		if(this.posX >= (-28))
			this.posX -= this.vit;
		else
			this.posX = 430;
	}else if(this.l == 3){//Voitures de la ligne 3
		if(this.posX <= 400)
			this.posX += this.vit;
		else
			this.posX = -40;
	}else if(this.l == 4){//Voitures de la ligne 4
		if(this.posX >= (-45))
			this.posX -= this.vit;
		else
			this.posX = 460;
	}else if(this.l == 5){//Voitures de la ligne 5
		if(this.posX <= 400)
			this.posX += this.vit;
		else
			this.posX = -40;
	}
}

Voitures.prototype.draw = function(context){
	context.drawImage(this.image,this.posX,this.posY);
}
