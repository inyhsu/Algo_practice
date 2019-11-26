// Find out what noteText need to be find
    // split text into array 
// Do the same thing with magazineText and save magazineText into Obj and how many times 
// and compare if noteText appears within magazineTextObj and appearance times is equal or less

function harmlessRansomNote( noteText, magazineText ) {
    var noteTextArray = noteText.split(' ');
    var magazineTextArray = magazineText.split(' ');
    var magazineTextObj = {};
    var result = true;

    for(let i = 0; i < magazineTextArray.length; i ++) {
        var char = magazineTextArray[i];
        if(!magazineTextArray[char]){
            magazineTextObj[char] = 0;
        }

        magazineTextObj[char] ++
    }
    
    for(let i = 0; i < noteTextArray.length; i++) {
        var char = noteTextArray[i];
        if(magazineTextObj[char]){
            magazineTextObj[char] --;
            if(magazineTextObj[char] < 0) result = false;
        }
        else result = false
    }


    return result;
}