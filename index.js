let homeScore = 0
let guestScore = 0
let periodScore = 0

function add(targetId, amount) {
    targetEl = document.getElementById(targetId)
    if (targetId == 'score-home') {
        homeScore += amount
        targetEl.textContent = homeScore
    } else if (targetId == 'score-guest') {
        guestScore += amount
        targetEl.textContent = guestScore     
    }
}

function period() {
    periodScore++
    targetEl = document.getElementById('periodNum')
    targetEl.textContent = periodScore 
}

function resetGame() {
    homeScore = 0
    guestScore = 0
    periodScore = 0
    document.getElementById('score-home').textContent = homeScore
    document.getElementById('score-guest').textContent = guestScore
    document.getElementById('periodNum').textContent = periodScore
}