document.getElementById("aboutUsButton").onclick = function() {
    divTest = document.getElementById("about-extra");
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
}


$(document).ready(function(){
    $("#serviceOne").click(function(){
        //Find Width of Participants monitor
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth);
        // Emulating the lower resolution and size of older monitors by setting the width of the layout to be different sizes
        // However if you use is already using a smaller screen then set the width to be 100%
        if ( w >= 1000){
            document.getElementById("a").style.width ="50%";
        }
        else{
            document.getElementById("a").style.width ="100%";
        }
        document.getElementById("a").style.zIndex ="1";
        document.getElementById("b").style.zIndex ="-99";
        document.getElementById("c").style.zIndex ="-99";
        document.getElementById("d").style.zIndex ="-99";
        document.getElementById("e").style.zIndex ="-99";
        document.getElementById("f").style.zIndex ="-99";

        document.getElementById("b").removeClass("active");
        document.getElementById("c").removeClass("active");
        document.getElementById("d").removeClass("active");
        document.getElementById("e").removeClass("active");
        document.getElementById("f").removeClass("active");

        document.getElementById("a").addClass("active");
    });
});

$(document).ready(function(){
    $("#serviceTwo").click(function(){
        //Find Width of Participants monitor
        var w = Math.max(document.documentElement.clientWidth, window.innerWidth);
        // Emulating the lower resolution and size of older monitors by setting the width of the layout to be different sizes
        // However if you use is already using a smaller screen then set the width to be 100%
        if ( w >= 1000){
            document.getElementById("b").style.width ="50%";
        }
        else{
            document.getElementById("b").style.width ="100%";
        }
        document.getElementById("b").style.zIndex ="1";
        document.getElementById("a").style.zIndex ="-99";
        document.getElementById("c").style.zIndex ="-99";
        document.getElementById("d").style.zIndex ="-99";
        document.getElementById("e").style.zIndex ="-99";
        document.getElementById("f").style.zIndex ="-99";

        document.getElementById("a").removeClass("active");
        document.getElementById("c").removeClass("active");
        document.getElementById("d").removeClass("active");
        document.getElementById("e").removeClass("active");
        document.getElementById("f").removeClass("active");

        document.getElementById("b").addClass("active");


    });
});
