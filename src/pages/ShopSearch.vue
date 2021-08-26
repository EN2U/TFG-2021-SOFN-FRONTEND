<template>
  <q-page class="q-pa-xl ">
    <div class="row justify-center">
      <div class="q-pa-xl">
        <span class="text-h4">Visite nuestras tiendas!</span>
      </div>
      <div class="full-width row q-pt-md justify-center">
        <q-input
          v-model="filterShop"
          type="search"
          label="Busque una tienda"
          style="width: 70%; min-width=300px"
          filled
          color="primary"
          placeholder="eg: HortalizasPlus"
        >
          <template #append>
            <q-icon
              name="search"
              color="primary"
            />
            <q-btn
              size="sm"
              icon="check"
              color="primary"
              @click="filterShops"
            />
            <q-btn
              size="sm"
              icon="cancel"
              color="negative"
              @click="clearFilter"
            />
          </template>
        </q-input>
      </div>
      <div class="row full-width justify-center q-pt-xl">
        <div class="col-6 col-md-6">
          <q-list
            bordered
            padding
            separator
          >
            <q-item>
              <q-item-section>
                <q-item-label
                  header
                  class="text-h6"
                  v-text="'Tiendas disponibles'"
                />
              </q-item-section>
            </q-item>
            <q-item
              v-for="enterprise in filteredEnterprises"
              :key="enterprise._id"
              v-ripple
              clickable
              @click="openEnterpriseModal(enterprise)"
            >
              <q-item-section avatar>
                <div v-if="enterprise.logo">
                  <q-img
                    v-if="enterprise.logo"
                    style="height: 50px; width: 50px"
                    :src="enterprise.logo"
                  />
                </div>
                <q-avatar
                  v-else
                  rounded
                  size="xl"
                  color="teal"
                  text-color="white"
                  icon="account_circle"
                />
                <q-img />
              </q-item-section>
              <q-item-section>
                <q-item-label v-text="enterprise.name" />
                <q-item-label
                  caption
                  v-text="enterprise.short_description"
                />
              </q-item-section>
              <q-tooltip>
                <span v-text="'Ver la información de ' + enterprise.name" />
              </q-tooltip>
            </q-item>
          </q-list>
        </div>
      </div>
    </div>
    <EnterpriseDialog
      :open-modal.sync="openModal"
      :enterprise="selectedEnterprise"
    />
  </q-page>
</template>

<script>
import EnterpriseDialog from "components/EnterpriseSearch/EnterpriseDialog.vue"
export default {
  name: "ShopSearch",
  components: { EnterpriseDialog },
  data () {
    return {
      enterprises: [],
      filterShop: "",
      filteredEnterprises: [],
      openModal: false,
      selectedEnterprise: []
    }
  },
  async mounted () {
    this.enterprises = await this.$store.dispatch("EnterpriseRegister/getAllEnterprises")
    console.log(this.enterprises)
    this.filteredEnterprises = this.enterprises
  },
  methods: {
    filterShops () {
      if (this.filterShop === "") this.filteredEnterprises = this.enterprises
      else this.filteredEnterprises = this.enterprises.filter((enterprise) => enterprise.name.includes(this.filterShop))
    },
    clearFilter () {
      this.filteredEnterprises = this.enterprises
      this.filterShop = ""
    },
    openEnterpriseModal (enterprise) {
      console.log("xd")
      this.selectedEnterprise = enterprise
      this.openModal = true
    }
  }
}
</script>
