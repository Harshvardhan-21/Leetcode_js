function IsPalindrome(s){
    var reversestring = s.split("").reverse("").join("");
    if( s == reversestring){
        console.log("palindrome");
    }
    else
    console.log("notpalindrome")
    
}
IsPalindrome("121");
IsPalindrome("car");