

// Remove placeholder image when click on input
document.getElementById('data_input').onclick= function() {
  document.getElementById('data_input').style.backgroundImage = 'none';
  document.getElementById('data_input').placeholder = "Дата";
  document.getElementById('data_input').style.textIndent = '9%';
}

document.getElementById('city_input').onclick= function() {
  document.getElementById('city_input').style.backgroundImage = 'none';
  document.getElementById('city_input').placeholder = "Ивано-Франковск";
  document.getElementById('city_input').style.textIndent = '9%';
}


// Сreate events
let arr_m =["янв", "фев", "март", "апр", "май", "июнь"];
let out ="";
let out2 ="";

for (var i = 0; i < 6; i++) {
  out+="<div class=\"box_events\">";
  out+="<div class=\"small_circle circle_date circle1\">";
  out+="<h3>15</h3>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"small_circle_event circle_event circle2\" ondblclick=\"big_img1 ()\">";
  out+="<div class=\"kind_event\">";
  out+="<p>Опера</p>";
  out+="</div>";
  out+="</div>";
  out+="<div class=\"big_circle circle_date circle3\">";
  out+="<h1>25</h1>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"small_circle circle_date circle4\">";
  out+="<h3>12</h3>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"middle_circle_event circle_event circle5\" ondblclick=\"big_img2 ()\">";
  out+="<div class=\"kind_event\">";
  out+="<p>Концерт</p>";
  out+="</div>";
  out+="<img src=\"img/depeche-mode.png\" alt=\"depeche-mode\">";
  out+="</div>";
  out+="<div class=\"big_circle circle_date circle6\">";
  out+="<h1>9-13</h1>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"big_circle_event circle_event\" ondblclick=\"big_img3 ()\">";
  out+="<div class=\"kind_event\">";
  out+="<p>Конкурс</p>";
  out+="</div>";
  out+="<img src=\"img/evro2017.png\" alt=\"Evro2017\">";
  out+="</div>";
  out+="<div class=\"big_circle circle_date circle7\">";
  out+="<h1>8</h1>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"small_circle circle_date circle8\">";
  out+="<h3>27</h3>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"small_circle_event circle_event circle9\" ondblclick=\"big_img4 ()\">";
  out+="<div class=\"kind_event\">";
  out+="<p>Концерт</p>";
  out+="</div>";
  out+="</div>";
  out+="<div class=\"small_circle circle_date circle10\">";
  out+="<h3>25</h3>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="<div class=\"middle_circle_event circle_event circle11\" ondblclick=\"big_img5 ()\">";
  out+="<div class=\"kind_event\">";
  out+="<p>Театр</p>";
  out+="</div>";
  out+="<img src=\"img/black.png\" alt=\"black\">";
  out+="</div>";
  out+="<div class=\"big_circle circle_date circle12\">";
  out+="<h1>19</h1>";
  out+="<p>"+arr_m[i]+"</p>";
  out+="</div>";
  out+="</div>";
}
document.getElementById('top_events').innerHTML = out;

