<!-- SignUpView.vue -->

<template>
  <div class="container">
    <div class="signup-box">
      <h2 class="text-center mb-4">Sign Up</h2>
      <form @submit.prevent="signup" class="mb-3">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" id="username" v-model="username" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input type="email" id="email" v-model="email" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password:</label>
          <input type="password" id="password" v-model="password" class="form-control" required>
        </div>
        <div class="mb-3">
          <label for="confirmPassword" class="form-label">Confirm Password:</label>
          <input type="password" id="confirmPassword" v-model="confirmPassword" class="form-control" required>
        </div>
        <button type="submit" class="btn btn-primary btn-block">Sign Up</button>
      </form>
      <p v-if="error" class="text-danger">{{ error }}</p>
      <p class="text-center mt-3">
        Already have an account? 
        <router-link to="/login" class="link-primary">Login</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      error: null
    };
  },
  methods: {
    async signup() {
      // Basic password match validation
      if (this.password !== this.confirmPassword) {
        this.error = 'Passwords do not match';
        return;
      }

      // Perform signup logic using Axios
      try {
        const response = await axios.post('https://test.amir434soussi.workers.dev/api/register', {
          name: this.username,
          email: this.email,
          password: this.password
        });

        // Check the response status or other conditions based on your API
        if (response.status === 201) {
          // Successful signup
          this.$emit('signup-success', {
            username: this.username,
            email: this.email,
            password: this.password
          });

          // Reset form fields
          this.username = '';
          this.email = '';
          this.password = '';
          this.confirmPassword = '';
          this.error = null;

          // Redirect to login page after successful signup
          this.$router.push('/login');
        } else {
          // Handle other response status codes or conditions
          this.error = 'Failed to register. Please try again.';
        }
      } catch (error) {
        // Handle network errors or other exceptions
        console.error('Error during signup:', error);
        this.error = 'An unexpected error occurred. Please try again.';
      }
    }
  }
};
</script>

<style scoped>
/* Styles remain the same */
</style>


<style scoped>
/* Add styling specific to this component */

.container {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.signup-box {
  max-width: 400px;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease; /* Add a smooth transition effect */
}

.signup-box:hover {
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
