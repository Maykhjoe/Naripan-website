<!-- src/components/Contact.vue -->
<template>
    <section class="container mx-auto p-4">
      <h2 class="text-3xl font-bold mb-4">Contact Us</h2>
      <form class="space-y-4">
        <div>
          <label for="name" class="block text-gray-700">Name:</label>
          <input type="text" id="name" class="w-full border-gray-300 rounded-lg p-2">
        </div>
        <div>
          <label for="email" class="block text-gray-700">Email:</label>
          <input type="email" id="email" class="w-full border-gray-300 rounded-lg p-2">
        </div>
        <div>
          <label for="message" class="block text-gray-700">Message:</label>
          <textarea id="message" class="w-full border-gray-300 rounded-lg p-2"></textarea>
        </div>
        <button type="submit" class="bg-blue-800 text-white rounded-lg p-2">Send</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Contact',
  }
  </script>
  
  <style scoped>
  /* Add any component-specific styles here */
  </style>
  