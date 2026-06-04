export const SUPPORTED_UI_LANGUAGES = ["en", "zh"] as const;

export type AppLanguage = (typeof SUPPORTED_UI_LANGUAGES)[number];

export const uiLanguageOptions: Array<{
  value: AppLanguage;
  labelKey: "language.english" | "language.chinese";
}> = [
  { value: "en", labelKey: "language.english" },
  { value: "zh", labelKey: "language.chinese" },
];

export function isSupportedUiLanguage(value: unknown): value is AppLanguage {
  return SUPPORTED_UI_LANGUAGES.includes(value as AppLanguage);
}
