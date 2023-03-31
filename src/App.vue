<template>
  <Headers />
  <todo />
  <!-- <InputText v-model="text" />
  <Button label="Greet" icon="pi pi-user" @click="anhhh"></Button> -->
  <Toast />
  <FileUpload name="demo[]" url="./upload" />
  <chart />
</template>

<script>
import { useToast } from "primevue/usetoast";
import { ref } from "vue";
import Headers from "./components/Header.vue";
import Todo from "./components/Todo.vue";
import Chart from "./components/Chart.vue";

export default {
  components: {
    Headers,
    Todo,
    Chart,
  },
  setup() {
    const toast = useToast();
    const text = ref("");
    const anhhh = () => {
      toast.add({
        severity: "info",
        summary: "Hello",
        detail: text,
      });
    };

    return {
      text,
      anhhh,
    };
  },
};
</script>

<!-- <script>
export default {
  data() {
    return {
      text: null,
    };
  },
  methods: {
    anhhh() {
      this.$toast.add({
        severity: "info",
        summary: "Hello",
        detail: this.text,
      });
    },
  },
};
</script> -->
