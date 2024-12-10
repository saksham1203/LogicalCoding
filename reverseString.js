function reverseString(str){
    //1st method
    var rev = str.split("").reverse().join("");
    console.log(rev)
    
    //2nd method

    var rev = "";
    for(i=str.length-1; i>=0; i--){
        rev += str[i]
        console.log(rev)
    }
}

reverseString("saksham")