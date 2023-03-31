<template>
  <p :class="['todoitem', todoProps.complated ? 'is-complated' : '']">
    <input type="checkbox" :checked="todoProps.complated" @click="markItems" />
    {{ todoProps.title }}
    <button class="btnXoa" @click="deteleItem()">Xóa</button>
  </p>
</template>

<script>
import { ref } from "vue";
export default {
  name: "TodoItems",
  props: ["todoProps"],
  setup(props, { emit }) {
    const new_id = ref("new-my-id");
    const markItems = () => {
      emit("item-complated");
    };
    const deteleItem = () => {
      emit("item-detele");
    };
    return {
      new_id,
      markItems,
      deteleItem,
    };
  },
};
</script>

<style>
.btnXoa {
  background: red;
  color: white;
  border: none;
  cursor: pointer;
  float: right;
}
.todoitem {
  background: rgb(241, 239, 233);
  padding: 10px;
  margin: 0;
  border-bottom: 1px #ccc dotted;
}
.is-complated {
  text-decoration: line-through;
}
</style>
