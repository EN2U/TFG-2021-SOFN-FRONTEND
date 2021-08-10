<template>
  <q-page class="q-pa-md bg-red-2 flex justify-center items-center">
    {{ step }}
    <div style="width: 50%;">
      <q-stepper
        ref="stepper"
        v-model="step"
        animated
        done-color="red-5"
        active-color="purple"
        inactive-color="secondary"
      >
        <q-step
          :name="1"
          title="Detalles"
          icon="manage_accounts"
          :done="step > 1"
        >
          <EnterpriseInformation
            :name.sync="name"
            :address1.sync="address1"
            :address2.sync="address2"
            :city.sync="city"
            :zip.sync="zip"
            :country.sync="country"
          />
        </q-step>

        <q-step
          :name="2"
          title="Contacto"
          icon="create_new_folder"
          :done="step > 2"
        >
          <EnterpriseContact />
        </q-step>

        <q-step
          :name="3"
          title="Tipo empresa"
          icon="add_comment"
          :done="step > 3"
        >
          <EnterpriseType />
        </q-step>
        <q-step
          :name="4"
          title="About"
          icon="manage_accounts"
          :done="step > 4"
        >
          <EnterpriseDetails />
        </q-step>
        <q-step
          :name="5"
          title="Imagenes"
          icon="manage_accounts"
          :done="step > 5"
        >
          <EnterpriseImages />
        </q-step>
        <q-step
          :name="6"
          title="Redes sociales"
          icon="add_comment"
          :done="step > 6"
        >
          <EnterpriseSocial />
        </q-step>
        <template #navigation>
          <q-stepper-navigation>
            <q-btn
              color="deep-orange"
              :label="step === 6 ? 'Finish' : 'Continue'"
              @click="step === 6 ? $router.push('/enterprise/') : evaluateStepper()"
            />
            <q-btn
              v-if="step > 1"
              flat
              color="deep-orange"
              label="Back"
              class="q-ml-sm"
              @click="$refs.stepper.previous()"
            />
          </q-stepper-navigation>
        </template>
      </q-stepper>
    </div>
  </q-page>
</template>

<script>
import {
  EnterpriseInformation,
  EnterpriseContact,
  EnterpriseType,
  EnterpriseDetails,
  EnterpriseSocial,
  EnterpriseImages
} from "components/EnterpriseRegister/"

export default {
  name: "EnterpriseRegister",
  components: {
    EnterpriseImages,
    EnterpriseInformation,
    EnterpriseContact,
    EnterpriseType,
    EnterpriseDetails,
    EnterpriseSocial
  },
  data () {
    return {
      step: 1,
      imageData: null,
      name: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
      country: "",
      contact: "",
      email: "",
      phone: ""

    }
  },
  methods: {
    evaluateStepper () {
      if (this.step === 1) {
        if (this.name !== "" &&
        this.address1 !== "" &&
        this.city !== "" &&
        this.zip !== "" &&
        this.country !== ""
        ) this.$refs.stepper.next()
      }
      if (this.step === 2) {
        if (this.contact !== "" &&
        this.email !== "" &&
        this.phone !== "") this.$refs.stepper.next()
      }
    }
    /*     onSelectFile () {
      const input = this.$refs.fileInput
      const files = input.files
      this.FileImage = files[0]
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
    } */
  }
}
</script>
