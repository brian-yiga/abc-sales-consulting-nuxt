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

    <!-- Terms Content -->
    <MuiPageContainer class="py-16 max-w-3xl">
      <h1 class="text-4xl font-black uppercase mb-8 text-maroon">Terms of Service</h1>
      
      <div class="prose prose-lg space-y-6 text-gray-700">
        <p class="text-sm text-gray-500">Last updated: April 2026</p>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">1. Acceptance of Terms</h2>
          <p>
            By accessing and using the ABC Sales Consulting website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">2. Use Restrictions</h2>
          <p>You agree not to use this website:</p>
          <ul class="list-disc pl-6">
            <li>For any unlawful or prohibited purpose</li>
            <li>To harass, abuse, or harm any individual or group</li>
            <li>To transmit malicious code or viruses</li>
            <li>To attempt to gain unauthorized access to our systems</li>
            <li>To violate any intellectual property rights</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">3. Intellectual Property Rights</h2>
          <p>
            All content on this website, including text, graphics, logos, images, and software, is the property of ABC Sales Consulting or its content suppliers and is protected by international copyright and trademark laws.
          </p>
          <p>
            You may not reproduce, distribute, transmit, or modify any content without our prior written permission.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">4. Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" without warranties of any kind, either express or implied. ABC Sales Consulting does not warrant that:
          </p>
          <ul class="list-disc pl-6">
            <li>The website will be uninterrupted or error-free</li>
            <li>Any defects will be corrected</li>
            <li>The website is free from viruses or harmful components</li>
          </ul>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">5. Limitation of Liability</h2>
          <p>
            In no event shall ABC Sales Consulting be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of or inability to use the website or services.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">6. Discovery Call Services</h2>
          <p>
            Our discovery call services are provided to help assess your business needs. Participation in a discovery call does not obligate either party to enter into a service agreement.
          </p>
          <p>
            Communication during discovery calls is confidential and should not be shared with third parties without permission.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">7. Third-Party Links</h2>
          <p>
            This website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites. Your use of third-party websites is governed by their terms and policies.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">8. User-Generated Content</h2>
          <p>
            If you submit any content or feedback to our website, you grant ABC Sales Consulting a non-exclusive, royalty-free license to use, modify, and distribute such content.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">9. Indemnification</h2>
          <p>
            You agree to indemnify, defend, and hold harmless ABC Sales Consulting and its officers, directors, and employees from any claims, damages, losses, or costs arising from your use of the website or violation of these terms.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">10. Modification of Terms</h2>
          <p>
            ABC Sales Consulting reserves the right to modify these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use constitutes acceptance of the modified terms.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">11. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of Uganda, and you irrevocably submit to the exclusive jurisdiction of the courts located in Uganda.
          </p>
        </section>

        <section>
          <h2 class="text-2xl font-bold text-abc-navy mb-4">12. Contact Information</h2>
          <p>
            If you have questions about these Terms of Service, please contact us at:
            <br><strong>Email:</strong> admin@abcsalesconsulting.net
          </p>
        </section>
      </div>
    </MuiPageContainer>
  </div>
</template>

<script setup>
useHead({ title: 'Terms of Service' });
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
