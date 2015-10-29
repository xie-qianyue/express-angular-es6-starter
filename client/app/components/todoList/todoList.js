import angular from 'angular';
import todoListComponent from './todoList.component';

let todoListModule = angular.module('todoList', [])

.directive('todoList', todoListComponent)

/**
 * Directive that places focus on the element which it is applied to when the
 * expression it binds to evaluates to true
 */
.directive('todoFocus', ($timeout) => {
	return (scope, elem, attrs) => {
		scope.$watch(attrs.todoFocus, (newVal) => {
			if (newVal) {
				$timeout(() => {
					elem[0].focus();
				}, 0, false);
			}
		});
	};
})

/**
 * Directive that executes an expression when the element it is applied to gets
 * an `escape` keydown event.
 */
.directive('todoEscape', () => {
	var ESCAPE_KEY = 27;
	return (scope, elem, attrs) => {
		elem.bind('keydown', (event) => {
			if (event.keyCode === ESCAPE_KEY) {
				scope.$apply(attrs.todoEscape);
			}
		});
	};
});

export default todoListModule;