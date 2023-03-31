<template>
  <form @submit="addItems">
    <InputText type="text" v-model="title" />
    <Button label="Thêm" icon=" pi pi-plus" /><br />
    {{ title }}
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Addtodo",

  setup(props, { emit }) {
    const title = ref("");
    const addItems = (event) => {
      event.preventDefault();
      const newItem = {
        title: title.value,
        complate: false,
      };
      emit("add-todo", newItem);
      title.value = "";
    };
    return {
      title,
      addItems,
    };
  },
};
</script>

<style></style>
