'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TaskCollection = function () {
    function TaskCollection() {
        var tasks = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        _classCallCheck(this, TaskCollection);

        this.tasks = tasks;
    }

    _createClass(TaskCollection, [{
        key: 'log',
        value: function log() {
            this.tasks.forEach(function (task) {
                console.log(task);
            });
        }
    }, {
        key: 'simpleLog',
        value: function simpleLog() {
            this.tasks.forEach(function () {
                return console.log('task');
            });
        }
    }, {
        key: 'logExtended',
        value: function logExtended() {
            this.tasks.forEach(function (task, index) {
                console.log(task, index);
            });
        }
    }, {
        key: 'prepare',
        value: function prepare() {
            this.tasks.forEach(function (task) {
                return task.toGulp();
            });
        }
    }]);

    return TaskCollection;
}();

var Task = function () {
    function Task() {
        _classCallCheck(this, Task);
    }

    _createClass(Task, null, [{
        key: 'toGulp',
        value: function toGulp() {
            console.log('converting to gulp');
        }
    }]);

    return Task;
}();

//new TaskCollection([new Task, new Task, new Task]).log();


new TaskCollection([new Task(), new Task(), new Task()]).prepare();