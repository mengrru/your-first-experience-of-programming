<h1 style="font-size: 40px">
    <p class="doc-title" style="display: inline-block; margin: 0">
    给零基础同学的编程初体验课
    </p>
    <a class="github-button" style="font-size: 14px;" href="https://github.com/mengrru/your-first-experience-of-programming">Star on Github</a>
</h1>

最近更新：
- [发布你的游戏](/?page=publish-your-game) \(2021.7.31\)

---

$<toc{"containerId":"header-toc"}>

# 欢迎！

本项目旨在为从未接触过编程且对编程感兴趣的同学提供零门槛的编程初体验，通过对本项目的学习，最终你可以用自己的双手编写一个[这样的小游戏](http://fp.mengru.space/src/example.html)：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/example-game.gif](https://rru.oss-cn-beijing.aliyuncs.com/fp/example-game.gif)

不论你是小学生、中学生、大学生还是社畜或是已经退休，你不需要具备任何相关的基础知识，只要你有一台电脑，电脑里有一个可以浏览网页的浏览器，就可以开始学习。

整个学习时长在五小时以内。下面我们开始吧！

# 准备工作

首先，确保你有一台电脑。电脑的操作系统可以是 Windows 、MacOS 或 Linux，总之，只要里面有浏览器和记事本（文本编辑器）就可以。

## 1. 下载压缩文件并解压

[点击这里](https://rru.oss-cn-beijing.aliyuncs.com/fp/your-first-experience-of-programming-main.zip)下载压缩文件 ==your-first-experience-of-programming-main.zip== 到桌面，然后右键点击该压缩文件，选择 解压到当前文件夹。（如果你使用的是苹果电脑，假如在解压时遇到了问题，可以[点这里](/?page=q-and-a#q%3A-%E6%88%91%E6%98%AF%E8%8B%B9%E6%9E%9C%E7%94%B5%E8%84%91%EF%BC%8C%E8%AF%A5%E6%80%8E%E4%B9%88%E8%A7%A3%E5%8E%8B%E5%8E%8B%E7%BC%A9%E6%96%87%E4%BB%B6%E5%91%A2%EF%BC%9F)寻找解决方法）

此时桌面上会出现一个名为 ==your-first-experience-of-programming-main== 的文件夹，双击打开这个文件夹，你会看到里面大概长这样：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/0.1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/0.1.PNG)

::: warning
**注意！**
请务必确保你已经解压完毕，再进行接下来的步骤。如果直接在压缩文件中进行接下来的步骤会导致不正常的显示。
:::

## 2. 同时用浏览器和记事本打开文件 my-game.html

双击 ==my-game.html== ，此时应该会默认由浏览器打开。如果没有，请右键单击它，然后在菜单中选择 打开方式 ，然后选择你使用的浏览器。

::: warning
**注意！**
如果你是 Windows 系统，请**不要**使用 IE 浏览器和 Opera Mini 浏览器。你可以选择使用 win10 自带的 Edge 浏览器，或自己下载的 Chrome 浏览器、百度浏览器、QQ 浏览器、Firefox 浏览器、搜狗高速浏览器等等。
:::

用浏览器打开 ==my-game.html== 后，你会看到页面中有个浅灰色的方框，它是游戏显示区域，我们之后所编写的小游戏会显示在这里：

![0.2](https://rru.oss-cn-beijing.aliyuncs.com/fp/0.2.PNG)

接着再次右键单击 ==my-game.html== ，在 ==打开方式== 中选择 ==记事本== ，你会在打开的记事本中看到：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>我的小游戏</title>
</head>
<body>
    <canvas id="app"></canvas>
    <script src="./index.js"></script>
    <script src="./pattern.js"></script>
    <script>
        // 在这一行之前的内容不要改动
        let width = 30
        let height = 18
        let mygame = new Game(width, height, 2)
        // 在这一行的下一行写你的代码

        // 在这一行之后的内容不要改动
    </script>
</body>
</html>
```

OK！我们的准备工作就做完了！

::: tips
**小提醒**
如果在后面的编码中发现折腾不出影了，可以回到这里重新复制上面代码，也许可以解决问题。
:::

::: tips
**不是必须做的，但会优化你的编码体验的事**
实际上，记事本虽然可以用来编写代码，但用起来可能并不是那么方便。如果你不怕一点点麻烦，可以进入 [http://www.sublimetext.com/3](http://www.sublimetext.com/3) 下载 sublime text，用它来代替记事本。（如果你有其它趁手的编辑器，当然也可以使用它）
:::

::: warning
**注意！**
学习编程最最最重要的是 **动手** 。在接下来的学习中，请务必动手敲下代码。假如有些地方自己不会写，也请务必照着示例代码抄下来，**不要直接复制粘贴**。
:::

# 开始

接下来我们的目标是编写开头你看到的小游戏。你可以[点击这里](http://fp.mengru.space/src/example.html)来自己体验这个游戏。

通过体验这个游戏，你一定可以发现，你可以操纵一个小人儿行走和跳跃，这个小人儿可以在浅灰色的区域自由行动，但是无法穿越墙壁和地板（深灰色区域）。

如果把这个游戏看作是由一组积木搭建而成的，那么这组积木里面必须有的最基础的积木块是什么呢？

1. 必须有人，他可以被操纵
2. 必须有墙，它无法被人穿越
3. 必须有空气，人可以在其中自由行动

那么现在看着你面前的代码，让我们把目光移到这里：

```jsx
 let width = 30
 let height = 18
 let mygame = new Game(width, height, 2)
 // 在这一行的下一行写你的代码
```

能够注意到的是，在这四行字里面，前三行的格式都是相同的，即：

```jsx
let 啥啥啥 = 谁谁谁
```

它的意思也很简单，就是字面意思：让 啥啥啥 等于 谁谁谁

比如：

```jsx
let width = 30
让 width 等于 30

let height = 18
让 height 等于 18

let mygame = new Game(width, height, 2)
让 mygame 等于 new Game(width, height, 2)
```

这样做的结果是什么呢？这样就相当于你为等号右边的东西取了个名字，名字就是等号左边的东西，你可以通过这个名字来召唤等号右边的东西。比如：

```jsx
let width = 30
let height = 18
let mygame = new Game(width, height, 2)

在 new Game(width, height, 2) 这串神秘代码中，width 代表 30，height 代表 18

于是它就相当于：
new Game(30, 18, 2)
```

::: tips
**小提示**
除了从“取名字”的角度去理解，你也可以将这种格式的代码理解为**将名字和实体进行绑定**。比如 let width = 30 ，你可以理解我们为 30 取了一个名字叫 width，也可以理解成我们将 width 这个名字与 30 进行绑定，这样理解就意味着，width 可以进行“换绑”，也就是如果我们不需要它与 30 进行绑定了，便可以通过代码 width = 42 来将它和 42 进行绑定，此时 30 失去了它的名字 width，而 42 获得了新名字 width，而从 width 的角度，它拥有了新的“实体” ：42。
在编码的许多时候，我们更需要第二种理解。
:::

接下来看第四行：

```jsx
 // 在这一行的下一行写你的代码
```

这一行不是代码，它只是一个小提醒，无论它在或不在，都不会影响代码的运行。你可以把它删掉，也可以将它保留，甚至可以多写点什么，只要不要忘记：假如你要换行续写这个小提醒，请以 ==//== 开头。

::: tips
**小提示** 当你暂时不想要某行代码起作用时，可以在这行代码的行首添加 // 而不必直接删掉这行代码。
:::

::: warning
**注意！**
请不要改动这个区域之外的其它固有代码。即认真遵守另外两个小提醒：在这一行之前的内容不要改动、在这一行之后的内容不要改动。
:::

是不是很简单？搞明白了这个小规则，我们来介绍主菜。

刚才提到，我们可以把这个游戏看作是由一组积木搭建而成的，那么在我们的代码中，谁是这样的一组积木呢？答案是：

```jsx
let mygame = new Game(width, height, 2)
```

这句话的意思是：创建一个新游戏，它的界面的宽是 30 个积木块，高是 18 个积木块（2 所代表的意思我们后面再说），给它取一个名字，叫 mygame。也就是说，我们可以使用 ==mygame== 提供的一些积木块，在这个游戏界面上搭建我们的小游戏。

再来复习一下刚才所说的必须有的积木种类：人、墙、空气。

于是我们可以分别通过下面的代码来创建人类型的积木、墙类型的积木和空气类型的积木：

```jsx
let human = mygame.create.human() // 创建一个人类型的积木，它可以被操纵
let wall = mygame.create.wall() // 创建一个墙类型的积木，它无法被人穿越
let air = mygame.create.air() // 创建一个空气类型的积木，它可以被人穿越
```

OK，那我们快来试一下吧！在 ==// 在这一行的下一行写你的代码== 这一行的下面一行输入：

```jsx
let human = mygame.create.human()
```

这样，我们就在游戏中创建了一个小人儿。按 ==ctrl s== 进行保存，然后刷新网页可以看到效果：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/1.1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/1.1.PNG)

::: warning
**注意！**
每当你改动代码后，都必须按一次 ctrl s 进行保存，这样才能使代码生效。
怎么按 ctrl s ：按住键盘上的任意一个 ctrl 键，然后按一下 s 键，最后松手。
:::

你可以看到游戏界面的左下角出现了一个绿色小方块，它并不是人的形状。要把它变成人的形状，我们在下一行输入：

```jsx
human.style = pattern.human
```

保存后刷新，你就能看到：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/1.2.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/1.2.PNG)

回看刚才的两句代码：

```jsx
let human = mygame.create.human()
human.style = pattern.human
```

第一句的意思你一定知道：我们为 ==mygame.create.human()== 取了个名字，叫 ==human== 。

那 ==mygame.create.human()== 又是什么意思？它仍然是字面意思：在 mygame 中 ==创建== 一个 ==人==

末尾的一对英文括号 ==()== 意为“执行”，因为“创建一个人”是一个 ==动作== ，我们需要在末尾使用 ==()== 来使这个动作执行。

::: warning
**注意！**
在代码中，所有的符号（包括但不限于等号 = 、点号 . 、括号 () ）都是英文符号。在你编写代码时，请确保输入法已切换为英文输入法。
:::

第二句代码仍然是字面意思：

```jsx
human.style = pattern.human
人  的 样子 是 图案 里的 名为human的图案
```

其中 style 是 human 的一个 ==属性== ，我们可以通过将属性修改成合适的东西（值），来对该积木产生影响。在这个例子中，style 这个属性可以被修改为不同的图案，我们挑选了 pattern.human 这个图案，来将 human 的默认的样子（一个绿色方块）改变为一个嚣张奔跑的人的样子。

::: tips
**小提示**
你可以打开[图案图鉴](/?page=pattern-handbook)来浏览和挑选目前可用的图案。
:::

现在这个小人儿可以自由活动啦！你可以使用键盘上的 a、d、w 来控制小人行走的方向和跳跃。

# 来几堵墙

现在，我们考虑为我们的游戏添加墙壁。

上一节我们学习了创建小人儿的方式，类似地，我们来创建一个墙：

```jsx
mygame.create.wall()
```

::: tips
**小提示**
当你认为也许不需要再召唤这个东西时，也可以不使用 let 为它取名字。
:::

![https://rru.oss-cn-beijing.aliyuncs.com/fp/2.1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/2.1.PNG)

如上图所示，你会看到游戏界面的左下角出现了一个灰色方块。原本在左下角的小人儿不见了，这是因为小人儿和灰色方块在同一位置，灰色方块将小人儿覆盖掉了。

我们先不理会小人儿，先来考虑把其他的墙建好。

如你所见，我们的游戏中需要的墙有这些（深灰色部分）：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/2.2.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/2.2.PNG)

::: tips
**小提示**
在你自己的游戏中可以通过 mygame.grids.on() 来打开上图中的坐标系，以方便你在放置积木的时候确定坐标。如果不再需要这个坐标系，可以通过 mygame.grids.off() 关掉。
:::

每一个墙的位置不同，我们需要在创建墙的时候规定墙的位置：

```jsx
mygame.create.wall(0, 1)
// 0 代表这块墙的坐标 x ，1 代表它的坐标 y
```

![https://rru.oss-cn-beijing.aliyuncs.com/fp/2.3.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/2.3.PNG)

你会发现这一块墙改变了位置，到小人儿的头上一格了。

好了，此时你也许开始搞明白了：只要我按照前面的图纸中墙的样子，在相应位置创建墙，这样就可以了。就像：

```jsx
mygame.create.wall(0, 0)
mygame.create.wall(0, 1)
mygame.create.wall(0, 2)
mygame.create.wall(0, 3)
mygame.create.wall(0, 4)
mygame.create.wall(0, 5)
mygame.create.wall(0, 6)
mygame.create.wall(0, 7)
mygame.create.wall(0, 8)
mygame.create.wall(0, 9)
```

![https://rru.oss-cn-beijing.aliyuncs.com/fp/2.4.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/2.4.PNG)

一口气建了10个墙！可是问题来了：这样实在太慢了。数一数前面的图纸中墙的数量，光四周的墙就有 18 * 2 + 30 * 2 = 96 个，写完这些手都要抽筋了。

为了解决这个问题，我们引入一个工具：循环。

先观察上面创建10个墙的代码，我们会发现它们的规律：所有墙的坐标的 x 相同（都是 0 ），y 从 0 开始递增，每次加 1 ，直到 y 等于 9 。这个过程可以通过一段简短的代码来描述：

```jsx
for (let i = 0; i <= 9; i++) {
    mygame.create.wall(0, i)
}
```

这段代码的意思是：创建一个 i 让它等于 0，每次执行完花括号 =={ }== 中的内容后，i 加 1；而每次执行花括号中的内容之前，都要检查一下 i 的大小，看它是否小于等于 9，如果不符合这个条件，就不再执行了。整个循环过程分解如下：

```jsx
let i = 0
问题：i <= 9 吗？
答：是的
执行：mygame.create.wall(0, 0)
i = 1
问题：i <= 9 吗？
答：是的
执行：mygame.create.wall(0, 1)
i = 2
问题：i <= 9 吗？
答：是的
执行：mygame.create.wall(0, 2)
i = 3
......
......
i = 9
问题：i <= 9 吗？
答：是的
执行：mygame.create.wall(0, 9)
i = 10
问题：i <= 9 吗？
答：不是
循环结束
```

学会了这个工具，造墙就方便多了。我们按照上面给的图纸来造一下四周的墙：

```jsx
for (let i = 0; i <= 17; i++) {
    mygame.create.wall(0, i)
    mygame.create.wall(29, i)
}
for (let i = 0; i <= 29; i++) {
    mygame.create.wall(i, 0)
    mygame.create.wall(i, 17)
}
```

剩下的墙就留给你自己按照图纸去建。如果有些地方搞不定了，可以用记事本打开 ==example.html== 看看提示。

对了！别忘了那个被墙盖住的小人儿。你可以给小人儿换个位置：

```jsx
human.x = 1
human.y = 1
```

![https://rru.oss-cn-beijing.aliyuncs.com/fp/2.5.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/2.5.PNG)

这样就能看见他啦！

# 星星和火

紧接着，我们来为游戏添加星星和火，为我们的游戏增加一点难度和目标。先看看图纸：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/3.1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/3.1.PNG)

星星和火所在的位置一目了然，我们只需要在合适的位置创建积木，然后为积木设置相应的图案就可以了。但当你想下手编码时，你会发现一个问题：我该创建什么类型的积木呢？有星星或者火焰类型的积木吗？比如我可以这样写吗：

```jsx
mygame.create.star(28, 4)
mygame.create.fire(14, 3)
```

假如你这么写了，当你保存代码刷新页面后，会发现游戏界面上并没有如你预期的那样出现星星和火。这是因为我们的积木中并没有星星类型的积木，也没有火焰类型的积木。

你可能觉得有点手足无措了。冷静下来思考一下，我们想在游戏中添加的星星，它具备什么性质？或者说，当我们操纵的小人儿靠近星星的时候，小人儿在星星的什么位置时可以吃到星星？一般来说，是当小人儿走过去，与星星产生 ==重叠== 时，星星被吃掉。也就是说，星星和墙不一样，它是可以被小人儿“穿越过去”的。想到这里，你可能恍然大悟：可以被小人儿穿越过去，这不是和前面说的空气类型的积木是一样吗！

我们再次复习一下前面的分析：最基础的积木块必须有哪些？

1. 必须有人，他可以被操纵
2. 必须有墙，它无法被人穿越
3. 必须有空气，人可以在其中自由行动

在当前的场景中，我们想添加的星星的性质和空气积木所拥有的性质是一样的。也就是说，**我们不必拥有一个“星星”类型的积木才能创建星星，只要现有的积木符合我们期望中星星的性质，就可以使用它来创建这样的星星。** 于是，我们可以使用空气类型的积木来创建星星：

```jsx
let star1 = mygame.create.air(28, 4)
star1.style = pattern.star
```

![https://rru.oss-cn-beijing.aliyuncs.com/fp/3.2.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/3.2.PNG)

如此，你可以对照图纸将其它星星创建好，并用类似的思考方式来考虑火焰的创建。如果遇到问题，可以用记事本打开 ==example.html== 看看提示。

# 让子弹飞

在添加子弹之前，让我们先来分析一下子弹的飞行路径。

通过体验游戏你可以发现，子弹在红色的枪口处生成，飞到游戏界面的最左侧消失：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/4.1.gif](https://rru.oss-cn-beijing.aliyuncs.com/fp/4.1.gif)

于是我们可以得出分析结果：让子弹在枪口处生成，然后将它一直向左移，直到移出游戏界面；每隔一秒钟（取决于你期望的子弹密度，这里我们使用一秒的间隔，你可以根据你自己的想法修改这个间隔时长）生成一枚子弹。

我们先来考虑只生成一枚子弹时的情况。

子弹在枪口处生成的代码你一定会写：

```jsx
let bullet = mygame.create.air(28, 1)
bullet.style = pattern.bullet
```

接下来要做的就是将它不断向左移。在此之前你需要了解一个积木提供的功能：自动移动。自动移动是指使积木朝某个方向以你设定的速度以匀速通过你设定的路程。你可以通过阅读[详细说明书](/?page=specification)中对 ==automove.left== 的描述来获得关于自动移动功能的详细信息。

::: tips
**小提示**
打开[详细说明书](/?page=specification)后，你可以按 ctrl f 来搜索 automove.left 所在的位置直接到达那里。
:::

于是要实现将子弹不断向左移并移出游戏界面，可以这么写：

```jsx
bullet.automove.left(29, 4)
```

上面的代码中，29 是指子弹向左移动的距离，4 是指子弹移动的速度。你可以保存后刷新页面查看子弹飞的效果。

解决了一枚子弹飞的问题，接下来只要我们可以在枪口的位置每隔一秒生成一个子弹，然后让子弹“automove”，整个功能就实现完成了。

想要实现每隔一秒生成一个子弹，我们会朴素地认为：如果有一个定时器，它每隔一秒触发一次，每次触发都执行下面的代码：

```jsx
let bullet = mygame.create.air(28, 1)
bullet.style = pattern.bullet
bullet.automove.left(29, 4)
```

那这事不就成了吗？关键是有没有这样的定时器呢？

还真有！它要这么写：

```jsx
setInterval(function() {
    // 写你的代码
}, 1000)
```

若要理解上面的代码，我们还需要了解一个工具：函数。

我们大多数人对函数的最朴素的认知来源于初中数学中的 y = kx + b，其中 k 和 b 是常数，x 是自变量，y 是因变量。输入不同的 x，可以得到不同或相同的 y（在这个例子中只能得到不同的 y）。

在编程语言中创建的函数的结构和它差不多，同样是输入 x 后可以输出 y，但不同的是，编程语言中有的函数可以既没有 x 也没有 y，它单纯被用来作为执行过程（代码）和传递过程（代码）的容器，就如同上面定时器代码中的函数：

```jsx
function() {
    // 要被执行的代码
}
```

::: warning
**注意！**
function 后面的一对英文括号 () 是必须的。
:::

你将你想执行的代码写在里面，然后把这个函数和执行间隔时间告诉（传递给）定时器，定时器就会每隔你指定的时间执行一次这个函数中的代码。

你可以这么写：

```jsx
let createbullet = function() {
    let bullet = mygame.create.air(28, 1)
    bullet.style = pattern.bullet
    bullet.automove.left(29, 4)
}
setInterval(createbullet, 1000)
```

当然也可以这么写：

```jsx
setInterval(function() {
    let bullet = mygame.create.air(28, 1)
    bullet.style = pattern.bullet
    bullet.automove.left(29, 4)
}, 1000)
```

其中，英文逗号后面的 1000 是指 1000 毫秒（1秒 等于 1000 毫秒），整段代码的意思是：让定时器每隔 1000 毫秒，执行一次函数中的代码——创建一个子弹，并让它以速度 4 左移 29 个格子。

最后，让我们再添加一个枪口：

```jsx
let gun = mygame.create.wall(28, 1)
gun.style = pattern.gun
```

如此，整个子弹发射功能就完成了！

留一个小练习：请你通过查阅附录的[图案图鉴](/?page=pattern-handbook)和[详细说明书](/?page=specification)，来实现那个飞来飞去的绿色龟壳。如果遇到困难，可以用记事本打开 ==example.html== 查看提示。

# 花式领便当

我们在前面已经添加了子弹、火焰等危险物品，假如你尝试游玩过自己的游戏，会发现它们对小人儿并没有杀伤力。在这一节，我们将会让这些危险物品名副其实。

在我们的预期中，当小人儿碰到子弹、火焰和龟壳都会使游戏结束。将逻辑简单梳理一下，如图所示：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/5.1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/5.1.PNG)

我们先看第一个菱形框中的内容：人是否碰到了火焰？如果用代码来描述这句话，该怎么做呢？

答案是使用 ==条件语句== :

```jsx
if (xxx) {
    // 在这里写条件成立时要执行的代码
} else {
    // 在这里写条件不成立时要执行的代码
}
```

if 后的括号内的 xxx 是一个判断条件，如果该判断条件的执行结果是 ==true== ，即“没错，就是这样”，那么第一个花括号中的代码就会被执行；如果判断条件的执行结果是 ==false==，即“不对，不是这样”，那么就会进入“否则”，即第二个花括号中的代码会被执行。

在前文中可知，我们需要的判断条件是“人是否碰到了火焰”，即该部分代码的 **伪代码** 应该写成：

```jsx
if (人碰到了火焰) {
    // 在这里写人碰到了火焰后要执行的代码
}
```

::: tips
**小提示**
伪代码是并非可以真正运行的代码，但它能够很容易被改为可以真正运行的代码
:::

上述伪代码没有使用“否则”，这是因为当小人儿没碰到火焰时游戏继续，而“游戏继续”在当前的场景中可以认为是“什么都不发生”。

那么“人碰到了火焰”该怎么表达呢？我们的积木提供一个名为 ==istouched== 的动作，它可以用于判断这个积木和另一个积木是否产生 ==接触== ，如果产生接触，那么这个动作的执行结果是 true，反之为 false。因此，这部分代码可以这样写：

```jsx
if (human.istouched(fire1)) {
    // 在这里写当人碰到火时要执行的代码
}
```

::: tips
**小提示**
除了 istouched ，积木还提供一个名为 ==isoverlapping== 的动作，它是用于判断这个积木和另一个积木是否产生 ==重叠== 。关于这两个动作的具体区别，你可以通过查阅[详细说明书](/?page=specification)来了解。
:::

我们接上文继续进行分析：人是否碰到了火焰？如果是，则游戏结束。我们的游戏亦提供了使游戏结束的动作：

```jsx
mygame.over.lose() // 游戏结束并宣布失败
mygame.over.win() // 游戏结束并宣布胜利
```

于是这整个过程便可以用代码表达为：

```jsx
if (human.istouched(fire1)) {
    mygame.over.lose()
}
```

完成了这一步，我们来考虑这样一个问题：检查小人儿和火焰是否接触的这个行为，应该在什么时候发生？在计算机的角度，它并不知道玩家操控的小人儿什么时候会接触火焰，只有 **不断地** 去检测是否发生接触，才能在小人儿真正接触火焰的时候给予及时正确的反馈。你也许想到：可以使用之前使用过的定时器，将上面的检测代码放在定时器中。那么我们又该如何去定义 “**不断地”** 呢？每隔 1 秒？每隔 0.5 秒？每隔 0.01 秒？事实上，计算机也并不知道玩家按键的频率，所以无论选择间隔多长时间，都不是很恰当。我们又想，**“不断地”可以不放在时间的维度去考虑，而放在小人儿移动的维度去考虑**。即：不是每当间隔多长时间，而是每当小人儿发生移动后，就检测它是否和火焰接触。这么一来，无论玩家的操作频率是“很快”还是“很慢”，都可以确保有效检测。

我们的积木为这种“不断地”提供了实现：

```jsx
human.move.after = function() {
    // 在这里写当小人儿发生移动后要执行的代码
    // 每当小人儿发生移动，这里的代码都会执行一次
}
```

于是，“小人儿移动 → 判断小人儿是否和火焰接触 → 如果是则结束游戏，如果不是则游戏继续”这一过程便可被实现为：

```jsx
human.move.after = function() {
    if (human.istouched(fire1)) {
        mygame.over.lose()
    }
}
```

龟壳（这里默认作为龟壳的积木被命名为 turtle）和另一个火焰的实现方式同理，我们可以继续在 human.move.after 函数中追加它们的检测：

```jsx
human.move.after = function() {
    if (human.istouched(fire1)) {
        mygame.over.lose()
    }
    if (human.istouched(fire2)) {
        mygame.over.lose()
    }
    if (human.isoverlapping(turtle)) {
        mygame.over.lose()
    }
}
```

那么现在只剩下子弹了。别急，检测子小人儿是否和子弹重叠的实现方式与前面会略有不同。这是因为在游戏运行中会不断生成新的子弹，而我们写的代码一旦保存进入运行，是不能被自动修改的，也就是 human.move.after 的函数中无法随着子弹的新增来增加检测小人儿和子弹是否重叠的代码。

所以我们可以尝试换个角度来思考：既然无法在小人儿移动时检测小人儿和子弹是否重叠，那可以在子弹移动时检测小人儿和子弹是否重叠呀！我们可以在每一枚子弹生成后对这枚子弹设置 move.after 函数：

```jsx
setInterval(function () {
    let bullet = mygame.create.air(28, 1)
    bullet.style = pattern.bullet
    bullet.automove.left(29, 4)
    // 重点在这里👇👇
    bullet.move.after = function () {
        if (human.isoverlapping(bullet)) {
            mygame.over.lose()
        }
    }
    // 重点在这里👆👆
}, 1000)
```

这么一来，有关这些危险物品的杀伤性质就全部搞定啦！

在本节的最后，我们再来简单看一下星星的处理。我们对星星的期望是：小人儿可以吃掉星星，即小人儿与星星产生重叠后，星星消失；小人儿吃掉右下（star1）和左上（star2）星星后，跳跃高度增加；吃掉右上（star3）星星后，游戏胜利。

与对龟壳的重叠检测相似，在 human.move.after 函数中追加对星星的重叠检测：

```jsx
if (human.isoverlapping(star1)) {
    human.strength = 5
    star1.remove()
}
```

==human.strength== 控制小人儿跳跃的最大高度，它的默认值是 3。我们选择一个更高的高度，以确保小人儿可以跳到第二层台子上。动作 ==remove== 用于积木移除自身，当 star1.remove() 执行后，星星会消失。后面两颗星星的处理留给你自己去做，如果遇到困难，可以用记事本打开 ==example.html== 查看提示。

::: tips
**挑战**
在上面的代码中，对龟壳与小人儿的重叠检测的实现思路有一点小问题，不知你是否能看出来？提示：当小人儿在龟壳的必经之路静止不动，龟壳经过了小人儿，会发生什么呢？
答案在 example.html 中。
:::

# 欲乘石头归去

回顾前面几节，我们学习了如何创建积木、使用循环更快地创建积木、认识了函数、使用条件语句来定义碰到特定积木时所触发的事情，以及一点点相关的编程思想。在本节，我们将不再学习新的知识，而是会着眼于对问题的分析。

现在，我们的游戏还差最后一步：一块能够载人的飞来飞去的石头。相信对于如何创建这块飞来飞去的石头，你已经得心应手了：

```jsx
let stone = mygame.create.wall(9, 13)
stone.automove.right(16, 1, true)
```

但是当你保存代码刷新页面准备试试乘坐它时，会发现你的小人儿就算已经跳到了石头上，当石头移动后也会从上面掉下来——这好像和想象中的不太一样？在期望中，当小人儿跳到石头上后，应当会被石头载着一同前往终点。

如果是在现实中的确会如此，这是因为当现实中的人站在正在移动的物体上后，由于存在摩擦力，人会被其所受到的静摩擦力加速，直到与该物体速度一致。所以看上去现实中的人面对移动中的物体时，只要一站上去就和它一起移动了，但在你无法观察到的地方，是存在一个摩擦力在促成这一现象的。

回到我们的游戏中，在我们的游戏里，积木与积木之间并不会自然产生摩擦力，因为计算机它并不知道这一物理现象。你在游玩其它游戏操纵其中的角色所感受到的摩擦力，是由游戏开发者根据现实物理规律通过编写代码模拟出来的。而在我们的游戏里，也并不存在对摩擦力的模拟，因此小人儿不会同预期中那样站在石头上自动与石头一起移动。所以你可以认为：小人儿站在一块正在移动的积木上同积木一起运动，这并不是理所当然的，是需要程序设计者自己去实现的。

接下来，我们的任务便是去设计实现这一“功能”。

前文提到，这样的现象在计算机中需要通过模拟摩擦力去实现，但若我们在此真的通过模拟摩擦力去解决，未免太过复杂，因为我们所需要的仅仅是希望 **当人站在这块石头上后能在这块石头移动时一同移动** 罢了。我们可以仅仅着眼于这一个单一的需求，而不考虑人站在其它石头上是否能达到同样的效果。

根据这个需求，我们来分析小人儿从跳跃至石头上到从石头上下来到达终点的整个流程：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/6.1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/6.1.PNG)

你可以体验一下[示例游戏](https://fp.mengru.space/src/example.html)，再结合上图的流程分析，来感受一下小人儿在这部分的移动流程。

接下来，我们来具体分析小人儿从起跳到随石头移动的实现逻辑。首先复习一下我们的需求：我们希望当人站在这块石头上后能在这块石头移动时一同移动。也就是说，当人站在石头上后，石头移动一下，人就马上跟着移动一下，且人始终在石头的正上方一格，而这一切的前提，是人站在了石头上，即人与石头已经发生了接触。当人主动移动到与石头不再接触时，人便停止同石头一起移动。

我们将上面的分析整理成更清晰的流程图：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/6.2.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/6.2.PNG)

我们将上述流程图实现为伪代码：

```jsx
stone.move.after = function() {
    if (小人儿与石头正接触着) {
        human.x = stone.x
        human.y = stone.y + 1
    }
}
human.move.after = function() {
    if (human.istouched(stone)) {
        标记小人儿的状态为：正在与石头接触
    } else {
        标记小人儿的状态为：未与石头接触
    }
}
```

不知道这段伪代码实现是否与你想得一样呢？不一样也没有关系，因为同一个需求大多数时候都会有不同的实现，你可以大胆尝试自己的想法！

如果你对上面的实现方式感兴趣，不妨接着向下读。

在上面的伪代码中，你可以注意到其中提到“小人儿的状态”。“状态”是一个拥有时间维度的量，比如说：在某一段时间中，某某拥有怎样的状态。于是我们需要将小人儿是否与石头接触的状态进行记录，以便在任何时刻都能访问到它：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/6.3.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/6.3.PNG)

这就意味着，我们需要一个容器将这个状态储存起来。这个容器你很熟悉，我们在本教程的开头就学习过：

```jsx
let state = false
```

当小人儿的状态为正在与石头接触时，我们让 state 等于 true，反之，让它等于 false；当 stone 需要知道小人儿的状态时，就访问 state， 如果它是 true，那么就同步改变小人儿的位置。完整的代码如下：

```jsx
let state = false
stone.move.after = function() {
    if (state) {
        human.x = stone.x
        human.y = stone.y + 1
    }
}
human.move.after = function() {
    // 别忘记在此之前还有上一节写的其它代码
    if (human.istouched(stone)) {
        state = true
    } else {
        state = false
    }
}
```

如此一来，关于这个小游戏的全部内容就已经完成了！快保存你的代码运行看看吧。

# 就这？

如果你随着教程编写完这个小游戏后最大的感想之一是：什么啊！这也太简单了吧！那请允许我为你颁发一朵小红花——你太厉害啦！

通过上面的学习，你可以发现你总是在围绕 mygame 及其提供的一些不同种类的积木进行编程：使用 mygame 提供的动作来创建积木、使用积木提供的动作来判断积木之间是否接触和重叠、通过修改积木的属性来改变积木的外表和状态，再加之编程语言提供的的逻辑结构来表达自己的逻辑，以此来完成整个游戏的编写。你有时候可能也会产生疑惑：“游戏是我写的没错，但 mygame 和它的积木们又是哪里来的呢？”它们当然不是从地里长出来的，它们也是由另外的人类（具体来说是本文作者）使用另外的“积木们”加之自己的逻辑来编写的。所以你可以认为：大部分情况下，编程就是通过自己的逻辑来摆弄一组积木。有些积木的块儿太小，对许多人来说不方便使用，于是就有人将这些积木进行组装，发明了新的积木，这是编程；有些积木本身就十分好用，人们都用它们来表达自己的想法和创意，这也是编程。在使用积木时，我们往往需要一张积木的说明书，来搞明白这些积木到底怎么用，提供了哪些属性、哪些动作，通常我们会将这些“动作”“属性”称为 **接口** ，英文叫 **API** ，而积木的说明书会被简单地称为 **文档** 。

如果到此你仍对学习编程抱有巨大的热情，那么你可以找一些常规的学习编程语言相关的教程，将本教程中未点名的诸多语言相关的知识点慢慢补全。比如数据类型、变量的概念、函数的更具体的用途，什么是语句，什么是表达式，什么是作用域等等。包括在本教程中，我一直将“对象方法”称为“动作”，那什么是“对象”什么又是“方法”？这可能又需要你去慢慢了解不同的编程范式。

还有很重要的一点，在这个世界上存在着成百上千种不同的编程语言，本教程中所使用的语言叫做 JavaScript。不同的语言擅长做不同的事情，它们运行在不同的环境中，比如浏览器，它就是 JavaScript 的运行环境。浏览器几乎预装在每一台个人电脑中，要使用运行在其中的编程语言进行编程，几乎不需要额外安装和配置任何东西，这也是本教程选择使用 JavaScript 的原因。

尽管这个世界上的编程语言数量是如此之多，但编程语言的语言特性的数量是有限的。我们只需要掌握大多数常见的语言特性，就能够快速地学会绝大多数主流语言了。请记住：语言只是工具，我们不需要学习那么多语言。无论去学习和使用哪一个语言，都取决于我们需要解决的问题。

除了学习语言本身，如果想解决更复杂一点的问题，你也许还需要了解一些数据结构和算法知识。所谓数据结构，是储存数据的形式，所谓算法，特指在计算机中解决问题的有效方法。在此提供一点感性认识：如果你学习了“数组”这个数据结构，那么你就已经具备编写[贪吃蛇](https://fp.mengru.space/src/snake.html)（snake.html）的知识了；如果你想写一个[迷宫游戏](https://fp.mengru.space/src/maze.html)（maze.html），就需要学习一下经典的搜索算法。

当然，学习的时间很多，也可以先不着急补充太多知识，如果你有兴趣，可以通过查阅[详细说明书](/?page=specification)和[自己制作图案](/?page=draw-pattern-yourself)结合自己的创意来设计开发更多的小游戏。

# 恭喜你！

你已经完成了本课程的全部内容！除了体验编程本身之外，你其实也一并体验了一名职业程序员的工作：分析问题、设计解决方案、解决问题，中途要查阅说明书（阅读技术文档），并遵循文档和团队制定的规范进行代码编写。

相信通过这个课程，你也许体会到了一点点编程的乐趣，同时你也一定已经明白，编程就像搭积木一样，它并不神秘。但这只是个开始。在实际环境中，职业程序员要解决的问题会比想象的复杂，因为他们往往要面对更复杂的环境、更复杂的需求以及对代码质量更高的要求。当然，所有的“复杂”都是相对的。当你从这里出发，一步一步踏踏实实学习更多的计算机知识，你会发现它们也并不会比想象的困难和可怕。

加油！你一定能更上一层楼！

# 附录

- [图案图鉴](/?page=pattern-handbook)
- [自己制作图案](/?page=draw-pattern-yourself)
- [详细说明书](/?page=specification)
- [单词表](/?page=word-list)
- [发布你的游戏](/?page=publish-your-game)
- [Q&A](/?page=q-and-a)
- [后记](/?page=postscript)

# 留言板

如果你有任何问题、建议或者想法可以在这个[留言板](https://my.cbox.ws/first-programming)中留言，或是发邮件到 [Q&A 页面](/?page=q-and-a) 的邮箱中。

<!-- <iframe src="https://www6.cbox.ws/box/?boxid=867094&boxtag=26LAUG" width="100%" height="250" allowtransparency="yes" allow="autoplay" frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>	
-->