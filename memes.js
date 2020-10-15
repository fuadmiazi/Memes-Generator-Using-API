//.....................

function generateMeme(numb){
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(datas => {
        const memesName = datas.data.memes[numb].name;
        document.getElementById("meme-name").innerText = memesName;
        document.getElementById("meme-numb").innerText = numb;
        const memesImage = datas.data.memes[numb].url;
        document.getElementById("meme-image").setAttribute('src', `${memesImage}`)

    })
}

var randNum = Math.floor(10+ Math.random() * 90);
generateMeme(randNum);

const generateButton = document.getElementById('meme-button');
generateButton.addEventListener("click", () => {
    var randNum = Math.floor(10+ Math.random() * 90);
    generateMeme(randNum);
})

//generateMeme(randNum);