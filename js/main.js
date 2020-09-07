$(function(){

  $('.burger-menu').on('click', function(){
    $('.hidden__slide').slideToggle()
  });

  // $('.quality__items').slick({
    
  //   // variableWidth: false
  // });
  $('.quality__items').slick({
    responsive: [
      {
        breakpoint: 900,
        settings: {
          infinite: true,
          slidesToShow: 1,
          centerMode: true,
          variableWidth: true,
          arrows: false
        }
      },
      {
        breakpoint: 2048,
        settings: "unslick"
      },
    ]
  });
});

$(".form-input__phone").mask("+7(999) 999-99 99");


$("#sec_form .request__form-btn").click(function(){

  if($("#sec_form .sec_name").val() == ''){
    $("#sec_form .sec_name").css('border', '1px solid red');
  } 
  else{
    $("#sec_form .sec_name").css('border', '1px solid #3e4241');
  }
  if($("#sec_form .sec_num").val() == ''){
    $("#sec_form .sec_num").css('border', '1px solid red');
  } 
  else{
    $("#sec_form .sec_num").css('border', '1px solid #3e4241');
  }
  

  if($("#sec_form .sec_name").val() != '' && $("#sec_form .sec_num").val() != ''){
  
  var number = $("#sec_form .sec_num").val();
  var name = $("#sec_form .sec_name").val();
  var method = $("#sec_form  :checked").attr('value');
  
    $.ajax({
      type: 'POST',
      url : 'first.php',
      dataType:'text',
      data: {"name": name,"number": number,"method": method},
      success:function(){
        ym(66688912,'reachGoal','podborka');
  $(".success").fadeToggle();
  
  
  setTimeout(() => {
    
    $(".success").fadeToggle();
  
  
  }, 3000);
  
  
  
       }
  });
  
  }
   //console.log($("#main_num").val()); 
  
    
  
  
  
  });
  


  $("#thir_form .request__form-btn").click(function(){

    if($("#thir_form .sec_name").val() == ''){
      $("#thir_form .sec_name").css('border', '1px solid red');
    } 
    else{
      $("#thir_form .sec_name").css('border', '1px solid #3e4241');
    }
    if($("#thir_form .sec_num").val() == ''){
      $("#thir_form .sec_num").css('border', '1px solid red');
    } 
    else{
      $("#thir_form .sec_num").css('border', '1px solid #3e4241');
    }
    
  
    if($("#thir_form .sec_name").val() != '' && $("#thir_form .sec_num").val() != ''){
    
    var number = $("#thir_form .sec_num").val();
    var name = $("#thir_form .sec_name").val();
    var method = $("#thir_form  :checked").attr('value');
    
      $.ajax({
        type: 'POST',
        url : 'first.php',
        dataType:'text',
        data: {"name": name,"number": number,"method": method},
        success:function(){
    
    $(".success").fadeToggle();
    
    
    setTimeout(() => {
      
      $(".success").fadeToggle();
    
    
    }, 3000);
    
    
    
         }
    });
    
    }
     //console.log($("#main_num").val()); 
    
      
    
    
    
    });
    