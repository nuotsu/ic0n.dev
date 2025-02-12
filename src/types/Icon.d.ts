import type { iconsets } from '@/lib/manifest'

declare global {
	namespace Icon {
		type Set = (typeof iconsets)[number]

		type Path = `${string}/${string}`
	}
}

export {}
