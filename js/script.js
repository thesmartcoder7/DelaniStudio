/* - - - footer copyright current year - - - */
let timeline = new Date
$(".current-year").text(timeline.getFullYear())

/* - - - what we do onclick handler - - - */
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
        let targetDivClass = e.target.className
        let targetDiv = document.querySelectorAll(`.${targetDivClass}`)
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
        let targetDivClass = e.target.className
        let backImage = e.target.firstElementChild
        let targetDiv = document.querySelectorAll(`.${targetDivClass}`)
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