/* - - - footer current year - - -*/
let timeline = new Date
$(".current-year").text(timeline.getFullYear())

/* - - - what we do onclick section - - -*/
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

