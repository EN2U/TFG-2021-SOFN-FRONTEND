<template>
  <div class="full-width row justify-between q-px-xl">
    <q-card class="col-5 q-ma-lg bg-grey-2">
      <q-card-section>
        <q-icon
          name="store"
          size="lg"
          class="q-pr-sm"
        />
        <span class="text-bold">Su tienda online</span>
      </q-card-section>
      <q-card-section>
        <q-btn class="full-width bg-primary text-white">
          <span>Visualice Empresa</span>
          <q-icon name="navigate_next" />
        </q-btn>
      </q-card-section>
    </q-card>
    <q-card class="col-5 q-ma-lg bg-grey-2">
      <q-card-section>
        <q-icon
          name="manage_accounts"
          size="lg"
          class="q-pr-sm"
        />
        <span class="text-bold">Edite los detalles del perfil</span>
      </q-card-section>
      <q-card-section>
        <q-btn
          class="full-width bg-primary text-white"
          @click="$router.push('profile')"
        >
          <span>Gestione Empresa</span>
          <q-icon name="navigate_next" />
        </q-btn>
      </q-card-section>
    </q-card>
    <q-card class="col-5 q-ma-lg bg-grey-2">
      <q-card-section>
        <q-icon
          name="inventory_2"
          size="lg"
          class="q-pr-sm"
        />
        <span class="text-bold">Añada y gestione sus productos</span>
      </q-card-section>
      <q-card-section>
        <q-btn
          class="full-width bg-primary text-white"
          @click="$router.push('products')"
        >
          <span>Gestione sus Productos</span>
          <q-icon name="navigate_next" />
        </q-btn>
      </q-card-section>
    </q-card>
  </div>
</template>
