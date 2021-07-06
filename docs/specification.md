<h1 class="doc-title" style="font-size: 40px">
详细说明书
</h1>

$<toc{"containerId":"header-toc"}>

# Game

```jsx
let game = new Game(<宽度>, <高度>, <放大倍数>)
```

```jsx
let game = new Game(30, 18, 1)
```

由上方代码生成的游戏界面的坐标系：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/grids.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/grids.PNG)

## 属性

**gravity**

==可以读取== ==可以修改==

设置游戏是否需要重力

```jsx
game.gravity = true // 打开重力
game.gravity = false // 关闭重力
```

**width**

==可以读取== 不可修改

游戏界面宽度

```jsx
let w = game.width
```

**height**

==可以读取== 不可修改

游戏界面高度

```jsx
let h = game.height
```

## 动作

**create.human**

创建一个可被控制的积木

```jsx
game.create.human(1, 1)
// 在位置 x = 1, y = 1 创建一个可被控制的方块
```

**create.wall**

创建一个可被碰撞的积木

```jsx
game.create.wall(1, 1)
// 在位置 x = 1, y = 1 创建一个可被碰撞的方块
```

**create.air**

创建一个不会被碰撞的积木

```jsx
game.create.air(1, 1)
// 在位置 x = 1, y = 1 创建一个不会被碰撞的方块
```

**grids.on**

打开辅助网格

```jsx
game.grids.on()
```

**grids.off**

关闭辅助网格

```jsx
game.grids.off()
```

**over.win**

将游戏结束，并宣布玩家胜利

```jsx
game.over.win()
```

**over.lose**

将游戏结束，并宣布玩家失败

```jsx
game.over.lose()
```

**iscollision**

判断某个方块是否与其它 wall 类型的方块产生碰撞

```jsx
let human = game.create.human(1, 1)
let result = game.iscollision(human)
// 判断 human 是否与其它 wall 类型的方块产生了碰撞
// result 是 true 或 false
```

# human 积木

```jsx
let human = game.create.human(<位置x>, <位置y>)
```

## 属性

**blocktype**

==可以读取== 不可修改

标识该积木的类型，在 human 积木里，它是 'human'

```jsx
let type = human.blocktype
// type == 'human'
```

**key.left**

==可以读取== ==可以修改==

设置积木向左移动的触发按键，默认为 'a'，还可以是 'left'

```jsx
human.key.left = 'left' // 箭头左按键
```

**key.right**

==可以读取== ==可以修改==

设置积木向右移动的触发按键，默认为 'd'，还可以是 'right'

```jsx
human.key.right = 'right' // 箭头右按键
```

**key.up**

==可以读取== ==可以修改==

设置积木向上移动的触发按键，默认为 'w'，还可以是 'up'

```jsx
human.key.up = 'up' // 箭头上按键
```

**key.down**

==可以读取== ==可以修改==

设置积木向下移动的触发按键，默认为 's'，还可以是 'down'

```jsx
human.key.down = 'down' // 箭头下按键
```

**strength**

==可以读取== ==可以修改==

设置该积木块的跳跃高度，范围为 1~8，默认为3

```jsx
human.strength = 4
```

**lastmove**

==可以读取== 不可修改

获得该积木块上次运动的方向，可能得到 'right' 或 'left' 或 'up' 或 'down'

```jsx
let last = human.lastmove
```

## 动作

**go.left**

使积木向左移动一格

```jsx
human.go.left()
```

**go.right**

使积木向右移动一格

```jsx
human.go.right()
```

**go.up**

如果重力打开，使积木跳跃一次；如果重力关闭，使积木向上移动一格

```jsx
human.go.up()
```

**go.down**

如果重力打开，什么都不发生；如果重力关闭，使积木向下移动一格

```jsx
human.go.down()
```

# wall 积木

```jsx
let wall = game.create.wall(<位置x>, <位置y>)
```

## 属性

**blocktype**

==可以读取== 不可修改

标识该积木的类型，在 wall 积木里，它是 'wall'

```jsx
let type = wall.blocktype
// type == 'wall'
```

# air 积木

```jsx
let air = game.create.air(<位置x>, <位置y>)
```

## 属性

**blocktype**

==可以读取== 不可修改

标识该积木的类型，在 air 积木里，它是 'air'

```jsx
let type = wall.blocktype
// type == 'air'
```

# 三种类型的积木都有的

```jsx
let block = game.create.human(1, 1)
```

## 属性

**x**

==可以读取== ==可以修改==

表示积木的位置的横坐标

```jsx
block.x = 2
```

**y**

==可以读取== ==可以修改==

表示积木的位置的纵坐标

```jsx
block.y = 2
```

**lastx**

==可以读取== 不可修改

表示积木上次停留位置的横坐标

```jsx
let lastx = block.lastx
```

**lasty**

==可以读取== 不可修改

表示积木上次停留位置的纵坐标

```jsx
let lasty = block.lasty
```

**style**

==可以读取== ==可以修改==

指定积木的样式

```jsx
block.style = pattern.human
```

**removed**

==可以读取== 不可修改

标识积木是否已被移除

```jsx
let block = game.create.air(0, 0)
block.removed // false
block.remove()
block.removed // true
```

**move.before**

==可以读取== ==可以修改==

指定积木在运动之前要执行的动作

```jsx
block.move.before = function () {
	// 要执行的代码
}
```

**move.after**

==可以读取== ==可以修改==

指定积木在运动之后要执行的动作

```jsx
block.move.after = function () {
	// 要执行的代码
}
```

## 动作

**stop**

使积木停止运动

```jsx
block.stop()
```

**remove**

在游戏界面中移除该积木

```jsx
block.remove()
```

**istouched**

判断积木是否与其他积木在前或后或左或右产生接触

```jsx
let block = game.create.human(1, 1)
let block2 = game.create.wall(2, 2)
block.istouched(block2) // false
block2.x = 1
block.istouched(block2) // true
```

**isoverlapping**

判断积木是否与其他积木产生重叠

```jsx
let block = game.create.human(1, 1)
let block2 = game.create.wall(1, 1)
block.isoverlapping(block2) // ture
block2.x = 2
block.isoverlapping(block2) // false
```

**automove.left**

使积木向左自动移动

```jsx
block.automove.left(10, 1)
// 让积木以速度1自动向左移动10个格
// 速度有4档，分别是 1，2，3，4

block.automove.left(10, 3, true)
// 让积木以速度3，先向左移动10个格，再返回，如此往复
```

**automove.right**

使积木向右自动移动

**automove.up**

使积木向上自动移动

**automove.down**

使积木向下自动移动