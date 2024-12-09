//オーディオの定義。
const audio1 = new Audio("クリック１.mp3");
const audio2 = new Audio("クリック2.mp3");
const audio3 = new Audio("ボタン１.mp3");
const audio4 = new Audio("ボタン２.mp3");
const audio5 = new Audio("BGM1.mp3");
audio5.volume = 0.5;

//現在のポイントを表す変数numの定義。
let num = 0;
document.querySelector(".idol-text-num").textContent = num;
//imageをクリックした際の処理。
{
    document.querySelector(".idol-img").addEventListener("click", () => {
        audio5.play();
        audio1.load();
        audio1.play();
        //変数numを1増やす処理。
        num++;
        document.querySelector(".idol-text-num").textContent = num;
        return num;

    })
}
//震えるアニメーション。
document.querySelector(".idol-img").addEventListener("click", () => {
    for (let i = 0; i < 1; i++) {
        $(".idol-img").animate({ left: "-=20px" }, 50) // 左に動く
        $(".idol-img").animate({ left: "+=40px" }, 50) // 右に動く
        $(".idol-img").animate({ left: "-=20px" }, 50); // 元の位置に戻る
    }
}
)


//ポイントメニューのアコーディオン。
{
    document.querySelector(".point-text").addEventListener("click", () => {
        audio2.load();
        audio2.play();
        if ($(".point-text").hasClass("open")) {
            $(".point-menu").slideToggle();
        } else {
            $(".point-menu").slideToggle();
        }
    });
}

{//ポイントメニューをクリックした際の処理。
    //("#point-1")をクリックした際に、numを10減らす。
    document.querySelector("#point-1").addEventListener("click", () => {
        if (num >= 10) {
            audio3.load();
            audio3.play();
            num -= 10;
            document.querySelector(".idol-text-num").textContent = num;
            return num;
        } else {
            audio4.load();
            audio4.play();
        }
    });

    //("#point-2")をクリックした際に、numを100減らす。
    document.querySelector("#point-2").addEventListener("click", () => {
        if (num >= 100) {
            audio3.load();
            audio3.play();
            num -= 100;
            document.querySelector(".idol-text-num").textContent = num;
            return num;
        } else {
            audio4.load();
            audio4.play();
        }
    })

}

//フッター右下に時計表示。
{
    const time = (new Date()).toLocaleString();
    document.querySelector(".time-text").textContent = time;
    setInterval(() => {
        const time = (new Date()).toLocaleString();
        document.querySelector(".time-text").textContent = time;
    }, 1000)
}
