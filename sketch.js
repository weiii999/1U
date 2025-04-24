let rectSize = 200;
let ellipseSize = 200;
let spacing = 250; // 圖形之間的間距

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(222, 226, 230);
}

function draw() {
  background(222, 226, 230);

  // 繪製多排圖形
  for (let x = spacing / 2; x < windowWidth; x += spacing) {
    for (let y = spacing / 2; y < windowHeight; y += spacing) {
      //================================畫方框=========================================
      //設定方框的中心點為滑鼠的位置
      rectMode(CENTER);
      //在滑鼠位置畫一個方框，以方框中心點為基準，寬高為rectSize
      //方框的顏色為ff6f61()
      fill(255, 111, 97);
      rect(x, y, rectSize, rectSize);

      //================================畫圓=========================================
      //在滑鼠位置畫一個圓，圓的寬高為ellipseSize
      // 圓的色為6b5b95()
      fill(107, 91, 149);
      ellipse(x, y, ellipseSize, ellipseSize);
    }
  }

  //框線粗細改為5
  strokeWeight(5);
  //框線顏色改為0d1b2a()
  stroke(13, 27, 42);
}

function mouseWheel(event) {
  // 使用滑鼠滾輪來改變圖形大小
  rectSize += event.delta;
  ellipseSize += event.delta;

  // 限制最小大小
  rectSize = max(20, rectSize);
  ellipseSize = max(20, ellipseSize);
}




