<template>
  <HeroBanner
    :title="$t('labels.managing.title')"
    :description="$t('labels.managing.description')"
  />
  <section>
    <Panel class="border border-gray-200 rounded-lg">
      <template #header>
        <PanelHeading :content="$t('labels.managing.panel.heading')" />
      </template>
      <template #icons>
        <Button
          :label="$t('buttons.managing.add')"
          class="text-xs px-3 py-1"
          @click="isManagingTruckFormVisible = true"
        />
      </template>
      <TrucksList
        @on:edit="isManagingTruckFormVisible = true"
        @on:add="isManagingTruckFormVisible = true"
      />
    </Panel>
  </section>
  <Sidebar
    position="right"
    v-model:visible="isManagingTruckFormVisible"
    @hide="deleteParam('truck')"
    :header="$t(`labels.managing.form.heading.${query.truck ? 'edit' : 'add'}`)"
    class="w-full md:max-w-96"
  >
    <ManageTruckForm @on:cancel="isManagingTruckFormVisible = false" />
  </Sidebar>
</template>

<script lang="ts" setup>
import useQuery from "@coldrun/core/src/composables/useQuery";
import HeroBanner from "@coldrun/core/src/components/molecules/HeroBanner.vue";
import PanelHeading from "@coldrun/core/src/components/atoms/PanelHeading.vue";
import TrucksList from "@coldrun/modules/src/trucks/components/organisms/TrucksList.vue";
import ManageTruckForm from "@coldrun/modules/src/trucks/components/organisms/ManageTruckForm.vue";

const route = useRoute();
const { deleteParam } = useQuery();
const isManagingTruckFormVisible = ref(false);

const query = computed(() => route.query);

onBeforeMount(() => {
  if (query.value.truck) {
    isManagingTruckFormVisible.value = true;
  }
});
</script>
