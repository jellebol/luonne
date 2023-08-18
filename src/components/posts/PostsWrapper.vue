<script setup lang="ts">
import ButtonIcon from '../buttons/ButtonIcon.vue'
import CardWrapper from '../card/CardWrapper.vue'
import HeadingText from '../typography/HeadingText.vue'
import { ChevronUpIcon, ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed, onMounted } from 'vue'
import { usePostStore } from '../../stores/posts'
import { useActionStore } from '../../stores/actions'

const storePosts = usePostStore()
const storeActions = useActionStore()

const firstPosts = computed(() => {
  return storePosts.getFirstPosts()
})

const isFirstPost = computed(() => {
  return (index: number) => index === 0
})

const isLastPost = computed(() => {
  return (index: number) => index === firstPosts.value.length - 1
})

function moveUp(index: number, postId: number) {
  storePosts.movePostUp(index)
  storeActions.setNewAction(index, index - 1, postId)
}

function moveDown(index: number, postId: number) {
  storePosts.movePostDown(index)
  storeActions.setNewAction(index, index + 1, postId)
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

  <div class="flex flex-col space-y-5">
    <CardWrapper v-for="(post, index) in firstPosts" :key="post.id">
      <HeadingText :title="'Post ' + post.id" />
      <template #action>
        <div
          class="h-full flex ml-5 flex-col"
          :class="isFirstPost(index) || isLastPost(index) ? 'justify-center' : 'justify-between'"
        >
          <ButtonIcon
            @click-event="moveUp(index, post.id)"
            :text="'Move post ' + post.id + ' up'"
            v-if="!isFirstPost(index)"
          >
            <ChevronUpIcon class="h-6 w-6" />
          </ButtonIcon>
          <ButtonIcon
            @click-event="moveDown(index, post.id)"
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
