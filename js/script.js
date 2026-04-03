
document.addEventListener("DOMContentLoaded", () => {


		
		
		const button = document.getElementById("randomBtn");
		
		const topFlap = document.querySelector(".clap-top");
		
		const modal = document.getElementById("movieModal");
		
		const closeBtn= document.getElementById("closeBtn");
	
		const overlay = document.getElementById("closeModal");

		const modalTitle = document.getElementById("modalTitle");	

		const modalDescription = document.getElementById("modalDescription");

		const modalPoster = document.getElementById("modalPoster");
		const trailerContainer = modal ? modal.querySelector(".trailer-container") : null;
		
		

		if(button){

		button.addEventListener("click", async (event) => {
			
			//clapper animation
			if(topFlap){
			topFlap.style.transform = "rotate(-40deg)";
			setTimeout(() => topFlap.style.transform = "rotate(0deg)", 200);
			}
			//popcorn
			createPopcorn(event);
			//wait a bit for the run
			setTimeout(async () => {
				try{
				const response = await fetch("random_movie.php");
				const movie = await response.json().catch(() => ({ error: true }));

				if(!movie.error) {
					if(modalTitle) modalTitle.textContent = movie.title || "No title";
					if(modalDescription) modalDescription.textContent = movie.description || "no Description";
					if(modalPoster) modalPoster.src = movie.poster || "";
									
					if(trailerContainer) {
						trailerContainer.innerHTML=`<a href= "${movie.trailer}" target ="_blank" class="btn"> Watch trailer on YouTube</a>`;
					}
					if(modal) modal.classList.add("active");
				}else{
					alert("No Movies found in database!")
				}
			}catch (err){
				console.error("Fetch error :", err);
			}

		}, 600);
	});
}
		
		
		
		function closeModal() {
			if(modal) modal.classList.remove("active");
			if(trailerContainer) trailerContainer.innerHTML = "";
		}
		if(closeBtn) closeBtn.addEventListener("click", closeModal);
		if(overlay) overlay.addEventListener("click", closeModal);
				

		function createPopcorn(event) {
			
		const rect = event.currentTarget.getBoundingClientRect();
			const originX = rect.left + rect.width / 2 + window.scrollX;
			const originY = rect.top + rect.height / 2 + window.scrollY;

			for (let i = 0; i < 15; i++) {
				setTimeout(() => {
					for(let j = 0; j< 10; j++){

						const pop = document.createElement("span");
				console.log("popcorn created", pop);
				pop.classList.add("popcorn");
				pop.style.position ="absolute";
				const size = Math.random() * 50 + 20;
				pop.style.width = size + "px";
				pop.style.height= size + "px";
				pop.style.left= originX - size / 2 + "px";
				pop.style.top = originY - size / 2 + "px";
				const x = (Math.random() - 0.5) * 400 + "px";
				const y = (Math.random() - 0.8) * 400 + "px";

				pop.style.setProperty("--x", x);
				pop.style.setProperty("--y", y);
				
			
				document.querySelector("body").appendChild(pop);
				setTimeout(() => pop.remove(), 800);
			}
		}, i * (80 + Math.random() * 100));
	}
}
	});
