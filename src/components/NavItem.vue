<template>
  <li class="flex-1">
    <a v-bind="$attrs" class="flex flex-col items-center p-2 md:text-xl text-[14px] capitalize">
      <slot></slot>
    </a>
  </li>
</template>

<script>
export default {
  inheritAttrs: false
}
</script>
