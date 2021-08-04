<template>
  <div class="full-width q-px-xl column">
    <div class="row q-pa-md bg-red-2">
      <span class="text-bold text-h5">NOMBRE DE LA EMPRESA</span>
    </div>
    <div class="row full-width">
      <q-splitter
        v-model="splitterModel"
      >
        <template #before>
          <q-tabs
            v-model="tab"
            vertical
            class="text-teal"
          >
            <q-tab
              name="primaryDetails"
              label="Detalles principales"
            />
            <q-tab
              name="alarms"
              label="Alarms"
            />
            <q-tab
              name="movies"
              label="Movies"
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
            transition-next="jump-up"
          >
            <q-tab-panel name="primaryDetails">
              <div class="text-h4 q-mb-md">
                Mails
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="alarms">
              <div class="text-h4 q-mb-md">
                Alarms
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>

            <q-tab-panel name="movies">
              <div class="text-h4 q-mb-md">
                Movies
              </div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis praesentium cumque magnam odio iure quidem, quod illum numquam possimus obcaecati commodi minima assumenda consectetur culpa fuga nulla ullam. In, libero.</p>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      tab: "alarms",
      splitterModel: 20
    }
  }
}
</script>
