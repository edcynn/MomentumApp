
const today = new Date();
var options = {hour: '2-digit', minute: '2-digit'};
var time = today.toLocaleString('en-US', options);

const main = document.querySelector('#mainsec')
const divTime = document.querySelector('#timebox')
const divGreeting = document.querySelector('#greetingbox')
const toggle = document.querySelector('#toggle')
const listUL = document.querySelector('.todoul')
const toDoLabel = document.querySelector('#todolabel')
const todoBox = document.querySelector('.todobox')
const todoList = document.querySelectorAll('.todolist')
const todoField = document.querySelector('#todo-field')
const todotitle = document.querySelector('#todotitle')
const removeBtn = document.querySelector('#remove')
const body = document.getElementsByTagName("BODY")[0]

const questionDiv = document.querySelector('#questionbox')
const answerField = document.querySelector('#answer-field')
const newField = document.createElement('input')
const focus = document.querySelector('#focus')
const exit = document.querySelector('.close')
const quote = document.querySelector('#quote')
const quoteBtn = document.querySelector('#quoteBtn')
const quoteBox = document.querySelector('#quotebox')
const quoteLabel = document.querySelector('#quotelabel')
const focusDiv = document.querySelector('#focusdiv')
const focusBox = document.querySelector('#focusbox')
const align = document.querySelector('.align')
const quotesec = document.querySelector('#quotesec2')
const refreshBox = document.querySelector('#refreshbox')
const refreshBtn = document.querySelector('#refreshBtn')
const timeFormat = document.querySelector('#time-format')
const timeDiv = document.querySelector('#time-division')
const clockIcon = document.querySelector('#clock-icon')
const settingsIcon = document.querySelector('#settings-icon')
const settingsBox = document.querySelector('.settingsbox')
const settingsToggle = document.querySelector('#settings-toggle')
const settingsSec = document.querySelector('#settings-sec')
const timeSwitch = document.querySelector('#timeswitch')
const hideTime = document.querySelector('#hide-time')
const hideGreeting = document.querySelector('#hide-greeting')
const hideFocus = document.querySelector('#hide-focus')

timeDiv.style.visibility = 'hidden'
settingsToggle.style.display = 'none'
settingsBox.style.display = 'none'
settingsIcon.style.display = 'none'
main.style.marginTop = '115px'
timeFormat.style.display = 'none'
clockIcon.style.display = 'none'

divTime.classList.add('time-style')
divGreeting.classList.add('greeting-style')
questionDiv.classList.add('question-style')
answerField.classList.add('namefield')
quote.classList.add('quote')
todoField.classList.add('todofield')
toDoLabel.classList.add('todolabel')
todoBox.classList.add('todobox-style')


clockIcon.style.display = 'none'
timeFormat.style.display ='none'
divTime.style.visibility = 'hidden'
divTime.style.opacity = '0'
divTime.style.transition = 'opacity 1s'
divGreeting.style.opacity = '0'
divGreeting.style.transition = 'opacity 1s'

quoteBtn.style.display = 'none'
quoteLabel.style.display = 'none'
quote.textContent = '"Yesterday, you said tomorrow"'
quote.style.display = 'none'
quoteBox.style.visibility = 'hidden'
refreshBtn.style.visibility = 'hidden'
removeBtn.style.display = 'none'

questionDiv.textContent = 'Hello, What is your name?'
newField.style.display = 'none'
todotitle.style.display = 'none'
todotitle.style.marginBottom = '4px'
todotitle.style.textAlign = 'left'

toggle.style.display = 'none'
listUL.style.display = 'none'

answerField.addEventListener('keypress', function (a) {

    if (a.key === 'Enter' && answerField.value != 0) {

        let answer = answerField.value
        
        main.style.marginTop = '0px'
        timeDiv.style.visibility = 'visible'
        divTime.style.visibility = 'visible'
        divTime.style.color = 'white'
        divTime.style.opacity = '1'
        divTime.style.transition = 'opacity 1s'

        divGreeting.style.color = 'white'
        divGreeting.style.opacity = '1'
        divGreeting.style.transition = 'opacity 1s'

        questionDiv.style.color = 'white'
        questionDiv.style.fontSize = '35px'
        questionDiv.textContent = 'What is your main focus today?'

        answerField.style.display = 'none'
        newField.style.display = 'block'
        newField.classList.add('newfield')
        
        settingsIcon.style.display = 'block'
        toDoLabel.style.display = 'block'

        quote.style.display = 'block'
        quoteLabel.style.display = 'block'
        quoteBtn.style.display = 'none'
        refreshBtn.style.visibility = 'visible'

        divTime.textContent = time;

        if (options.hour < 12) {
            if (options.hour <10) {
            divGreeting.textContent= 'Good morning, '+ answer + '.'
            }
            else 
            divGreeting.textContent= 'Good morning, '+ answer + '.'
            body.classList.add('morning-body')

          } else if (options.hour > 11 && options.hour < 18) {
          
            divGreeting.textContent='Good afternoon, '+ answer + '.'
            body.classList.add('afternoon-body')
            
          } else {
            divGreeting.textContent='Good evening, '+ answer + '.'
            body.classList.add('evening-body')
          }
        divTime.style.marginTop = '180px'
        main.appendChild(newField)
    }
})

