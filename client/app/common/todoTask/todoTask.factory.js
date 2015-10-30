let UserFactory = function() {

    let getTodos = ()=>{

        let def = $q.defer();

        $http.get('/api/todos')
            .success(function(data) {
                def.resolve(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
                def.reject('Failed to get todos');
            });

        return def.promise;
    }

    let createTodo = (todo)=>{

        let def = $q.defer();

        $http.post('/api/todos', todo)
            .success(function(data) {
                def.resolve(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
                def.reject('Failed to add todo : ' + todo.title);
            });

        return def.promise;
    }

   let deleteTodo = (todoId)=>{
        let def = $q.defer();

        $http.delete('/api/todos/' + todoId)
            .success(function(data) {
                def.resolve(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
                def.reject('Failed to delete todo with id : ' + todoId);
            });

        return def.promise;
    }

    let editTodo = (todo)=>{
        $http.put('/api/todos', todo)
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

    let completeTodo = (todo)=>{
        $http.put('/api/todos/completed', todo)
            .error(function(data) {
                console.log('Error: ' + data);
            });
    }

    return {
        getTodos,
        createTodo,
        deleteTodo,
        editTodo,
        completeTodo
    };
};

export default UserFactory;