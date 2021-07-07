<h1 class="doc-title" style="font-size: 40px">
自己制作图案
</h1>

如果你不喜欢现在已有的图案，可以在[这个页面](https://fp.mengru.space/src/drawing-board.html)自己制作喜欢的图案。

打开[这个页面](https://fp.mengru.space/src/drawing-board.html)，你会看到这样的界面：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/board1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/board1.PNG)

点击画布上的浅灰色格子画下颜色，再点一下可以擦掉。当你作画完毕后，点击按钮【生成图案代码】，会看到如下显示，此时图案代码已自动复制到你的剪贴板：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/board2.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/board2.PNG)

然后用记事本打开文件 pattern.js ，你会看到：

```jsx
const pattern = {
    black: '#000',
    aaa: '#aaa',
    eee: '#eee',
    green: 'green',
    tomato: 'tomato',
    white: '#fff',
    teal: 'teal',

    human: ["","","","olive","olive","olive","","","","","","","","olive","olive","olive","","","","","","","","olive","olive","olive","","","olive","","","","","","olive","","","","olive","","olive","olive","olive","olive","olive","olive","olive","olive","olive","","olive","","olive","olive","olive","olive","olive","","","","olive","","olive","olive","olive","olive","olive","","","","","","","olive","","olive","","","","","","","","olive","","olive","","olive","","","","","olive","olive","","olive","olive","olive","",""],
    bullet: ["","","","","","","","","","","","","","","","","","","","","","","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","","maroon","gray","gray","gray","black","black","black","black","maroon","maroon","gray","gray","gray","gray","black","black","black","black","maroon","maroon","gray","gray","gray","gray","black","black","black","black","maroon","","maroon","gray","gray","gray","black","black","black","black","maroon","","","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","","","","","","","","","","","","","","","","","","","",""],
    gun: ["","","","","","","","","","","","tomato","tomato","maroon","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","tomato","tomato","tomato","maroon","maroon","maroon","maroon","maroon","maroon","","tomato","tomato","maroon","maroon","maroon","maroon","maroon","maroon","maroon","","","","","","","","","",""],
    fire: ["","","","tomato","","","","","tomato","","","","","tomato","","","","tomato","tomato","","","","tomato","tomato","tomato","","","tomato","tomato","","","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","","","tomato","tomato","tomato","","tomato","tomato","",""],
    turtle: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","green","green","green","green","green","green","","","","green","green","gray","gray","green","green","gray","green","","green","gray","gray","green","green","gray","gray","green","green","green","green","gray","gray","green","green","gray","gray","green","green","green","","green","green","gray","gray","green","green","gray","green","","","","green","green","green","green","green","green","","","","","","","","","","","",""],
    star: ["","","","","gold","gold","","","","","","","","gold","gold","gold","gold","","","","","","","gold","gold","gold","gold","","","","","","gold","gold","gold","gold","gold","gold","","","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","","","gold","gold","gold","gold","gold","gold","","","","","","gold","gold","gold","gold","","","","","","","gold","gold","gold","gold","","","","","","","","gold","gold","","","",""],
    apple: ["","","","","black","black","","green","green","green","","","","","black","black","green","green","green","green","","tomato","tomato","tomato","black","black","tomato","green","green","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","","","","tomato","tomato","tomato","tomato","","",""],
    // 在这里添加你自己的图案

}
```

在 //在这里添加你自己的图案 下面一行，为你的图案取一个名字，在名字后面加上一个 英文冒号 ，然后在冒号后面粘贴剪贴板上的内容，比如：

```jsx
const pattern = {
    black: '#000',
    aaa: '#aaa',
    eee: '#eee',
    green: 'green',
    tomato: 'tomato',
    white: '#fff',
    teal: 'teal',

    human: ["","","","olive","olive","olive","","","","","","","","olive","olive","olive","","","","","","","","olive","olive","olive","","","olive","","","","","","olive","","","","olive","","olive","olive","olive","olive","olive","olive","olive","olive","olive","","olive","","olive","olive","olive","olive","olive","","","","olive","","olive","olive","olive","olive","olive","","","","","","","olive","","olive","","","","","","","","olive","","olive","","olive","","","","","olive","olive","","olive","olive","olive","",""],
    bullet: ["","","","","","","","","","","","","","","","","","","","","","","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","","maroon","gray","gray","gray","black","black","black","black","maroon","maroon","gray","gray","gray","gray","black","black","black","black","maroon","maroon","gray","gray","gray","gray","black","black","black","black","maroon","","maroon","gray","gray","gray","black","black","black","black","maroon","","","maroon","maroon","maroon","maroon","maroon","maroon","maroon","maroon","","","","","","","","","","","","","","","","","","","",""],
    gun: ["","","","","","","","","","","","tomato","tomato","maroon","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","black","black","tomato","maroon","maroon","maroon","maroon","maroon","maroon","tomato","tomato","tomato","tomato","maroon","maroon","maroon","maroon","maroon","maroon","","tomato","tomato","maroon","maroon","maroon","maroon","maroon","maroon","maroon","","","","","","","","","",""],
    fire: ["","","","tomato","","","","","tomato","","","","","tomato","","","","tomato","tomato","","","","tomato","tomato","tomato","","","tomato","tomato","","","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","","","tomato","tomato","tomato","","tomato","tomato","",""],
    turtle: ["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","green","green","green","green","green","green","","","","green","green","gray","gray","green","green","gray","green","","green","gray","gray","green","green","gray","gray","green","green","green","green","gray","gray","green","green","gray","gray","green","green","green","","green","green","gray","gray","green","green","gray","green","","","","green","green","green","green","green","green","","","","","","","","","","","",""],
    star: ["","","","","gold","gold","","","","","","","","gold","gold","gold","gold","","","","","","","gold","gold","gold","gold","","","","","","gold","gold","gold","gold","gold","gold","","","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","gold","","","gold","gold","gold","gold","gold","gold","","","","","","gold","gold","gold","gold","","","","","","","gold","gold","gold","gold","","","","","","","","gold","gold","","","",""],
    apple: ["","","","","black","black","","green","green","green","","","","","black","black","green","green","green","green","","tomato","tomato","tomato","black","black","tomato","green","green","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","","","","tomato","tomato","tomato","tomato","","",""],
    // 在这里添加你自己的图案
    fruit: ["","","","","black","black","green","green","green","green","","","","","black","black","green","green","green","green","","tomato","tomato","tomato","black","black","tomato","green","green","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","","","","tomato","tomato","tomato","tomato","","",""],
}
```

保存后，你就可以使用自己添加的图案了：

```jsx
let game = new Game(30, 30, 2)
let wall = game.create.wall(1, 1)
wall.style = pattern.fruit
```