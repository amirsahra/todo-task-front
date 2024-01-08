<script setup>
import {computed, onMounted, ref} from "vue";
import {allTasks} from "@/http/task-api.js";
import Tasks from "@/components/tasks/Tasks.vue";

const tasks = ref([])

onMounted(async () => {
  const {data} = await allTasks()
  tasks.value = data.data.tasks
})

const uncompletedTasks = computed(() => tasks.value.filter(task => !task.is_completed))
const completedTasks = computed(() => tasks.value.filter(task => task.is_completed))
const showToggleCompletedBtn = computed(
    () => uncompletedTasks.value.length > 0 && completedTasks.value.length > 0
)
const completedTasksIsVisible = computed(
    () => uncompletedTasks.value.length === 0 ||  uncompletedTasks.value.length > 0
)
const  showCompletedTasks = ref(false)

</script>

<template>
  <main style="min-height: 50vh; margin-top: 2rem;">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <!-- Add new Task -->

          <Tasks :tasks="uncompletedTasks"/>
          <Tasks :tasks="completedTasks" :show="completedTasksIsVisible && showCompletedTasks" />
          <div class="text-center my-3" v-show="showToggleCompletedBtn">
            <button type="button" class="btn btn-outline-info btn-sm"
                    @click="$event => showCompletedTasks = !showCompletedTasks">
              <span v-if="!showCompletedTasks">Show completed </span>
              <span v-else>Hide completed </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>

</style>