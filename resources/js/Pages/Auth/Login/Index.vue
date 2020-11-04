<template>
  <div class="w-full h-screen flex items-center justify-center">
    <login-form :success="success" :error="error" :errors="errors"></login-form>
  </div>
</template>
<script>
import LoginForm from "@/Pages/Auth/Login/LoginForm";
export default {
  props: {
    errors: Object,
    success: String,
    error: String,
  },
  components: {
    LoginForm,
  },
};
</script>
