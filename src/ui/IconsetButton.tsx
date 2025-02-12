'use client'

import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'
import type { Iconset } from '@/lib/iconManifest'

export default function IconsetButton({ iconset }: { iconset: Iconset }) {
	const { icon, setIcon } = useStore()

	return (
		<button
			className={cn(
				'text-ink/50 w-full pr-[1ch] text-left hover:text-white',
				icon.startsWith(`${iconset}/`) && 'text-white',
			)}
			onClick={() => {
				setIcon(`${iconset}/`)

				if (typeof window !== 'undefined') {
					;(document.querySelector('#address-bar') as HTMLInputElement)?.focus()
				}
			}}
		>
			{iconset}
		</button>
	)
}
