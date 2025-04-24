let circleColor;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255); // 設定背景為白色
  colorMode(HSB, 360, 100, 100); // 設定顏色模式為 HSB
}

function draw() {
  // 不清除背景，保留滑鼠移動的軌跡

  // 計算色相和亮度
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定圓形顏色
  fill(hue, 100, brightness);
  noStroke();

  // 畫圓形，位置隨滑鼠移動，寬高為 200px
  ellipse(mouseX, mouseY, 200, 200);
}

function mouseMoved() {
  // 當滑鼠移動時，隨機改變圓形顏色
  circleColor = color(random(255), random(255), random(255));
}