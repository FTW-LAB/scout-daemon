/** @securist/scout-daemon */
export const packageId = 'scout-daemon' as const
export const org = 'securist' as const
export function banner(): string {
  return `[Securist] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
