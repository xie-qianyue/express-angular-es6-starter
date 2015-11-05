let todoTaskFactory = function($http, $q) {

    let getTodos = ()=>{

        let def = $q.defer();

        $http.get('/api/todos')
            .success(data => {
                def.resolve(data);
            })
            .error(errMsg =>  {
                console.log('Error: ' + errMsg);
                def.reject('Failed to get todos');
            });

        return def.promise;
    }

    let createTodo = (todo) => {

        let def = $q.defer();

        $http.post('/api/todos', todo)
            .success(data => {
                def.resolve(data);
            })
            .error(errMsg => {
                console.log('Error: ' + errMsg);
                def.reject('Failed to add todo : ' + todo.title);
            });

        return def.promise;
    }

   let deleteTodo = (todoId)=>{
        let def = $q.defer();

        $http.delete('/api/todos/' + todoId)
            .success(data => {
                def.resolve(data);
            })
            .error(errMsg => {
                console.log('Error: ' + errMsg);
                def.reject('Failed to delete todo with id : ' + todoId);
            });

        return def.promise;
    }

    let editTodo = (todo)=>{
        $http.put('/api/todos', todo)
            .error(errMsg => {
                console.log('Error: ' + errMsg);
            });
    }

    let completeTodo = (todo)=>{
        $http.put('/api/todos/completed', todo)
            .error(errMsg => {
                console.log('Error: ' + errMsg);
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

export default todoTaskFactory;