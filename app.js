(function() {
    var nicknameNode = document.getElementsByTagName('input')[0];
    
    var spanNode = document.getElementById('show');
    
    var button  = document.getElementById('check');
    
    var trimReg = /^\s+|\s+$/g;
    var chinaReg = /[\u4E00-\uFA29]|[\uE7C7-\uE7F3]/g;
    var lenReg = /^.{4,16}$/;
    
    var msg = {
        0: '名称格式正确',
        1: '姓名不能为空',
        2: '名称字符长度需要控制在4-16之间' 
    }
    
    var colors = {
        'error': 'red',
        'success': 'green'    
    }
    
    var show = function(status, c) {
        spanNode.innerHTML = msg[status];
        spanNode.style.color = colors[c];
        nicknameNode.className += ' '+  c;
    }
    
    button.addEventListener('click', function(){
        var nickname = nicknameNode.value;
        
        // 可以在计算的时候把中文转化为两个字符的其他字符方便计算
        
        nickname = nickname.replace(trimReg, "").replace(chinaReg, '++');
        
        if(nickname.length === 0) {
            show(1,'error');
        } else if(!lenReg.test(nickname)) {
            show(2, 'error');
        } else {
            show(0, 'success');
        }
    }, false);
    
})();