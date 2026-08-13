/* Shared project taxonomy — used by the home bento grid and /projects. */

export const PROJECT_CATEGORIES = [
  { key: 'all', labelKey: 'projectFilters.all' },
  { key: 'ai-ml', labelKey: 'projectFilters.ai-ml', shortKey: 'projectShort.ai-ml' },
  { key: 'research', labelKey: 'projectFilters.research', shortKey: 'projectShort.research' },
  { key: 'web', labelKey: 'projectFilters.web', shortKey: 'projectShort.web' },
  { key: 'blockchain', labelKey: 'projectFilters.blockchain', shortKey: 'projectShort.blockchain' },
  { key: 'desktop', labelKey: 'projectFilters.desktop', shortKey: 'projectShort.desktop' }
]

export function matchesCategory(project, key) {
  switch (key) {
    case 'all':
      return true
    case 'ai-ml':
      return Boolean(
        project.category?.includes('AI') ||
        project.technology_used?.ai_ml ||
        project.technology_used?.ml_clustering ||
        project.title?.includes('GAN') ||
        project.title?.includes('Data Science')
      )
    case 'blockchain':
      return Boolean(project.category?.includes('Blockchain') || project.technology_used?.blockchain)
    case 'web':
      return project.projectType === 'web'
    case 'desktop':
      return project.projectType === 'desk'
    case 'research':
      return project.projectType === 'research'
    default:
      return false
  }
}

export function countByCategory(projects) {
  return PROJECT_CATEGORIES.reduce((acc, c) => {
    acc[c.key] = c.key === 'all' ? projects.length : projects.filter((p) => matchesCategory(p, c.key)).length
    return acc
  }, {})
}

/** The badge label for a card: first specific category the project matches. */
export function primaryCategory(project) {
  return PROJECT_CATEGORIES.find((c) => c.key !== 'all' && matchesCategory(project, c.key)) || null
}

/** Dates in the data range from "2025" to "September 2023 - February 2024". */
export function projectYear(date) {
  if (!date) return ''
  const years = String(date).match(/\b(19|20)\d{2}\b/g)
  if (!years) return String(date)
  return years[years.length - 1]
}

/**
 * Parses a metric value like "95%" or "300" into an animatable number.
 * Ranges, units and free text ("< 200ms", "CIFAR-10", "300-400") return
 * null and are rendered as-is instead of being counted up.
 */
export function numericMetric(value) {
  const s = String(value).trim()
  const m = s.match(/^(\d+)(%|\+)?$/)
  if (!m) return null
  return { number: Number(m[1]), suffix: m[2] || '' }
}

/**
 * Bento layout: a full-bleed lead card, then alternating wide/standard rows
 * that always add up to the 6-column grid.
 */
export function bentoSize(index, total) {
  if (total <= 2) return 'hero-card'
  if (index === 0) return 'hero-card'
  return (index - 1) % 5 === 0 ? 'wide' : ''
}
