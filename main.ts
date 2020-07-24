// 抚摸
input.onButtonPressed(Button.A, function () {
    music.startMelody(music.builtInMelody(Melodies.JumpUp), MelodyOptions.Once)
    暂停 = true
    health += 5
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
    暂停 = false
})
// 检查健康状况
input.onButtonPressed(Button.AB, function () {
    led.plotBarGraph(
    health,
    100
    )
})
// 喂食
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
    暂停 = true
    health += 5
    basic.showLeds(`
        . # . . .
        . . # . .
        . # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # # .
        . # # # .
        . # # # .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        `)
    basic.clearScreen()
    暂停 = false
})
function born () {
    _1 = images.createImage(`
        . . # # .
        . . . # .
        . . . # #
        . . . # #
        . . . . .
        `)
    _2 = images.createImage(`
        . . # # .
        . . . # .
        . . . # #
        . . # . #
        . . . . .
        `)
    _3 = images.createImage(`
        . # # . .
        . . # . .
        . . # # .
        . . # # .
        . . . . .
        `)
    _4 = images.createImage(`
        . # # . .
        . . # . .
        . . # # .
        . # . # .
        . . . . .
        `)
    _5 = images.createImage(`
        # # . . .
        . # . . .
        . # # . .
        . # # . .
        . . . . .
        `)
    _6 = images.createImage(`
        # # . . .
        . # . . .
        . # # . .
        # . # . .
        . . . . .
        `)
    _7 = images.createImage(`
        # . . . .
        # . . . .
        # # . . .
        # # . . .
        . . . . .
        `)
    _8 = images.createImage(`
        # . . . .
        # . . . .
        # # . . .
        . # . . .
        . . . . .
        `)
    _9 = images.createImage(`
        . . . . .
        . . . . .
        # . . . .
        # . . . .
        . . . . .
        `)
    list = [_1, _2, _3, _4, _5, _6, _7, _8, _9]
}
function walking () {
    for (let index = 0; index <= 8; index++) {
        list[index].showImage(0)
        basic.pause(100)
        if (暂停) {
            break;
        } else {
            continue;
        }
    }
}
// 开机，播放音乐；
// 生命值初始化；
// 游戏结束变量初始化。
let list: Image[] = []
let 暂停 = false
let health = 0
let _9: Image = null
let _8: Image = null
let _7: Image = null
let _6: Image = null
let _5: Image = null
let _4: Image = null
let _3: Image = null
let _2: Image = null
let _1: Image = null
born()
music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
health = 100
let Gameover = false
暂停 = false
walking()
basic.forever(function () {
    // 每秒减去2的
    health += -2
    basic.pause(1000)
    // 游戏没有结束，宠物继续走动，相反，则游戏结束
    if (Gameover) {
        music.startMelody(music.builtInMelody(Melodies.Funeral), MelodyOptions.Once)
        basic.showString("Game over!")
    } else {
        walking()
    }
    if (health < 1) {
        basic.showLeds(`
            . . . . .
            . # # . .
            . # # . .
            . . # . .
            . . # # .
            `)
        Gameover = true
    }
})
