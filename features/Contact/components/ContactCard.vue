<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";
import { required, email, numeric, helpers } from "@vuelidate/validators";

interface Props {
  headerMenu: HeaderMenu;
}

interface ContactForm {
  officeName: string;
  ceo: string;
  postOffice: string;
  address: string;
  fullName: string;
  phoneNumber: string;
  email: string;
}

defineProps<Props>();

const contactFormLabel = [
  // { title: "officeName", text: "会社名" },
  // { title: "ceo", text: "代表取締役" },
  // { title: "postOffice", text: "郵便番号" },
  // { title: "address", text: "所在地" },
  { title: "fullName", text: "お名前" },
  { title: "phoneNumber", text: "電話番号" },
  { title: "email", text: "メールアドレス" },
];

const state = reactive<ContactForm>({
  officeName: "",
  ceo: "",
  postOffice: "",
  address: "",
  fullName: "",
  phoneNumber: "",
  email: "",
});

const rules = {
  officeName: {},
  ceo: {},
  postOffice: {},
  address: {},
  fullName: {
    required: helpers.withMessage("お名前の入力が必要です。", required),
  },
  phoneNumber: {
    numeric: helpers.withMessage(
      "ハイフンなしの数字で入力してください",
      numeric
    ),
    required: helpers.withMessage("電話番号の入力が必要です。", required),
  },
  email: {
    email: helpers.withMessage("メールアドレスが不正です。", email),
    required: helpers.withMessage("メールアドレスの入力が必要です。", required),
  },
};

const validator = useVuelidate(rules, state);
const isRequired = (title: string) => {
  if (Object.keys(validator.value[title]).includes("required")) return true;
};

const submit = async () => {
  await validator.value.$validate();
};
</script>

<template>
  <TopInkCard
    position-bottom="-50px"
    bottom-title-width="320px"
    bottom-title-opacity="0.2"
    :text="headerMenu.text"
    :title="headerMenu.title"
    :color="headerMenu.color"
    :icon="headerMenu.icon"
  >
    <div class="my-10">
      <v-row
        v-for="(formLabel, index) in contactFormLabel"
        :key="index"
        class="d-flex justify-center"
      >
        <v-col cols="4" class="form-label-col">
          <div class="d-flex align-center" style="height: 40px">
            <v-chip
              label
              :color="headerMenu.color"
              style="width: 120px; height: 100%"
            >
              <span style="margin: 0 auto; font-size: 11px">
                {{ formLabel.text }}
              </span>
              <v-icon v-if="isRequired(formLabel.title)" size="sm" color="red"
                >mdi-alert-circle-outline</v-icon
              >
            </v-chip>
          </div>
        </v-col>

        <v-col cols="7" class="form-value-col">
          <v-text-field
            v-model="validator[formLabel.title].$model"
            :error="validator[formLabel.title].$errors[0]"
            :error-messages="validator[formLabel.title].$errors[0]?.$message"
            style="z-index: 1"
            variant="outlined"
            density="compact"
            :label="formLabel.text"
          />
        </v-col>
      </v-row>
      <div class="d-flex justify-center pt-4">
        <v-btn
          :color="headerMenu.color"
          style="z-index: 1"
          @click="validator.$validate()"
          >問い合わせる</v-btn
        >
      </div>
    </div>
  </TopInkCard>
</template>

<style scoped>
.form-label-col {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 0;
}
.form-value-col {
  display: flex;
  align-items: center;
  padding-top: 0;
  padding-right: 0;
}
</style>
