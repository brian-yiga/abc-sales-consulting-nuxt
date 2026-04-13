<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4"
      @click="close"
    >
      <div
        class="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Header -->
        <div class="sticky top-0 bg-abc-navy text-white p-6 flex justify-between items-center">
          <h2 class="text-2xl font-bold uppercase">Book a Discovery Call</h2>
          <button
            @click="close"
            class="text-2xl hover:opacity-80 transition-opacity"
          >
            ✕
          </button>
        </div>

        <!-- Form Body -->
        <form @submit.prevent="submitForm" class="p-8 space-y-6">
          <div class="text-center mb-6">
            <p class="text-gray-600">
              Tell us about your business and let's explore how ABC Sales Consulting can help you scale.
            </p>
          </div>

          <!-- Name -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="Your full name"
            />
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Business Email <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="you@yourbusiness.com"
            />
          </div>

          <!-- Phone -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Phone Number <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.phone"
              type="tel"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="+256 (XXX) XXX-XXXX"
            />
          </div>

          <!-- Company -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Company Name <span class="text-red-500">*</span>
            </label>
            <input
              v-model="form.company"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="Your company name"
            />
          </div>

          <!-- Industry -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Industry <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.industry"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
            >
              <option value="">Select an industry</option>
              <option value="Finance">Finance</option>
              <option value="Technology">Technology</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Retail">Retail</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Education">Education</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <!-- Team Size -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Sales Team Size <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.teamSize"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
            >
              <option value="">Select team size</option>
              <option value="1-5">1-5 people</option>
              <option value="6-15">6-15 people</option>
              <option value="16-50">16-50 people</option>
              <option value="50+">50+ people</option>
            </select>
          </div>

          <!-- Current Challenge -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              What's your biggest sales challenge right now? <span class="text-red-500">*</span>
            </label>
            <textarea
              v-model="form.challenge"
              required
              rows="4"
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="Tell us about your main sales challenge..."
            />
          </div>

          <!-- Preferred Time -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Preferred Call Time <span class="text-red-500">*</span>
            </label>
            <select
              v-model="form.preferredTime"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
            >
              <option value="">Select a time</option>
              <option value="morning">Morning (8 AM - 12 PM)</option>
              <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="evening">Evening (5 PM - 8 PM)</option>
            </select>
          </div>

          <!-- Consent -->
          <div class="flex items-start gap-3">
            <input
              v-model="form.consent"
              type="checkbox"
              id="consent"
              required
              class="w-4 h-4 mt-1 accent-abc-green"
            />
            <label for="consent" class="text-sm text-gray-600">
              I agree to be contacted by ABC Sales Consulting about my discovery call request and future opportunities.
            </label>
          </div>

          <!-- Error Message -->
          <div v-if="errorMessage" class="p-4 bg-red-50 border border-red-200 rounded text-red-700 text-sm">
            {{ errorMessage }}
          </div>

          <!-- Success Message -->
          <div v-if="successMessage" class="p-4 bg-green-50 border border-green-200 rounded text-green-700 text-sm">
            {{ successMessage }}
          </div>

          <!-- Submit Button -->
          <div class="flex gap-4 pt-6">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="flex-1 bg-abc-green hover:bg-abc-green/90 disabled:bg-gray-400 text-white font-bold uppercase py-3 px-6 rounded transition-all"
            >
              {{ isSubmitting ? "Submitting..." : "Request Discovery Call" }}
            </button>
            <button
              type="button"
              @click="close"
              class="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold uppercase py-3 px-6 rounded transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const isSubmitting = ref(false);
const errorMessage = ref("");
const successMessage = ref("");

const form = ref({
  name: "",
  email: "",
  phone: "",
  company: "",
  industry: "",
  teamSize: "",
  challenge: "",
  preferredTime: "",
  consent: false,
});

const open = () => {
  isOpen.value = true;
  errorMessage.value = "";
  successMessage.value = "";
};

const close = () => {
  isOpen.value = false;
  resetForm();
};

const resetForm = () => {
  form.value = {
    name: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    teamSize: "",
    challenge: "",
    preferredTime: "",
    consent: false,
  };
  errorMessage.value = "";
  successMessage.value = "";
};

const submitForm = async () => {
  isSubmitting.value = true;
  errorMessage.value = "";
  successMessage.value = "";

  try {
    // Send email via API endpoint
    const response = await fetch("/api/send-discovery-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...form.value,
        to: "admin@abcsalesconsulting.net",
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    successMessage.value =
      "Thank you! We've received your request. Our team will contact you soon to schedule your discovery call.";
    resetForm();

    // Close modal after 3 seconds
    setTimeout(() => {
      close();
    }, 3000);
  } catch (error) {
    errorMessage.value =
      "There was an error submitting your form. Please try again or contact us directly.";
    console.error("Form submission error:", error);
  } finally {
    isSubmitting.value = false;
  }
};

// Expose methods for parent component
defineExpose({
  open,
  close,
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
