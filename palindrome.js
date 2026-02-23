function IsPalindromeLoop(str){
    const cleanStr   = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = cleanStr.length;


    for(i=0;i<len/2;i++){
        if (cleanStr[i] !== cleanStr[len - 1 - i]) {
            return false;

    }
}
return true;
}

console.log(IsPalindromeLoop("121"));
console.log(IsPalindromeLoop("car"));