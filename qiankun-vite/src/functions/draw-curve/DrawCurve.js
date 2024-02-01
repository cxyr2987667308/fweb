let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
// 绘制尺寸
let width = canvas.width;
let height = canvas.height;

// 两个方块的坐标、尺寸、颜色等数据
let data = [{
  x: 800,
  y: 180,
  width: 300,
  height: 300,
  color: "deepskyblue"
}, {
  x: 600,
  y: 680,
  width: 320,
  height: 100,
  color: "deeppink"
}];

// 拖拽数据存储
let store = {};

// 绘制矩形方法
const drawRect = () => {
  data.forEach((obj) => {
    context.beginPath();
    context.rect(obj.x, obj.y, obj.width, obj.height);
    context.fillStyle = obj.color;
    context.closePath();
  })
}

// 绘制连接曲线方法
const drawCurve = () => {
  // 按照坐标位置排序
  let dataSort = data.sort((objA, objB) => {
    return (onjA.y + objA.height) - (objB.y + objB.height);
  });
  // 知道上下数据
  let form = dataSort[0];
  let to = dataSort[1];

  // 曲线的起点终点
  
}