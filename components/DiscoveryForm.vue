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
        <div
          class="sticky top-0 bg-abc-navy text-white p-6 flex justify-between items-center"
        >
          <h2 class="text-2xl font-bold uppercase">Book a Discovery Call</h2>
          <button
            @click="close"
            class="text-2xl hover:opacity-80 transition-opacity"
          >
            ✕
          </button>
        </div>

        <!-- Form Body -->
        <form
          action="https://api.web3forms.com/submit"
          method="POST"
          class="p-8 space-y-6"
        >
          <!-- Web3Forms Hidden Fields -->
          <input
            type="hidden"
            name="access_key"
            value="1b3f2db3-70e6-4917-b8dc-affe334cdaf1"
          />
          <input
            type="hidden"
            name="subject"
            value="New Discovery Call Request - ABC Sales Consulting"
          />
          <input
            type="hidden"
            name="from_name"
            value="ABC Sales Consulting Website"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://abcsalesconsulting.net/thank-you"
          />

          <div class="text-center mb-6">
            <p class="text-gray-600">
              Tell us about your business and let's explore how ABC Sales
              Consulting can help you scale.
            </p>
          </div>

          <!-- Name -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Full Name <span class="text-red-500">*</span>
            </label>
            <input
              name="Full Name"
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
              name="Business Email"
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
              name="Phone Number"
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
              name="Company Name"
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
              name="Industry"
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
              name="Sales Team Size"
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

          <!-- Challenge -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Current Sales Challenge <span class="text-red-500">*</span>
            </label>
            <textarea
              name="Current Sales Challenge"
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
              name="Preferred Call Time"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
            >
              <option value="">Select a time</option>
              <option value="Morning">Morning (8 AM - 12 PM)</option>
              <option value="Afternoon">Afternoon (12 PM - 5 PM)</option>
              <option value="Evening">Evening (5 PM - 8 PM)</option>
            </select>
          </div>

          <!-- Consent -->
          <div class="flex items-start gap-3">
            <input
              name="Consent"
              type="checkbox"
              id="consent"
              required
              class="w-4 h-4 mt-1 accent-abc-green"
            />
            <label for="consent" class="text-sm text-gray-600">
              I agree to be contacted by ABC Sales Consulting.
            </label>
          </div>

          <!-- Submit Button -->
          <div class="flex gap-4 pt-6">
            <button
              type="submit"
              class="flex-1 bg-abc-green hover:bg-abc-green/90 text-white font-bold uppercase py-3 px-6 rounded transition-all cursor-pointer"
            >
              Request Discovery Call
            </button>

            <button
              type="button"
              @click="close"
              class="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold uppercase py-3 px-6 rounded transition-all cursor-pointer"
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

const open = () => {
  isOpen.value = true;
};

const close = () => {
  isOpen.value = false;
};

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
