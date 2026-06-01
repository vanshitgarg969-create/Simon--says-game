// let btn = document.querySelector('button');
// let ul = document.querySelector('ul');
// let inp = document.querySelector('input');

// btn.addEventListener("click",function(){
//     let item = document.createElement('li');
//     item.innerText = inp.value;

//     let delBtn = document.createElement('button');
//     delBtn.innerText = 'Delete';
//     delBtn.classList.add('Delete');
//     item.appendChild(delBtn);

//     ul.appendChild(item);
//     inp.value = "";
// });

// ul.addEventListener("click", function(event){
//     if(event.target.nodeName == "BUTTON"){
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log('deleted');
//     }

// });


// let gameSeq = [];
// let userSeq = [];

// let btns = ["yellow", "red", "purple", "green"];

// let start = false;
// let level = 0;
// let max_score = 0;


// let h2 = document.querySelector('h2');
// let highScoreHeading = document.querySelector('#high_score');

// document.addEventListener("keypress" , function(){
//     if(start == false){
//         console.log("game is started");
//         start = true;

//         levelUp();
//     }
// });

// function gameFlash(btn){
//     btn.classList.add("flash");
//     setTimeout(function(){
//         btn.classList.remove("flash");

//     },1000);
// }

// function userFlash(btn){
//     btn.classList.add("userflash");
//     setTimeout(function(){
//         btn.classList.remove("userflash");

//     },1000);
// }

// function levelUp(){
//     userSeq = [];
//     level++;
//     h2.innerText = `Level ${level}`;

//     let randIdx = Math.floor(Math.random() *4);
//     let randColor = btns[randIdx];
//     let randBtn = document.querySelector(`.${randColor}`);
//     gameSeq.push(randColor);
//     console.log(gameSeq);
//     gameFlash(randBtn);
// }

// function checkAns(idx){
//     if(userSeq[idx] == gameSeq[idx]){
//         if(userSeq.length == gameSeq.length){
//             setTimeout(levelUp , 1000);

//         }
//     }
//     else{
//         if (level > max_score) {
//             max_score = level;
//             highScoreHeading.innerText = `Highest Score: ${max_score}`;

//         }

//         h2.innerHTML = `Game Over! Your score was <b> ${level}</b> <br> Press any key to start.`;
//         document.querySelector("body").style.backgroundColor = "red";
//         setTimeout(function(){
//             document.querySelector("body").style.backgroundColor= "white";
//         },150)
//         reset();
//     }

// }

// function btnPress(){
//     let btn = this;
//     userFlash(btn);

//     userColor = btn.getAttribute("id");
//     userSeq.push(userColor);

//     checkAns(userSeq.length-1);
// }

// let allbtns = document.querySelectorAll(".btn");
// for(let btn of allbtns){
//     btn.addEventListener("click" , btnPress);
// }

// function reset(){
//     start = false;
//     gameSeq = [];
//     userSeq = [];
//     level = 0;
// }

// function one(){
//     return 1 ;
// }
// function two(){
//     return one() +one();
// }
// function three(){
//     return two() + one();
// }
// three();

let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector('button');

btn.addEventListener("click",async() => {
    let state = document.querySelector("inpur").value;
    console.log(state);


  let colArr = await getColleges(states);
  show(colArr);
});

function show(colArr){
    let list = document.querySelector("#result");
    list.innerText = " ";
    for(col of colArr){
        console.log(col.name);

        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(states){
    try{
        let res = await axios.get(url + state);
        return res.data;

    }catch(e){
        console.log("error -", e);
        return[];
        
    }
}
