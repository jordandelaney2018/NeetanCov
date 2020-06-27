

// Hide and Show info Function
document.getElementById("aboutUsButton").onclick = function() {
    divTest = document.getElementById("about-extra");
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
}

document.getElementById("pricesButton").onclick = function() {
    divTest = document.getElementById("drop-extra");
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
}

document.getElementById("travelButton").onclick = function() {
    divTest = document.getElementById("drop-extra");
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
}

document.getElementById("buinssnessButton").onclick = function() {
    divTest = document.getElementById("drop-extra");
    if (divTest.style.display === "none") {
        divTest.style.display = 'block';
    }
    else {
        divTest.style.display = "none";
    }
}

// Change on scroll Function
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("Nav").style.backgroundColor = "white";
  } else {
    document.getElementById("Nav").style.backgroundColor = "";
  }
}

// Services Section
$('#services-list li').click(function(e) {
  e.preventDefault();
  var divID = $(this).data('id');
  console.log(divID);

  $(this).attr('style', 'color: #72ad33 !important');
  $(this).siblings().attr( 'style', 'color: black !important');

  $('#' + divID).attr('style', 'z-index: 99 !important');
  $('#' + divID).siblings().attr('style', 'z-index: -1 !important');


});
