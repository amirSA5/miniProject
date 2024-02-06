
<template>
  <div class="container">
    <div class="login-box">
      <h2 class="text-center mb-4">Login</h2>
      <form @submit.prevent="login" class="mb-3">
        <div class="mb-3">
          <label for="username" class="form-label">Email:</label>
          <input type="text" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Login</button>
      </form>
      <p v-if="error" class="text-danger">{{ error }}</p>
      <p class="text-center mt-3">
        Don't have an account? 
        <router-link to="/sign-up" class="link-primary">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    };
  },
  methods: {
    async login() {
  try {
    const response = await axios.post('https://test.amir434soussi.workers.dev/api/login', {
      email: this.email,
      password: this.password
    });

    // Assuming the response structure has a 'data' property
    const responseData = response.data;

    // Check the response status or other conditions based on your API
    if (response.status === 200 && responseData && responseData.user && responseData.user.results.length > 0) {
      // Successful login
      this.$emit('login-success', responseData.user.results[0].username);
      // Reset form fields
      this.email = '';
      this.password = '';
      this.error = null;
      
      // Storing user ID in local storage
      localStorage.setItem("userId", responseData.user.results[0].id);

      // Redirect to the todos page with the user ID
      const userId = localStorage.getItem("userId");
      //this.$router.push(`/todos/${userId}`);
      window.location.href = `/todos/${userId}`;
    } else {
      // Handle other response status codes or conditions
      this.error = 'Failed to log in. Please check your credentials and try again.';
    }
  } catch (error) {
    // Handle network errors or other exceptions
    console.error('Error during login:', error);
    this.error = 'An unexpected error occurred. Please try again.';
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

.login-box {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Add a smooth transition effect */
}

.login-box:hover {
  transform: scale(1.05); /* Scale up the box on hover */
}

.text-center {
  text-align: center;
}

.mb-3 {
  margin-bottom: 1.5rem;
}

.btn-primary {
  background-color: #007bff;
  border-color: #007bff;
  transition: background-color 0.3s ease, border-color 0.3s ease; /* Add a smooth transition effect */
}

.btn-primary:hover {
  background-color: #0056b3;
  border-color: #0056b3;
}

.text-danger {
  color: #dc3545;
  transition: color 0.3s ease; /* Add a smooth transition effect */
}

.link-primary {
  color: #007bff;
  text-decoration: none;
  transition: color 0.3s ease; /* Add a smooth transition effect */
}

.link-primary:hover {
  color: #0056b3;
}
.btn-block {
  width: 100%; /* Make the button full width */
}
</style>
