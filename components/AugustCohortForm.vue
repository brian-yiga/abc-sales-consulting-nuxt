<template>
  <Transition name="fade">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-[500] bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm"
      @click="close"
    >
      <div
        class="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Header -->
        <div
          class="sticky top-0 bg-abc-navy text-white p-6 flex justify-between items-center z-10 border-b border-white/10"
        >
          <div>
            <span class="text-[10px] uppercase tracking-widest font-bold text-abc-orange block mb-1">
              🔴 Limited Seats Available
            </span>
            <h2 class="text-xl md:text-2xl font-black uppercase">
              Register: August 2026 Cohort
            </h2>
          </div>
          <button
            @click="close"
            class="text-2xl hover:opacity-80 transition-opacity p-2 cursor-pointer"
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
            value="New August 2026 Cohort Registration - ABC Sales Consulting"
          />
          <input
            type="hidden"
            name="from_name"
            value="ABC Sales Consulting Website Registration"
          />
          <input
            type="hidden"
            name="redirect"
            value="https://abcsalesconsulting.net/thank-you"
          />

          <div class="bg-abc-orange/5 border border-abc-orange/20 rounded p-4 text-sm text-gray-700 space-y-1">
            <p class="font-bold text-abc-navy uppercase text-xs tracking-wider">Cohort Information:</p>
            <p>📅 <strong>Starts:</strong> Monday, 3rd August 2026</p>
            <p>📍 <strong>Venue:</strong> Plot 8, Mukulu Curve, Off Martyrs Way, Ntinda</p>
            <p>💰 <strong>Investment:</strong> UGX 600,000 per participant</p>
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
              Email Address <span class="text-red-500">*</span>
            </label>
            <input
              name="Email"
              type="email"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="you@yourdomain.com"
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

          <!-- Company/Organization -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Company / Organization <span class="text-red-500">*</span>
            </label>
            <input
              name="Company Name"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="Your company name or independent"
            />
          </div>

          <!-- Role/Designation -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              Your Current Role / Title <span class="text-red-500">*</span>
            </label>
            <input
              name="Designation"
              type="text"
              required
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="e.g. Sales Executive, Business Owner, Entrepreneur"
            />
          </div>

          <!-- Goals -->
          <div>
            <label class="block text-sm font-bold uppercase text-abc-navy mb-2">
              What are you hoping to master in this class? <span class="text-red-500">*</span>
            </label>
            <textarea
              name="Key Training Objectives"
              required
              rows="3"
              class="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:border-abc-green focus:ring-2 focus:ring-abc-green/20"
              placeholder="e.g. Closing tactics, handling objections, prospecting, etc."
            />
          </div>

          <!-- Consent -->
          <div class="flex items-start gap-3">
            <input
              name="Consent"
              type="checkbox"
              id="consent"
              required
              class="w-4 h-4 mt-1 accent-abc-green cursor-pointer"
            />
            <label for="consent" class="text-sm text-gray-600 cursor-pointer select-none">
              I understand that registration is confirmed upon payment of the training fee (UGX 600,000).
            </label>
          </div>

          <!-- Submit Buttons -->
          <div class="flex flex-col sm:flex-row gap-4 pt-6">
            <button
              type="submit"
              class="flex-1 bg-abc-orange hover:bg-abc-orange/90 text-white font-bold uppercase py-3 px-6 rounded transition-all cursor-pointer text-sm"
            >
              Complete Registration
            </button>

            <button
              type="button"
              @click="close"
              class="flex-1 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-bold uppercase py-3 px-6 rounded transition-all cursor-pointer text-sm"
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