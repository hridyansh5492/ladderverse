let tog = 1
let rollingSound = new Audio('../audio/rpg-dice-rolling-95182.mp3')
let winSound = new Audio('../audio/winharpsichord-39642.mp3')
let music=new Audio('../audio/music.mp3')

let p1sum = 0
let p2sum = 0
let p3sum = 0
let p4sum = 0

music.loop=true;
music.play()

function disableScrolling() {
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
}
disableScrolling();

function play(player, psum, correction, num) {
    let sum
    if (psum == 'p1sum') {

        p1sum = p1sum + num

        if (p1sum > 100) {
            p1sum = p1sum - num
        }

        if (p1sum == 5) {
            p1sum = 24
        }
        if (p1sum == 12) {
            p1sum = 33
        }
        if (p1sum == 36) {
            p1sum = 75
        }
        if (p1sum == 62) {
            p1sum = 81
        }
        if (p1sum == 68) {
            p1sum = 87
        }
        if (p1sum == 99) {
            p1sum = 76
        }
        if (p1sum == 63) {
            p1sum = 41
        }
        if (p1sum == 71) {
            p1sum = 49
        }
        if (p1sum == 44) {
            p1sum = 21
        }
        if (p1sum == 46) {
            p1sum = 13
        }

        sum = p1sum;
    }

    if (psum == 'p2sum') {

        p2sum = p2sum + num

        if (p2sum > 100) {
            p2sum = p2sum - num
        }

        if (p2sum == 5) {
            p2sum = 24
        }
        if (p2sum == 12) {
            p2sum = 33
        }
        if (p2sum == 36) {
            p2sum = 75
        }
        if (p2sum == 62) {
            p2sum = 81
        }
        if (p2sum == 68) {
            p2sum = 87
        }
        if (p2sum == 99) {
            p2sum = 76
        }
        if (p2sum == 63) {
            p2sum = 41
        }
        if (p2sum == 71) {
            p2sum = 49
        }
        if (p2sum == 44) {
            p2sum = 21
        }
        if (p2sum == 46) {
            p2sum = 13
        }

        sum = p2sum;
    }

    if (psum == 'p3sum') {

        p3sum = p3sum + num

        if (p3sum > 100) {
            p3sum = p3sum - num
        }

        if (p3sum == 5) {
            p3sum = 24
        }
        if (p3sum == 12) {
            p3sum = 33
        }
        if (p3sum == 36) {
            p3sum = 75
        }
        if (p3sum == 62) {
            p3sum = 81
        }
        if (p3sum == 68) {
            p3sum = 87
        }
        if (p3sum == 99) {
            p3sum = 76
        }
        if (p3sum == 63) {
            p3sum = 41
        }
        if (p3sum == 71) {
            p3sum = 49
        }
        if (p3sum == 44) {
            p3sum = 21
        }
        if (p3sum == 46) {
            p3sum = 13
        }

        sum = p3sum;
    }

    if (psum == 'p4sum') {

        p4sum = p4sum + num

        if (p4sum > 100) {
            p4sum = p4sum - num
        }

        if (p4sum == 5) {
            p4sum = 24
        }
        if (p4sum == 12) {
            p4sum = 33
        }
        if (p4sum == 36) {
            p4sum = 75
        }
        if (p4sum == 62) {
            p4sum = 81
        }
        if (p4sum == 68) {
            p4sum = 87
        }
        if (p4sum == 99) {
            p4sum = 76
        }
        if (p4sum == 63) {
            p4sum = 41
        }
        if (p4sum == 71) {
            p4sum = 49
        }
        if (p4sum == 44) {
            p4sum = 21
        }
        if (p4sum == 46) {
            p4sum = 13
        }

        sum = p4sum;
    }

    document.getElementById(`${player}`).style.transition = `linear all .5s`

    if (sum < 10) {
        document.getElementById(`${player}`).style.left = `${(sum - 1) * 62}px`
        document.getElementById(`${player}`).style.top = `${-0 * 62 - correction}px`
    }

    else if (sum == 100) {
        winSound.play()
        music.pause()
        if (player == 'p1') {
            alert("Red Won !!")
        }
        else if (player == 'p2') {
            alert("Yellow Won !!")
        }
        else if (player == 'p3') {
            alert("Green Won !!")
        }
        else if (player == 'p4') {
            alert("Blue Won !!")
        }
        location.reload()
    }

    else {
        numarr = Array.from(String(sum))
        n1 = parseInt(numarr.shift())
        n2 = parseInt(numarr.pop())

        if (n1 % 2 != 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(9) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(9 - (n2 - 1)) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
        else if (n1 % 2 == 0) {

            if (n2 == 0) {
                document.getElementById(`${player}`).style.left = `${(0) * 62}px`
                document.getElementById(`${player}`).style.top = `${(-n1 + 1) * 62 - correction}px`
            }
            else {
                document.getElementById(`${player}`).style.left = `${(n2 - 1) * 62}px`
                document.getElementById(`${player}`).style.top = `${-n1 * 62 - correction}px`
            }
        }
    }
}

document.getElementById("diceBtn").addEventListener("click", function () {
    rollingSound.play()
    let num = Math.floor(Math.random() * 6) + 1
    document.getElementById("dice").innerText = num
    document.getElementById("diceCnt").src = `../images/dice/${num}.svg`

    if (tog % 4 == 1) {
        document.getElementById('tog').innerText = "Yellow's Turn : "
        play('p1', 'p1sum', 0, num)
    }

    else if (tog % 4 == 2) {
        document.getElementById('tog').innerText = "Green's Turn : "
        play('p2', 'p2sum', 55, num)
    }

    else if (tog % 4 == 3) {
        document.getElementById('tog').innerText = "Blue's Turn : "
        play('p3', 'p3sum', 110, num)
    }

    else if (tog % 4 == 0) {
        document.getElementById('tog').innerText = "Red's Turn : "
        play('p4', 'p4sum', 165, num)
    }

    tog = tog + 1
})
