<template>
  <div class="container mx-auto my-10 px-6 md:px-12">
    <div class="flex justify-between items-center">
      <div class="flex-1">
        <h3 class="text-gray-700 text-3xl font-semibold mb-2">Create User</h3>
        <p class="font-light">This is the place to add new Admin User.</p>
      </div>
      <div class="w-48 text-right">
        <a
          class="bg-green-600 text-gray-200 rounded hover:bg-green-500 px-6 py-3 focus:outline-none"
          >List Article</a
        >
      </div>
    </div>
    <div class="w-3/4 bg-white mt-16 px-6 py-12 rounded-lg shadow-lg">
      <form @submit.prevent="submit">
        <div class="mb-6">
          <label class="block text-gray-600 font-light mb-2">User Name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your Fullname"
            class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-600 font-light mb-2">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Enter your Email"
            class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-600 font-light mb-2">Password</label>
          <input
            type="text"
            name="password"
            placeholder="Password"
            class="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          />
        </div>
        <div class="mb-6">
          <label class="block text-gray-600 font-light mb-2">Roles</label>
          <select
            name="roles[]"
            id="roles"
            class="w-full border select"
            data-container-css-class="border border-gray-400 focus:border-green-500"
            data-dropdown-css-class="bg-gray-100 border-green-500"
          >
            <option class="py-4"></option>
          </select>
        </div>
        <div class="mb-6">
          <file-input v-model="form.cover" />
        </div>
        <div class="pb-6">
          <button
            type="submit"
            class="float-right bg-blue-600 text-gray-200 rounded hover:bg-blue-500 px-8 py-2 focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      form: {
        cover: [],
      },
    };
  },
  methods: {
    submit() {
      this.form = {
        cover: [],
      };
    },
  },
};
</script>
