function link(){
    var uid = document.getElementById("linked").value;   // get input value
    var level = document.getElementById("level").value; // get input value

    if(uid.trim() === ""){
        alert("please enter uid GENIUS !");
        return;
    }

    if(level.trim() === ""){
        alert("please enter level GENIUS !");
        return;
    }

    document.write("UID: " + uid + " | LEVEL: " + level);
}
