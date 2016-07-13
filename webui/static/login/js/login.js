function login(){
    document.getElementById("button").disabled=true;
    $(document.body).ready(function() {
        document.getElementById("button").style.background = "#808080";
    });
    name = document.getElementById('username').value;
    passwd = document.getElementById('password').value;
    var postData = {
        "checksession":'false',
        "login": 'true',
        "username": name,
        "passwd": passwd
    }
    $.ajax({
        type: "POST",
        url: '../',
        data: postData,
        async: false,
        success: function(ResponseText) {
            if(ResponseText == ''){
                document.getElementById("button").disabled=false;
                document.getElementById("button").style.background = "#ef4300";
                error_msg.innerText = "Account number error,please input again！"
            }
            else{
                alert('Login success!')
                $("html").html(ResponseText);
                do_document_ready();
                document.querySelector("#img_username_id").title = 'user:'+name;
            }
        }
    });
    //var css = document.getElementById('div_main_id');
    //css.setAttribute("href","../static/css/Style.css");
    //css.setAttribute("href","../static/css/TableStyle.css");
    //css.setAttribute("href","../static/css/NavStyle.css");
    //css.setAttribute("href","../static/css/markdown.css");
    //css.setAttribute("href","../static/bootstrap3.3.5/css/bootstrap.min.css");
    //css.setAttribute("href","../static/bootstrap3.3.5/css/bootstrap-theme.min.css");
}
function onload(){
    var postData = {
            "checksession": 'true'
    }
    $.ajax({
        type: "POST",
        url: '../',
        data: postData,
        async: false,
        success: function(ResponseText) {
            $("html").html(ResponseText);
            do_document_ready();
            document.querySelector("#img_username_id").title = 'user:'+name;
        }
    });
    
}
function Logout(){
    if (!confirm("Sure log out？")) { 
        window.event.returnValue = false; 
    } 
    else{
	    var postData = {
            "login": 'false'
        }
        $.ajax({
            type: "POST",
            url: '../',
            data: postData,
            async: false,
            success: function(ResponseText) {
                $("html").html(ResponseText);
                do_document_ready();
                window.location.reload();
            }
        });

    }

}

