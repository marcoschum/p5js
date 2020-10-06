function setup() {
  createCanvas(1000, 1000);
  angleMode(DEGREES);

  let rSlider;

  Slider = createSlider(0, 10, 0, 0.1);
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

let earth_x = 0;
let earth_y = 0;
let distance = 50;
let scale = 15;
let sunscale = 25;
let years = 0;


function draw() {
  let sunrotation = Slider.value(); //speed
  background(0);
  fill(255);
  textSize(50);
  text("earth years:", 100, 200);
  text(int(angle_earth/360), 100, 250);
  textSize(20);
  text("Speed:", 150, 30);
  text(Slider.value(), 250, 30);

  translate(width/2, height/2);

  //sun
  fill(color('yellow'));
  ellipse(0, 0, sunscale * 2);

  // Mercury
  push();
    rotate(angle_mercury);
    fill(color('grey'));
    ellipse(sunscale + distance, 0, scale);
    angle_mercury = angle_mercury + sunrotation * 4.1;
  pop();

  // Venus
  push();
    rotate(angle_venus);
    fill(color('brown'));
    ellipse(sunscale + distance * 2, 0, scale);
    angle_venus = angle_venus + sunrotation * 1.6;
  pop();

  // Earth
  push();
    rotate(angle_earth);
    fill(color('blue'));
    ellipse(sunscale + distance * 3, 0, scale);
    angle_earth = angle_earth + sunrotation;
    earth_x = ( sunscale + distance * 3 ) * cos(angle_earth);
    earth_y = ( sunscale + distance * 3 ) * sin(angle_earth);
  pop();

  // Moon
  push();
    translate(earth_x, earth_y);
    rotate(angle_moon);
    fill(color('grey'));
    ellipse(15, 0, 8);
    angle_moon = angle_moon + sunrotation * 13;
  pop();

  // Mars
  push();
    rotate(angle_mars);
    ellipse(sunscale + distance * 4, 0, scale);
    angle_mars = angle_mars + sunrotation * 0.5;
  pop();

  // Jupiter
  push();
    rotate(angle_jupiter);
    fill(color('orange'));
    ellipse(sunscale + distance * 5, 0, scale);
    angle_jupiter = angle_jupiter + sunrotation * 0.08;
  pop();


  // Saturn
  push();
    rotate(angle_saturn);
    fill(color('brown'));
    ellipse(sunscale + distance * 6, 0, scale);
    angle_saturn = angle_saturn + sunrotation * 0.03;
  pop();

  // Uranus
  push();
    rotate(angle_uranus);
    fill(color('lightblue'));
    ellipse(sunscale + distance * 7, 0, scale);
    angle_uranus = angle_uranus + sunrotation * 0.01;
  pop();

  // Neptun
  push();
    rotate(angle_neptun);
    fill(color('blue'));
    ellipse(sunscale + distance * 8, 0, scale);
    angle_neptun = angle_neptun + sunrotation * 0.006;
  pop();

  years = years + 1

}
