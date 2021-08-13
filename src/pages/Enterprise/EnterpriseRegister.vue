<template>
  <q-page class="q-pa-md flex justify-center items-center">
    <div style="width: 50%;">
      <q-stepper
        ref="stepper"
        v-model="step"
        class="shadow-8"
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
            :province.sync="province"
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
          <EnterpriseContact
            :contact.sync="contact"
            :email.sync="email"
            :phone.sync="phone"
          />
        </q-step>

        <q-step
          :name="3"
          title="Tipo empresa"
          icon="add_comment"
          :done="step > 3"
        >
          <EnterpriseType :is-productor.sync="isProductor" />
        </q-step>
        <q-step
          :name="4"
          title="About"
          icon="manage_accounts"
          :done="step > 4"
        >
          <EnterpriseDetails
            :company-number.sync="companyNumber"
            :long-description.sync="longDescription"
            :short-description.sync="shortDescription"
          />
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
      province: "",
      zip: "",
      country: "",
      contact: "",
      email: "",
      phone: "",
      isProductor: "",

      longDescription: "",
      shortDescription: "",
      companyNumber: ""
    }
  },
  computed: {
    generateEnterpriseObject () {
      return {
        name: this.name,

        address: {
          first_address: this.address1,
          second_address: this.address2,
          province: this.province,
          zip_code: this.zip,
          country: this.country
        },

        owner: this.contact,
        email: this.email,
        contact_phone: Number(this.phone),
        user_id: "6112ba394ba4edcce075f715",
        is_productor: this.isProductor === "productor"
      }
    },
    createEnterpriseDetails () {
      return {
        owner: this.contact,
        name: this.name,

        company_number: this.companyNumber,
        short_description: this.shortDescription,
        long_description: this.longDescription
      }
    }
  },
  methods: {
    setProductor (val) {
      this.isProductor = val
    },
    async evaluateStepper () {
      if (this.step === 1) {
        if (this.name !== "" &&
        this.address1 !== "" &&
        this.province !== "" &&
        this.zip !== "" &&
        this.country !== ""
        ) this.$refs.stepper.next()
      } else if (this.step === 2) {
        if (this.contact !== "" &&
        this.email !== "" &&
        this.phone !== "") this.$refs.stepper.next()
      } else if (this.step === 3) {
        if (this.isProductor !== "") {
          this.createNewEnterprise()
          this.$refs.stepper.next()
        }
      } else if (this.step === 4) {
        if (this.longDescription !== "" ||
            this.shortDescription !== "" ||
            this.companyNumber !== "") {
          const response = await this.$store.dispatch("EnterpriseRegister/updateEnterpriseDetails", this.createEnterpriseDetails)
          console.log(response)
        }
        this.$refs.stepper.next()
      }
    },
    async createNewEnterprise () {
      const response = await this.$store.dispatch("EnterpriseRegister/newEnterprise", this.generateEnterpriseObject)
      console.log(response)
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
