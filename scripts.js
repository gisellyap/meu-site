const modalOverlay = document.querySelector('.modal-overlay')
console.log(modalOverlay)
const cards = document.querySelectorAll('.card')
console.log(cards)
for (let card of cards){
	console.log(card)
	card.addEventListener("click",function(){
		const videoId = card.getAttribute("id");
		modalOverlay.classList.add('active')
modalOverlay.querySelector("iframe").src=`https://www.youtube.com/embed/${videoId}`
		
	})
}

document.querySelector(".close-modal").addEventListener('click',function(){
	modalOverlay.classList.remove("active")
	modalOverlay.querySelector("iframe").src=""
})


