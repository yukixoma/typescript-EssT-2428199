interface TodoItem {
    id: number;
    title: string;
    status: Status;
    completedOn?: Date;
}

type TodoItems = TodoItem[]

enum Status {
    Done = "done",
    InProgress = "in-progress",
    Todo = "todo",
}

const todoItems: TodoItems = [
    { id: 1, title: "Learn HTML", status: Status.Done, completedOn: new Date("2021-09-11") },
    { id: 2, title: "Learn TypeScript", status: Status.InProgress },
    { id: 3, title: "Write the best app in the world", status: Status.Todo },
]

function addTodoItem(todo: string) : TodoItem {
    const id = getNextId<TodoItem>(todoItems)

    const newTodo = {
        id,
        title: todo,
        status: Status.Todo,
    }

    todoItems.push(newTodo)

    return newTodo
}

function getNextId<T extends {id: number}>(items: T[]): number {
    return items.reduce((max, x) => x.id > max ? x.id : max, 0) + 1
}

const newTodo = addTodoItem("Buy lots of stuff with all the money we make from the app")

console.log(JSON.stringify(newTodo))
