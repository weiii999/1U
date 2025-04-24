function setup() { // 設定函數，設定初始值的地方
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight); // 建立畫布
  //createCanvas(400, 400); // 建立畫布
  //畫布的背景顏色為778da9
  background(119, 141, 169);
}

function draw() { // 畫圖函數，畫圖的地方
  //background(220);
  //畫布的背景顏色為778da9
  background(119, 141, 169);
  //畫圓的顏色為#fdf0d5
  fill(253, 240, 213);
  //畫圓的邊框顏色為#ffc8dd
  stroke(255, 200, 221);
  //畫圓的邊框寬度為10
  strokeWeight(10);
  //在視窗中間畫一個圓，圓的寬高為200
  //ellipse(windowWidth/2, windowHeight/2, 200, 200);
  //依照上面的圓顏色與框線顏色，從視窗的最左邊，產生連續的圓，到視窗的最右邊
  for (let i = 0; i < windowWidth+200; i+=200) {
    ellipse(i, windowHeight/2, 200, 200);
  }
}

//當視窗的寬高改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  




}
