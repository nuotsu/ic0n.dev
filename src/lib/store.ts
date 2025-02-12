'use client'

import { create } from 'zustand'
import type { IconPath } from './iconManifest'

export const DEFAULT_ICON = 'vsc/VscCode'

export const useStore = create<{
	icon: IconPath
	color: string
	setIcon: (icon: IconPath) => void
	setColor: (color: string) => void
}>((set) => ({
	icon: DEFAULT_ICON,
	color: 'white',
	setIcon: (icon) => set({ icon }),
	setColor: (color) => set({ color }),
}))

export const getColor = () => {
	const { color } = useStore()
	return color.startsWith('#') ? `hex=${color.slice(1)}` : `fill=${color}`
}

export const getAddressBarSize = () => {
	const { icon } = useStore()
	return icon.length
}
