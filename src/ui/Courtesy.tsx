'use client'

import { useStore } from '@/lib/store'
import { iconsets } from '@/lib/manifest'

const BASE_URL = 'https://react-icons.github.io/react-icons'

export default function Courtesy() {
	const { icon } = useStore()
	const iconset = icon?.split('/')[0] as Icon.Set
	const path = iconsets.includes(iconset) ? `/icons/${iconset}` : ''

	const url = `${BASE_URL}${path}`

	return (
		<cite className="grow not-italic">
			<p>
				<span className="text-ink/50">Courtesy of </span>
				<a href={BASE_URL} target="_blank">
					react-icons
				</a>
				<a href={url} target="_blank" className="not-hover:text-ink/50">
					{path}
				</a>
			</p>
		</cite>
	)
}
