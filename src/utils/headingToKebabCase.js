export default function headingToKebabCase(heading) {
  if (typeof heading === "string" || heading instanceof String) {
    return heading.replace(/\s+/g, "-").toLowerCase();
  }

  return null
}
