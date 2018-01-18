/**
 * Author： lzhuo_1995@163.com
 * Date：2017/11/28
 */

'use strict';

//checkbox 全选/取消全选
var isCheckAll = false;

function swapCheck() {
    if (isCheckAll) {
        $("input[type='checkbox']").each(function () {
            this.checked = false;
        });
        isCheckAll = false;
    } else {
        $("input[type='checkbox']").each(function () {
            this.checked = true;
        });
        isCheckAll = true;
    }
}

//添加、编辑、删除 三个按钮效果
$('#add,#minus,#setting').mouseenter(function () {
    $(this).css("background-color", "#D8DBDE");
});
$('#add,#minus,#setting').mouseleave(function () {
    $(this).css("background-color", "#fff");
});

//添加操作
$('#add').click(function () {
    $('#hidden_form').css('display', 'block');
});

//删除操作
$('#minus').click(function () {
    var length = $('input:checkbox[name=item]:checked').length;
    if (length > 0) {
        del();
    } else {
        alert("请至少选择一个选项");
    }
});

//删除确认
function del() {
    var msg = "确定要删除吗？";
    if (confirm(msg) == true) {
        var length = $('input:checkbox[name=item]:checked').length;
        for (var i = 0; i < length; i++) {
            $('input:checkbox[name=item]:checked').parents("tr").remove();
        }
        return true;
    } else {
        return false;
    }
}

//关闭hidden_form表单
$('#closed').click(function () {
    $('#hidden_form').css('display', 'none');
    $('#hidden_form input,textarea').val("");
    $('#hidden_form select').prop('selectedIndex', 0);
});

//表单取消按钮
$('#process_cancel').click(function () {
    $('#hidden_form').css('display', 'none');
    $('#hidden_form input,textarea').val("");
    $('#hidden_form select').prop('selectedIndex', 0);
});

//弹窗关闭 X
$('#alter_close').click(function () {
    $('#alter').css('display', 'none');
});

if ($('#alter').css('display', 'block')) {
    var alter = document.getElementById("alter");
    if (alter.style.display = 'block') {
        setTimeout('$("#alter").fadeOut()', 2000);
    }
}
