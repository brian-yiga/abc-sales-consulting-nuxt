<template>
  <div v-bind="$attrs" class="bg-white mb-4 md:mb-0">
    <img
      v-if="article.imgUrl"
      :src="article.imgUrl"
      :alt="article.title"
      class="w-full bg-slate-600"
    />

    <div class="p-8">
      <h3 class="text-zinc-800 text-lg font-bold leading-relaxed font-poppins mb-4">
        {{ article.title }}
      </h3>

      <div class="mb-4">
        {{ formatDate(article.date) }}
      </div>

      <p class="mb-8">
        {{ article.description }}
      </p>

      <div>
        <Button
          :url="article.url"
          variant="black-stroke"
          :label="article.isVideo ? 'Watch Video' : 'Read more'"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MuiButton as Button } from '@components/button'

defineOptions({
  inheritAttrs: false,
})

interface Article {
  title: string;
  description: string;
  url: string; // Changed from _path
  imgUrl: string; // Changed from img
  isVideo: boolean;
  date: string;
}

defineProps({
  article: {
    type: Object as () => Article, // Use the Article interface
    default() {
      return {
        title: '',
        description: '',
        url: '',
        imgUrl: '',
        isVideo: false,
        date: '',
      };
    },
  },
});

function formatDate(time: string) {
  const date = new Date(time);
  const year = new Intl.DateTimeFormat('en-US', { year: 'numeric' }).format(date); // corrected locale
  const month = new Intl.DateTimeFormat('en-US', { month: 'short' }).format(date);
  const day = new Intl.DateTimeFormat('en-US', { day: '2-digit' }).format(date);
  return `${day} ${month} ${year}`;
}
</script>
