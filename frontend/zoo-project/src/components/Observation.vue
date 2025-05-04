<script setup>
import {ApiService} from "@/helpers/backend.js"
import {ref} from "vue"
import {formatDate} from "@/helpers/utils.js"

let observations = ref([])
observations.value = await new ApiService().getObservation()

async function onSubmit(form$) {
  form$.submitting = true
  const {animal, behavior} = form$.data
  try {
    await new ApiService().postObservation(animal, behavior)
  } finally {
    observations.value = await new ApiService().getObservation()
    form$.submitting = false
  }
}

</script>

<template>
  <div>
    <table class="grid-table">
      <thead>
      <tr>
        <th v-for="key in Object.keys(observations[0])">{{ key }}</th>
      </tr>
      </thead>
      <tbody>
      <tr :key="observation.id" v-for="observation in observations">
        <td>{{ observation.id }}</td>
        <td>{{ observation.animal }}</td>
        <td>{{ observation.behavior }}</td>
        <td>{{ formatDate(observation.created) }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <Vueform validate-on="change" :endpoint="false" @submit="onSubmit">
        <TextElement rules="required" name="animal" label="Animal"/>
        <SelectElement
          rules="required"
          label="Select a Behavior"
          name="behavior"
          :items="[
        'Feeding',
        'Resting',
        'Active',
        'Other',
      ]"
        />
      <ButtonElement name="submit" button-label="Submit" :submits="true" />
      </Vueform>
    </div>
  </div>
</template>

<style scoped>
.grid-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.grid-table th,
.grid-table td {
  padding: 12px 15px;
  text-align: left;
  border: 1px solid #ddd; /* Grid lines */
}

.grid-table th {
  background-color: #4CAF50; /* Header background */
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

.grid-table tbody tr:nth-child(even) {
  background-color: #f9f9f9; /* Alternating row color */
}

.grid-table tbody tr:hover {
  background-color: #f1f1f1; /* Hover effect */
}

.grid-table td {
  color: #333;
}
</style>
