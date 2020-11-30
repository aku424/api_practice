const btn = document.getElementById("add");
const lists = document.getElementById("lists");

btn.addEventListener("click",async function(){
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
    
});
addEventListener("load" ,async function(){
    
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await res.json();
    
    if(confirm("実行しますか？") === true){
        
        users.forEach(function(user) {
            const list = document.createElement("li");
            lists.appendChild(list);
            list.innerText = user.name;
            console.log(list);
        });
    }
});
