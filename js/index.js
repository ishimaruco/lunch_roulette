// 変数宣言
var startBtn = document.getElementById('start');
var isStart = false;
var roulette = document.getElementById('roulette');
var place = '';
var intervalID = -1;

// 行きたい場所を配列にぶち込む
var store = [
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13026948/" target="_blank">六本木「ジャスミンタイ」:タイ料理</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13095890/" target="_blank">六本木「みやび」:焼肉</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13116221/" target="_blank">六本木「ぶどう酒食堂さくら」:イタリアン</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13131353/" target="_blank">六本木「阿部寿司」:寿司</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13206836/" target="_blank">六本木「茶彩 絲」:定食</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13151240/" target="_blank">六本木「HALE海`s」:カフェランチ</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13050458/" target="_blank">麻布十番「鉄板さくら 田谷」:焼き魚</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13010458/" target="_blank">六本木「藍」:米がうまい</a>',
					'<a href="https://tabelog.com/tokyo/A1308/A130802/13161056/" target="_blank">溜池山王「響 風庭」:定食(ちょい高)</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13059966/" target="_blank">麻布十番「レーベルカフェ トーキョー」:プレートランチ</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13013990/" target="_blank">麻布十番「福島屋」:おでん</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13104815/" target="_blank">麻布十番「紫玉蘭」:中華</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13004549/" target="_blank">麻布十番「VIA Brianza」:イタリアン</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13004451/" target="_blank">麻布十番「旬の味　たき下」:焼き魚</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130704/13113813/" target="_blank">神谷町「天雷軒 神谷町店」:ラーメン</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13169315/" target="_blank">六本木「桃山 六本木店」:山形そば</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13178200/" target="_blank">麻布十番「新福菜館」:ラーメン</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13014306/" target="_blank">麻布十番「天のや」:たまごサンド</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13180316/" target="_blank">六本木「メゾン ランドゥメンヌ トーキョー」:パン</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13030935/" target="_blank">麻布十番「アレ フランス カフェ ダリア」:パン</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130702/13004566/" target="_blank">麻布十番「ポワンタージュ」:ランチプレート</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13119438/" target="_blank">六本木「神楽」:鶏肉料理</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13034655/" target="_blank">六本木「バイカル」:ロシア料理</a>',
					'<a href="https://tabelog.com/tokyo/A1308/A130802/13147215/" target="_blank">六本木「バジル」:カレー</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13143552/" target="_blank">六本木「七草」:しゃぶしゃぶ</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13144423/" target="_blank">六本木「サヒファケバブビリヤニ」:ビリヤニ</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130704/13019915/" target="_blank">神谷町「ニルヴァナム」:インド料理</a>',
					'<a href="https://tabelog.com/tokyo/A1308/A130801/13050257/" target="_blank">赤坂「サファリ」:アフリカ料理</a>',
					'<a href="https://tabelog.com/tokyo/A1307/A130701/13154183/" target="_blank">六本木「デリー」:カレー</a>'
				]

// スタートボタンを押したときの処理
function clickedStart() {
	'use strict';
	isStart = true;
	startBtn.disabled = "disabled";
	intervalID = setInterval(function() {
		if(isStart==true) {
			place = store[Math.floor( Math.random() * store.length )];
			roulette.className = 'name';
			document.getElementById("isPlace").innerHTML = place;
		}
	}, 100);
}

// ストップボタンを押した時の処理
function clickedStop() {
	'use strict';
	clearTimeout(intervalID);
	startBtn.disabled = "";
	isStart = false;
	if(place == '') {
		alert("スタートボタンを押してからストップボタンを押してね！");
	} else {
// 結果を画面に表示
	roulette.className = 'name';
	document.getElementById("isPlace").innerHTML = place;
	}
}
