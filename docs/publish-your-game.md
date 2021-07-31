<h1 class="doc-title" style="font-size: 40px">
发布你的游戏
</h1>

假如你想通过一个网址同他人分享你的大作，可以参照这个解决方案。

点击进入[这个网页](http://fp.mengru.space/src/show.html)，将你的代码粘贴进第一个文本框中，在选取粘贴时注意，**只能复制粘贴允许你编辑的区域中的代码**，比如这是贪吃蛇的全部代码：

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>贪吃蛇</title>
</head>
<body>
    <canvas id="app"></canvas>
    <script src="./index.js"></script>
    <script src="./pattern.js"></script>
    <script>
        let width = 20
        let height = 30
        let game = new Game(width, height, 2)

        // 贪吃蛇游戏不需要重力，所以把重力关掉
        game.gravity = false

        // 生成背景
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                game.create.air(i, j)
            }
        }

        // 生成墙
        for (let i = 0; i < width; i++) {
            game.create.wall(i, 0)
            game.create.wall(i, height - 1)
        }
        for (let i = 0; i < height; i++) {
            game.create.wall(0, i)
            game.create.wall(width - 1, i)
        }

        // 随机函数，可以得到 [2, n - 3] 之间的随机数
        function rand (n) {
            return Math.ceil(Math.random() * (n - 4)) + 1
        }

        // 在随机位置创建一个蛇头
        let head = game.create.human(rand(width), rand(height))
        head.style = pattern.teal

        // 在随机位置创建一个苹果
        let apple = game.create.air(rand(width), rand(height))
        apple.style = pattern.apple

        // 创建一个数组，将用它来储存蛇的身体
        let body = []

        // 当蛇头移动时，判断蛇头是否吃到了苹果
        // 如果吃到了苹果，那么创建一节蛇的身体，并重置苹果的位置
        // 如果蛇有身体，那么将蛇身体中最远离蛇头的那一节的位置改变为蛇头上次所在的位置
        head.move.after = function () {
            if (head.x == apple.x && head.y == apple.y) {
                let newBody = game.create.air(head.x, head.y)
                newBody.style = pattern.teal
                body.push(newBody)
                apple.x = rand(width)
                apple.y = rand(height)
            }
            if (body.length != 0) {
                let tail = body.shift()
                body.push(tail)
                tail.x = head.lastx
                tail.y = head.lasty
            }
        }

        // 每隔 500 毫秒（0.5秒）将蛇头向它前进的方向自动移动 1 个单位
        // 如果蛇头碰到墙，游戏结束
        let run = setInterval(function () {
            head.go[head.lastmove || 'right']()
            if (game.iscollision(head)) {
                game.over.lose()
                clearInterval(run)
            }
        }, 500)
    </script>
</body>
</html>
```

你需要复制粘贴的部分是：

```
        let width = 20
        let height = 30
        let game = new Game(width, height, 2)

        // 贪吃蛇游戏不需要重力，所以把重力关掉
        game.gravity = false

        // 生成背景
        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                game.create.air(i, j)
            }
        }

        // 生成墙
        for (let i = 0; i < width; i++) {
            game.create.wall(i, 0)
            game.create.wall(i, height - 1)
        }
        for (let i = 0; i < height; i++) {
            game.create.wall(0, i)
            game.create.wall(width - 1, i)
        }

        // 随机函数，可以得到 [2, n - 3] 之间的随机数
        function rand (n) {
            return Math.ceil(Math.random() * (n - 4)) + 1
        }

        // 在随机位置创建一个蛇头
        let head = game.create.human(rand(width), rand(height))
        head.style = pattern.teal

        // 在随机位置创建一个苹果
        let apple = game.create.air(rand(width), rand(height))
        apple.style = pattern.apple

        // 创建一个数组，将用它来储存蛇的身体
        let body = []

        // 当蛇头移动时，判断蛇头是否吃到了苹果
        // 如果吃到了苹果，那么创建一节蛇的身体，并重置苹果的位置
        // 如果蛇有身体，那么将蛇身体中最远离蛇头的那一节的位置改变为蛇头上次所在的位置
        head.move.after = function () {
            if (head.x == apple.x && head.y == apple.y) {
                let newBody = game.create.air(head.x, head.y)
                newBody.style = pattern.teal
                body.push(newBody)
                apple.x = rand(width)
                apple.y = rand(height)
            }
            if (body.length != 0) {
                let tail = body.shift()
                body.push(tail)
                tail.x = head.lastx
                tail.y = head.lasty
            }
        }

        // 每隔 500 毫秒（0.5秒）将蛇头向它前进的方向自动移动 1 个单位
        // 如果蛇头碰到墙，游戏结束
        let run = setInterval(function () {
            head.go[head.lastmove || 'right']()
            if (game.iscollision(head)) {
                game.over.lose()
                clearInterval(run)
            }
        }, 500)
```

粘贴进文本框中，**将代码中所有的中文注释删除**：

```
        let width = 20
        let height = 30
        let game = new Game(width, height, 2)

        game.gravity = false

        for (let i = 0; i < width; i++) {
            for (let j = 0; j < height; j++) {
                game.create.air(i, j)
            }
        }

        for (let i = 0; i < width; i++) {
            game.create.wall(i, 0)
            game.create.wall(i, height - 1)
        }
        for (let i = 0; i < height; i++) {
            game.create.wall(0, i)
            game.create.wall(width - 1, i)
        }

        function rand (n) {
            return Math.ceil(Math.random() * (n - 4)) + 1
        }

        let head = game.create.human(rand(width), rand(height))
        head.style = pattern.teal

        let apple = game.create.air(rand(width), rand(height))
        apple.style = pattern.apple

        let body = []

        head.move.after = function () {
            if (head.x == apple.x && head.y == apple.y) {
                let newBody = game.create.air(head.x, head.y)
                newBody.style = pattern.teal
                body.push(newBody)
                apple.x = rand(width)
                apple.y = rand(height)
            }
            if (body.length != 0) {
                let tail = body.shift()
                body.push(tail)
                tail.x = head.lastx
                tail.y = head.lasty
            }
        }

        let run = setInterval(function () {
            head.go[head.lastmove || 'right']()
            if (game.iscollision(head)) {
                game.over.lose()
                clearInterval(run)
            }
        }, 500)
