<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <router-link v-if="isLoggedIn" to="/" class="navbar-brand">ToDo Website</router-link>
      <router-link v-else to="/login" class="navbar-brand">ToDo Website</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item" v-if="!isLoggedIn">
            <router-link to="/login" class="nav-link">Login</router-link>
          </li>
          <li class="nav-item" v-if="isLoggedIn">
            <button @click="logout" class="nav-link">Logout</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isLoggedIn: localStorage.getItem('userId') !== null
    };
  },
  watch: {
    isLoggedIn(newValue) {
      // Handle the state change if needed
      console.log('isLoggedIn changed:', newValue);
    }
  },
  methods: {
    logout() {
      // Perform logout action
      localStorage.removeItem('userId');
      this.isLoggedIn = false;
      // You may want to perform additional actions like clearing tokens or session data
      this.$router.replace('/'); // Redirect to home page and replace current history entry
    }
  }
};
</script>




<style scoped>
/* Add scoped styling for Navbar */

.navbar {
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}
a{
  text-decoration: none;
  color: black;
}
.navbar-brand {
  font-size: 1.5rem;
  font-weight: bold;
}

.navbar-nav {
  align-items: center;
}

.nav-link {
  color: #333;
  font-weight: 500;
  margin: 0 15px;
  transition: color 0.3s ease-in-out;
}

.nav-link:hover {
  color: #007bff;
}

.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-color: #007bff;
}

@media (max-width: 767px) {
  .navbar-nav {
    margin-top: 10px;
  }

  .nav-link {
    margin: 10px 0;
  }
}
</style>
