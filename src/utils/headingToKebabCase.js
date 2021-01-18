export default function headingToKebabCase(heading) {
  return heading.replace(/\s+/g, '-').toLowerCase();
}
