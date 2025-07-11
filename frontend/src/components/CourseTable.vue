<template>
  <div class="table-wrapper">
    <table>
      <thead>
        <tr>
          <th v-for="(header, index) in content.headers" :key="'header-' + index">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in content.rows" :key="'row-' + rowIndex">
          <td v-for="(cell, cellIndex) in row" :key="'cell-' + cellIndex">
            {{ cell }}
          </td>
        </tr>
      </tbody>
    </table>
    <p v-if="content.caption" class="caption">{{ content.caption }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  content: {
    headers: string[]
    rows: string[][]
    caption?: string
  }
}>()
</script>

<style scoped>
.table-wrapper {
  margin: 1rem 0;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
}

table {
  width: 50%;
  border-collapse: collapse;
  border: 1px solid #ccc;
  font-size: 0.95rem;
}

th,
td {
  padding: 0.5rem 0.75rem;
  border: 1px solid #ccc;
  text-align: left;
}

th {
  font-weight: bold;
}

.caption {
  font-size: 0.85rem;
  color: #555;
  margin-top: 0.5rem;
  text-align: center;
}
</style>
