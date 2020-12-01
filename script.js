const btn = document.getElementById("add");
const lists = document.getElementById("lists");

async function listUsers(){
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    
    
    if(confirm("実行しますか？") === true){
        
        users.forEach(function(user) {
            const list = document.createElement("li");
            list.innerText = user.name;
            lists.appendChild(list);
            console.log(list);
        });
    }
    
}

btn.addEventListener("click",listUsers);
addEventListener("load" ,listUsers);
