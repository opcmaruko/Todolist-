'use strict';

var app = new Vue({
    el: '#app',
    data: {
        message: 'hello',
        score: '',
        home: [{
            father: 'tom',
            mother: 'mary'
        }, {
            father: 'mark',
            mother: 'ivy'
        }],
        todos: JSON.parse(localStorage.getItem('todos')) || [],
        newTodo: ''
    },
    methods: {
        addTodo: function addTodo(todo) {
            this.todos.push({ content: todo, completed: false, target: true });
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        removeTodo: function removeTodo(todo) {
            this.todos.splice(this.todos.indexOf(todo), 1);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },
        allremoveTodo: function allremoveTodo(todo) {
            this.todos.splice(this.todos);
            localStorage.setItem('todos', JSON.stringify(this.todos));
        },

        allfalseTodo: function allfalseTodo() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].target = !this.todos[i].completed;
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        },
        alltrueTodo: function alltrueTodo() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].target = this.todos[i].completed;
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        },
        allTodo: function allTodo() {
            for (var i = 0; i < this.todos.length; i++) {
                this.todos[i].target = true;
                localStorage.setItem('todos', JSON.stringify(this.todos));
            }
        },
        alltrue: function alltrue() {
            for (var i = 0; i < this.todos.length; i++) {
                //                 this.todos[i].target = true;
                if (this.todos[i].completed === false) {
                    this.todos[i].completed = true;
                    localStorage.setItem('todos', JSON.stringify(this.todos));
                } else {
                    if (this.todos[i].completed === true) {

                        for (var i = 0; i < this.todos.length; i++) {
                            this.todos[i].completed = false;
                            localStorage.setItem('todos', JSON.stringify(this.todos));
                        }
                    }
                }
            }
        }
    }
});
//# sourceMappingURL=all.js.map
