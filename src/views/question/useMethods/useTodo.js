import { ref, reactive } from 'vue'
export const useTodo = (list = []) => {
    const value = ref(null)
    const todoList = reactive(list)
    const addTodoList = () => {
        todoList.push(value.value)
        value.value = null
    }
    const remove = (index) => {
        todoList.splice(index, 1)
    }
    return {
        value,
        todoList,
        addTodoList,
        remove
    }
}