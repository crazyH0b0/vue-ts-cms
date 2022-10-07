<script setup lang="ts">
const props = defineProps({
  iconName: {
    type: String,
    required: true
  }
})
</script>
  <template>
    <svg
      class="fill-current align-middle text-inherit"
      aria-hidden="true"
    >
      <use
      :xlink:href="'#icon-' + props.iconName"
        class="fill-current"
      />
    </svg>
  </template>
  <style scoped>
  </style>
