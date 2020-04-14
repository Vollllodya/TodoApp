const hideBlock = (elem) => {
    elem.click(function(){
        $(this).css({
            'transform': 'rotate(90deg)',
            'transition': '0.5s'
        });
        $(this).parents('article').animate({
            'min-height': '49px',
            'height': '51px'
        }, 500);
        $(this).parents('article').children('p').css({
            'font-size': 0,
            'transition': '0.3s'
        });
        $(this).unbind('click');
        showBlock($(this))
    })
}

const showBlock = (elem) => {
    elem.click(function(){
            $(this).css({
            'transform': 'rotate(0deg)',
            'transition': '0.5s'
        });
        $(this).parents('article').animate({
            'min-height': '136px'
        }, 500).removeAttr('style');
        $(this).parents('article').children('p').css({
            'font-size': '14px',
            'transition': '0.5s'
        })
        $(this).unbind('click')
        hideBlock($(this))
    })
}
 
const createTodo = (e) => {
    e.preventDefault();
    const title = document.addTodoForm.title.value;
    const description = document.addTodoForm.description.value;
    if(!title || !description) {
        return false
    }
    const todo = $('<article></article>');
    const model = '<div class="controll-wrapper clearfix"><h3>'+title+'</h3><button class="delet-btn"><span></span></button><button class="suspend-btn"></button></div><p>'+description+'</p>';
    todo.html(model);
    $(".todo-list-wrapper").append(todo);
    const btn = todo.children('div').children('.suspend-btn');
    hideBlock(btn);
};

const addRemoveListener = () => {
    $('.delet-btn').click(function(e){
        e.preventDefault();
        $(e.target).parents('article').remove();
        console.log($('article').length);
        if ($('article').length == 0 && $('.empty-todo').length == 0) {
            $(".todo-list-wrapper").append('<p class ="empty-todo">Список пуст...</p>');
        }
        
    });
};

$(function() {
    addRemoveListener();
    $('form').submit(function(e){
        $('.empty-todo') && $('.empty-todo').remove();
        createTodo(e);
        document.addTodoForm.title.value = "";
        document.addTodoForm.description.value = "";
        addRemoveListener();
        return false
    });
 });