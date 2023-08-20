<script setup lang="ts">
import ButtonIcon from '../buttons/ButtonIcon.vue'
import CardWrapper from '../card/CardWrapper.vue'
import HeadingText from '../typography/HeadingText.vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed, onMounted, ref } from 'vue'
import { usePostStore } from '../../stores/posts'

const storePosts = usePostStore()

const firstPosts = computed(() => {
  return storePosts.getFirstPosts()
})

const isFirstPost = computed(() => {
  return (index: number) => index === 0
})

const isLastPost = computed(() => {
  return (index: number) => index === firstPosts.value.length - 1
})

// fade all posts on first enter
const animation = ref(firstPosts.value.map(() => 'animate-fade'))

function resetAnimation() {
  animation.value = firstPosts.value.map(() => '')
}

function moveUp(index: number) {
  // animate clickted post down
  animation.value[index] = 'animate-fade-down'
  // animate post in target location up
  animation.value[index - 1] = 'animate-fade-up'
  storePosts.movePost(index, index - 1)
  setTimeout(resetAnimation, 500)
}

function moveDown(index: number) {
  // animate clickted post up
  animation.value[index] = 'animate-fade-up'
  // animate post in target location down
  animation.value[index + 1] = 'animate-fade-down'
  storePosts.movePost(index, index + 1)
  setTimeout(resetAnimation, 500)
}

onMounted(() => {
  // fetch all posts when component is mounted
  storePosts.fetchPosts()
})
</script>

<template>
  <div class="mb-7">
    <HeadingText title="Sortable Post List" isInvertColour type="h1" />
  </div>

  <div class="flex flex-col space-y-2 md:space-y-5">
    <CardWrapper
      v-for="(post, index) in firstPosts"
      :key="post.id"
      :id="'post-' + post.id"
      class="animate-duration-200"
      :class="animation[index]"
    >
      <HeadingText :title="'Post ' + post.id" />
      <template #action>
        <div
          class="h-full flex ml-5 flex-col"
          :class="isFirstPost(index) || isLastPost(index) ? 'justify-center' : 'justify-between'"
        >
          <ButtonIcon
            @click-event="moveUp(index)"
            :text="'Move post ' + post.id + ' up'"
            v-if="!isFirstPost(index)"
          >
            <ChevronUpIcon class="h-6 w-6" />
          </ButtonIcon>
          <ButtonIcon
            @click-event="moveDown(index)"
            :text="'Move post ' + post.id + ' down'"
            v-if="!isLastPost(index)"
          >
            <ChevronDownIcon class="h-6 w-6" />
          </ButtonIcon>
        </div>
      </template>
    </CardWrapper>
  </div>
</template>
