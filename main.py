"""

喂食

"""

def on_button_pressed_a():
    global 暂停, health
    暂停 = True
    music.start_melody(music.built_in_melody(Melodies.POWER_UP), MelodyOptions.ONCE)
    health += 5
    basic.show_leds("""
        . # . . .
        . . # . .
        . # # # .
        # # # # .
        # # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . # # # .
        # # # # .
        # # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . # # .
        . # # # .
        . # # # .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        """)
    basic.show_leds("""
        . . . . .
        . . . . .
        . . . . .
        . # # . .
        . # # . .
        """)
    暂停 = False
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_ab():
    basic.show_number(health)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

"""

抚摸

"""

def on_button_pressed_b():
    global 暂停, health
    暂停 = True
    music.start_melody(music.built_in_melody(Melodies.JUMP_UP), MelodyOptions.ONCE)
    health += 5
    basic.show_icon(IconNames.HAPPY)
    暂停 = False
input.on_button_pressed(Button.B, on_button_pressed_b)

暂停 = False
health = 0
music.start_melody(music.built_in_melody(Melodies.ENTERTAINER),
    MelodyOptions.ONCE)
health = 100
Gameover = False
暂停 = False

def on_forever():
    global health, Gameover
    health += -2
    basic.pause(1000)
    if not (Gameover):
        basic.show_leds("""
            . . # # .
            . . . # .
            . . . # #
            . . . # #
            . . . . .
            """)
        basic.show_leds("""
            . . # # .
            . . . # .
            . . . # #
            . . # . #
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . . # . .
            . . # # .
            . . # # .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . . # . .
            . . # # .
            . # . # .
            . . . . .
            """)
        basic.show_leds("""
            # # . . .
            . # . . .
            . # # . .
            . # # . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # . . .
            # # . . .
            # # . . .
            . . . . .
            """)
        basic.show_leds("""
            . # # . .
            . # . . .
            # # . . .
            # . # . .
            . . . . .
            """)
        basic.show_leds("""
            . . # # .
            . . # . .
            . # # . .
            . # # . .
            . . . . .
            """)
        basic.show_leds("""
            . . # # .
            . . # . .
            . # # . .
            . # . # .
            . . . . .
            """)
        basic.show_leds("""
            . . . # #
            . . . # .
            . . # # .
            . . # # .
            . . . . .
            """)
    else:
        music.start_melody(music.built_in_melody(Melodies.FUNERAL), MelodyOptions.ONCE)
        basic.show_string("Game over!")
    if health < 1:
        basic.show_leds("""
            . . . . .
            . # # . .
            . # # . .
            . . # . .
            . . # # .
            """)
        Gameover = True
basic.forever(on_forever)
