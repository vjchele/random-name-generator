/**
 * This is a random name generator. picks a random name from a list
 */
input.onButtonPressed(Button.A, function () {
    basic.showString("" + (text_list[randint(0, text_list.length - 1)]))
})
let text_list: string[] = []
text_list = ["VIJAY", "SATISH", "BARGHAV", "RIDHAAN", "SANKETH"]
