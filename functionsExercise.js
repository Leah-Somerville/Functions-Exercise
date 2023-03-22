// 1
function fozzieBear(){
    console.log("Wocka Wocka!");
}

fozzieBear();

// 2
function beaker(speak){
    for (i = 0; i < 4; i++){
        console.log(speak);
    }
}

beaker("Meep");

// 3
function muppetShow(a, b){
    if (a === "Muppet" && b === "Show"){
        console.log("It's time to play the music. It's time to light the lights.");
    }
}

muppetShow("Muppet", "Show");

// 4
function kermit(){
    return "Kermit The Frog";
};

console.log(kermit());

// 5
function muppetShowSeasons(seasons){
    if (seasons == 5){
        return true;
    }else{
        return false;
    }
}

// 6
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}

// 7
rainbowConnection = () => `Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`;

// 8 - NO

// 9 - YES

// 10a
const newMuppetMovies = [
    `The Muppets`,
    `Muppets Most Wanted`
];

const upperMovies = newMuppetMovies.map(m => m.toUpperCase());

// BONUS
// 11a
const oldMuppetMovies = [
    `The Muppet Movie`,
    `The Muppets Take Manhattan`,
    `The Great Muppet Caper`,
    `The Muppet Christmas Carol`,
    `Muppet Treasure Island`,
    `Muppets From Space`
];

// 11b
console.log(`==================`);
const twoMovies = oldMuppetMovies.filter(m => m.length === 22);
console.log(twoMovies);

// 12a
const charactersOne = [
    `Statler`,
    `Waldorf`
];

// 12b
const charactersTwo = [
    `The Swedish Chef`,
    `Animal`,
    `Rowlf`
];

// 12c
randomMuppet = characters => {
    let charLen = characters.length;

    let selectedChar = Math.floor(Math.random() * charLen);

    return characters[selectedChar];
    // return selectedChar;

}
// 12d
const test1 = randomMuppet(charactersOne);
console.log(test1);

const test2 = randomMuppet(charactersTwo);
console.log(test2);

// 13
caps = word => {
    let newWord = '';
    for (i = 0; i < word.length; i++){
        if (i % 2 == 0){
            newWord += word[i].toUpperCase();
        }else{
            newWord += word[i];
        }
    }
    return newWord;
}

const y = caps(`hello world`);
console.log(y);
