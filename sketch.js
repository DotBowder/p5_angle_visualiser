var angle;
var radius;
var slider_1;
var slider_2;
var slider_3;
var winX;
var winY;

function setup() {
  // If I use windowWidth and windowHeight directly, I end up with scroll bars and hate that.
  // Here, I've used a window size of 100 pixels less than the windowWidth and Height
  WinX = windowWidth - 100;
  winY = windowHeight - 100;

  // Setup Canvas and use Degrees for sin/cos
  createCanvas(WinX, winY);
  angleMode(DEGREES);

  // Starter angle and radius values
  angle = 0;
  radius = 300;

  // Define paramaters for sliders in GUI
  slider_1 = createSlider(2, radius-1, radius - 1);
  slider_2 = createSlider(1, 90, 90);
  slider_3 = createSlider(20, 2*radius, radius);

}

function draw() {
  // Imediately translate the window so that (x:0, y:0) is in the center of our screen. x+ and y+ points to the lower right.
  translate(WinX / 2, winY / 2);

  background(0);

  // Increment the angle by 1 each run
  angle += 1;


  // draw blue graph lines
  strokeWeight(2)
  stroke(0, 191, 255);
  line(0 - radius, 0, radius, 0)
  line(0, 0 - radius, 0, radius)

  // draw blue graph dots
  strokeWeight(4)
  for (c = 0; c < 360; c += 1)
    point(radius * sin(angle + c), radius * cos(angle + c))

  // Inject GUI sliders into code.
  let s1 = slider_1.value()
  let s2 = slider_2.value()
  let s3 = slider_3.value()

  radius = s3;

  // draw "spider web" like mesh of lines pointing to where the angle meets the circle edge.
  stroke(255)
  strokeWeight(0.5)
  let a = 0
  for (a = 0; a < 360; a += s2) {
    let c = 0;
    for (r = 0; r < radius; r += s1) {
      line(r * sin(a), r * cos(a), radius * sin(angle), 0 - radius * (cos(angle)))

    }
  }


  // Draw lines representing sin and cos values.
  strokeWeight(1)
  stroke(255, 0, 0)
  line(radius * sin(angle), 0 - radius * (cos(angle)), 0, 0 - radius * (cos(angle)))
  stroke(0, 255, 0)
  line(radius * sin(angle), 0 - radius * (cos(angle)), radius * sin(angle), 0)

  // Draw the point where the angle meets the circle edge
  strokeWeight(20)
  stroke(0, 191, 255)
  point(radius * sin(angle), 0 - radius * (cos(angle)))

}
