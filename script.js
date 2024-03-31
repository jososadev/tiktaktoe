/*
 * Name: Tik Tak Toe
 *
 */

const PLAYERS = ['X', 'O']

const areEqual = (values) => {
    const val1 = values[0].innerText
    const val2 = values[1].innerText
    const val3 = values[2].innerText

    return ['X', 'O'].includes(val1) && val1 === val2 && val2 === val3
}

const compareHorizontal = (elements) => {
    const first = areEqual([elements[0], elements[1], elements[2]])
    const second = areEqual([elements[3], elements[4], elements[5]])
    const thirst = areEqual([elements[6], elements[7], elements[8]])

    return first || second || thirst
}

const compareDiagonal = (elements) => {
    const first = areEqual([elements[0], elements[4], elements[8]])
    const second = areEqual([elements[6], elements[4], elements[2]])

    return first || second
}

const compareVertical = (elements) => {
    const first = areEqual([elements[0], elements[3], elements[6]])
    const second = areEqual([elements[1], elements[4], elements[7]])
    const thirst = areEqual([elements[2], elements[5], elements[8]])

    return first || second || thirst
}

const isThereAWinner = (elements) => {
    const sameHorizontal = compareHorizontal(elements)
    const sameVertical = compareVertical(elements)
    const sameDiagonal = compareDiagonal(elements)

    return sameHorizontal || sameVertical || sameDiagonal
}

const reset = (elements) => {
    elements.forEach((element) => {
        element.innerText = ''
    })
}

const TIK_TAK_TOE = () => {
    let CURRENT_PLAYER = 0

    // Getting label
    const label = document.getElementById('label')

    // Getting all the boxes
    const col1 = document.getElementById('col1')
    const col2 = document.getElementById('col2')
    const col3 = document.getElementById('col3')
    
    const col4 = document.getElementById('col4')
    const col5 = document.getElementById('col5')
    const col6 = document.getElementById('col6')

    const col7 = document.getElementById('col7')
    const col8 = document.getElementById('col8')
    const col9 = document.getElementById('col9')

    const elements = [col1, col2, col3, col4, col5, col6, col7, col8, col9]

    elements.forEach((element, index) => {
        element.addEventListener('click', () => {
            if(label.innerText.includes('WON!!')) {
                CURRENT_PLAYER = 0

                reset(elements)
            }

            const currentValue = element.innerText

            if(!currentValue) {
                label.innerText = 'IN PROGRESS'
                
                element.innerText = PLAYERS[CURRENT_PLAYER]

                const win = isThereAWinner(elements)

                if(win) {
                    label.innerText = `${PLAYERS[CURRENT_PLAYER]} WON!!`
                }

                CURRENT_PLAYER = CURRENT_PLAYER === 0 ? 1 : 0
            }
        })
    })
}

window.addEventListener("load", () => {
    TIK_TAK_TOE()
})