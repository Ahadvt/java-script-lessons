$(document).ready(function(){
    $("div[data-id=1]").click(function(){
        $("#1").slideToggle()

        $("div[data-id=1] svg").css
        ({
            "transform": "rotateZ(180deg)"
        })
    })
    $("div[data-id=2]").click(function(){
        $("#2").slideToggle()
        $("#1").slideUp()
        $("div[data-id=2] svg").css
        ({
            "transform": "rotateZ(180deg)"
        })
        $("div[data-id=1] svg").css
        ({
            "transform": "rotateZ(0)"
        })
    })
    $("div[data-id=3]").click(function(){
        $("#3").slideToggle()
        $("#2").slideUp()
        $("div[data-id=3] svg").css
        ({
            "transform": "rotateZ(180deg)"
        })
        $("div[data-id=2] svg").css
        ({
            "transform": "rotateZ(0)"
        })
    })
    $("div[data-id=4]").click(function(){
        $("#4").slideToggle()
        $("#3").slideUp()
        $("div[data-id=4] svg").css
        ({
            "transform": "rotateZ(180deg)"
        })
        $("div[data-id=3] svg").css
        ({
            "transform": "rotateZ(0)"
        })
    })
    $("div[data-id=5]").click(function(){
        $("#5").slideToggle()
        $("#4").slideUp()
        $("div[data-id=5] svg").css
        ({
            "transform": "rotateZ(180deg)"
        })
        $("div[data-id=4] svg").css
        ({
            "transform": "rotateZ(0)"
        })
    })
})