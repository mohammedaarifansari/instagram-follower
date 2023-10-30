let profile = document.querySelector("h3");

let addfriend = document.querySelector("button");

let flag = 0;

addfriend.addEventListener("click", function(){
  if(flag == 0){
    profile.innerHTML = "Friend";
    profile.style.color = "green";
    addfriend.innerHTML = "friend";
    addfriend.style.backgroundColor = "green";
    flag = 1;
  }else{
    profile.innerHTML = "UnFriend";
    profile.style.color = "red";
    addfriend.innerHTML = "unfriend";
    addfriend.style.backgroundColor = "red";
    flag = 0;
  }
});