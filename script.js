console.log("hello world");
let turn = "X";
let won = false;

let changeTurn = () => {
  return turn === "X" ? "0" : "X";
};

let moveSound = new Audio("moveSound.wav");

let checkWin = () => {
  let boxtext = document.getElementsByClassName("text");
  let arr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  arr.forEach((e) => {
    if (
      boxtext[e[0]].innerText === boxtext[e[1]].innerText &&
      boxtext[e[1]].innerText === boxtext[e[2]].innerText &&
      boxtext[e[0]].innerText !== ""
    ) {
      won = true;
      if (boxtext[e[0]].innerText === "X") {
        document.getElementsByClassName("turn")[0].innerText = "X won";
        alert("X won");
        turn = "X"

      } else {
        document.getElementsByClassName("turn")[0].innerText = "0 won";
        alert("0 won")
        turn = "0";
      }
    }
  });
};
let button = document.querySelector("#btn");
button.addEventListener("click",() => {
  Array.from(boxes).map((element) => {
    let text = element.querySelector(".text");
    text.innerText = "";
    document.getElementsByClassName("turn")[0].innerText = "Turn: " + turn;
    won = false;
  })
})

let boxes = document.getElementsByClassName("innerbox");
  Array.from(boxes).forEach((element) => {
  let text = element.querySelector(".text");
  element.addEventListener("click", () => {
    if (text.innerText === "") {
      text.innerText = turn;
      turn = changeTurn();
      moveSound.play();
      checkWin();
    if(!won) {
      document.getElementsByClassName("turn")[0].innerText = "Turn: " + turn;
      
    }
      
    }
  });
});