```

最后点击预览按钮。如果代码没有问题，则下方会出现游戏正常运行时的画面。同时，你的剪贴板中自动复制了这个小游戏的访问网址，可以将它粘贴进地址栏中访问试试！

但还有一个问题，这个地址太太太长了！大概有这么长：

```
http://fp.mengru.space/src/show.html?pattern:&
code:ICAgICAgICBsZXQgd2lkdGggPSAyMAogICAgICAgIGxldCBoZWlnaHQgPSAzMAogICAgICAgIGxldCBnYW1lID0gb
mV3IEdhbWUod2lkdGgsIGhlaWdodCwgMikKCiAgICAgICAgZ2FtZS5ncmF2aXR5ID0gZmFsc2UKCiAgICAgICAgZm9yICh
sZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKSB7CiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqK
yspIHsKICAgICAgICAgICAgICAgIGdhbWUuY3JlYXRlLmFpcihpLCBqKQogICAgICAgICAgICB9CiAgICAgICAgfQoKICA
gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspIHsKICAgICAgICAgICAgZ2FtZS5jcmVhdGUud2FsbChpL
CAwKQogICAgICAgICAgICBnYW1lLmNyZWF0ZS53YWxsKGksIGhlaWdodCAtIDEpCiAgICAgICAgfQogICAgICAgIGZvciA
obGV0IGkgPSAwOyBpIDwgaGVpZ2h0OyBpKyspIHsKICAgICAgICAgICAgZ2FtZS5jcmVhdGUud2FsbCgwLCBpKQogICAgI
CAgICAgICBnYW1lLmNyZWF0ZS53YWxsKHdpZHRoIC0gMSwgaSkKICAgICAgICB9CgogICAgICAgIGZ1bmN0aW9uIHJhbmQ
gKG4pIHsKICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbChNYXRoLnJhbmRvbSgpICogKG4gLSA0KSkgKyAxCiAgICAgI
CAgfQoKICAgICAgICBsZXQgaGVhZCA9IGdhbWUuY3JlYXRlLmh1bWFuKHJhbmQod2lkdGgpLCByYW5kKGhlaWdodCkpCiA
gICAgICAgaGVhZC5zdHlsZSA9IHBhdHRlcm4udGVhbAoKICAgICAgICBsZXQgYXBwbGUgPSBnYW1lLmNyZWF0ZS5haXIoc
mFuZCh3aWR0aCksIHJhbmQoaGVpZ2h0KSkKICAgICAgICBhcHBsZS5zdHlsZSA9IHBhdHRlcm4uYXBwbGUKCiAgICAgICA
gbGV0IGJvZHkgPSBbXQoKICAgICAgICBoZWFkLm1vdmUuYWZ0ZXIgPSBmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIGlmI
ChoZWFkLnggPT0gYXBwbGUueCAmJiBoZWFkLnkgPT0gYXBwbGUueSkgewogICAgICAgICAgICAgICAgbGV0IG5ld0JvZHk
gPSBnYW1lLmNyZWF0ZS5haXIoaGVhZC54LCBoZWFkLnkpCiAgICAgICAgICAgICAgICBuZXdCb2R5LnN0eWxlID0gcGF0d
GVybi50ZWFsCiAgICAgICAgICAgICAgICBib2R5LnB1c2gobmV3Qm9keSkKICAgICAgICAgICAgICAgIGFwcGxlLnggPSB
yYW5kKHdpZHRoKQogICAgICAgICAgICAgICAgYXBwbGUueSA9IHJhbmQoaGVpZ2h0KQogICAgICAgICAgICB9CiAgICAgI
CAgICAgIGlmIChib2R5Lmxlbmd0aCAhPSAwKSB7CiAgICAgICAgICAgICAgICBsZXQgdGFpbCA9IGJvZHkuc2hpZnQoKQo
gICAgICAgICAgICAgICAgYm9keS5wdXNoKHRhaWwpCiAgICAgICAgICAgICAgICB0YWlsLnggPSBoZWFkLmxhc3R4CiAgI
CAgICAgICAgICAgICB0YWlsLnkgPSBoZWFkLmxhc3R5CiAgICAgICAgICAgIH0KICAgICAgICB9CgogICAgICAgIGxldCB
ydW4gPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7CiAgICAgICAgICAgIGhlYWQuZ29baGVhZC5sYXN0bW92ZSB8fCAnc
mlnaHQnXSgpCiAgICAgICAgICAgIGlmIChnYW1lLmlzY29sbGlzaW9uKGhlYWQpKSB7CiAgICAgICAgICAgICAgICBnYW1
lLm92ZXIubG9zZSgpCiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHJ1bikKICAgICAgICAgICAgfQogICAgICAgI
H0sIDUwMCk=
```

这不易于向他人传播。你可以使用[https://ddl.ink/](https://ddl.ink/)将这个网址进行缩短。缩短后只有这么长：

```
https://ddl.ink/yvt
```

向他人发送缩短后的网址，就可以顺利展示你的大作啦！

如果你在代码中使用了[自己创建的图案](/?page=draw-pattern-yourself)，则需要依照网页中的提示将 ==pattern.js== 中的部分代码粘贴进去，再点击预览按钮。