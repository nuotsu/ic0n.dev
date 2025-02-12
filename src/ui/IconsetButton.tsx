'use client'

import { useStore } from '@/lib/store'
import { cn } from '@/lib/utils'

export default function IconsetButton({ iconset }: { iconset: Icon.Set }) {
	const { icon, setIcon } = useStore()

	return (
		<button
			className={cn(
				'text-ink/50 hover:text-ink w-full pr-[1ch] text-left',
				icon.split('/')[0] === iconset && 'text-ink',
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
