let url = 'https://script.google.com/macros/s/AKfycbzwGTVA5X9ispoioH8-UBkGJD280xWQaWXRJH7h6Y6iR3Mt3FZcb-3IHfedZmlLXkOpyQ/exec'
// let type = "u"
// let N = ""
let K = 0
let Nowtime = 0
let Alltime = 0
let Ltime = 12345678
let getJSON = async (url, k, v, m, n) => {
    console.log(url + `?k=${k}&v=${v}&m=${m}&n=${n}`)
    let response = await fetch(url + `?k=${k}&v=${v}&m=${m}&n=${n}`);
    let JSON = await response.json();
    // console.log(JSON)
    // type = "u"
    updata(JSON)
}

function updata(data) {
    document.getElementById("name").innerText = data[0]
    document.getElementById("s1").innerText = data[3][0]
    document.getElementById("s2").innerText = data[3][1]
    document.getElementById("s3").innerText = data[3][2]
    document.getElementById("s4").innerText = data[3][3]
    document.getElementById("s5").innerText = data[3][4]
    Nowtime = Number(data[2][0])
    Alltime = Number(data[1][0])
    Ltime = Number(data[4][0])
    // document.getElementById("schedule").value = Nowtime / Alltime * 100
    // document.getElementById("time").innerText = PrintTime(Nowtime, Alltime)
}
function check(id) {
    // if (type != "u") return
    // type = "c"
    // N = id
    getJSON(url, K, volume.value, "c", id)
}
function search() {
    // type = "s"
    // N = keyword.value
    getJSON(url, K, volume.value, "s", keyword.value)
}
function PrintTime(n, a) {
    output = ""
    if (Math.floor(n / 60) < 10) output += "0"
    output += Math.floor(n / 60)
    output += ":"
    if (Math.floor(n % 60 < 10)) output += "0"
    output += Math.floor(n % 60)
    output += "/"
    if (Math.floor(a / 60) < 10) output += "0"
    output += Math.floor(a / 60)
    output += ":"
    if (Math.floor(a % 60) < 10) output += "0"
    output += Math.floor(a % 60)
    return output
}

document.getElementById("sand").onclick = () => search()
document.getElementById("play").onclick = () => {
    K = (K + 1) % 2
    if (K % 2 == 1) {
        document.getElementById("play").className = "gg-play-button-o"
    } else {
        document.getElementById("play").className = "gg-play-pause-o"
    }
    getJSON(url, K, volume.value, "u", "")
}
document.getElementById("s1").onclick = () => check(1)
document.getElementById("s2").onclick = () => check(2)
document.getElementById("s3").onclick = () => check(3)
document.getElementById("s4").onclick = () => check(4)
document.getElementById("s5").onclick = () => check(5)
document.getElementById("volume").onchange = () => getJSON(url, K, volume.value, "u", "");
const keyword = document.getElementById("in");
const volume = document.getElementById("volume");

let count = 0
setInterval(function () {
    count++
    if (count % 4 == 0) {
        getJSON(url, K, volume.value, "u", "")
    }
    if (((Date.now() / 1000) - Ltime + Nowtime) < Alltime && K == 0) {
        document.getElementById("schedule").value = ((Date.now() / 1000) - Ltime + Nowtime) / Alltime * 100
        document.getElementById("time").innerText = PrintTime((Date.now() / 1000) - Ltime + Nowtime, Alltime)
        // console.log("?")
    }
}, 500);