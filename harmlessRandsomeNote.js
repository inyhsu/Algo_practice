// Find out what noteText need to be find
    // split text into array and count how many times each appear and saved as Object
// Do the same thing with magazineText and compare if noteText appears within magazineTextObj and appearance times is equal or less

function harmlessRansomNote( noteText, magazineText ) {
    var noteTextArray = noteText.split(' ');
    var magazineTextArray = magazineText.split(' ');
    var noteTextObj = {};
    var magazineTextObj = {};

    for(let i = 0; i < noteTextArray.length; i ++) {
        var char = noteTextArray[i];
        if(!noteTextObj[char]){
            noteTextObj[char] = 0;
        }

        noteTextObj[char] ++
    }

    for(let i = 0; i < magazineTextArray.length; i ++) {
        var char = magazineTextArray[i];
        if(!magazineTextArray[char]){
            magazineTextObj[char] = 0;
        }

        magazineTextObj[char] ++
    }
    
    for(let keyNote in noteTextObj){
        for(let keyMag in magazineTextObj) {
            if(keyNote === keyMag && noteTextObj[keyNote] <= magazineTextObj[keyMag]){
                return true
            }
        }
    }

    return false
}