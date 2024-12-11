<script setup lang="ts">
import { ref } from 'vue';
import { useAuthStore } from '../stores/auth-store';

const authStore = useAuthStore();

// Form state
const email = ref<string>('');
const password = ref<string>('');
// Reference to the form
const formRef = ref<any>(null);


// Form validation rules
const emailRules = [
  (v: string) => !!v || 'Email is required',
  (v: string) => /.+@.+\..+/.test(v) || 'E-mail must be valid',
];
const passwordRules = [
  (v: string) => !!v || 'Password is required',
  (v: string) => v.length >= 6 || 'Password must be at least 6 characters long',
];

// Form submission handler
const handleLogin = () => {
  if (formRef.value && formRef.value.validate()) {
    // Fake login logic
    authStore.login(email.value, password.value)
    console.log('Logging in with', { email: email.value, password: password.value });
    alert('Logged in successfully (fake action)');
  } else {
    alert('Please fix the form errors before submitting.');
  }
};
</script>
<template>
    <v-container class="login-form">
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-text>
            <v-form @submit.prevent="handleLogin" ref="formRef">
              <v-text-field
                v-model="email"
                label="Email"
                type="email"
                required
                :rules="emailRules"
              ></v-text-field>
              <v-text-field
                v-model="password"
                label="Password"
                type="password"
                required
                :rules="passwordRules"
              ></v-text-field>
              <v-btn type="submit" color="primary" block>
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
</style>