<template>
  <div class="bg-white">
    <!-- Header Navigation -->
    <div class="bg-maroon pt-4 pb-5 bg-cover bg-center bg-[url('/bg-images/bg-blue.png')]">
      <MuiPageContainer wide class="relative">
        <header class="flex items-center justify-between px-6 py-4 md:px-8 bg-white/20 backdrop-blur-[10px] border border-white/10 relative z-[210]">
          <NuxtLink to="/" class="flex items-center">
            <img src="/bg-images/abcLogo1-no-bg.png" alt="ABC Sales Consulting" class="h-16 object-contain" />
          </NuxtLink>
          <NuxtLink to="/" class="text-white font-bold uppercase text-sm hover:opacity-80 cursor-pointer">
            Back to Home
          </NuxtLink>
        </header>
      </MuiPageContainer>
    </div>

    <!-- Privacy Policy Content -->
    <MuiPageContainer class="py-16 max-w-3xl">
      <h1 class="text-4xl font-black uppercase mb-8 text-maroon">Privacy Policy</h1>
      
      <div class="prose prose-lg space-y-6 text-gray-700">
        <p class="text-sm text-gray-500">Last updated: April 2026</p>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">1. Introduction</h2>
          <p>
            ABC Sales Consulting ("Company," "we," "us," "our," or "our Company") respects your privacy and is committed to protecting it through our compliance with this Privacy Policy.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">2. Information We Collect</h2>
          <p>We collect information you provide directly to us, such as:</p>
          <ul class="list-disc pl-6">
            <li>Name and contact information (email, phone, company)</li>
            <li>Information from discovery call forms</li>
            <li>Communication preferences</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul class="list-disc pl-6">
            <li>Respond to your inquiries and provide customer service</li>
            <li>Schedule discovery calls and consultations</li>
            <li>Send marketing and promotional communications</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">4. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">5. Sharing of Information</h2>
          <p>
            We do not share, sell, or trade your personal information with third parties without your consent, except as required by law or to provide services you've requested.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">6. Cookies and Tracking</h2>
          <p>
            Our website may use cookies and similar tracking technologies to enhance your experience and track website usage. You can control cookie preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul class="list-disc pl-6">
            <li>Access your personal information</li>
            <li>Request correction of inaccurate data</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of promotional communications</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">8. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of significant changes by updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at:
            <br><strong>Email:</strong> admin@abcsalesconsulting.net
          </p>
        </section>
      </div>
    </MuiPageContainer>
  </div>
</template>

<script setup>
import { MuiPageContainer } from "@northgreenug/musizi-ui-kit";
</script>

<style scoped>
.prose h2 {
  margin-top: 1.5rem;
  margin-bottom: 1rem;
}

.prose ul {
  margin: 1rem 0;
}

.prose li {
  margin: 0.5rem 0;
}
</style>
