'use client'

import { create } from 'zustand'

export const DEFAULT_ICON = 'vsc/VscCode'
export const DEFAULT_COLOR = 'white'

const BASE_URL =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:3000'
		: 'https://ic0n.dev'

export const useStore = create<{
	icon: Icon.Path
	color: string
	colorChanged: boolean
	mask: boolean
	setIcon: (icon: Icon.Path) => void
	setColor: (color: string) => void
	removeColor: () => void
	setMask: (mask: boolean) => void
}>((set) => ({
	icon: DEFAULT_ICON,
	color: DEFAULT_COLOR,
	colorChanged: false,
	mask: false,
	setIcon: (icon) => set({ icon }),
	setColor: (color) => set({ color, colorChanged: true }),
	removeColor: () => set({ color: DEFAULT_COLOR, colorChanged: false }),
	setMask: (mask) => set({ mask }),
}))

export const getColor = () => {
	const { color } = useStore()
	return color.startsWith('#') ? `hex=${color.slice(1)}` : `fill=${color}`
}

export const getAddressBarSize = () => {
	const { icon } = useStore()
	return icon.length
}

export const getUrl = ({
	showColorParam,
}: { showColorParam?: boolean } = {}) => {
	const { icon, colorChanged } = useStore()
	const color = getColor()

	return colorChanged || showColorParam
		? `${BASE_URL}/${icon}?${color}`
		: `${BASE_URL}/${icon}`
}
