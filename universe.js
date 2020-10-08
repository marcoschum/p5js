function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);

  let rSlider;

  Slider = createSlider(0, 20, 0, 0.1);
  Slider.position(20, 20);
}

let angle_mercury = 0;
let angle_venus = 0;
let angle_earth = 0;
let angle_moon = 0;
let angle_mars = 0;
let angle_jupiter = 0;
let angle_saturn = 0;
let angle_uranus = 0;
let angle_neptun = 0;

let distance = 50;
let scale = 15;
let sunscale = 25;
let years = 0;

function planet(angle, factor_dis, factor_spe, color, sunrotation){
  push();
  rotate(angle);
  fill(color);
  ellipse(sunscale + distance * factor_dis, 0, scale);
  pop();
  return angle + sunrotation * factor_spe;
}

function draw() {
  let sunrotation = Slider.value(); //speed
  background(0);
  fill(255);
  textSize(30);
  text("earth years:", 100, 200);
  textSize(50);
  text(int(angle_earth/360), 100, 250);
  textSize(20);
  text("Speed:", 150, 30);
  text(Slider.value(), 250, 30);

  translate(width/2, height/2);

  //sun
  fill(color('yellow'));
  ellipse(0, 0, sunscale * 2);

  angle_mercury = planet(angle_mercury, 1, 4.1, color('grey'), sunrotation);
  angle_venus = planet(angle_venus, 2, 1.6, color('brown'), sunrotation);
  angle_earth = planet(angle_earth, 3, 1, color('blue'), sunrotation);
  angle_mars = planet(angle_mars, 4, 0.5, color('green'), sunrotation);
  angle_jupiter = planet(angle_jupiter, 5, 0.08, color('orange'), sunrotation);
  angle_saturn = planet(angle_saturn, 6, 0.03, color('brown'), sunrotation);
  angle_uranus = planet(angle_uranus, 7, 0.01, color('lightblue'), sunrotation);
  angle_neptun = planet(angle_neptun, 8, 0.006, color('blue'), sunrotation);


  // Moon
  push();
  translate(( sunscale + distance * 3 ) * cos(angle_earth), ( sunscale + distance * 3 ) * sin(angle_earth));
  rotate(angle_moon);
  fill(color('grey'));
  ellipse(15, 0, 8);
  angle_moon = angle_moon + sunrotation * 13;
  pop();

  years += 1

}
