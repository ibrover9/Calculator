function buttonNumber(item,key){
    if( result.textContent=='0'){
        result.textContent='';
    }
    if(item!='='){
    result.textContent+=item;
    }
    
    if(item=='='){
        
        gettingTheResult();
    }
    let lengthString=result.textContent.split('').length;
    if(lengthString%6==0){
        result.style.fontSize='30px';
    }
    else if(lengthString>=0 && lengthString<=5){
        result.style.fontSize='96px';
    }
    
}


function gettingTheResult(){
    let stringResult=result.textContent;
        let minusIndexOfMinus=0;
        let minusIndexOfPlus=0;
        let minusIndexOfMultiply=0;
        let minusIndexOfDivide=0;
        let resultarray=stringResult.split(/(?:\+|-|÷|×)+/).map(Number);
        while(resultarray[1]!=null){
            minusIndexOfMinus=stringResult.indexOf('-')*(-1)-1;
            minusIndexOfPlus=stringResult.indexOf('+')*(-1)-1;
            minusIndexOfMultiply=stringResult.indexOf('×')*(-1)-1;
            minusIndexOfDivide=stringResult.indexOf('÷')*(-1)-1;
            if(stringResult.indexOf('+')==-1){
                minusIndexOfPlus=-100;
            }
            if(stringResult.indexOf('-')==-1){
                minusIndexOfMinus=-100;
            }
            if(stringResult.indexOf('×')==-1){
                minusIndexOfMultiply=-100;
                
            }

            if(stringResult.indexOf('÷')==-1){
                minusIndexOfDivide=-100;
                
            }
            
            if((minusIndexOfPlus>minusIndexOfMinus)&&(minusIndexOfPlus>minusIndexOfMultiply)&&(minusIndexOfPlus>minusIndexOfDivide)){
            resultarray[0]=resultarray[0]+resultarray[1];
            resultarray.splice(1, 1);
            stringResult=stringResult.replace('+','')
            }
            else if((minusIndexOfMinus>minusIndexOfPlus)&&(minusIndexOfMinus>minusIndexOfMultiply)&&(minusIndexOfMinus>minusIndexOfDivide)){
                resultarray[0]=resultarray[0]-resultarray[1];
            resultarray.splice(1, 1);
            stringResult=stringResult.replace('-','')

            }
            else if((minusIndexOfMultiply>minusIndexOfMinus)&&(minusIndexOfMultiply>minusIndexOfPlus)&&(minusIndexOfMultiply>minusIndexOfDivide)){
                resultarray[0]=resultarray[0]*resultarray[1];
            resultarray.splice(1, 1);
            stringResult=stringResult.replace('×','')
            }
            else if((minusIndexOfDivide>minusIndexOfMinus)&&(minusIndexOfDivide>minusIndexOfPlus)&&(minusIndexOfDivide>minusIndexOfMultiply)){
                resultarray[0]=resultarray[0]/resultarray[1];
            resultarray.splice(1, 1);
            stringResult=stringResult.replace('÷','')
            }

        }
        result.textContent=resultarray[0];
}


function Calculation(){
    if(result.textContent.indexOf('+')!=-1|| result.textContent.indexOf('-')!=-1){
        let sign='';
        let sum=0;
        
        if(result.textContent.indexOf('+')!=-1){
            sign='+';
            let resultarray=result.textContent.split(sign).map(Number);
             sum = resultarray.reduce((partialSum, a) => partialSum + a);
        }
        else if(result.textContent.indexOf('-')!=-1){
            sign='-';
            let resultarray=result.textContent.split(sign).map(Number);
            
             sum = resultarray.reduce((partialSum, a) => partialSum - a);
        }
         result.textContent=sum;
    }
}


//Ключ для уменьшение размеров результата
let key_decreasing=0;
//массив кнопок
let array=document.querySelectorAll('#Calculator > div>div');


array.forEach(element => {
    if(element.dataset.number_and_sign!=undefined){
        // item.addEventListener('click', buttonNumber, item.innerHtml)
        element.addEventListener('click', function(){
           
            
            buttonNumber(element.textContent, key_decreasing);
        })
        }
});

