<script setup lang="ts">
import { useVuelidate } from "@vuelidate/core";
import { TopInkCard } from "~~/features/Elements";
import { HeaderMenu } from "~~/types/type";
import { required, email, numeric, helpers } from "@vuelidate/validators";
import { ContactFormKeys } from "../constant";
import { ContactForm } from "../types";
import { useToast } from "vue-toastification";
import emailjs from "@emailjs/browser";

interface Props {
  headerMenu: HeaderMenu;
}

defineProps<Props>();

useHead({
  title: "株式会社TOP INK",
  meta: [
    {
      name: "description",
      content: "株式会社TOP INK お問合せ",
    },
  ],
});

const contactFormLabel = [
  { title: ContactFormKeys.fullName, text: "お名前" },
  { title: ContactFormKeys.phoneNumber, text: "電話番号" },
  { title: ContactFormKeys.email, text: "メールアドレス" },
  { title: ContactFormKeys.emailTitle, text: "件名" },
  { title: ContactFormKeys.emailBody, text: "本文" },
];

const emailjsServiceId = useRuntimeConfig().public.emailjsServiceId;
const emailjsTemplateId = useRuntimeConfig().public.emailjsTemplateId;
const emailjsPublicKey = useRuntimeConfig().public.emailjsPublicKey;

const toast = useToast();

const isLoading = ref<boolean>(false);

const form = reactive<ContactForm>({
  [ContactFormKeys.fullName]: "",
  [ContactFormKeys.phoneNumber]: "",
  [ContactFormKeys.email]: "",
  [ContactFormKeys.emailTitle]: "",
  [ContactFormKeys.emailBody]: "",
});

const rules = {
  [ContactFormKeys.fullName]: {
    required: helpers.withMessage("お名前の入力が必要です。", required),
  },
  [ContactFormKeys.phoneNumber]: {
    numeric: helpers.withMessage(
      "ハイフンなしの数字で入力してください",
      numeric
    ),
    required: helpers.withMessage("電話番号の入力が必要です。", required),
  },
  [ContactFormKeys.email]: {
    email: helpers.withMessage("メールアドレスが不正です。", email),
    required: helpers.withMessage("メールアドレスの入力が必要です。", required),
  },
  [ContactFormKeys.emailTitle]: {
    required: helpers.withMessage("件名の入力が必要です。", required),
  },
  [ContactFormKeys.emailBody]: {
    required: helpers.withMessage("本文の入力が必要です。", required),
  },
};

const validator = useVuelidate(rules, form);
const isRequired = (
  title: (typeof ContactFormKeys)[keyof typeof ContactFormKeys]
) => {
  if (Object.keys(validator.value[title]).includes("required")) return true;
};

const resetForm = () => {
  validator.value.$reset();
  form.FULL_NAME = "";
  form.EMAIL = "";
  form.EMAIL_TITLE = "";
  form.EMAIL_BODY = "";
  form.PHONE_NUMBER = "";
};

const sendEmail = () => {
  const templateParams = {
    fullName: form.FULL_NAME,
    phoneNumber: form.PHONE_NUMBER,
    email: form.EMAIL,
    emailTitle: form.EMAIL_TITLE,
    emailBody: form.EMAIL_BODY,
  };

  emailjs.send(emailjsServiceId, emailjsTemplateId, templateParams).then(
    async function (response) {
      resetForm();

      isLoading.value = false;
      toast.success("お問合せが完了しました。");
    },
    function (error) {
      toast.error("エラーが発生しました。入力フォームをご確認下さい");
    }
  );
};

const submit = async () => {
  const res = await validator.value.$validate();

  if (res) {
    isLoading.value = true;
    sendEmail();
  }
};

const errorMessage = (message: string | globalThis.Ref<string>) => {
  return message as string;
};

(() => {
  emailjs.init(emailjsPublicKey);
})();
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
    <div id="#contact" class="my-10">
      <v-row
        v-for="(formLabel, index) in contactFormLabel"
        :key="index"
        class="d-flex justify-center"
      >
        <v-col cols="4" class="form label-col">
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

        <v-col cols="7" class="form value-col">
          <v-textarea
            v-if="formLabel.title === ContactFormKeys.emailBody"
            v-model="validator[formLabel.title].$model"
            :error="validator[formLabel.title].$errors[0] ? true : false"
            :error-messages="
              errorMessage(validator[formLabel.title].$errors[0]?.$message)
            "
            style="z-index: 1"
            variant="outlined"
            auto-grow
            rows="3"
            row-height="40"
            :label="formLabel.text"
          />
          <v-text-field
            v-else
            v-model="validator[formLabel.title].$model"
            :error="validator[formLabel.title].$errors[0] ? true : false"
            :error-messages="
              errorMessage(validator[formLabel.title].$errors[0]?.$message)
            "
            style="z-index: 1"
            variant="outlined"
            density="compact"
            :label="formLabel.text"
          />
        </v-col>
      </v-row>

      <div class="d-flex justify-center pt-4">
        <v-btn :color="headerMenu.color" style="z-index: 1" @click="submit()"
          >問い合わせる</v-btn
        >
      </div>
    </div>

    <v-overlay v-model="isLoading" class="align-center justify-center">
      <v-progress-circular :size="80" color="red" indeterminate />
    </v-overlay>
  </TopInkCard>
</template>

<style lang="scss" scoped>
.form {
  display: flex;
  padding-top: 0;
  &.label-col {
    justify-content: center;
    align-items: flex-start;
  }
  &.value-col {
    align-items: center;
    padding-right: 0;
  }
}
</style>
