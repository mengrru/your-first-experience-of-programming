<h1 class="doc-title" style="font-size: 40px">
説明書
</h1>

$<toc{"containerId":"header-toc"}>

# Game

```jsx
let game = new Game(<幅>, <高さ>, <倍率>)
```

```jsx
let game = new Game(30, 18, 1)
```

上記のコードによって生成されたゲームインターフェイスの座標系：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/grids.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/grids.PNG)

## 属性

**gravity**

==読み取られて== ==変更できる==

ゲームに重力を設定する

```jsx
game.gravity = true // 重力をオンにする
game.gravity = false // 关闭重力
```

**width**

==読み取られるが== 変更できない

ゲームインターフェースの幅

```jsx
let w = game.width
```

**height**

==読み取られるが== 変更できない

ゲームインターフェイスの高さ

```jsx
let h = game.height
```

## アクション

**create.human**

操られるブロックを作る

```jsx
game.create.human(1, 1)
// x=1、y=1に操られるブロックを作成する
```

**create.wall**

触れるブロックを作成する

```jsx
game.create.wall(1, 1)
// x = 1, y = 1に触れるブロックを作成する
```

**create.air**

触れないブロックを作成する

```jsx
game.create.air(1, 1)
// x = 1, y = 1に触れないブロックを作成する
```

**grids.on**

補助グリッドを開く

```jsx
game.grids.on()
```

**grids.off**

補助グリッドを閉じる

```jsx
game.grids.off()
```

**over.win**

ゲームを終了し、プレーヤーの勝利を宣言する

```jsx
game.over.win()
```

**over.lose**

ゲームを終了し、プレーヤーが負けたことを宣言する

```jsx
game.over.lose()
```

**iscollision**

ブロックが他の壁タイプのブロックと衝突するかどうかを判断する

```jsx
let human = game.create.human(1, 1)
let result = game.iscollision(human)
// humanが他の壁タイプのブロックと衝突したかどうかを判断する
// 結果はtrueまたはfalse
```

# human ブロック

```jsx
let human = game.create.human(<位置x>, <位置y>)
```

## 属性

**blocktype**

==読み取られるが== 変更できない

ブロックのタイプを識別する。 human のブロックでは 'human' だ。

```jsx
let type = human.blocktype
// type == 'human'
```

**key.left**

==可以读取== ==可以修改==

ブロックを左に移動するようにトリガーボタンを設定する。初期設定は 'a' だが、 'left' にしてもいい

```jsx
human.key.left = 'left' // 箭头左按键
```

**key.right**

==可以读取== ==可以修改==

ブロックを右に移動するようにトリガーボタンを設定する。初期設定は 'd' だが、'right' にしてもいい　

```jsx
human.key.right = 'right' // 箭头右按键
```

**key.up**

==可以读取== ==可以修改==

ブロックを上に移動するようにトリガーボタンを設定する。初期設定は 'w' だが、 'up' にしてもいい

```jsx
human.key.up = 'up' // 箭头上按键
```

**key.down**

==可以读取== ==可以修改==

ブロックを下に移動するようにトリガーボタンを設定する。初期設定は 's' だが、 'down' にしてもいい

```jsx
human.key.down = 'down' // 箭头下按键
```

**strength**

==可以读取== ==可以修改==

ブロックのジャンプの高さを設定する。範囲は1〜8で、初期設定は3

```jsx
human.strength = 4
```

**lastmove**

==可以读取== 不可修改

ブロックの最後の動きの方向を取得します。おそらく 'right' または 'left' または 'up' または 'down' です。

```jsx
let last = human.lastmove
```

## アクション

**go.left**

ブロックを1マス左に移動する

```jsx
human.go.left()
```

**go.right**

ブロックを1マス右に移動する

```jsx
human.go.right()
```

**go.up**

重力がオンの場合は、ブロックを1回ジャンプさせまる。重力がオフの場合は、ブロックを1マス上に移動させる

```jsx
human.go.up()
```

**go.down**

重力がオンの場合は何も起こらない。重力がオフの場合は、ブロックを1マス下に移動させる

```jsx
human.go.down()
```

# wall ブロック

```jsx
let wall = game.create.wall(<位置x>, <位置y>)
```

## 属性

**blocktype**

==可以读取== 不可修改

标识该积木的类型，在 wall 积木里，它是 'wall'

ブロックのタイプを識別する。壁ブロックでは「wall」だ

```jsx
let type = wall.blocktype
// type == 'wall'
```

# air ブロック

```jsx
let air = game.create.air(<位置x>, <位置y>)
```

## 属性

**blocktype**

==可以读取== 不可修改

标识该积木的类型，在 air 积木里，它是 'air'

ブロックのタイプを識別する。空気ブロックでは「air」だ。

```jsx
let type = wall.blocktype
// type == 'air'
```

# 3集種類のブロックに共通

```jsx
let block = game.create.human(1, 1)
```

## 属性

**x**

==可以读取== ==可以修改==

ブロックの位置を表す横座標

```jsx
block.x = 2
```

**y**

==可以读取== ==可以修改==

ブロックの位置を表す縦座標

```jsx
block.y = 2
```

**lastx**

==可以读取== 不可修改

ブロックが最後にとどまった位置を示す横座標

```jsx
let lastx = block.lastx
```

**lasty**

==可以读取== 不可修改

ブロックが最後にとどまった位置を示す縦座標

```jsx
let lasty = block.lasty
```

**style**

==可以读取== ==可以修改==

パターンの様式を指定する

```jsx
block.style = pattern.human
```

**removed**

==可以读取== 不可修改

ブロックが削除されたかどうかを識別する

```jsx
let block = game.create.air(0, 0)
block.removed // false
block.remove()
block.removed // true
```

**move.before**

==可以读取== ==可以修改==

ブロックが移動する前に実行するアクションを指定する

```jsx
block.move.before = function () {
        // 実行するコード
}
```

**move.after**

==可以读取== ==可以修改==

ブロックが移動した後に実行するアクションを指定する

```jsx
block.move.after = function () {
        // 実行するコード
}
```

## アクション

**stop**

ブロックの移動を停止

```jsx
block.stop()
```

**remove**

ゲームインターフェイスからブロックを削除する

```jsx
block.remove()
```

**istouched**

ブロックが前・後ろ・左・右で他のブロックと接触しているかどうかを確認する

```jsx
let block = game.create.human(1, 1)
let block2 = game.create.wall(2, 2)
block.istouched(block2) // false
block2.x = 1
block.istouched(block2) // true
```

**isoverlapping**

他のブロックとオーバーラップしているかどうかを判断する

```jsx
let block = game.create.human(1, 1)
let block2 = game.create.wall(1, 1)
block.isoverlapping(block2) // ture
block2.x = 2
block.isoverlapping(block2) // false
```

**automove.left**

ブロックを自動的に左に移動させる

```jsx
block.automove.left(10, 1)
// ブロックを速度1で自動的に左に10マス移動させ
// 速度には4つのギア、つまり1、2、3、4

block.automove.left(10, 3, true)
// ブロックを3の速度で左に10マス移動させてから、戻る
// このアクション自体には、ブロックを移動させる機能があるが、初期設定ではオフ。この機能をオンにするには、最後にtrueを書き込む。
```

**automove.right**

ブロックを自動的に右に移動させる

**automove.up**

ブロックを自動的に上に移動させる

**automove.down**

ブロックを自動的に下に移動させる

