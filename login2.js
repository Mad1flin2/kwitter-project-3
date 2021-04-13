function login()
{
    user_name = document.getElementById("user_name_in").value
localStorage.setItem("user_name_storage",user_name);
window.location="http://127.0.0.1:5500/room/room2.html";
}
