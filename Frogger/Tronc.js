function Tronc(ligne,x){
	
	if(ligne == 1){
		var posX = x;
		var posY = 340;
		var image = new Image();
		image.src = "Images/Tronc1.png";
		var l = ligne;
		var vit = 1;
		var larg = 177;
	}else if(ligne == 2){
		var posX = x;
		var posY = 311;
		var image = new Image();
		image.src = "Images/Tronc3.png";
		var l = ligne;
		var vit = 1.3;
		var larg = 84;
	}else if(ligne == 3){
		var posX = x;
		var posY = 282;
		var image = new Image();
		image.src = "Images/Tronc2.png";
		var l = ligne;
		var vit = 0.7;
		var larg = 116;
	}else if(ligne == 4){
		var posX = x;
		var posY = 253;
		var image = new Image();
		image.src = "Images/Tronc1.png";
		var l = ligne;
		var vit = 0.9;
		var larg = 177;
	}else if(ligne == 5){
		var posX = x;
		var posY = 224;
		var image = new Image();
		image.src = "Images/Tronc2.png";
		var l = ligne;
		var vit = 1;
		var larg = 116;
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

Tronc.prototype.bouger = function(){
	if(this.l == 1){//Buches de la ligne 1
		if(this.posX >= (-177))
			this.posX -= this.vit;
		else
			this.posX = 500;
	}else if(this.l == 2){//Buches de la ligne 2
		if(this.posX <= 400)
			this.posX += this.vit;
		else
			this.posX = -150;
	}else if(this.l == 3 || this.l == 5){//Buches de la ligne 3 ou 5
		if(this.posX >= (-116))
			this.posX -= this.vit;
		else
			this.posX = 450;
	}else if(this.l == 4){//Buches de la ligne 4
		if(this.posX <= 400)
			this.posX += this.vit;
		else
			this.posX = -200;
	}
}

Tronc.prototype.draw = function(context){
	context.drawImage(this.image,this.posX,this.posY);
}
