class TaskCollection {
    constructor (tasks =[] ) {
    this.tasks = tasks;
    }

    log() {
        this.tasks.forEach(task => {console.log(task)});
    }

    simpleLog() {
        this.tasks.forEach(() => console.log('task'));
    }

    logExtended() {
        this.tasks.forEach((task,index) => {console.log(task, index)});
    }

    prepare() {
        this.tasks.forEach(task => task.toGulp());
    }

}

class Task {
    static toGulp() {
        console.log('converting to gulp');
    }
}

//new TaskCollection([new Task, new Task, new Task]).log();
new TaskCollection([new Task, new Task, new Task]).prepare();