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

    gridsOn () {
    }

    gridsOff () {
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
            }
        })
    }

    drawWin () {
        this.canvasCtx.fillStyle = 'green'
        this.canvasCtx.font = this.width + 'px Microsoft YaHei'
        this.canvasCtx.textAlign = 'center'
        this.canvasCtx.textBaseline = 'middle'
        this.canvasCtx.fillText('You Win!', this.canvas.width / 2, this.canvas.height / 2)
    }

    drawLose () {
        this.canvasCtx.fillStyle = 'tomato'
        this.canvasCtx.font = this.width + 'px Microsoft YaHei'
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
            alert('没有' + blockType + '类型，请检查你的输入')
        }
        this.drawFrame()
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
                    humanBlocks.filter(b => b.leftKey === 'left').forEach(b => {
                        b.go.left()
                    })
                    break
                case 'keya':
                    humanBlocks.filter(b => b.leftKey === 'a').forEach(b => {
                        b.go.left()
                    })
                    break
                case 'arrowright':
                    humanBlocks.filter(b => b.rightKey === 'right').forEach(b => {
                        b.go.right()
                    })
                    break
                case 'keyd':
                    humanBlocks.filter(b => b.rightKey === 'd').forEach(b => {
                        b.go.right()
                    })
                    break
                case 'keyw':
                    humanBlocks.filter(b => b.upKey === 'w').forEach(b => {
                        b.go.up()
                    })
                    break
                case 'arrowup':
                    humanBlocks.filter(b => b.upKey === 'arrowup').forEach(b => {
                        b.go.up()
                    })
                    break
                case 'arrowdown':
                    humanBlocks.filter(b => b.downKey === 'arrowdown').forEach(b => {
                        b.go.down()
                    })
                    break
                case 'keys':
                    humanBlocks.filter(b => b.downKey === 's').forEach(b => {
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
    constructor () {
        this.height = 1
        this.width = 1
        this.style = 0
        this.isEntity = true
        this.onMove

        // read-only
        this.blockType = 'block'
        this.lastX = 0
        this.lastY = 0

        // private
        this._x = 0
        this._y = 0
        this.timers = []
    }
    set x (v) {
        this.lastX = this._x
        this.lastY = this._y
        this._x = v
        this.execOnMove()
    }
    get x () {
        return this._x
    }
    set y (v) {
        this.lastX = this._x
        this.lastY = this._y
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
        const speedTable = [200, 150, 100, 50]
        return {
            left: (d, r, s) => {
                let i = 0
                const id = setInterval(() => {
                    this.x -= 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.right(d, true, s)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            },
            right: (d, r, s) => {
                let i = 0
                const id = setInterval(() => {
                    this.x += 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.left(d, true, s)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            },
            up: (d, r, s) => {
                let i = 0
                const id = setInterval(() => {
                    this.y += 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.down(d, true, s)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            },
            down: (d, r, s) => {
                let i = 0
                const id = setInterval(() => {
                    this.y -= 1
                    i++
                    if (i === d) {
                        clearInterval(id)
                        if (r) {
                            this.autoMove.up(d, true, s)
                        }
                    }
                }, speedTable[s - 1] || 200)
                this.timers.push(id)
            }
        }
    }
}

class Wall extends Block {
    constructor () {
        super()
        this.style = '#aaa'

        // read-only
        this.blockType = 'wall'
    }
}

class Cloud extends Block {
    constructor () {
        super()
        this.isEntity = false
        this.style = '#eee'

        // read-only
        this.blockType = 'cloud'
    }
}

class Human extends Block {
    constructor (game) {
        super()
        this.leftKey = 'a'
        this.rightKey = 'd'
        this.upKey = 'w'
        this.downKey = 's'
        this.speed = 1
        this.strength = 3
        this.style = 'green'

        // read-only
        this.lastKey = null
        this.blockType = 'human'

        // private
        this.dropping = false
        this.game = game

        setInterval(() => {
            if (!this.dropping && this.game.gravity) {
                // if there is no any collision, then drop
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
    get go () {
        return {
            right: () => {
                if (!this.game.isCollision(this, [[1, 0]])) {
                    this.x++
                }
                this.lastKey = 'right'
            },
            left: () => {
                if (!this.game.isCollision(this, [[-1, 0]])) {
                    this.x--
                }
                this.lastKey = 'left'
            },
            up: () => {
                if (this.game.gravity) {
                    this.drop(1)
                    return
                }
                if (!this.game.isCollision(this, [[0, 1]])) {
                    this.y++
                }
                this.lastKey = 'up'
            },
            down: () => {
                if (this.game.gravity) {
                    return
                }
                if (!this.game.isCollision(this, [[0, -1]])) {
                    this.y--
                }
                this.lastKey = 'down'
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