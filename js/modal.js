const advantageList = document.querySelectorAll('.advantage-list li')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.close-modal')

for(const advantage of advantageList){
    advantage.addEventListener('click', evt =>{
        console.log('click');
        modal.classList.add('modal_opened')
    })
}

closeBtn.addEventListener('click', evt =>{
    modal.classList.remove('modal_opened')
})