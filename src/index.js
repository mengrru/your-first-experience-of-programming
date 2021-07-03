class Game {
    constructor (width = 50, height = 40, scale = 1) {
        scale = Math.ceil(scale)

        this.canvas = document.getElementById('app')
        this.canvasCtx = this.canvas.getContext('2d')
        this.canvas.width = width * scale * 10
        this.canvas.height = height * scale * 10

        // private
        this.scale = scale
        this.isGG = false
        this.drawTimer = null
        this.state = null
        this.gridsOn = false

        // public
        this.gravity = true
        this.blocks = []

        // read-only
        this.width = width
        this.height = height
        
        this.run()
    }

    run () {
        this.bindKeyEvent()
        this.drawTimer = setInterval(() => {
            this.drawFrame()
        }, 50)
    }

    get grids () {
        return {
            on: () => {
                this.gridsOn = true
            },
            off: () => {
                this.gridsOn = false
            }
        }
    }
    drawGrids () {
        const ctx = this.canvasCtx
        ctx.strokeStyle = '#666'
        ctx.lineWidth = 1
        ctx.fillStyle = '#666'
        ctx.font = 10 * this.scale / 2 + 'px Microsoft YaHei'
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        for (let i = 0; i <= this.width; i++) {
            const x = i * 10 * this.scale
            ctx.beginPath()
            ctx.moveTo(x, 0)
            ctx.lineTo(x, this.canvas.height)
            ctx.stroke()
            this.canvasCtx.fillText(i, x + (10 * this.scale / 2), this.canvas.height - 10 * this.scale / 2)
        }
        for (let i = 0; i <= this.height; i++) {
            const y = i * 10 * this.scale
            ctx.beginPath()
            ctx.moveTo(0, y)
            ctx.lineTo(this.canvas.width, y)
            ctx.stroke()
            this.canvasCtx.fillText(this.height - i, 10 * this.scale / 2, y - 10 * this.scale / 2)
        }
    }

    get over () {
        return {
            win: () => {
                if (this.isGG) {
                    return
                }
                this.drawFrame()
                this.isGG = true
                this.state = 'win'
                this.drawWin()
                clearInterval(this.drawTimer)
            },
            lose: () => {
                if (this.isGG) {
                    return
                }
                this.drawFrame()
                this.isGG = true
                this.state = 'lose'
                this.drawLose()
                clearInterval(this.drawTimer)
            }
        }
    }

    clear () {
        this.blocks = []
        this.canvasCtx.fillStyle = '#fff'
        this.canvasCtx.fillRect(0, 0, cw, ch)
    }

    drawPattern (pattern, x, y, w, h) {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                const c = pattern[j * 10 + i]
                console.log()
                if (c.length === 0) {
                    continue
                }
                const uw = 1 * this.scale * w
                const uh = 1 * this.scale * h
                this.canvasCtx.fillStyle = c
                this.canvasCtx.fillRect(x + i * uw, y + j * uh, uw, uh)
            }
        }
    }

    drawFrame () {
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
            const style = pattern[b.style] || b.style
            if (typeof style === 'string') {
                ctx.fillStyle = style
                ctx.fillRect(b.x * bw, ch - bw * b.height - b.y * bw, bw * b.width, bw * b.height)
            } else if (Array.isArray(style)) {
                this.drawPattern(style, b.x * bw, ch - bw * b.height - b.y * bw, b.width, b.height)
            }
        })
        if (this.gridsOn) {
            this.drawGrids()
        }
    }

    drawWin () {
        this.canvasCtx.fillStyle = 'green'
        this.canvasCtx.font = this.width * this.scale + 'px Microsoft YaHei'
        this.canvasCtx.textAlign = 'center'
        this.canvasCtx.textBaseline = 'middle'
        this.canvasCtx.fillText('You Win!', this.canvas.width / 2, this.canvas.height / 2)
    }

    drawLose () {
        this.canvasCtx.fillStyle = 'tomato'
        this.canvasCtx.font = this.width * this.scale + 'px Microsoft YaHei'
        this.canvasCtx.textAlign = 'center'
        this.canvasCtx.textBaseline = 'middle'
        this.canvasCtx.fillText('Game Over', this.canvas.width / 2, this.canvas.height / 2)
    }

    get create () {
        return {
            human: (x = 0, y = 0) => {
                return this._create('human', x, y)
            },
            wall: (x = 0, y = 0) => {
                return this._create('wall', x, y)
            },
            air: (x = 0, y = 0) => {
                return this._create('air', x, y)
            }
        }
    }

    _create (blockType, x = 0, y = 0) {
        let b
        blockType = blockType.toLowerCase()
        switch (blockType) {
            case 'wall':
                b = new Wall(this)
                break
            case 'air':
                b = new Air(this)
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
            alert('没有' + blockType + '类型，请检查你的输入')
        }
        this.drawFrame()
        return b
    }

    iscollision (o, directions=[[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        for (const b of this.blocks) {
            if (b.blocktype === 'wall') {
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
            const humanBlocks = this.blocks.filter((e) => e.blocktype === 'human')
            switch (event.code.toLowerCase()) {
                case 'arrowleft':
                    humanBlocks.filter(b => b.key.left === 'left').forEach(b => {
                        b.go.left()
                    })
                    break
                case 'keya':
                    humanBlocks.filter(b => b.key.left === 'a').forEach(b => {
                        b.go.left()
                    })
                    break
                case 'arrowright':
                    humanBlocks.filter(b => b.key.right === 'right').forEach(b => {
                        b.go.right()
                    })
                    break
                case 'keyd':
                    humanBlocks.filter(b => b.key.right === 'd').forEach(b => {
                        b.go.right()
                    })
                    break
                case 'keyw':
                    humanBlocks.filter(b => b.key.up === 'w').forEach(b => {
                        b.go.up()
                    })
                    break
                case 'arrowup':
                    humanBlocks.filter(b => b.kye.up === 'up').forEach(b => {
                        b.go.up()
                    })
                    break
                case 'arrowdown':
                    humanBlocks.filter(b => b.key.down === 'down').forEach(b => {
                        b.go.down()
                    })
                    break
                case 'keys':
                    humanBlocks.filter(b => b.key.down === 's').forEach(b => {
                        b.go.down()
                    })
                    break
                case 'space':
                    break
            }
            this.drawFrame()
        })
    }
}

class Block {
    constructor (game) {
        this.height = 1
        this.width = 1
        this.style = 0
        this.isEntity = true
        this.removed = false
        this.move = {
            before: () => {},
            after: () => {}
        }

        // read-only
        this.blocktype = 'block'
        this.lastx = 0
        this.lasty = 0
        this.game = game

        // private
        this._x = 0
        this._y = 0
        this.timers = []
    }
    set x (v) {
        this.move.before()
        this.lastx = this._x
        this.lasty = this._y
        this._x = v
        this.move.after()
    }
    get x () {
        return this._x
    }
    set y (v) {
        this.move.before()
        this.lastx = this._x
        this.lasty = this._y
        this._y = v
        this.move.after()
    }
    get y () {
        return this._y
    }
    istouched (o) {
        if (o.removed) {
            return false
        }
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
    isoverlapping (o) {
        if (o.removed) {
            return false
        }
        const nx = o.x
        const ny = o.y
        if ((nx + o.width) > this.x && nx < (this.x + this.width)
            && (ny + o.height > this.y && ny < (this.y + this.height))) {
                return true
        }
        return false
    }
    remove () {
        for (let i = 0; i < this.game.blocks.length; i++) {
            if (this.game.blocks[i] === this) {
                this.game.blocks.splice(i, 1)
                this.removed = true
                break
            }
        }
    }
    stop () {
        this.timers.forEach(e => clearInterval(e))
        this.timers = []
    }
    get automove () {
        const speedTable = [200, 150, 100, 50]
        return {
            left: (d, s, r = false) => {
                let i = 0
                const id = setInterval(() => {
                    this.x -= 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.automove.right(d, s, true)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            },
            right: (d, s, r = false) => {
                let i = 0
                const id = setInterval(() => {
                    this.x += 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.automove.left(d, s, true)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            },
            up: (d, s, r = false) => {
                let i = 0
                const id = setInterval(() => {
                    this.y += 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.automove.down(d, s, true)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            },
            down: (d, s, r = false) => {
                let i = 0
                const id = setInterval(() => {
                    this.y -= 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.automove.up(d, s, true)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            }
        }
    }
}

class Wall extends Block {
    constructor (game) {
        super(game)
        this.style = '#aaa'

        // read-only
        this.blocktype = 'wall'
    }
}

class Air extends Block {
    constructor (game) {
        super(game)
        this.isEntity = false
        this.style = '#eee'

        // read-only
        this.blocktype = 'air'
    }
}

class Human extends Block {
    constructor (game) {
        super(game)
        this.speed = 1
        this.strength = 3
        this.style = 'green'
        this.key = {
            left: 'a',
            right: 'd',
            up: 'w',
            down: 's'
        }

        // read-only
        this.lastmove = null
        this.blocktype = 'human'

        // private
        this.dropping = false

        setInterval(() => {
            if (!this.dropping && this.game.gravity) {
                // if there is no any collision, then drop
                if (!this.game.iscollision(this)) {
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

            if (!this.game.iscollision(this, collisionDirection)) {
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
    get go () {
        return {
            right: () => {
                if (!this.game.iscollision(this, [[1, 0]])) {
                    this.x++
                }
                this.lastmove = 'right'
            },
            left: () => {
                if (!this.game.iscollision(this, [[-1, 0]])) {
                    this.x--
                }
                this.lastmove = 'left'
            },
            up: () => {
                if (this.game.gravity) {
                    this.drop(1)
                    return
                }
                if (!this.game.iscollision(this, [[0, 1]])) {
                    this.y++
                }
                this.lastmove = 'up'
            },
            down: () => {
                if (this.game.gravity) {
                    return
                }
                if (!this.game.iscollision(this, [[0, -1]])) {
                    this.y--
                }
                this.lastmove = 'down'
            }
        }
    }
}

function S (v0, a, t) {
    return v0 * t + 1 / 2 * a * t * t
}
function G (s, v0, t) {
    return 2 * (s - v0 * t) / (t * t)
}
function V (v0, a, t) {
    return v0 + a * t
}