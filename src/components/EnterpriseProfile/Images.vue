<template>
  <div class="q-px-xl column full-width ">
    <span class="text-h6 text-center text-light-green">IMAGENES</span>
    <q-separator color="grey-4" />
    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Logo 300x300</span>
      <div class="row col-8">
        <div
          class="q-pl-xl row items-center"
          @click="choosepicture"
        >
          <q-btn
            class="hint bg-purple-12 text-white"
            style="cursor: pointer; max-height: 50px"
          >
            <span v-if="!imageName">Escoge tu logo (300 X 300px)</span>
            <span v-else>{{ imageName }}</span>
          </q-btn>
          <input
            ref="fileInput"
            hidden
            class="file-input"
            type="file"
            @input="onSelectFile"
          >
        </div>
      </div>
    </div>

    <div class="q-pt-lg row items-center">
      <span class="col-2 text-subtitle2">Banner 1260x260</span>
      <div class="row col-8">
        <div
          class="q-pl-xl row items-center"
          @click="choosepicture"
        >
          <q-btn
            class="hint bg-purple-12 text-white"
            style="cursor: pointer; max-height: 50px"
          >
            <span v-if="!imageName">Escoge tu banner (1260 X 260px)</span>
            <span v-else>{{ imageName }}</span>
          </q-btn>
          <input
            ref="fileInput"
            hidden
            class="file-input"
            type="file"
            @input="onSelectFile"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      step: 1,
      imageData: null,
      imageName: null
    }
  },
  methods: {
    onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      this.FileImage = files[0].name
      this.imageName = this.FileImage
      if (files && files[0]) {
        const reader = new FileReader()
        reader.onload = e => {
          this.imageData = e.target.result
        }
        reader.readAsDataURL(files[0])
        this.$emit("input", files[0])
      }
    },
    choosepicture () {
      this.$refs.fileInput.click()
    }
  }
}
</script>
