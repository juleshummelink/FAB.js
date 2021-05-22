//---------Keep this in the js file-------
//++++++++++++++++++++++++++++++++++++++++
//---     FAB.js by Jules Hummelink   ----
//     github.com/juleshummelink/FAB.js  -
//										 -
//           bytemountains.com			 -
//++++++++++++++++++++++++++++++++++++++++


class FAB{
	static BOTTOMLEFT = 0;
	static BOTTOMRIGHT = 1;
	static TOPLEFT = 2;
	static TOPRIGHT = 3;
	#parent;
	#location;
	#color;
	#icon;
	#action;

	#fabObject;

	constructor(parent, location, color, icon, action){
		this.#parent = parent;
		this.#location = location;
		this.#color = color;
		this.#icon = icon;
		this.#action = action;

		this.#addFab();
	}

	#addFab(){
		this.#fabObject = document.createElement('div');
		this.#fabObject.style.position = 'fixed';
		this.#fabObject.style.display = 'flex';
		this.#fabObject.style.justifyContent = 'center';
		this.#fabObject.style.alignItems = 'center';
		this.#fabObject.style.width = '50px';
		this.#fabObject.style.height = '50px';
		this.#fabObject.style.borderRadius = '50%';
		this.#fabObject.style.boxShadow = '4px 4px 8px 0 rgba(0, 0, 0, 0.5)';
		this.#fabObject.style.transform = 'scale(1)';
		this.#fabObject.style.transition = '0.2s';
		this.#fabObject.style.opacity = '0';

		this.#fabObject.style.backgroundColor = this.#color;
		let fabObject = this.#fabObject;
		this.#fabObject.addEventListener('click', function(){
			fabObject.style.transform = 'scale(0.9)';
			fabObject.style.boxShadow = '4px 4px 8px 0 rgba(0, 0, 0, 0.7)';
			setTimeout(function(){
				fabObject.style.transform = 'scale(1)';
				fabObject.style.boxShadow = '4px 4px 8px 0 rgba(0, 0, 0, 0.5)';
			}, 200);
		});
		this.#fabObject.addEventListener('click', this.action);
		//var viewportOffset = this.#parent.getBoundingClientRect();
		let parent = this.#parent;
		let offset = 30;
		let location = this.#location;

		setInterval(function(){
			var viewportOffset = parent.getBoundingClientRect();
			switch(location){
				case 0:
					fabObject.style.left = offset + viewportOffset.left + 'px';
					fabObject.style.bottom = offset + (window.innerHeight - viewportOffset.bottom) + 'px';
					break;
				case 1:
					fabObject.style.right = offset + (window.innerWidth - viewportOffset.right) + 'px';
					fabObject.style.bottom = offset + (window.innerHeight - viewportOffset.bottom) + 'px';
					break;
				case 2:
					fabObject.style.top = offset + viewportOffset.top + 'px';
					fabObject.style.left = offset + viewportOffset.left + 'px';
					break;
				case 3:
					fabObject.style.top = offset + viewportOffset.top + 'px';
					fabObject.style.right = offset + (window.innerWidth - viewportOffset.right) + 'px';
				default:
					console.error('FAB Location not specified or invalid...');
			}
			fabObject.style.opacity = '1';
		}, 100);

		/*
		switch(this.#location){
			case 0:
				this.#fabObject.style.left = offset + viewportOffset.left + 'px';
				this.#fabObject.style.bottom = offset + viewportOffset.bottom + 'px';
				break;
			case 1:
				this.#fabObject.style.right = offset + viewportOffset.right + 'px';
				this.#fabObject.style.bottom = offset + viewportOffset.bottom + 'px';
				break;
			case 2:
				this.#fabObject.style.top = offset + viewportOffset.top + 'px';
				this.#fabObject.style.left = offset + viewportOffset.left + 'px';
				break;
			case 3:
				this.#fabObject.style.top = offset + viewportOffset.top + 'px';
				this.#fabObject.style.right = offset + viewportOffset.right + 'px';
			default:
				console.error('FAB Location not specified or invalid...');
		}
		*/
		
		let fabIcon = document.createElement('img');
		fabIcon.style.width = '30px';
		fabIcon.style.height = '30px';
		fabIcon.src = this.#icon;

		this.#fabObject.appendChild(fabIcon);
		this.#parent.appendChild(this.#fabObject);

	}
}