<!-- App.vue -->
<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <header class="text-center mb-4">
          <h1 class="display-4 text-primary">Welcome to Your Modern Todo Website</h1>
          <p class="lead text-muted">Enhance your productivity with our sleek and intuitive todo app.</p>
        </header>

          <section>
          <h2 class="mb-3 text-primary">Featured Pictures</h2>
          <div class="row">
            <div class="col-md-4 mb-4">
              <img src="https://via.placeholder.com/300" alt="Image 1" class="img-fluid rounded">
            </div>
            <div class="col-md-4 mb-4">
              <img src="https://via.placeholder.com/300" alt="Image 2" class="img-fluid rounded">
            </div>
            <div class="col-md-4 mb-4">
              <img src="https://via.placeholder.com/300" alt="Image 3" class="img-fluid rounded">
            </div>
          </div>
        </section>

        <section class="mt-4">
          <h2 class="mb-3 text-primary">About Us</h2>
          <p class="text-muted">We are passionate about helping you stay organized and focused on your tasks. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p class="text-muted">Our mission is to provide a seamless and enjoyable todo app experience for our users.</p>
        </section>

        <section class="mt-4">
          <h2 class="mb-3 text-primary">Features</h2>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="fas fa-check text-success me-2"></i> Intuitive task management</li>
            <li class="list-group-item"><i class="fas fa-check text-success me-2"></i> Clean and modern design</li>
            <li class="list-group-item"><i class="fas fa-check text-success me-2"></i> Responsive and user-friendly</li>
          </ul>
        </section>

        <section class="mt-4">
          <h2 class="mb-3 text-primary">Contact</h2>
          <p class="text-muted">Email: info@yourtodowebsite.com</p>
          <p class="text-muted">Phone: (123) 456-7890</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style scoped>
/* Custom styles for a modern look */
body {
  background-color: #f8f9fa;
}

.container {
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 20px;
}

.display-4 {
  color: #007bff;
}

.text-primary {
  color: #007bff;
}

.text-muted {
  color: #6c757d;
}

.img-fluid {
  max-width: 100%;
  height: auto;
}

/* Add some animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Apply the animation to specific elements */
header, section {
  animation: fadeInUp 1s ease-out;
}

/* Add spacing between list items */
.list-group-item {
  margin-bottom: 8px;
}
</style>
