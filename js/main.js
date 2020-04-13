// document.addEventListener('DOMContentLoaded', () => {
//     document.addEventListener('submit', (event) => {
//         event.preventDefault();
//         let elem = document.createElement('p');
//         elem.innerText=document.form.input.value;
//         document.body.appendChild(elem);
//     });
// });

$(function() {
    addRemoveListener();
    $('.add-btn').click(function(e){
        $('.empty-todo') && $('.empty-todo').remove();
        createTodo(e);
        document.addTodoForm.title.value = "";
        document.addTodoForm.description.value = "";
        addRemoveListener();
        return false
    });
 });

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
