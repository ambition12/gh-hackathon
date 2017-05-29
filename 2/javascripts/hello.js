$(function(){
    //DOM構築完了


var helloWorldController = {
    __name: 'helloWorldController', // <- カンマを忘れずに
    '#button click': function(){
        alert('こんにちは世界!')
    }
};

//コントローラ化をする
h5.core.controller('body',helloWorldController);
});
