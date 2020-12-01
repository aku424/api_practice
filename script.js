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
