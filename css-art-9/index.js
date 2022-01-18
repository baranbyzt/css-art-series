



  $(document).ready(function(){


$(".main_content").hover(function(){
    $(this).css({
"background-color":"#333333"
});
    }, function(){
    $(this).css({
"background-color":"red"
    });
  });
$(".main_content").hover(function(){
    
    $(this)(
        $('#burger').removeClass('fas fa-bars'),
           $('#burger').addClass('fas fa-times'),

           $("#item_1").css({
            "bottom": "200px",
            "right": "170px"
        }),
        $("#item_2").css({
            "bottom": "200px",
            "left": "200px"
        }),
        $("#item_3").css({
            "bottom": "50px",
            "right": "220px"
        }),
        $("#item_4").css({
            "top": "200px",
          "right": "140px"
        }),
        $("#item_5").css({
            "top": "140px",
           "left": "200px"
        })
           
    );
    }, function(){
    $(this)(

        $('#burger').removeClass('fas fa-times'),
        $('#burger').addClass('fas fa-bars'),
        $("#item_1").css({
            "bottom": "50px",
            "right": "50px"
        }),
        $("#item_2").css({
            "bottom": "20px",
            "left": "80px"
        }),
        $("#item_3").css({
            "bottom": "50px",
            "right": "50px"
        }),
        $("#item_4").css({
            "top": "80px",
            "right": "0px"
        }),
        $("#item_5").css({
            "top": "80px",
            "left": "80px"
        })

    );
  });






  });
