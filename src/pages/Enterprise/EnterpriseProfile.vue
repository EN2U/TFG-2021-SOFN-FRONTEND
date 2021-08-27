<template>
  <div class="full-width q-px-xl column">
    <div
      v-if="selectedEnterprise"
      class="row q-pa-md bg-red-1"
    >
      <q-select
        v-model="selectedEnterprise"
        :options="userEnterpriseProfile"
        option-label="name"
        filled
        class="text-bold text-h5"
        style="min-width: 400px"
        hint="Seleccione su empresa"
      />
    </div>
    <div
      v-if="selectedEnterprise"
      class="row full-width"
    >
      <q-splitter
        v-model="splitterModel"
        class="q-pt-lg full-width"
      >
        <template #before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
          >
            <q-tab
              name="primaryDetails"
              icon="details"
              label="Detalles principales"
            />
            <q-tab
              name="address"
              icon="map"
              label="Dirección"
            />
            <q-tab
              name="contact"
              icon="contact_mail"
              label="Contacto"
            />
            <q-tab
              name="social"
              icon="groups"
              label="Social"
            />
            <q-tab
              name="about"
              icon="info"
              label="About"
            />
            <q-tab
              name="images"
              icon="image"
              label="Imagenes"
            />
            <q-tab
              name="user"
              icon="person"
              label="User"
            />
          </q-tabs>
        </template>

        <template #after>
          <q-tab-panels
            v-model="tab"
            animated
            swipeable
            vertical
            transition-prev="jump-up"
            transition-next="jump-down"
          >
            <q-tab-panel name="primaryDetails">
              <PrimaryDetails
                :key="selectedEnterprise._id"
                :name.sync="selectedEnterprise.name"
                :productor.sync="selectedEnterprise.is_productor"
                :uid="selectedEnterprise._id"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>

            <q-tab-panel name="address">
              <Address
                :key="selectedEnterprise._id"
                :country.sync="selectedEnterprise.address.country"
                :first-address.sync="selectedEnterprise.address.first_address"
                :zip-code.sync="selectedEnterprise.address.zip_code"
                :second-address.sync="selectedEnterprise.address.second_address"
                :province.sync="selectedEnterprise.address.province"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>

            <q-tab-panel name="contact">
              <Contact
                :key="selectedEnterprise._id"
                :email.sync="selectedEnterprise.email"
                :phone.sync="selectedEnterprise.contact_phone"
                :website.sync="selectedEnterprise.website"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>
            <q-tab-panel name="social">
              <Social
                :key="selectedEnterprise._id"
                :facebook.sync="selectedEnterprise.facebook"
                :twitter.sync="selectedEnterprise.twitter"
                :linkedin.sync="selectedEnterprise.linkedin"
                :instagram.sync="selectedEnterprise.instagram"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>
            <q-tab-panel name="about">
              <About
                :key="selectedEnterprise._id"
                :long-description.sync="selectedEnterprise.long_description"
                :short-description.sync="selectedEnterprise.show_description"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>

            <q-tab-panel name="images">
              <Images
                :key="selectedEnterprise._id"
                :name="selectedEnterprise.name"
                :owner="selectedEnterprise.owner"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>

            <q-tab-panel name="user">
              <User
                :key="selectedEnterprise._id"
                :owner.sync="selectedEnterprise.owner"
                :email.sync="selectedEnterprise.email"
                @clickUpdateEnterprise="updateEnterprise"
              />
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
    <div v-else>
      <div class="text-center full-width">
        <span
          class="text-h5"
          v-text="'No tiene registrada ninguna tienda. '"
        />
      </div>
      <div class="text-center full-width q-pt-xl">
        <q-btn
          color="info"
          rounded
          @click="$router.push('/open-shop')"
        >
          <span v-text="'Click para ir a la página del formulario'" />
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script>
import About from "components/EnterpriseProfile/About"
import PrimaryDetails from "components/EnterpriseProfile/PrimaryDetails"
import Social from "components/EnterpriseProfile/Social"
import Images from "components/EnterpriseProfile/Images"
import Address from "components/EnterpriseProfile/Address"
import Contact from "components/EnterpriseProfile/Contact"
import User from "components/EnterpriseProfile/User"

export default {
  name: "EnterpriseProfile",
  components: {
    About,
    User,
    PrimaryDetails,
    Social,
    Contact,
    Images,
    Address
  },
  data () {
    return {
      tab: "primaryDetails",
      splitterModel: 20,
      selectedEnterprise: null,
      userEnterpriseProfile: []
    }
  },
  async mounted () {
    this.userEnterpriseProfile = await this.$store.dispatch("EnterpriseRegister/getEnterpriseProfile", { user_id: this.$store.getters["User/getUserId"] })
    this.selectedEnterprise = this.userEnterpriseProfile[0]
  },
  methods: {
    async updateEnterprise () {
      const response = await this.$store.dispatch("EnterpriseRegister/updateEnterprise", this.selectedEnterprise)
      if (response.data.success) {
        this.$q.notify({
          message: response.data.msg,
          type: "positive",
          position: "top"
        })
        const res = await this.$store.dispatch("EnterpriseRegister/getEnterpriseProfile", { user_id: this.$store.getters["User/getUserId"] })
        this.userEnterpriseProfile = res.data.enterprise
      } else {
        this.$q.notify({
          message: response.data.error,
          type: "negative",
          position: "top"
        })
      }
    }
  }
}
</script>