const showClock = () => {
    timeFormat.style.display = 'block'
    clockIcon.style.display = 'block'
}

const hideClock = () => {
    timeFormat.style.display = 'none'
    clockIcon.style.display = 'none'
}

timeSwitch.addEventListener('click', () => {
    if (timeSwitch.checked) {
        options = {hour: '2-digit', minute: '2-digit', hour12: false};
        var time = today.toLocaleString('en-US', options);
        divTime.textContent = time;
    }
    else options = {hour: '2-digit', minute: '2-digit', hour12: true};
    var time = today.toLocaleString('en-US', options);
    divTime.textContent = time;
})



newField.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' && newField.value != 0) {
        
        divTime.style.opacity = '1'
        divTime.style.transition = 'opacity 1s'
        questionDiv.textContent = "YOUR FOCUS TODAY"
        let anotherAnswer = newField.value
        newfocus = document.createElement('p')
        newfocus.textContent = anotherAnswer
        focusDiv.appendChild(newfocus)
        newField.style.display = 'none'
        newfocus.style.fontFamily = 'Verdana'
        newfocus.style.textAlign = 'right'
        newfocus.style.position = 'bottom'
        newfocus.style.color = 'white'
        newfocus.style.fontSize = '30px'
        newfocus.style.fontWeight = 'bold'
        newfocus.style.marginBottom = '17px'
        removeBtn.style.marginBottom = '17px'
    }

})

const showBtn = () => {
    removeBtn.style.display = 'block'
}

const hideBtn = () => {
    removeBtn.style.display = 'none'
}

focusBox.addEventListener('mouseover', ()=> {
    showBtn();
})

focusBox.addEventListener('mouseout', ()=> {
    hideBtn();
})

removeBtn.addEventListener('click', function remove(){
    
    newField.style.display = 'block'
    newField.value = ""
    newfocus.style.display = 'none'
    removeBtn.style.display = 'none'
    
})

hideTime.addEventListener('change', () => {
    if (hideTime.checked) {
        divTime.style.visibility = 'hidden'
    }
    else divTime.style.visibility = 'visible'
})

hideGreeting.addEventListener('change', () => {
    if (hideGreeting.checked) {
        divGreeting.style.visibility = 'hidden'
    }
    else divGreeting.style.visibility = 'visible'
})

settingsToggle.addEventListener('change', () => {

    if(settingsToggle.checked) {
        settingsBox.style.display = 'block'
    }
    else settingsBox.style.display = 'none'
})

for (let i=0; i<todoList.length; i++) {
    todo = todoList[i]
    todo.style.listStyleType = 'none'
}

toggle.addEventListener('change', function() {

    if (toggle.checked) {
        todotitle.style.color = 'rgba(241, 237, 237, 0.9)'
        todoBox.style.visibility = 'visible'
        
        todoField.style.display = 'block'
        listUL.style.display = 'block'
        todoField.style.border = 'none'
        todoField.style.outline = 'none'
        todoField.classList.add('placeholderstyle')
        todotitle.style.display = 'block'

    } else {
        listUL.style.display = 'none'
        todoField.style.display = 'none'
        todoBox.style.visibility = 'hidden'
        todotitle.style.display = 'none'
    }
  });
  
todoField.addEventListener('keypress', function (b) {

    if (b.key === 'Enter' && todoField.value != 0) {
        let newtodo = todoField.value
        
        newli = document.createElement('li')
        toDo = document.createElement('p')
        const xBtn = document.createElement("button")

        todotitle.textContent = 'To do List'
        todotitle.style.height = '30px'
        todotitle.style.paddingBottom = '10px'
        todotitle.style.borderBottom = 'solid white 1px'
        todotitle.style.marginBottom = '10px'
        todotitle.style.fontFamily = 'verdana'

        xBtn.style.backgroundColor = 'transparent'
        xBtn.textContent = 'x'
        xBtn.style.fontSize = '15px'
        xBtn.style.border = 'none'
        xBtn.style.color = 'white'
       
        newli.classList.add('new-todo')
        newli.style.fontFamily = 'verdana'
        newli.style.fontSize = '15px'
        toDo.textContent = newtodo
        newli.appendChild(toDo)
        newli.appendChild(xBtn)
        listUL.appendChild(newli)
        todoField.value = ""
        
        xBtn.addEventListener('click', () => {
            const parent = xBtn.parentNode;
            parent.style.display = 'none'
        })
    }
})


quoteBtn.addEventListener('change', () => {

    if (quoteBtn.checked) {
        quoteBox.style.visibility = 'visible'
        
    } else {
        quoteBox.style.visibility = 'hidden'
    }
  })

const quotes = ['"Yesterday, you said tomorrow"']

quoteBox.addEventListener('keypress', (c) => {

    if (c.key === "Enter" && quoteBox.value != 0) {
        let newquote = quoteBox.value
        quotes.push('"'+newquote+'"')
        quoteBox.value = ""
    }
})

let i = 0;

refreshBtn.addEventListener('click', () => {
    i++;
    if (i === quotes.length) {
        i = 0;
    }
    quote.textContent = quotes[i];
})










