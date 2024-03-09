export type consentTypes =
  | "analyticsCookies"
  | "advertisingCookies"
  | "functionalCookies";

export interface ConsentState {
  analyticsCookies: boolean;
  advertisingCookies: boolean;
  functionalCookies: boolean;
}
