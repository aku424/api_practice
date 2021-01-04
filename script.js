// DOM要素の取得
const btn = document.getElementById("add");
const lists = document.getElementById("lists");

// メソッド
// user情報の取得
async function getUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    return users;
}
// user情報の追加
function addList(user) {
    const list = document.createElement("li");
    list.innerText = user.name;
    lists.appendChild(list);
}
//user情報の表示
async function listUsers(){
    const users = await getUsers();
    if(confirm("実行しますか？") === true){
        users.forEach(addList);
    }
}
//イベント
addEventListener("load" ,listUsers);

btn.addEventListener("click",listUsers);



// function foo(text){
//     console.log(text);
// }
// foo("たくと");

// const foo1 =(text1)=>{
//     console.log(text1);
// }
// foo1("拓斗");


// const isTweetable = (test)=>{
//     return test.length <=140;
// };

// const check = (text)=>{
//     if( isTweetable(text)){
//         console.log("you can tweet!");
//     }
// }
// check("ttt");


//天気機能
//apiを獲得する
async function callApi(place){
    const apiKey ="19671a8a567f6c85d12d7da2df1575be";
    // res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=" + apiKey)
    res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + place + "&units=metric&appid=" + apiKey)
    const weather = await res.json();
    searchError(weather); 
}

//入力値を獲得して、urlに都市を埋め込む
document.getElementById("search").onclick =()=>{
    const cityname = document.getElementById("cityname")
    const place = cityname.value
    const weather = callApi(place)
}
//検索結果が正しくない場合
function searchError(weather){
    if (weather.name == undefined) {
        alert("正しく地名を入力してください。")
    }else{
        const place = document.getElementById("place")
        const temp_max = document.getElementById("temp_max")
        const temp_min = document.getElementById("temp_min")
        const humidity = document.getElementById("humidity")
        const speed = document.getElementById("speed")
        const sky = document.getElementById("weather")
        const weatherIcon = document.getElementById("img")
        //お天気情報の追加
        place.innerText = weather.name;
        // 最高気weather
        temp_max.innerText = weather.main.temp_max;
        // 最低気温
        temp_min.innerText = weather.main.temp_min;
        //湿度
        humidity.innerText = weather.main.humidity;
        //風速
        speed.innerText = weather.wind.speed;
        //天気
        sky.innerText = weather.weather[0].main;
        //お天気記号
        const img = weather.weather[0].icon;
        const icon = "http://openweathermap.org/img/wn/"+img+"@2x.png"
        weatherIcon.setAttribute("src",icon)
    }
}