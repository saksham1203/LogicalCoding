function sequenceOfCharacter (str) {
    const obj = {}
    for(i=0; i<str.length; i++){
        if(obj[str[i]]){
            obj[str[i]] += 1;
        }
        else obj[str[i]] = 1
    }
    console.log(obj)
}

sequenceOfCharacter("aabbccc")