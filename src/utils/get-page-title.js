import defaultSettings from "@/settings";

const title = defaultSettings.title || "GM OCR Manager";

export default function getPageTitle(pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}
