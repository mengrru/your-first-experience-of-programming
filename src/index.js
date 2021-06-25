class Game {
    constructor (width = 50, height = 40, scale = 1) {
        scale = Math.ceil(scale)

        this.canvas = document.getElementById('app')
        this.canvasCtx = this.canvas.getContext('2d')
        this.canvas.width = width * scale * 10
        this.canvas.height = height * scale * 10

        // private
        this.scale = scale
        this.blocks = []
        this.isGG = false
        this.drawTimer = null
        this.state = null

        // public
        this.gravity = true
        this.width = width
        this.height = height
        
        this.run()
    }

    run () {
        this.bindKeyEvent()
        this.drawTimer = setInterval(() => {
            this.draw()
        }, 50)
    }

    gridsOn () {
    }

    gridsOff () {
    }

    gameOver (state = 'lose') {
        if (this.isGG) {
            return
        }
        this.draw()
        this.isGG = true
        this.state = state
        if (this.state === 'lose') {
            this.drawLose()
        } else {
            this.drawWin()
        }
        clearInterval(this.drawTimer)
    }

    clear () {
        this.blocks = []
        this.canvasCtx.fillStyle = '#fff'
        this.canvasCtx.fillRect(0, 0, cw, ch)
    }

    draw () {
        if (this.isGG) {
            return
        }
        const bw = 10 * this.scale
        const ctx = this.canvasCtx
        const cw = this.canvas.width
        const ch = this.canvas.height
        ctx.fillStyle = '#fff'
        ctx.fillRect(0, 0, cw, ch)
        this.blocks.forEach(b => {
            ctx.fillStyle = Pattern[b.style]
            ctx.fillRect(b.x * bw, ch - bw * b.height - b.y * bw, bw * b.width, bw * b.height)
        })
    }

    drawWin () {
        this.canvasCtx.fillStyle = 'green'
        this.canvasCtx.font = '48px Microsoft YaHei'
        this.canvasCtx.textAlign = 'center'
        this.canvasCtx.textBaseline = 'middle'
        this.canvasCtx.fillText('You Win!', this.canvas.width / 2, this.canvas.height / 2)
    }

    drawLose () {
        this.canvasCtx.fillStyle = 'tomato'
        this.canvasCtx.font = '48px Microsoft YaHei'
        this.canvasCtx.textAlign = 'center'
        this.canvasCtx.textBaseline = 'middle'
        this.canvasCtx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2)
    }

    create (blockType, x = 0, y = 0) {
        let b
        blockType = blockType.toLowerCase()
        switch (blockType) {
            case 'wall':
                b = new Wall(this)
                break
            case 'cloud':
                b = new Cloud(this)
                break
            case 'human':
                b = new Human(this)
                break
        }
        if (b) {
            b.x = x
            b.y = y
            this.blocks.push(b)
        } else {
            console.error('没有' + blockType + '类型，请检查你的输入')
        }
        this.draw()
        return b
    }

    isCollision (o, directions=[[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        for (const b of this.blocks) {
            if (b.blockType === 'wall') {
                for (const d of directions) {
                    const nx = d[0] + o.x
                    const ny = d[1] + o.y
                    if ((nx + o.width) > b.x && nx < (b.x + b.width)
                        && (ny + o.height > b.y && ny < (b.y + b.height))) {
                            return true
                    }
                }
            }
        }
        for (const d of directions) {
            if (d[0] + o.x < 0
                || d[0] + o.x >= this.width
                || d[1] + o.y < 0
                || d[1] + o.y >= this.height) {
                    return true
                }
        }
        return false
    }

    bindKeyEvent () {
        document.addEventListener('keydown', (event) => {
            if (this.isGG) {
                return
            }
            const humanBlocks = this.blocks.filter((e) => e.blockType === 'human')
            switch (event.code.toLowerCase()) {
                case 'arrowleft':
                    humanBlocks.filter(b => b.left === 'left').forEach(b => {
                        b.go('left')
                    })
                    break
                case 'keya':
                    humanBlocks.filter(b => b.left === 'a').forEach(b => {
                        b.go('left')
                    })
                    break
                case 'arrowright':
                    humanBlocks.filter(b => b.right === 'right').forEach(b => {
                        b.go('right')
                    })
                    break
                case 'keyd':
                    humanBlocks.filter(b => b.right === 'd').forEach(b => {
                        b.go('right')
                    })
                    break
                case 'keyw':
                    humanBlocks.filter(b => b.up === 'w').forEach(b => {
                        b.go('up')
                    })
                    break
                case 'space':
                    break
                case 'arrowup':
                    humanBlocks.filter(b => b.up === 'arrowup').forEach(b => {
                        b.go('up')
                    })
                    break
                case 'arrowdown':
                    humanBlocks.filter(b => b.down === 'arrowdown').forEach(b => {
                        b.go('down')
                    })
                    break
                case 'keys':
                    humanBlocks.filter(b => b.down === 's').forEach(b => {
                        b.go('down')
                    })
                    break
            }
            this.draw()
        })
    }
}

class Block {
    constructor () {
        this.height = 1
        this.width = 1
        this.style = 0
        this.isEntity = true
        this.blockType = 'block'
        this.onMove

        // private
        this._x = 0
        this._y = 0
        this.timers = []
    }
    set x (v) {
        this._x = v
        this.execOnMove()
    }
    get x () {
        return this._x
    }
    set y (v) {
        this._y = v
        this.execOnMove()
    }
    get y () {
        return this._y
    }
    execOnMove () {
        if (typeof this.onMove === 'function') {
            this.onMove()
        }
    }
    isTouched (o) {
        const directions=[[0.2, 0], [-0.2, 0], [0, 0.2], [0, -0.2]]
        for (const d of directions) {
            const nx = d[0] + o.x
            const ny = d[1] + o.y
            if ((nx + o.width) > this.x && nx < (this.x + this.width)
                && (ny + o.height > this.y && ny < (this.y + this.height))) {
                    return true
            }
        }
        return false
    }
    stop () {
        this.timers.forEach(e => clearInterval(e))
        this.timers = []
    }
    get autoMove () {
        return {
            left: (d, r) => {
                let i = 0
                const id = setInterval(() => {
                    this.x -= 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.right(d, true)
                        }
                    }
                }, 300)
                this.timers.push(id)
            },
            right: (d, r) => {
                let i = 0
                const id = setInterval(() => {
                    this.x += 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.left(d, true)
                        }
                    }
                }, 300)
                this.timers.push(id)
            },
            up: (d, r) => {
                let i = 0
                const id = setInterval(() => {
                    this.y += 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.down(d, true)
                        }
                    }
                }, 300)
                this.timers.push(id)
            },
            down: (d, r) => {
                let i = 0
                const id = setInterval(() => {
                    this.y -= 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.up(d, true)
                        }
                    }
                })
                this.timers.push(id)
            }
        }
    }
}

