import "i18next";
import common_en from "./translations/en/common/common.json";

declare module "i18next" {
  interface CustomTypeOptions {
    enableSelector: true;
    defaultNS: "common";
    resources: {
      common: typeof common_en;
    };
  }
}
