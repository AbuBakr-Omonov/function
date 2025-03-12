//1-masala
{
    function check(number){
        if(number === 0){
            return "toq ham emas, juft ham emas"
        }
        if(number % 2 === 0 ){
            return "juft"
            
        }else{
            return "toq";
        }
    }
      console.log(check(3)); 

}
//1.2-masala
// {
//     function check(number) {
//         return number === 0 ? "toq ham emas, juft ham emas" : number % 2 === 0 ? "juft" : "toq";
//     }
//     console.log(check(3));
// }


//2-masala
{
    function checkSign(number){
        if(number > 0){
            return "musbat"
        }else if(number === 0) {
            return "nol"
        }
        return "manfiy";
    }
    console.log(checkSign(-5));
    
}
//2.2-masala
// {
//     function checkSign(number) {
//         return number === 0 ? "nol" : number > 0 ? "musbat" : "manfiy";
//     }
//     console.log(checkSign(0));
// }

//3-masala
{
    function adjustNumber(number){
        if(number > 0){
            return number + 1
        }else{
            return number - 2
        }
    }
    console.log(adjustNumber(-5));
    
}
//3.2 - masala
// {
// function adjustNumber(number){
//     return number > 0 ? number + 1 : number -2 ;
// }
// console.log(adjustNumber(5));

// }

//4-masala
{
    function number(son,daraja){
        return son ** daraja;
    }
    console.log(number(10,2));
    
}
//4.2-masala
// {
//     function number(son,daraja){
//         return Math.pow(son,daraja);
//     }
//     console.log(number(10,2));
    
// }

//5-masala
{
    function word(str){
        return str.length
    }
    console.log(word("laylo"));
    
}

//6-masala
{
    function maxNum(a,b){
        if(a > b){
            return a;
        }else if(a === b){
            return "ikkalasi teng"
        }
        return b;
    }
    console.log(maxNum(5,7));
    
}

//6.2-masala
// {
//     function maxNum(a,b){
//         return a ===  b ? "ikkalasi teng" : a > b ?  a : b ;
//     }
//     console.log(maxNum(2,1));
    
// }

//7-masala
{   
    function firstElement(array){
        return array[0];
    }
    console.log(firstElement(["olma","anor","banan", "gilos"]));
    
}
//8-masala
{
    function number(n){        
       for(i = 0; i < n ; i++){
        return n * (n + 1) / 2 ;
       }
    }
    console.log(number(3));
    
}
//9-masala
{
    function numDay(n) {
        switch (n) {
            case 1: 
            return "Dushanba";
            case 2:
            return "Seshanba";
            case 3: 
            return "Chorshanba";
            case 4: 
            return "Payshanba";
            case 5:
            return "Juma";
            case 6: 
            return "Shanba";
            case 0: 
            return "Yakshanba";
            default: 
            return "Noto'g'ri kun";
        }
    }
    console.log(numDay(5));
    
    
   
    
}

//10-masala
{
    function num(k,n){
        let array = [];
        for(let i = k; i <= n; i++){
            if( i % 2 === 0){
                array.push(i);
            }
        }
        return array;
    }
    console.log(num(1,8));
    
}