class Wall extends Block {
    constructor () {
        super()
        this.blockType = 'wall'
        this.style = 1
    }
}

class Cloud extends Block {
    constructor () {
        super()
        this.blockType = 'cloud'
        this.isEntity = false
        this.style = 2
    }
}

class Human extends Block {
    constructor (game) {
        super()
        this.blockType = 'human'
        this.left = 'a'
        this.right = 'd'
        this.up = 'w'
        this.down = 's'
        this.speed = 1
        this.strength = 3
        this.style = 3

        // private
        this.dropping = false
        this.game = game

        setInterval(() => {
            if (!this.dropping) {
                // if there is not any collision, then drop
                if (!this.game.isCollision(this)) {
                    this.drop(0)
                }
            }
        }, 50)
    }
    get G () {
        if (this.strength > 8) {
            return G(8, 1, 10)
        }
        return G(this.strength, 1, 10)
    }
    drop (v0 = 0) {
        if (this.dropping) {
            return
        }
        this.dropping = true
        const originY = this.y
        let curY = originY
        let t = 0
        const id = setInterval(() => {
            const newY = curY + S(v0, this.G, t)
            const curV = V(v0, this.G, t)
            let collisionDirection = curV > 0
                ? [[0, 0.1]] : [[0, -0.1]]

            if (!this.game.isCollision(this, collisionDirection)) {
                this.y = newY
                t += 0.1
            } else if (curV > 0) {
                // touch ceiling
                v0 = 0
                t = 0
                curY = this.y
            } else if (curV < 0) {
                this.dropping = false
                this.y = Math.floor(this.y)
                clearInterval(id)
            } else {
                this.dropping = false
                clearInterval(id)
            }
        })
    }
    go (direction) {
        switch (direction) {
            case 'right':
                if (!this.game.isCollision(this, [[1, 0]])) {
                    this.x++
                }
                break
            case 'left':
                if (!this.game.isCollision(this, [[-1, 0]])) {
                    this.x--
                }
                break
            case 'up':
                if (this.game.gravity) {
                    this.drop(1)
                    return
                }
                if (!this.game.isCollision(this, [[0, 1]])) {
                    this.y++
                }
                break
            case 'down':
                if (this.game.gravity) {
                    return
                }
                if (!this.game.isCollision(this, [[0, -1]])) {
                    this.y--
                }
                break
        }
    }
}

const Pattern = [
    '#000',
    '#aaa',
    '#eee',
    'green',
    'tomato'
]

function S (v0, a, t) {
    return v0 * t + 1 / 2 * a * t * t
}
function G (s, v0, t) {
    return 2 * (s - v0 * t) / (t * t)
}
function V (v0, a, t) {
    return v0 + a * t
}