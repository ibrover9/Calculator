function buttonDeleteItem(){
    result.textContent=String(result.textContent);
            stresult = result.textContent.substring(0, result.textContent.length - 1);
            result.textContent=stresult;
            if( result.textContent==''){
                result.textContent='0';
            }
}




let stresult = result.textContent;
buttonDelete.addEventListener('click', buttonDeleteItem);
