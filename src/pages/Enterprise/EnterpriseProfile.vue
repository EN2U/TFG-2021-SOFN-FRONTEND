<template>
  <div class="full-width q-px-xl column">
    <div class="row q-pa-md bg-red-2">
      <span class="text-bold text-h5">NOMBRE DE LA EMPRESA</span>
    </div>
    <div class="row full-width">
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
              <PrimaryDetails />
            </q-tab-panel>

            <q-tab-panel name="address">
              <Address />
            </q-tab-panel>

            <q-tab-panel name="contact">
              <Contact />
            </q-tab-panel>
            <q-tab-panel name="social">
              <Social />
            </q-tab-panel>
            <q-tab-panel name="about">
              <About />
            </q-tab-panel>

            <q-tab-panel name="images">
              <Images />
            </q-tab-panel>

            <q-tab-panel name="user">
              <User />
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
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
      splitterModel: 20
    }
  }
}
</script>
