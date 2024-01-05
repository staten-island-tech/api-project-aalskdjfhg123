export let choice = 0;

export function buttons(b1,b2,b3,b4){
    b1.addEventListener("click", function(){
         choice = 0
    
    })
    b2.addEventListener("click", function(){
        choice = 1
    
    })
    b3.addEventListener("click", function(){
         choice = 2
    })
    b4.addEventListener("click", function(){
         choice = 3
    })
}