<script setup>
  import { onMounted } from 'vue';

  const props = defineProps({
    sectionHeaderContainerClass: {
      type: String,
      required: true
    },
    sectionHeaderClass: {
      type: String,
      required: true
    },
    subContainerContentStylingClass: {
      type: String,
      required: true
    },
    subContainerContentSpacerClass: {
      type: String,
      required: true
    },
    subContainerStylingClass: {
      type: String,
      required: true
    },
    verticalAlignClass: {
      type: String,
      required: true
    }
  });

  onMounted(() => {
      const sectionHeaderContainerClass = props.sectionHeaderContainerClass
      const sectionHeaderClass = props.sectionHeaderClass
      const subContainerContentStylingClass = props.subContainerContentStylingClass
      const subContainerContentSpacerClass = props.subContainerContentSpacerClass
      const subContainerStylingClass = props.subContainerStylingClass
      const verticalAlignClass = props.verticalAlignClass
  });
</script>

<template>
  <div class="min-h-[86lvh]">
    <div id="section-services" :class="sectionHeaderContainerClass">
      <div :class="sectionHeaderClass">SERVICES</div>
    </div>

    <div :class="subContainerStylingClass" class="w-full px-[3.95rem] m-auto border-b-0">
      <div :class="subContainerContentStylingClass">
        <div class="lg:mt-16 text-center mb-8">
          <h2 class="text-xl md:text-2xl font-semibold mb-4">🌐 Managed WordPress Hosting & Care Plans</h2>
          <p class="text-sm md:text-base">Secure, managed WordPress hosting with ongoing maintenance and support</p>
        </div>

        <!-- Hosting Plans -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

          <!-- Starter Care -->
          <div class="border border-space-shuttle-500 rounded-md p-6 bg-black-magic-400">
            <h3 class="text-lg md:text-xl font-semibold mb-2 text-center">Starter Care</h3>
            <div class="text-2xl md:text-3xl font-bold text-center mb-4">$49<span class="text-sm font-normal">/mo</span></div>
            <ul class="text-sm md:text-base space-y-2 mb-4">
              <li>• Secure managed WordPress hosting</li>
              <li>• SSL certificate & HTTPS setup</li>
              <li>• Core WordPress updates</li>
              <li>• Automated daily backups</li>
              <li>• Basic security monitoring</li>
            </ul>
          </div>

          <!-- Standard Care -->
          <div class="border border-space-shuttle-500 rounded-md p-6 bg-black-magic-400">
            <h3 class="text-lg md:text-xl font-semibold mb-2 text-center">Standard Care</h3>
            <div class="text-2xl md:text-3xl font-bold text-center mb-4">$79<span class="text-sm font-normal">/mo</span></div>
            <ul class="text-sm md:text-base space-y-2 mb-4">
              <li>• Everything in Starter Care +</li>
              <li>• Theme & plugin updates</li>
              <li>• Monthly performance & security scans</li>
              <li>• Staging site for safe edits</li>
              <li>• Up to 30 minutes of support per month</li>
            </ul>
          </div>

          <!-- Premium Care -->
          <div class="border border-space-shuttle-500 rounded-md p-6 bg-black-magic-400">
            <h3 class="text-lg md:text-xl font-semibold mb-2 text-center">Premium Care</h3>
            <div class="text-2xl md:text-3xl font-bold text-center mb-4">$129<span class="text-sm font-normal">/mo</span></div>
            <ul class="text-sm md:text-base space-y-2 mb-4">
              <li>• Everything in Standard Care +</li>
              <li>• Priority support & 24/7 uptime monitoring</li>
              <li>• Speed & caching optimization</li>
              <li>• Malware cleanup if ever needed</li>
              <li>• Up to 1 hour of support per month</li>
            </ul>
          </div>
        </div>

        <!-- Annual Billing Note -->
        <div class="bg-floral-white-500 text-black-magic-600 p-4 rounded-md mb-8 text-center">
          <p class="font-semibold">💡 Annual prepay saves ~10% and locks your rate for the year!</p>
        </div>

        <!-- Optional Add-Ons -->
        <div class="mb-8">
          <h3 class="text-lg md:text-xl font-semibold mb-4 text-center">⚡️ Optional Add-Ons</h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="border border-space-shuttle-500 rounded-md p-4">
              <div class="font-semibold">Website Build / Redesign</div>
              <div class="text-sm">Starting at $1,500</div>
            </div>
            <div class="border border-space-shuttle-500 rounded-md p-4">
              <div class="font-semibold">Extra Support Hours</div>
              <div class="text-sm">$90/hour</div>
            </div>
            <div class="border border-space-shuttle-500 rounded-md p-4">
              <div class="font-semibold">eCommerce Optimization</div>
              <div class="text-sm">Starting at $350</div>
            </div>
            <div class="border border-space-shuttle-500 rounded-md p-4">
              <div class="font-semibold">SEO Setup & Analytics</div>
              <div class="text-sm">$200+</div>
            </div>
          </div>
        </div>

        <!-- Call to Action for WordPress -->
        <div class="text-center mb-12">
          <p class="mb-4">Ready to get your WordPress site running smoothly?</p>
          <p class="text-sm"><a href="#section-contact" :class="headerNavLinkClass">Contact me</a> to discuss which plan is right for your business needs.</p>
        </div>

        <!-- Laravel Section -->
        <div class="border-t border-space-shuttle-500 pt-8 mt-8">
          <div class="text-center mb-8">
            <h2 class="text-xl md:text-2xl font-semibold mb-4">🚀 Laravel Web App Hosting & Management Plans</h2>
            <p class="text-sm md:text-base">Cloud-native Laravel hosting with automatic scaling and modern deployment</p>
          </div>

          <!-- Laravel Hosting Plans -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

            <!-- Starter Plan -->
            <div class="border border-space-shuttle-500 rounded-md p-6 bg-black-magic-400">
              <h3 class="text-lg md:text-xl font-semibold mb-2 text-center">Starter</h3>
              <div class="text-lg md:text-xl font-bold text-center mb-4">Pay-as-you-go<br/><span class="text-sm font-normal">(starts at ~$15–25/mo typical usage)</span></div>
              <ul class="text-sm md:text-base space-y-2 mb-4">
                <li>• Unlimited apps, environments & builds</li>
                <li>• Automatic deployments from your repo</li>
                <li>• Basic logs & error monitoring</li>
                <li>• App hibernation when idle (save costs)</li>
                <li>• Custom domains & free *.laravel.cloud subdomains</li>
              </ul>
              <div class="text-xs text-center italic">Perfect for MVPs, side projects, small SaaS experiments</div>
            </div>

            <!-- Growth Plan -->
            <div class="border border-space-shuttle-500 rounded-md p-6 bg-black-magic-400">
              <h3 class="text-lg md:text-xl font-semibold mb-2 text-center">Growth</h3>
              <div class="text-lg md:text-xl font-bold text-center mb-4">$20<span class="text-sm font-normal">/mo + usage</span></div>
              <ul class="text-sm md:text-base space-y-2 mb-4">
                <li>• Everything in Starter +</li>
                <li>• Autoscaling up to 10 replicas for traffic spikes</li>
                <li>• Larger compute & resource sizes</li>
                <li>• Preview environments for feature branches</li>
                <li>• Worker & queue clusters (background jobs, scheduling)</li>
                <li>• Basic Web Application Firewall (WAF)</li>
              </ul>
              <div class="text-xs text-center italic">For small businesses & apps starting to scale</div>
            </div>

            <!-- Business Plan -->
            <div class="border border-space-shuttle-500 rounded-md p-6 bg-black-magic-400 relative hidden">
              <div class="absolute top-2 right-2 bg-floral-white-500 text-black-magic-600 px-2 py-1 rounded text-xs font-semibold">Coming Soon</div>
              <h3 class="text-lg md:text-xl font-semibold mb-2 text-center">Business</h3>
              <div class="text-lg md:text-xl font-bold text-center mb-4">$200<span class="text-sm font-normal">/mo + usage</span></div>
              <ul class="text-sm md:text-base space-y-2 mb-4 opacity-75">
                <li>• Everything in Growth +</li>
                <li>• Unlimited autoscaling</li>
                <li>• Dedicated compute classes (more powerful servers)</li>
                <li>• More users & bandwidth included</li>
                <li>• Enterprise-grade security & compliance features</li>
              </ul>
              <div class="text-xs text-center italic">For high-traffic SaaS & enterprise</div>
            </div>
          </div>

          <!-- Laravel Management Add-Ons -->
          <div class="mb-8">
            <h3 class="text-lg md:text-xl font-semibold mb-4 text-center">🔧 Laravel Management Add-Ons</h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="border border-space-shuttle-500 rounded-md p-4">
                <div class="font-semibold">Custom Laravel Setup & Architecture</div>
                <div class="text-sm">From $1,000</div>
              </div>
              <div class="border border-space-shuttle-500 rounded-md p-4">
                <div class="font-semibold">Performance Tuning & Caching Layer</div>
                <div class="text-sm">$300+</div>
              </div>
              <div class="border border-space-shuttle-500 rounded-md p-4">
                <div class="font-semibold">CI/CD Pipeline Setup</div>
                <div class="text-sm">$250+</div>
              </div>
              <div class="border border-space-shuttle-500 rounded-md p-4">
                <div class="font-semibold">24/7 App Monitoring & Emergency Response</div>
                <div class="text-sm">$99/mo</div>
              </div>
            </div>
          </div>

          <!-- Laravel Call to Action -->
          <div class="text-center mb-8">
            <p class="mb-4">Need to deploy and scale your Laravel application?</p>
            <p class="text-sm">From development to production, I've got you covered.</p>
            <p class="text-xs mt-2 italic">💡 Combine with WordPress plans for full web presence bundles starting at $99/mo + hosting usage</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
