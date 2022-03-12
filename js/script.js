/* - - - footer copyright current year - - - */
let timeline = new Date
$(".current-year").text(timeline.getFullYear())


/* - - - what we do onclick handler - - - */
// image onclick function
$(".default").click((e)=> {
    let siblingClassName = e.currentTarget.className.split(" ")[1]
    if(siblingClassName === "a"){
        $(".a").css('display','none')
        $(".description.a").css({
            'display': 'flex'
        })
    } else if(siblingClassName === "b"){
        $(".b").css('display','none')
        $(".description.b").css({
            'display': 'flex'
        })
    } else {
        $(".c").css('display','none')
        $(".description.c").css({
            'display': 'flex'
        })
    }
})

// description onclick function
$(".description").click((e)=> {
    let siblingClassName = e.currentTarget.className.split(" ")[1]
    if(siblingClassName === "a"){
        $(".a").css('display','none')
        $(".default.a").css({
            'display': 'flex'
        })
    } else if(siblingClassName === "b"){
        $(".b").css('display','none')
        $(".default.b").css({
            'display': 'flex'
        })
    } else {
        $(".c").css('display','none')
        $(".default.c").css({
            'display': 'flex'
        })
    }
})


/* - - - portfolio hover handler - - - */
let image = document.querySelectorAll(".item")
let texBox = document.querySelectorAll(".text-box")
let itemsArray = ["one", "two", "three", "four", "five", "six", "seven", "eight"]

//mouseover function
for(i=0; i<image.length; i++){
    image[i].addEventListener("mouseover", (e) => {
        let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
        let backImage = e.target.firstElementChild
        for(j=0; j<itemsArray.length; j++){
            if(hoverTextClass === itemsArray[j] ){
                $(`.${hoverTextClass}`).css({
                    'display': 'flex'
                })
                backImage.style.filter = 'brightness(50%)'
            }
        }   
    })
}

//mouseout function
for(i=0; i<image.length; i++){
    image[i].addEventListener("mouseout", (e) => {
        let hoverTextClass = e.target.lastElementChild.className.split(" ")[1]
        let backImage = e.target.firstElementChild
        for(j=0; j<itemsArray.length; j++){
            if(hoverTextClass === itemsArray[j] ){
                $(`.${hoverTextClass}`).css({
                    'display': 'none'
                })
                backImage.style.filter = 'brightness(100%)'
            }
        }   
    })
}

/* - - - form submission handler - - - */

// validation function
function validate(user, email, message){
    let emailRegex = /^[a-z\S\d]+@[a-z\d\S]+.[\Sa-z\d]$/
    if(user.value === ""){
        return "You have to fill in your name"
    }
    if (email.value === ""){
        return "You must fill in your email"
    }
    if (message.value === ""){
        return "Please include a message"
    }
    if(emailRegex.test(email.value) === false) {
        return "Please include a valid email"
    } 
}

// submission function
let form = document.querySelector('#form')
let userName = document.querySelector('#name')
let userEmail = document.querySelector("#email")
let message = document.querySelector("#message")
let popUp = document.querySelector('.successful')
form.addEventListener("submit", (e)=>{
    e.preventDefault()
    if(validate(userName, userEmail, message) === ""){
        alert(validate(userName, userEmail, message))
    } else {
        console.log(userEmail.value, userName.value, message.value)
    }
    form.style.display="none"
    popUp.style.display="block"
})

popUp.addEventListener("click", ()=> {
    popUp.style.display="none"
    form.style.display="block"
})


