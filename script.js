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
    console.log(list);
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



function foo(text){
    console.log(text);
}
foo("たくと");

const foo1 =(text1)=>{
    console.log(text1);
}
foo1("拓斗");


const isTweetable = (test)=>{
    return test.length <=140;
};

const check = (text)=>{
    if( isTweetable(text)){
        console.log("you can tweet!");
    }
}
check("ttt");


//天気機能

async function callApi(){
    const apiKey ="19671a8a567f6c85d12d7da2df1575be";
    res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=tokyo&units=metric&appid=" + apiKey)
    // res = await fetch("http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + apiKey)
    const weather = await res.json();
    console.log(weather);
}
callApi()
