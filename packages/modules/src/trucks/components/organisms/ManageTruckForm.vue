<template>
  <form
    @submit="onSubmit"
    class="grid grid-rows-[repeat(4,max-content)] gap-y-4"
  >
    <div>
      <LabelForm required for="code"> {{ $t("labels.code") }}: </LabelForm>
      <InputText
        id="code"
        v-model="codeValue"
        :placeholder="$t('labels.managing.form.placeholders.code')"
        aria-label="Code Input"
        class="w-full"
        name="codde"
        :disabled="isSubmitting"
        aria-required="true"
        :invalid="errorMessageCode ? true : false"
      />
      <ErrorMessage v-if="errorMessageCode">
        {{ errorMessageName }}
      </ErrorMessage>
    </div>
    <div>
      <LabelForm required for="name"> {{ $t("labels.name") }}: </LabelForm>
      <InputText
        id="name"
        v-model="nameValue"
        :placeholder="$t('labels.managing.form.placeholders.name')"
        aria-label="Name Input"
        class="w-full"
        name="name"
        :disabled="isSubmitting"
        aria-required="true"
        :invalid="errorMessageName ? true : false"
      />
      <ErrorMessage v-if="errorMessageName">
        {{ errorMessageName }}
      </ErrorMessage>
    </div>
    <div>
      <LabelForm required for="description">
        {{ $t("labels.description") }}:
      </LabelForm>
      <Textarea
        v-model="descriptionValue"
        rows="5"
        cols="30"
        class="w-full"
        name="description"
        :disabled="isSubmitting"
        aria-required="true"
        :placeholder="$t('labels.managing.form.placeholders.description')"
        aria-label="Description Input"
        :invalid="errorMessageDescription ? true : false"
      />
      <ErrorMessage v-if="errorMessageDescription">
        {{ errorMessageDescription }}
      </ErrorMessage>
    </div>
    <div>
      <LabelForm required for="status"> {{ $t("labels.status") }}: </LabelForm>
      <Dropdown
        v-model="statusValue"
        :options="statusOptions[truck?.status || 'OUT_OF_SERVICE']"
        option-label="name"
        option-value="value"
        aria-required="true"
        name="status"
        :disabled="isSubmitting"
        :placeholder="$t('labels.managing.form.placeholders.status')"
        class="w-full md:w-14rem"
        :invalid="errorMessageStatus ? true : false"
      />
      <ErrorMessage v-if="errorMessageStatus">
        {{ errorMessageDescription }}
      </ErrorMessage>
    </div>
    <div class="grid grid-cols-2 items-center justify-center gap-x-2">
      <Button
        severity="secondary"
        class="flex justify-center"
        @click="handleCancel"
        :disabled="isSubmitting"
      >
        {{ $t("buttons.cancel") }}
      </Button>
      <Button
        class="flex justify-center"
        type="submit"
        :disabled="isSubmitting"
      >
        {{ $t("buttons.save") }}
      </Button>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { computed, ref } from "vue";
import { useRoute } from "vue-router";
import { useAsyncData } from "nuxt/app";
import { useField, useForm } from "vee-validate";
import { useTrucksStore } from "../../stores/trucks";
import { STATUS_TRUCK } from "@coldrun/types/src/truck";
import useQuery from "@coldrun/core/src/composables/useQuery";
import type { Truck, ManageTruckForm } from "@coldrun/types/src/truck";

import LabelForm from "@coldrun/core/src/components/atoms/LabelForm.vue";
import ErrorMessage from "@coldrun/core/src/components/atoms/ErrorMessage.vue";

const { t } = useI18n();
const route = useRoute();
const { deleteParam } = useQuery();
const query = computed(() => route.query);
const trucksStore = useTrucksStore();
const isSubmitting = ref(false);

const emit = defineEmits<{
  (e: "on:cancel"): void;
}>();

const statusOptions = computed(() => ({
  [STATUS_TRUCK.OUT_OF_SERVICE]: [
    { name: t("labels.statuses.out_of_service"), value: "OUT_OF_SERVICE" },
    { name: t("labels.statuses.loading"), value: "LOADING" },
    { name: t("labels.statuses.to_job"), value: "TO_JOB" },
    { name: t("labels.statuses.at_job"), value: "AT_JOB" },
    { name: t("labels.statuses.returning"), value: "RETURNING" },
  ],
  [STATUS_TRUCK.LOADING]: [
    { name: t("labels.statuses.loading"), value: "LOADING" },
    { name: t("labels.statuses.to_job"), value: "TO_JOB" },
  ],
  [STATUS_TRUCK.TO_JOB]: [
    { name: t("labels.statuses.to_job"), value: "TO_JOB" },
    { name: t("labels.statuses.at_job"), value: "AT_JOB" },
  ],
  [STATUS_TRUCK.AT_JOB]: [
    { name: t("labels.statuses.at_job"), value: "AT_JOB" },
    { name: t("labels.statuses.returning"), value: "RETURNING" },
  ],
  [STATUS_TRUCK.RETURNING]: [
    { name: t("labels.statuses.returning"), value: "RETURNING" },
    { name: t("labels.statuses.loading"), value: "LOADING" },
  ],
}));

const { handleSubmit, setValues } = useForm<ManageTruckForm>();
const { value: nameValue, errorMessage: errorMessageName } = useField<string>(
  "name",
  "required"
);

const { value: codeValue, errorMessage: errorMessageCode } = useField<string>(
  "code",
  "required|alpha_num"
);

const { value: descriptionValue, errorMessage: errorMessageDescription } =
  useField<string>("description", "required");

const { value: statusValue, errorMessage: errorMessageStatus } = useField<
  Record<string, string>
>("status", "required");

const { data: truck } = await useAsyncData(
  `truck:${query.value?.truck}`,
  async () => {
    const truck = await trucksStore.$fetchOne(<string>query.value?.truck);

    setValues({
      name: truck.name,
      code: truck.code,
      description: truck.description,
      status: <string>truck.status,
    });

    return truck;
  },
  {
    watch: [() => query.value.truck],
    immediate: false,
  }
);

const onSubmit = handleSubmit(async (values) => {
  isSubmitting.value = true;
  query.value?.truck ? await _onUpdate(values) : await _onAdd(values);

  await trucksStore.$fetch();
  emit("on:cancel");
});

const handleCancel = () => {
  deleteParam("truck");
  emit("on:cancel");
};

const _onUpdate = async (values: ManageTruckForm) =>
  await await trucksStore.$update(
    <string>truck.value?.id.toString(),
    <Truck>{
      ...values,
    }
  );

const _onAdd = async (values: ManageTruckForm) =>
  await trucksStore.$add(<Truck>{
    ...values,
  });
</script>
