'use client'

import { create } from 'zustand'

const dev = process.env.NODE_ENV === 'development'

export const BASE_URL = dev
	? 'http://localhost:3000'
	: 'https://ic0n.dev'

export const DEFAULT_ICONS = ['fa/FaReact', 'gr/GrApple', 'vsc/VscVscode']

export const store = create<{
	icon: string
	setIcon: (icon: string) => void

	color: string
	setColor: (color: string) => void
}>((set) => ({
	icon: DEFAULT_ICONS[0],
	setIcon: (icon) => set({ icon }),

	color: '#1e90ff',
	setColor: (color) => set({ color }),
}))
