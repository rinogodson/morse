const ji = require('join-images');
const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a word or phrase: ', (Userinput) => {
    let word = Userinput;

    const pictureSet = [];

    for (let i = 0; i < word.length; i++) {
        switch (word.charAt(i).toLowerCase()) {
            case "a":
                pictureSet.push("images/A.png");
                break;
            case "b":
                pictureSet.push("images/B.png");
                break;
            case "c":
                pictureSet.push("images/C.png");
                break;
            case "d":
                pictureSet.push("images/D.png");
                break;
            case "e":
                pictureSet.push("images/E.png");
                break;
            case "f":
                pictureSet.push("images/F.png");
                break;
            case "g":
                pictureSet.push("images/G.png");
                break;
            case "h":
                pictureSet.push("images/H.png");
                break;
            case "i":
                pictureSet.push("images/I.png");
                break;
            case "j":
                pictureSet.push("images/J.png");
                break;
            case "k":
                pictureSet.push("images/K.png");
                break;
            case "l":
                pictureSet.push("images/L.png");
                break;
            case "m":
                pictureSet.push("images/M.png");
                break;
            case "n":
                pictureSet.push("images/N.png");
                break;
            case "o":
                pictureSet.push("images/O.png");
                break;
            case "p":
                pictureSet.push("images/P.png");
                break;
            case "q":
                pictureSet.push("images/Q.png");
                break;
            case "r":
                pictureSet.push("images/R.png");
                break;
            case "s":
                pictureSet.push("images/S.png");
                break;
            case "t":
                pictureSet.push("images/T.png");
                break;
            case "u":
                pictureSet.push("images/U.png");
                break;
            case "v":
                pictureSet.push("images/V.png");
                break;
            case "w":
                pictureSet.push("images/W.png");
                break;
            case "x":
                pictureSet.push("images/X.png");
                break;
            case "y":
                pictureSet.push("images/Y.png");
                break;
            case "z":
                pictureSet.push("images/Z.png");
                break;
            default:
                pictureSet.push("images/SPACE.png");
        }
    }

    ji.joinImages(pictureSet).then((img) => {
        img.toFile('out.png');
        console.log("Image Generated: ./out.png");
        rl.close(); 
    });
});

rl.on('close', () => {
    console.log('Program ended.');
});