let firstSign=0;
let arrayAllButtons=document.querySelectorAll('#Calculator > div>div');


array.forEach(element => {
    if(element.dataset.sign!=undefined){
        element.addEventListener('click', function(){
            let arrayElementsString=result.textContent.split('');
            let penultimate=arrayElementsString.at(-2);
            if(penultimate=="-"||penultimate=="+"||penultimate=="÷"||penultimate=="×"){
                arrayElementsString.splice(-2, 1);
                result.textContent=arrayElementsString.join('');
            }
           
        })
        }
});