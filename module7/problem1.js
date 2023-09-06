function containsVowels(inputString) {
    const vowelPattern = /[aeiouAEIOU]/;
    let x = vowelPattern.test(inputString)
    if (x == true){
        console.log("The string contains vowel.");
    }else{
        console.log("The string does not contain any vowel.");
    }
}
containsVowels("Hellr, Wrrld!");


  
  
  
  
  
  