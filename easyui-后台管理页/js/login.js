$(function(){
    $('#login-panel').dialog({
        title: '后台登录',
        width: 300,
        height: 180,
        iconCls: 'icon-login'
    })
    $('#manager').validatebox({
        required: true,
        missingMessage: '请正确输入管理员账号',
        invalidMessage: '管理员账号不正确'

    })
    $('#password').validatebox({
        required: true,
        validType: 'length[6,10]',
        missingMessage: '请正确输入管理员密码',
        invalidMessage: '管理员密码不正确'
    })
    $('.easyui-linkbutton').click(function (){
        console.log('btn')
        if(!$('#manager').validatebox("isValid")){
            $('#manager').focus()
        }else if(!$('#password').validatebox("isValid")){
            $('#password').focus()
        }else{
            $.ajax({
                usl:'123.php',
                type:'post',
                data:{
                    manager:$('#manager').val(),
                    password:$('#password').val()
                },
                beforeSend: function () {
                    $.messager.progress({
                        text:'正在登录中...'
                    })
                },
                success: function (data, response, status) {
                    $.messager.progress('close');
                    if(data > 0){
                        location.href = 'admin.html'
                    }else{
                        $.messager.alert('登录失败','用户账号或密码出错','warning',function(){
                            $('#password').select();
                        })
                    }
                }
            })
        }
    })
})