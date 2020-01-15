//新しいリストを作成するボタン
const add = document.querySelector('.add');
//チェックボタンやラベル達
const ckbtn = document.querySelectorAll('div .check');
const lbtxt = document.querySelectorAll('div .label');
const b = document.querySelectorAll('div p');
//webstorage
const storage = sessionStorage;



//リストを消す関数
function removelist(key, btn, lb, p) {
	btn.addEventListener('click', function() {
		const txt = lb.value;
		alert(txt + "を達成したよ");
		//ストレージからも削除
		storage.removeItem(key);
		//親要素を取得して削除
		const parent = p.parentNode;
		parent.removeChild(p);
	});
}


//最初の３つ
for (let i = 0; i < 3; i++) {
	const btn = ckbtn[i];
	const lb = lbtxt[i];
	const p = b[i];
	removelist(i, btn, lb, p);

	//テキストに変化があった時ストレージにセットする
	lb.addEventListener('change', function() {
		const txt = lb.value;
		storage.setItem(i, txt);
	})
}



	let i = 3;
//新しくつくるボタン
add.addEventListener('click', function() {
	//DOMを生成
	const b = document.querySelector('div');
	const btn = document.createElement('input');
	btn.setAttribute("type", "checkbox");
	btn.setAttribute("class", "check");
	const l = document.createElement('label');
	const txt = document.createElement('input');
	txt.setAttribute("type", "text");
	txt.setAttribute("size", "20")
	txt.setAttribute("class", "label")
	const block = document.createElement('p');
	//挿入
	b.appendChild(block);
	l.appendChild(txt);
	block.appendChild(btn);
	block.appendChild(l);

	const nbtn = document.querySelector('p:last-of-type .check');
	const nlb = document.querySelector('p:last-of-type .label');
	const np = document.querySelector('.lists p:last-of-type');

	//webstorageにセット
	nlb.addEventListener('change', function() {
		const txt = nlb.value;
		storage.setItem(i, txt);
		console.log(i);
		removelist(i, nbtn, nlb, np);
		i++;
	})

});

//リロードされた時にストレージから読み込んでリマインダーを再構築する
function reLoad() {
	const textfield = document.querySelectorAll('div .label');
	for (let k = 0; k < storage.length; k++) {

  		const val = storage.getItem(storage.key(k));

		if (k<3) {
      item = textfield[k];
      item.value = val;
		}else{
      //もし初期の個数以上のストレージがあるときテキストフィールドを作らないといけない
  			//DOMを生成
  			const b = document.querySelector('div');
  			const btn = document.createElement('input');
  			btn.setAttribute("type", "checkbox");
  			btn.setAttribute("class", "check");
  			const l = document.createElement('label');
  			const txt = document.createElement('input');
  			txt.setAttribute("type", "text");
  			txt.setAttribute("size", "20")
  			txt.setAttribute("class", "label")
  			const block = document.createElement('p');
  			//挿入
  			b.appendChild(block);
  			l.appendChild(txt);
  			block.appendChild(btn);
  			block.appendChild(l);

  			const nbtn = document.querySelector('p:last-of-type .check');
  			const nlb = document.querySelector('p:last-of-type .label');
  			const np = document.querySelector('.lists p:last-of-type');

        nlb.value = val;
    }
	}
}
