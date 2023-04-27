<template>
  <div class="APP">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'APP',
  created () {
    // 阻止双指放大
    document.addEventListener('gesturestart', function (event) {
      event.preventDefault()
    })
    // 阻止双击放大
    let lastTouchEnd = 0
    document.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault()
      }
    })
    document.addEventListener(
      'touchend',
      function (event) {
        const now = new Date().getTime()
        if (now - lastTouchEnd <= 300) {
          event.preventDefault()
        }
        lastTouchEnd = now
      },
      false
    )
    // 禁止通过ctrl + +/- 和 ctrl + 滚轮 对页面进行缩放
    document.addEventListener(
      'keydown',
      function (event) {
        if (
          (event.ctrlKey === true || event.metaKey === true) &&
          (event.keyCode === 61 ||
            event.which === 107 ||
            event.which === 173 ||
            event.which === 109 ||
            event.which === 187 ||
            event.which === 189)
        ) {
          event.preventDefault()
        }
      },
      false
    )
    // Chrome IE 360
    window.addEventListener(
      'mousewheel',
      function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault()
        }
      },
      {
        passive: false
      }
    )

    // firefox
    window.addEventListener(
      'DOMMouseScroll',
      function (event) {
        if (event.ctrlKey === true || event.metaKey) {
          event.preventDefault()
        }
      },
      {
        passive: false
      }
    )
  }
}
</script>

<style></style>
