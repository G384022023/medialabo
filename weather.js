let a = document.querySelector('button#serch');
a.addEventListener('click', addconsole);
let id;
let remove = 0;

function addconsole() {
  let w = document.querySelector('h3');
  let w1 = document.querySelector('ul');
  let bs = document.querySelectorAll('input[name = "toshimei"]');
  let cs = document.querySelectorAll('input[name = "item"]');
  let n = 1;
  if (remove > 0) {
    w.remove();
    w1.remove();
    let ul = document.createElement('ul');
    a.insertAdjacentElement("afterend", ul);
  }
  remove = remove + 1;
  for (let b of bs) {
    if (b.checked) {
      console.log("都市名: " + b.value);
      id = b.id;
    }
  }
  for (let c of cs) {
    if (c.checked) {
      console.log("必要項目" + n + "つ目: " + c.value);
      n = n + 1;
    }
  }

}

function print(data) {
  let ul = document.querySelector('ul');
  let p = document.createElement('h3');
  let p1 = document.createElement('li');
  let p2 = document.createElement('li');
  let p3 = document.createElement('li');
  let p4 = document.createElement('li');
  let p5 = document.createElement('li');
  let p6 = document.createElement('li');
  let p7 = document.createElement('li');
  let p8 = document.createElement('li');
  let bs = document.querySelectorAll('input[name = "toshimei"]');
  let cs = document.querySelectorAll('input[name = "item"]');
  for (let b of bs) {
    if (b.checked) {
      p.textContent = b.value;
      a.insertAdjacentElement("afterend", p);
    }
  }
  for (let c of cs) {
    if (c.checked) {
      if (c.value == "経度") {
        p1.textContent = "経度: " + data.coord.lon;
        ul.insertAdjacentElement("beforeend", p1);
      }
      if (c.value == "緯度") {
        p2.textContent = "緯度: " + data.coord.lat;
        ul.insertAdjacentElement("beforeend", p2);
      }
      if (c.value == "天気") {
        p3.textContent = "天気: " + data.weather.description;
        ul.insertAdjacentElement("beforeend", p3);
      }
      if (c.value == "最低気温") {
        p4.textContent = "最低気温: " + data.main.temp_min;
        ul.insertAdjacentElement("beforeend", p4);
      }
      if (c.value == "最高気温") {
        p5.textContent = "最高気温: " + data.main.temp_max;
        ul.insertAdjacentElement("beforeend", p5);
      }
      if (c.value == "湿度") {
        p6.textContent = "湿度: " + data.main.humidity;
        ul.insertAdjacentElement("beforeend", p6);
      }
      if (c.value == "風速") {
        p7.textContent = "風速: " + data.wind.speed;
        ul.insertAdjacentElement("beforeend", p7);
      }
      if (c.value == "風向") {
        p8.textContent = "風向: " + data.wind.deg;
        ul.insertAdjacentElement("beforeend", p8);
      }
    }
  }
}

let b = document.querySelector('button#serch');
b.addEventListener('click', sendRequest);

// 通信を開始する処理
function sendRequest() {
    // URL を設定
    let url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/' + id + '.json';

    // 通信開始
    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
}

// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }
    print(data);
    console.log(data);
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}





