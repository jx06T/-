let url = 'https://script.google.com/macros/s/AKfycbwgrFPmi7kzaXDQlZ0IIkjsW1LFMLpBydb_bvOVhXfgKT1nLl28bO0fznAIqjpKw6RE1Q/exec'
let type = "u"
let N = ""
let K = 0
let getJSON = async (url, k, v, m, n) => {
    console.log(url + `?k=${k}&v=${v}&m=${m}&n=${n}`)
    let response = await fetch(url + `?k=${k}&v=${v}&m=${m}&n=${n}`);
    let JSON = await response.json();
    // console.log(JSON)

    updata(JSON)
}

function updata(data) {
    document.getElementById("name").innerText = data[0]
    document.getElementById("time").innerText = data[2] + "/" + data[1]
    let time1 = (data[2][0].split(":")[0] * 60) + (data[2][0].split(":")[1])
    let time2 = (data[1][0].split(":")[0] * 60) + (data[1][0].split(":")[1])
    document.getElementById("s1").innerText = data[3][0]
    document.getElementById("s2").innerText = data[3][1]
    document.getElementById("s3").innerText = data[3][2]
    document.getElementById("schedule").value = time1 / time2 * 100

}
function check(id) {
    if (type != "u") return
    type = "c"
    N = id
}
function search() {
    type = "s"
    N = keyword.value
}
document.getElementById("sand").onclick = () => search()
document.getElementById("play").onclick = () => {
    K = (K + 1) % 2
    if (K % 2 == 1) {
        document.getElementById("play").className = "gg-play-button-o"
    }else{
        document.getElementById("play").className = "gg-play-pause-o"
    }
}
document.getElementById("s1").onclick = () => check(1)
document.getElementById("s2").onclick = () => check(2)
document.getElementById("s3").onclick = () => check(3)
const keyword = document.getElementById("in");
const volume = document.getElementById("volume");

setInterval(function () {
    // console.log(type)
    getJSON(url, K, volume.value, type, N)
    type = "u"
}, 1500);