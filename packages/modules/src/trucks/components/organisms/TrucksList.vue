<template>
  <div class="grid grid-rows-[repeat(3,max-content)] gap-y-4">
    <div
      class="grid grid-cols-1 md:grid-cols-[max-content_1fr_max-content] justify-between items-start gap-y-4"
    >
      <FiltersForm
        :columns="columnsMap"
        @on:filter="handleFilterList"
        @on:remove="handleRemoveFilter"
      />
      <div class="md:border-b-0 border-b border-b-gray-200 border-dashed" />
      <SortingForm :columns="columnsMap" @on:sort="handleSortList" />
    </div>
  </div>
  <div class="grid grid-rows-[repeat(3,max-content)] gap-y-4">
    <EmptyList
      v-if="trucksStore.$list.length === 0"
      :heading="$t('labels.managing.list.empty.heading')"
      :description="
        $t(
          `labels.managing.list.${isFiltersExist.length === 0 ? 'empty' : 'search'}.description`
        )
      "
    >
      <template #additional v-if="isFiltersExist.length === 0">
        <Button
          class="flex justify-center min-w-44"
          type="submit"
          :label="$t('buttons.managing.add')"
          @click="emit('on:add')"
        />
      </template>
    </EmptyList>
    <DataView v-else :value="trucksStore.$list">
      <template #list="{ items }">
        <div class="grid grid-nogutter">
          <TruckCard
            :key="truck.id"
            v-for="(truck, index) in items"
            :truck="truck"
            :divider="index < items.length - 1"
            @on:edit="handleEditTruck(truck)"
            @on:remove="(event: Event) => handleRemoveTruck(truck, event)"
          />
        </div>
      </template>
    </DataView>
    <Paginator
      v-if="trucksStore.total > appConfig.list.default"
      :rows="appConfig.list.default"
      :totalRecords="trucksStore.$total"
      :rowsPerPageOptions="appConfig.list.limits"
      @page="handleChangePage"
      @update:rows="handleChangeLimit"
    ></Paginator>
  </div>
</template>

<script lang="ts" setup>
import type {
  SortFormType,
  ManageColumnType,
  FilterFormType,
} from "@coldrun/types/src/index";
import { computed } from "vue";
import { useI18n } from "vue-i18n";
import { useAppConfig } from "#app";
import { useRoute } from "vue-router";
import type { ComputedRef } from "vue";
import { useAsyncData } from "nuxt/app";
import { useConfirm } from "primevue/useconfirm";
import TruckCard from "../molecules/TruckCard.vue";
import { useTrucksStore } from "../../stores/trucks";
import type { Truck } from "@coldrun/types/src/truck";
import useQuery from "@coldrun/core/src/composables/useQuery";
import EmptyList from "@coldrun/core/src/components/atoms/EmptyList.vue";
import FiltersForm from "@coldrun/core/src/components/molecules/FiltersForm.vue";
import SortingForm from "@coldrun/core/src/components/molecules/SortingForm.vue";

const { t } = useI18n();
const route = useRoute();
const confirm = useConfirm();
const trucksStore = useTrucksStore();

const columnsMap: ComputedRef<ManageColumnType[]> = computed(() => [
  { name: t("labels.managing.list.columns.id"), column: "id" },
  { name: t("labels.managing.list.columns.code"), column: "code" },
  { name: t("labels.managing.list.columns.name"), column: "name" },
  { name: t("labels.managing.list.columns.status"), column: "status" },
]);

const appConfig = useAppConfig();
const { deleteParam, addParam } = useQuery();

const emit = defineEmits<{
  (e: "on:edit"): void;
  (e: "on:add"): void;
}>();

const query = computed(() => route.query);
const isFiltersExist = computed(() =>
  columnsMap.value.filter((item: ManageColumnType) => query.value[item.column])
);

const handleFilterList = (filter: FilterFormType) => {
  addParam({ [<string>filter.column]: <string>filter.value });
  if (!filter.column && !filter.value) {
    deleteParam(
      columnsMap.value.map((item: FilterFormType) => <string>item.column)
    );
  }
};

const handleRemoveFilter = (filter: FilterFormType) => {
  deleteParam(<string>filter.column);
};

const handleSortList = (sort: SortFormType) => {
  addParam({ sort: <string>sort.column, order: <string>sort.type });
  if (!sort.column && !sort.type) {
    deleteParam(["sort", "order"]);
  }
};

const handleChangePage = ({ page }: { page: number }) => {
  if (trucksStore.options?.page === (page + 1).toString()) {
    return;
  }
  addParam({
    page: (page + 1).toString(),
  });
};

const handleChangeLimit = (limit: number) => {
  addParam({ limit: limit.toString() });
};

const filtersToObject = () => {
  const filters: Record<string, string> = {};
  columnsMap.value.forEach((item: ManageColumnType) => {
    if (query.value[item.column]) {
      filters[item.column] = query.value[item.column];
    }
  });

  return filters;
};

const { refresh } = await useAsyncData(
  "trucks",
  async () => {
    await trucksStore.$fetch({
      page: query.value.page ? query.value.page.toString() : "1",
      limit: query.value.limit ? query.value.limit.toString() : "10",
      sort: query.value.sort ? query.value.sort.toString() : "id",
      order: query.value.order ? query.value.order.toString() : "desc",
      ...filtersToObject(),
    });
  },
  {
    watch: [
      () => query.value.page,
      () => query.value.sort,
      () => query.value.order,
      () => query.value.limit,
      ...columnsMap.value.map(
        (item: ManageColumnType) => () => query.value[item.column]
      ),
    ],
  }
);

const handleRemoveTruck = (truck: Truck, event: Event) => {
  confirm.require({
    target: <HTMLElement>event.currentTarget,
    message: t("messages.managing.remove.heading"),
    rejectClass: "p-button-secondary p-button-outlined p-button-sm",
    acceptClass: "p-button-danger p-button-sm",
    rejectLabel: t("buttons.cancel"),
    acceptLabel: t("buttons.confirm"),
    accept: async () => {
      await trucksStore.$delete(truck.id.toString());

      if (query.value.page != "1") {
        addParam({ page: "1" });
      } else {
        refresh();
      }
    },
  });
};

const handleEditTruck = (truck: Truck) => {
  addParam({ truck: truck.id.toString() });
  emit("on:edit");
};
</script>
