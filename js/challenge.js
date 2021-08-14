//? pause the timer while disabling all buttons - LABEL: 'PAUSE' 'RESUME'
//? 'restart' => starts timer at 0 and enables all buttons

// ===============================================================
//*BEAUTIFUL OBJECT CONTAINER FOR DOM ELEMENT ACCESS
const docObjMod = {
    c: document.getElementById("counter"),
    
    ci: document.querySelector('[name="comment"]'),
    s: document.getElementById('submit'),
    
    m: document.querySelector('#minus'),
    p: document.querySelector('#plus'),
    
    h: document.querySelector('#heart'),
    l: document.querySelector('.likes'),
}
// ===============================================================
//? 🗹 UPON PAGE LOAD > timer increments by each second

setInterval( () => { 
    let grab = parseInt(docObjMod.c.innerText)
    docObjMod.c.innerText = grab + 1
}, 1000 )
// CONTINUE CALLING FUNCTION SPECIFIED until Window Closed || .clearInterval()
// REPEATEDLY CALL FUCNTION WITH A FIXED TIME DELAY BETWEEN EACH CALL

// ===============================================================
//? 🗹 SUBMIT COMMENTS

// LISTEN for submit button click, INVOKE FUNCTION
docObjMod.s.addEventListener('click', newCommentElement)

function newCommentElement(e) {
    // PREVENT DEFAULT SUBMIT BUTTON ACTION
    e.preventDefault()
    // GRAB THE VALUE OF THE COMMENT INPUT
    let grab = docObjMod.ci.value    
    
    // DEFINE ELEMENT CREATION
    let newEle = document.createElement("h1")
    newEle.innerText = grab
    
    // INJECT DEFINED ELEMENT INTO DOM
    document.body.appendChild(newEle)
}
// ===============================================================
//? 🗹 '+' & '-' ADJUSTS TIMER

docObjMod.p.addEventListener('click', inc)
function inc() {
    let grab = parseInt(docObjMod.c.innerText)
    docObjMod.c.innerText = grab + 1
}

docObjMod.m.addEventListener('click', dec)
function dec() {
    let grab = parseInt(docObjMod.c.innerText)
    docObjMod.c.innerText = grab - 1
}

// ===============================================================
//! YOU"RE ITERATING THROUGH THE UnORDERED LIST TO FIND MATCHING 
//! LIKE COUNTER ON TIMER NUMBER - adjust likescounter luego

//! MY MATH IS WRONG ?? - 2 items on list - WHY GOD WHY
//? 'heart' button CREATEs & DISPLAYs 'like' counter for current time on DOM
docObjMod.h.addEventListener('click', () => {
    
    //MAKE A NEW LIST ITEM WE CAN CHOOSE TO USE
    let newEle = document.createElement('li')    
    let grab = docObjMod.c.innerText //TIMER ON DOM
    newEle.dataset.timerCounter = grab //ATTRIBUTE = TIMER ON DOM
    // let lc = newEle.dataset.likesCounter = 1 //ANOTHER ATTRIBUTE
    newEle.innerText = `${grab} liked ${lc = 1} times`

    // CREATE ARRAY CONTAINING ALL LIST ITEMS EXISTING ON DOM
    const eles = document.getElementsByTagName('li')

    // LOOP THROUGH ENTIRE ARRAY'S LENGTH
    for (let i = 0; i <= eles.length; i++) {
        console.log(`DOM COUNTER: ${grab}`, `DATA COUNTER: ${eles[i].dataset.timerCounter}`)
        console.log(grab, eles[i].dataset.timerCounter)

        if(grab !== eles[i].dataset.timerCounter){
            console.log(grab == eles[i].dataset.timerCounter)
            docObjMod.l.appendChild(newEle)


        }
        



    }


    
    // ===============================================================
    }
)

// ===============================================================