<h1 class="doc-title" style="font-size: 40px">
独自のパターンを作成する
</h1>

既存のパターンが気に入らない場合は、[このページ](https://fp.mengru.space/src/drawing-board.html)で独自のパターンを作成できます。

[このページ](https://fp.mengru.space/src/drawing-board.html)を開くと、次のような画面が表示されます：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/board1.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/board1.PNG)

キャンバス上の薄い灰色のグリッドをクリックして色を描画し、もう一度クリックして消去します。 ペイントが終了したら、[パターンコードを生成]ボタンをクリックすると、次の画面が表示されます。この時点で、パターンのコードはクリップボードに自動的にコピーされています：

![https://rru.oss-cn-beijing.aliyuncs.com/fp/board2.PNG](https://rru.oss-cn-beijing.aliyuncs.com/fp/board2.PNG)

そして、メモ帳でファイルpattern.jsを開くと、次のように表示されます：

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
    // ここに独自のパターンを追加する

}
```

==//ここに独自のパターンを追加する== 次の行で、パターンに名前を付け、名前の後に英語のコロンを追加し、クリップボードの内容をコロンの後に貼り付けます。次に例を示します：

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
    // ここに独自のパターンを追加する
    fruit: ["","","","","black","black","green","green","green","green","","","","","black","black","green","green","green","green","","tomato","tomato","tomato","black","black","tomato","green","green","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","tomato","tomato","tomato","tomato","tomato","tomato","tomato","tomato","","","","","tomato","tomato","tomato","tomato","","",""],
}
```

保存後、追加したパターンを使用できます：

```jsx
let game = new Game(30, 30, 2)
let wall = game.create.wall(1, 1)
wall.style = pattern.fruit
```
