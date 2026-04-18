<template>
  <div class="min-h-screen bg-slate-50 py-12 px-6 lg:px-24">
    <nav class="max-w-7xl mx-auto mb-16">
      <NuxtLink 
        to="/" 
        class="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 rounded-full text-slate-700 font-medium hover:bg-slate-100 transition-all shadow-sm group text-abc-green"
      >
        <Icon name="ph:arrow-left-bold" class="group-hover:-translate-x-1 transition-transform text-abc-green" />
        Back to Home
      </NuxtLink>
    </nav>

    <main class="max-w-7xl mx-auto">
      <header class="mb-20">
        <h1 class="text-4xl lg:text-5xl font-bold text-slate-900 mb-6 text-abc-navy">
          Our Impact in Numbers
        </h1>
        <p class="text-lg text-slate-600 max-w-2xl leading-relaxed">
          Through strategic sales consulting and hands-on training, we've helped firms across East Africa transform their sales culture and revenue trajectory.
        </p>
      </header>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        <div v-for="stat in stats" :key="stat.label" class="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
          <div class="text-3xl font-bold text-abc-green mb-2">{{ stat.value }}</div>
          <div class="text-sm font-semibold uppercase tracking-wider text-slate-500">{{ stat.label }}</div>
          <p class="mt-4 text-slate-600 text-sm leading-snug">{{ stat.desc }}</p>
        </div>
      </div>

      <section class="grid lg:grid-cols-2 gap-12 items-center">
        <div class="space-y-8">
          <h2 class="text-3xl font-bold text-slate-900">Transformation Highlights</h2>
          <div v-for="item in highlights" :key="item.title" class="flex gap-4">
            <div class="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600">
              <Icon :name="item.icon" size="24" />
            </div>
            <div>
              <h3 class="font-bold text-lg text-slate-800">{{ item.title }}</h3>
              <p class="text-slate-600 leading-relaxed">{{ item.text }}</p>
            </div>
          </div>
        </div>

        <div class="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white overflow-hidden relative">
          <div class="relative z-10">
            <h3 class="text-xl font-medium mb-8 text-slate-400">Average Revenue Growth (Year 1)</h3>
            <div class="space-y-6">
              <div v-for="bar in chartData" :key="bar.label">
                <div class="flex justify-between text-sm mb-2">
                  <span>{{ bar.label }}</span>
                  <span class="text-blue-400">{{ bar.percent }}%</span>
                </div>
                <div class="w-full bg-slate-800 rounded-full h-3">
                  <div class="bg-blue-500 h-3 rounded-full transition-all duration-1000" :style="{ width: bar.percent + '%' }"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="absolute -bottom-10 -right-10 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl"></div>
        </div>
      </section>
      <BackToTop />
    </main>
  </div>
</template>

<script setup>
const stats = [
  { value: '45%', label: 'Avg. Revenue Boost', desc: 'Typical increase in conversion rates within the first 6 months post-training.' },
  { value: '1,200+', label: 'Teams Trained', desc: 'Professional sales executives mentored across diverse industries.' },
  { value: '89%', label: 'Retention Rate', desc: 'Of our clients report sustained performance growth after our program.' },
  { value: '$12M+', label: 'Value Generated', desc: 'Estimated net-new revenue created for our consulting partners.' }
]

const highlights = [
  { 
    icon: 'ph:chart-line-up-bold', 
    title: 'Streamlined Pipelines', 
    text: 'We audit and rebuild sales funnels to eliminate friction, resulting in 30% faster deal closures.' 
  },
  { 
    icon: 'ph:users-four-bold', 
    title: 'High-Performance Culture', 
    text: 'Moving teams from reactive order-taking to proactive solution-selling through psychology-based training.' 
  },
  { 
    icon: 'ph:target-bold', 
    title: 'Target Precision', 
    text: 'Implementing lead scoring systems that ensure your sales team focuses only on high-value prospects.' 
  }
]

const chartData = [
  { label: 'Q1: Foundation Setting', percent: 15 },
  { label: 'Q2: Skill Application', percent: 38 },
  { label: 'Q3: Process Optimization', percent: 64 },
  { label: 'Q4: Scalable Growth', percent: 92 }
]
</script>