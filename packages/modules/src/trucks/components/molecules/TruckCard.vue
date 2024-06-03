<template>
  <div
    class="hover:bg-primary-100/5 p-3 transition-colors"
    :class="{
      'border-b border-b-gray-300 border-dashed': divider,
    }"
  >
    <div class="grid grid-cols-12 py-3 gap-x-4">
      <div class="hidden md:block col-span-1">
        <img :src="TruckImage" :alt="truck.name" class="w-full max-w-20" />
      </div>
      <div class="col-span-12 md:col-span-11">
        <div class="grid md:grid-cols-12 grid-cols-1 gap-y-6">
          <div class="col-span-full md:col-span-10 order-2 md:order-1">
            <h3 class="font-semibold text-primary-100 break-words">
              {{ truck.name }}
            </h3>
            <p class="text-sm leading-5 break-words">
              {{ truck.description }}
            </p>
          </div>
          <div
            class="col-span-full md:col-span-2 md:text-right order-1 md:order-2 flex justify-between items-center md:block"
          >
            <strong class="text-sm leading-5 block md:mb-2 break-words">{{
              truck.code
            }}</strong>
            <Tag
              :value="t(`labels.statuses.${truck.status.toLowerCase()}`)"
              :severity="colorsStatusMap[truck.status]"
            ></Tag>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-12 gap-x-2 mb-2">
      <div class="hidden md:block col-span-1"></div>
      <div
        class="col-span-12 md:col-span-11 grid grid-cols-[repeat(2,max-content)] gap-x-2 md:justify-end"
      >
        <Button
          :label="t('buttons.managing.edit')"
          severity="warning"
          class="text-xs px-3 py-1"
          @click="emit('on:edit')"
        />
        <Button
          :label="t('buttons.managing.remove')"
          severity="danger"
          class="text-xs px-3 py-1"
          @click="emit('on:remove', $event)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TruckImage from "../../../assets/images/truck.webp";
import type { Truck } from "@coldrun/types/src/truck";
import { useI18n } from "vue-i18n";
import { colorsStatusMap } from "@coldrun/types/src/truck";

const { t } = useI18n();

withDefaults(
  defineProps<{
    truck: Truck;
    divider?: boolean;
  }>(),
  {
    divider: true,
  }
);

const emit = defineEmits<{
  (e: "on:remove", event: Event): void;
  (e: "on:edit"): void;
}>();
</script>
