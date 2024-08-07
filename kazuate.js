
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする
let b = document.querySelector('#print');
b.addEventListener('click', hantei);


// ボタンを押した後の処理をする関数 hantei() の定義
function hantei() {
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  let y = document.querySelector('input[name="number"]');
  let yoso = y.value;
  
  // 課題3-1: 正解判定する
  let kasiu1 = document.querySelector('span#kaisu');
  let answer1 = document.querySelector('span#answer');
  let result1 = document.querySelector('p#result');
  kaisu = kaisu + 1; 
    if (kaisu > 3) {
        console.log(kaisu + "回目の予想: " + yoso); 
        console.log("答えは " + kotae + " でした。すでにゲームは終わっています。");
        result1.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
        kasiu1.textContent = kaisu;
        answer1.textContent = yoso;
    }
    else if (kotae == yoso) {
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("正解です。おめでとう!");
            result1.textContent = "正解です。おめでとう!";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
            kaisu = kaisu + 2;
    } 
    else if (kotae < yoso) {
        if (kaisu < 3) {
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("まちがい。答えはもっと小さいですよ。");
            result1.textContent = "まちがい。答えはもっと小さいですよ。";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
        }
        else if (kaisu == 3){
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("まちがい。残念でした答えは " + kotae + " です。");
            result1.textContent = "まちがい。残念でした答えは " + kotae + " です。";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
        }
        else {
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("答えは " + kotae + " でした。すでにゲームは終わっています。");
            result1.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
        }
    } 
    else if (kotae > yoso) {
        if (kaisu < 3) {
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("まちがい。答えはもっと大きいですよ。");
            result1.textContent = "まちがい。答えはもっと大きいですよ。";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
        }
        else if (kaisu == 3){
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("まちがい。残念でした答えは " + kotae + " です。");
            result1.textContent = "まちがい。残念でした答えは " + kotae + " です。";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
        }
        else {
            console.log(kaisu + "回目の予想: " + yoso); 
            console.log("答えは " + kotae + " でした。すでにゲームは終わっています。");
            result1.textContent = "答えは " + kotae + " でした。すでにゲームは終わっています。";
            kasiu1.textContent = kaisu;
            answer1.textContent = yoso;
        }
    } 



  // kotae と yoso が一致するかどうか調べて結果を出力
  // 課題3-1における出力先はコンソール
}