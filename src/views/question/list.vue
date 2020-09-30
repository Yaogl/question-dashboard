<template>
<div class="about">
    <a-input v-model="value"></a-input>
    <a-button type="primary" @click="addTodoList">addTodoList</a-button>
</div>
<div>
    <p v-for="(item, index) in todoList" :key="index" @click="remove(i)">{{ item }} </p>
</div>
</template>

<script>
import {
    useTodo
} from './useMethods/useTodo'
export default {
    setup(props) {
        const {
            value,
            todoList,
            addTodoList,
            remove
        } = useTodo([])
        return {
            value,
            todoList,
            addTodoList,
            remove
        }
    }
}
</script>
