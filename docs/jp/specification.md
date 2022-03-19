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

上記のコードによって生成されたゲーム画面の座標系：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/grids.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/grids.PNG)

## 属性

**gravity**

==読み取られて== ==変更される==

ゲームに重力を設定する

```jsx
game.gravity = true // 重力をオンにする
game.gravity = false // 重力をオフにする
```

**width**

==読み取られるが== 変更されない

ゲーム画面の幅

```jsx
let w = game.width
```

**height**

==読み取られるが== 変更されない

ゲーム画面の高さ

```jsx
let h = game.height
```

## アクション

**create.human**

制御可能なブロックを作る

```jsx
game.create.human(1, 1)
// x=1、y=1に制御可能なブロックを作成する
```

**create.wall**

通過できるブロックを作成する

```jsx
game.create.wall(1, 1)
// x = 1, y = 1に通過できるブロックを作成する
```

**create.air**

通過できないブロックを作成する

```jsx
game.create.air(1, 1)
// x = 1, y = 1に通過できないブロックを作成する
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

ゲームを終了し、プレーヤーの負けを宣言する

```jsx
game.over.lose()
```

**iscollision**

ブロックが他のwallタイプのブロックと衝突するかどうかを判断する

```jsx
let human = game.create.human(1, 1)
let result = game.iscollision(human)
// humanが他のwallタイプのブロックと衝突したかどうかを判断する
// 結果はtrueまたはfalse
```

# human ブロック

```jsx
let human = game.create.human(<位置x>, <位置y>)
```

## 属性

**blocktype**

==読み取られるが== 変更されない

ブロックのタイプを識別する。 human ブロックでは 'human' だ。

```jsx
let type = human.blocktype
// type == 'human'
```

**key.left**

==読み取られて== ==変更される==

ブロックを左に移動するようにトリガーボタンを設定する。初期設定は 'a' だが、 'left' にしてもいい

```jsx
human.key.left = 'left' // キーの左矢印のボタン
```

**key.right**

==読み取られて== ==変更される==

ブロックを右に移動するようにトリガーボタンを設定する。初期設定は 'd' だが、'right' にしてもいい　

```jsx
human.key.right = 'right' // キーの右矢印のボタン
```

**key.up**

==読み取られて== ==変更される==

ブロックを上に移動するようにトリガーボタンを設定する。初期設定は 'w' だが、 'up' にしてもいい

```jsx
human.key.up = 'up' // キーの上矢印のボタン
```

**key.down**

==読み取られて== ==変更される==

ブロックを下に移動するようにトリガーボタンを設定する。初期設定は 's' だが、 'down' にしてもいい

```jsx
human.key.down = 'down' // キーの下矢印のボタン
```

**strength**

==読み取られて== ==変更される==

ブロックのジャンプの高さを設定する。範囲は1〜8で、初期設定は3

```jsx
human.strength = 4
```

**lastmove**

==読み取られるが== 変更されない

ブロックの最後の動きの方向を取得する。おそらく 'right' または 'left' または 'up' または 'down' 。

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

==読み取られるが== 変更されない

ブロックのタイプを識別する。wall ブロックでは「wall」だ

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

==読み取られるが== 変更されない

ブロックのタイプを識別する。air ブロックでは「air」だ。

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

==読み取られて== ==変更される==

ブロックの位置を表す横座標

```jsx
block.x = 2
```

**y**

==読み取られて== ==変更される==

ブロックの位置を表す縦座標

```jsx
block.y = 2
```

**lastx**

==読み取られるが== 変更されない

ブロックが最後にとどまった位置を示す横座標

```jsx
let lastx = block.lastx
```

**lasty**

==読み取られるが== 変更されない

ブロックが最後にとどまった位置を示す縦座標

```jsx
let lasty = block.lasty
```

**style**

==読み取られて== ==変更される==

パターンの様式を指定する

```jsx
block.style = pattern.human
```

**removed**

==読み取られるが== 変更されない

ブロックが削除されたかどうかを識別する

```jsx
let block = game.create.air(0, 0)
block.removed // false
block.remove()
block.removed // true
```

**move.before**

==読み取られて== ==変更される==

ブロックが移動する前に実行するアクションを指定する

```jsx
block.move.before = function () {
        // 実行するコード
}
```

**move.after**

==読み取られて== ==変更される==

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

ゲームインターフェイスからブロックを削除

```jsx
block.remove()
```

**istouched**

ブロックが前・後ろ・左・右で他のブロックと接触しているかどうかを確認

```jsx
let block = game.create.human(1, 1)
let block2 = game.create.wall(2, 2)
block.istouched(block2) // false
block2.x = 1
block.istouched(block2) // true
```

**isoverlapping**

他のブロックと重ねているかどうかを判断する

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

