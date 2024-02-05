<!-- TodosView.vue -->

<template>
  <div class="container">
    <div class="todos-box">
      <h2 class="text-center mb-4">Todos</h2>

      <!-- Add Todo Form -->
      <form @submit.prevent="addTodo" class="mb-3">
        <div class="mb-3">
          <label for="newTodoTitle" class="form-label">Todo Title:</label>
          <input type="text" id="newTodoTitle" v-model="newTodo.title" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="newTodoDescription" class="form-label">Todo Description:</label>
          <textarea id="newTodoDescription" v-model="newTodo.description" class="form-control" required></textarea>
        </div>
        <button type="submit" class="btn btn-success">Add Todo</button>
      </form>

      <!-- Todo List -->
      <ul class="list-group">
        <li v-for="todo in todos" :key="todo.id" class="list-group-item">
          <strong>{{ todo.title }}</strong>: {{ todo.description }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      todos: [],
      newTodo: {
        title: '',
        description: ''
      }
    };
  },
  mounted() {
    // Fetch todos when the component is mounted
    this.fetchTodos();
  },
  methods: {
    async fetchTodos() {
      try {
        // Replace 'https://your-todos-api-endpoint' with your actual API endpoint
        const userId = localStorage.getItem("userId");
        const response = await axios.get(`https://test.amir434soussi.workers.dev/api/todos/${userId}`);
        console.log(response.data)
        // Assuming the API response has a 'data' property containing the todos array
        this.todos = response.data;
      } catch (error) {
        console.error('Error fetching todos:', error);
        // Handle errors, e.g., display an error message to the user
      }
    },
    async addTodo() {
        
      try {
        const userId = localStorage.getItem("userId");
        const response = await axios.post(`https://test.amir434soussi.workers.dev/api/todos/${userId}`, {
          title: this.newTodo.title,
          description: this.newTodo.description
         
        });

        // Assuming the API response has a 'data' property containing the newly added todo
        const newTodo = response.data;

        // Add the new todo to the list
        this.todos.push(newTodo);

        // Clear the input fields
        this.newTodo.title = '';
        this.newTodo.description = '';
       
      } catch (error) {
        console.error('Error adding todo:', error);
        // Handle errors, e.g., display an error message to the user
      }
    }
  }
};
</script>

<style scoped>
/* Add styling specific to this component */

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todos-box {
  max-width: 600px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Add a smooth transition effect */
}

.todos-box:hover {
  transform: scale(1.05); /* Scale up the box on hover */
}

.text-center {
  text-align: center;
}

.mb-4 {
  margin-bottom: 2rem;
}

.list-group {
  margin-top: 1rem;
}

.list-group-item {
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.list-group-item:hover {
  background-color: #f8f9fa; /* Light background color on hover */
}
</style>
