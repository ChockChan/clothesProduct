$(document).keydown(function(e){
  if (e && e.keyCode == 13) {
    var isFocus = $("#userName").is(":focus");
    if (isFocus) {
      $("#userPassword").focus();
      return false;
    } else {
      checkUserLogin();
    }
  }
});


//登录验证
function checkUserLogin() {
  hideTips();
  var userName = $("#userName").val();
  var userPassword = $("#userPassword").val();
  var radioSelectedValue = $("input[name='userType']:checked").val();
  var url; /*接口地址*/

  $("#dosubmit").hide();
  $("#submiting").show();

  if (!checkName(userName)) {
    $("#submiting").hide();
    $("#dosubmit").show();
    return false;
  }

  else if (!checkPassword(userPassword)) {
    $("#submiting").hide();
    $("#dosubmit").show();
    return false;
  }
   
  else {
    var userInfo =  $('#myForm').serializeObject();
    userInfo.type = radioSelectedValue;

    // 判断登录的是哪一种帐号 管理员或者主管
    // if(radioSelectedValue == 'admin'){
      url = '/userLogin';
    // }else{
    //   url = '';
    // }

    // $.post('/userLogin',userInfo,function(data){
    //   if(data.return_code==0) {
    //     console.log(document.cookie);
    //     // 判断帐号登录类型 跳转至不同的系统页面
    //     if(radioSelectedValue == 'admin'){
    //       window.location.href="supervisorManagement.html";
    //     }else{
    //       window.location.href="planManagement.html";
    //     }
    //
    //   }
    //   else if(data.return_code==1){
    //     showTips("该用户名不存在");
    //     resetLoginInput();
    //     return false;
    //   }
    //   else if(data.return_code==2){
    //     showTips("密码错误，请重新登录");
    //     resetLoginInput();
    //     return false;
    //   }
    // });

    utils.doPost(
      url,
      JSON.stringify(userInfo),
      function success(data){
        if(data.return_code==0) {
          console.log(document.cookie);
          // 判断帐号登录类型 跳转至不同的系统页面
          if(radioSelectedValue == 'admin'){
            window.location.href="supervisorManagement.html";
          }else{
            window.location.href="planManagement.html";
          }

        }
        else if(data.return_code==1){
          showTips("该用户名不存在");
          resetLoginInput();
          return false;
        }
        else if(data.return_code==2){
          showTips("密码错误，请重新登录");
          resetLoginInput();
          return false;
        }
      }
    );
  }
}

//检查用户名(Name) 
function checkName(userName) {
  hideTips();
  if (userName.length < 1) {
    showTips("请输入用户名！");
    return false;
  } /*else if ((/^(\w-*\.*){5,16}\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/gi).test(userName) == false) {
    showTips("请输入有效的邮箱地址！");
    return false;
  }*/
  return true;
}


//检查密码
function checkPassword(userPassword) {
  hideTips();

  if (userPassword.replace(/(^\s*)|(\s*$)/g,"")=="") {
    showTips("请输入密码！");
    return false;
  } 
  else if (userPassword.length < 6) {
    showTips("密码不能小于6位");
    return false;
  }
  else if (userPassword.length > 16) {
    showTips("密码不能大于16位");
    return false;
  }
  return true;
}

function resetLoginInput(){
    $("#userName").focus(); //默认焦点  
    $("#userPassword").val("");  
    $("#submiting").hide();
    $("#dosubmit").show();
}

function showTips(nr) {
  $("#Enr").html("<div class=\"notice-cont\">" + nr + "</div>");
  $("#Enr").show();
}

function hideTips() {
  $("#Enr").hide();
}