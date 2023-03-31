<template>
  <TodoItems
    v-for="(list, index) in lists"
    :key="index"
    :todoProps="list"
    @item-complated="markComplate(index)"
    @item-detele="deteleTodo(index)"
  />
  <addtodo @add-todo="addTodo" />
</template>

<script>
import { ref } from "vue";
import TodoItems from "./TodoItems.vue";
import Addtodo from "./Addtodo.vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "todo",
  components: {
    TodoItems,
    Addtodo,
  },
  setup() {
    const lists = ref([
      {
        title: "Việc làm 1",
        complated: false,
      },
      {
        title: "Việc làm 2",
        complated: false,
      },
      {
        title: "Việc làm 3",
        complated: false,
      },
    ]);

    const markComplate = (index) => {
      lists.value[index].complated = true;
    };
    const deteleTodo = (index) => {
      lists.value.splice(index, 1);
    };

    const addTodo = (newItem) => {
      lists.value.push(newItem);
    };
    return {
      lists,
      markComplate,
      deteleTodo,
      addTodo,
    };
  },
};
</script>

<style scoped></style>
