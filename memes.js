//.....................

function generateMeme(numb){
    fetch('https://api.imgflip.com/get_memes')
    .then(res => res.json())
    .then(datas => {
        const memesName = datas.data.memes[numb].name;
        document.getElementById("meme-name").innerText = memesName;
        const memesImage = datas.data.memes[numb].url;
        document.getElementById("meme-image").setAttribute('src', `${memesImage}`)

    })
}
var randNum = Math.floor(10+ Math.random() * 90);
console.log(randNum);
generateMeme(randNum);