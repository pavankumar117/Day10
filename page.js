$(document).ready(function() {
  $('#signin').click(function(){//function for showing sign in page
    $('#signinb').show();
    $('#signupb').hide();
  });

  $('#signup').click(function(){//function for showing sign in page
    $('#signupb').show();
    $('#signinb').hide();
  });


  $('#checkin').click(function(){//function for login page
    var u = document.getElementById('username').value;
    var p = document.getElementById('password').value;
    if(u == ''){
      alert('enter username!');
    }
    else if(p == ''){
      alert('enter password');
    }
    else{
      $('#account').show();
      console.log('hello');
      $('#signinb').hide();
      $('#signupb').hide();

    }

  });
});
