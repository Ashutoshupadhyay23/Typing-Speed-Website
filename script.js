const setOfWords = [
     "Hey welcome to the typing speed test website.",
    "So let's get started with this",
    "The coordinated its can offer inthe girl",
    "Some black reolacement fits into the miscreant army",
    "the piercing moms can matter in the abuse",
    "The adjoining births are better than the apartment",
    "It was then the unwitting character met the half transportation",
    "The loathsome main can't announce with the instance",
    "How did the hide roll for the association"
    
    ];

    const msg = document.getElementById('msg');
    const typedWords = document.getElementById('mywords');
    const btn = document.getElementById('btn');
    let startTime, endTime;

    const playGame = () => {
        let randomNumber = Math.floor(Math.random()*setOfWords.length);
        // console.log(randomNumber);
        msg.innerText = setOfWords[randomNumber];
        let date = new Date();
        startTime = date.getTime();
        btn.innerText = "Done";
    }

    const endGame = () => {
        let date = new Date();
        endTime = date.getTime();
        let totalTime = ((endTime-startTime)/ 1000);
        // console.log(totalTime);

        let totalStr = typedWords.value;
        let wordCount = wordCounter(totalStr);

        let speed = Math.round((wordCount / totalTime)* 60);

        let finalMsg = "Your currently typing speed is " +speed+ " words per minute. ";

        finalMsg += compareWords(msg.innerText, totalStr);

        msg.innerText = finalMsg;
    }

    const compareWords = (str1, str2) => {
        let words1 = str1.split(" ");
        let words2 = str2.split(" ");
        let count = 0;


        words1.forEach (function (item, index){
            if (item == words2[index]){
                count++;
            }
        })

        let errorWords = (words1.length - count);
        return (count + " correct out of " +words1.length+ " words and the total number of error's are " +errorWords+ ".");  

    }

    const wordCounter = (str) => {
        let response = str.split(" ").length;
        // console.log(response);
        return response; 

    }

    btn.addEventListener('click', function(){
        // console.log(this);
        if (this.innerText == "Start"){
            typedWords.disabled = false;
            playGame(); 
        }else if (this.innerText == "Done"){
            typedWords.disabled = true;
            btn.innerText = "Start";
            endGame();
        }
    })