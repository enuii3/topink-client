import { ContactFormKeys } from "./constant";

export type ContactForm = {
  [ContactFormKeys.fullName]: string;
  [ContactFormKeys.phoneNumber]: string;
  [ContactFormKeys.email]: string;
  [ContactFormKeys.emailTitle]: string;
  [ContactFormKeys.emailBody]: string;
};