for (var i = 0; i < 6; i++) {
out2+="<div class=\"box_events box_events_botton\">";
out2+="<div class=\"big_circle circle_date circle13\">";
out2+="<h1>5</h1>";
out2+="<p>"+arr_m[i]+"</p>";
out2+="</div>";
out2+="<div class=\"small_circle circle_date circle14\">";
out2+="<h3>22</h3>";
out2+="<p>"+arr_m[i]+"</p>";
out2+="</div>";
out2+="<div class=\"middle_circle_event circle_event circle15\" ondblclick=\"big_img6 ()\">";
out2+="<div class=\"kind_event\">";
out2+="<p>Концерт</p>";
out2+="</div>";
out2+="<img src=\"img/maria.png\" alt=\"maria\">";
out2+="</div>";
out2+="<div class=\"big_circle circle_date circle16\">";
out2+="<h1>11</h1>";
out2+="<p>"+arr_m[i]+"</p>";
out2+="</div>";
out2+="<div class=\"small_circle circle_date circle17\">";
out2+="<h3>21</h3>";
out2+="<p>"+arr_m[i]+"</p>";
out2+="</div>";
out2+="<div class=\"small_circle_event circle_event circle18\" ondblclick=\"big_img7 ()\">";
out2+="<div class=\"kind_event\">";
out2+="<p>Опера</p>";
out2+="</div>";
out2+="</div>";
out2+="<div class=\"small_circle circle_date circle19\">";
out2+="<h3>23</h3>";
out2+="<p>"+arr_m[i]+"</p>";
out2+="</div>";
out2+="<div class=\"middle_circle_event circle_event circle20\" ondblclick=\"big_img8 ()\">";
out2+="<div class=\"kind_event\">";
out2+="<p>Театр</p>";
out2+="</div>";
out2+="<img src=\"img/pani.png\" alt=\"pani\">";
out2+="</div>";
out2+="<div class=\"big_circle circle_date circle21\">";
out2+="<img src=\"img/big_pointer.png\" alt=\"big_pointer\">";
out2+="<p class=\"new_event\">Добавить</p>";
out2+="</div>";
out2+="<div class=\"small_circle circle_date circle22\">";
out2+="<h3>5</h3>";
out2+="<p>"+arr_m[i]+"</p>";
out2+="</div>";
out2+="<div class=\"small_circle_event circle_event circle23\" ondblclick=\"big_img9 ()\">";
out2+="<div class=\"kind_event\">";
out2+="<p>Спорт</p>";
out2+="</div>";
out2+="</div>";
out2+="</div>";
}
document.getElementById('botton_events').innerHTML = out2;

// Slider controls
var long_box = document.getElementById('long_box');
var month = document.querySelectorAll('.month');
let count = 0;
let data ="";

// Arrows control
document.getElementById('right').onclick = function() {
  if (count<=5){
    count=count+1;
    ChangeSlider(count);
  }
}

document.getElementById('left').onclick = function() {
  if (count>=1){
    count=count-1;
    ChangeSlider(count);
  }
}

// Months control
document.getElementById('m1').onclick = function() {
  count=0;
  ChangeSlider(count);
};

document.getElementById('m2').onclick = function() {
  count=1;
  ChangeSlider(count);
};

document.getElementById('m3').onclick = function() {
  count=2;
  ChangeSlider(count);
};

document.getElementById('m4').onclick = function() {
  count=3;
  ChangeSlider(count);
};

document.getElementById('m5').onclick = function() {
  count=4;
  ChangeSlider(count);
};

document.getElementById('m6').onclick = function() {
  count=5;
  ChangeSlider(count);
};

// Date control
document.getElementById('search').onclick = function() {
count = (document.getElementById('data_input').value.substr(4, 1))-1;
ChangeSlider(count);
console.log(count);
}

// Slider
function ChangeSlider(count) {
  // Clear active month
  for (var i = 0; i < month.length; i++) {
    month[i].className = 'month';
  // Clear big_img (one event)
  big_img_clear()
  }
  switch (count) {
    // Change slider and active month
    case 0: long_box.style.right="0px";  document.getElementById('m1').className = 'month month_active';
      break;
    case 1: long_box.style.right="1920px"; document.getElementById('m2').className = 'month month_active';
      break;
    case 2: long_box.style.right="3840px"; document.getElementById('m3').className = 'month month_active';
      break;
    case 3: long_box.style.right="5760px"; document.getElementById('m4').className = 'month month_active';
      break;
    case 4: long_box.style.right="7680px"; document.getElementById('m5').className = 'month month_active';
      break;
    case 5:  long_box.style.right="9600px"; document.getElementById('m6').className = 'month month_active';
      break;
    }
  }

// Start
ChangeSlider(count);


// Open big_img (one event)
function big_img1(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/111.png)";
}

function big_img2(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/222.png)";
}

function big_img3(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/333.png)";
}

function big_img4(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/444.png)";
}

function big_img5(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/555.png)";
}

function big_img6(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/666.png)";
}

function big_img7(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/777.png)";
}

function big_img8(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/888.png)";
}

function big_img9(){
  document.getElementById('big_img').classList.add("big_img_open");
  document.getElementById('big_img').style.backgroundImage="url(img/999.png)";
}

// Close big_img (one event)
function big_img_clear(){
  document.getElementById('big_img').classList.remove("big_img_open");
}
