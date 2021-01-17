
var mini = true;
var full_collapse = false;

function toggleSidebar() {
    if (mini) {
        console.log("opening sidebar");
        document.getElementById("mySidebar").style.width = "300px";
        document.getElementById("main").style.marginLeft = "300px";
    } else {
        console.log("closing sidebar");
        document.getElementById("mySidebar").style.width = "50px";
        document.getElementById("main").style.marginLeft = "50px";
        
    }
    this.mini = !this.mini;
}

//function toggleCollapse(){
//    if (full_collapse){
//        console.log("Opening Collapse");
//        document.getElementById("main").display = "block";
//        document.getElementById("mySidebar").display = "block";
//    }
//    else{
//        console.log("Closing Collapse");
//        document.getElementById("main").display = "none";
//        document.getElementById("mySidebar").display = "none";
//    }
//    this.full_collapse = !this.full_collapse;
//}
