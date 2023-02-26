const ACORDION = document.querySelectorAll('.acordion .trigger')

ACORDION.forEach ( (trigger) =>{
    trigger.addEventListener( 'click', (e) => {
        const acordion = trigger.parentElement
        const isOpen = acordion.classList.contains('open')

        if (isOpen){
            acordion.classList.remove('open') 
        }
        else{
            acordion.classList.add('open') 
        }
    }
    )   
})