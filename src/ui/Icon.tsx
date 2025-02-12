'use client'

import { getColor, useStore } from '@/lib/store'

export default function Icon() {
	const { icon } = useStore()
	const color = getColor()

	return (
		<img
			className="size-24 text-[0px]"
			src={`https://ic0n.dev/${icon}?${color}`}
			alt={`${icon} (${color})`}
		/>
	)
}
