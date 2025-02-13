'use client'

import { DEFAULT_ICON, useStore, getAddressBarSize } from '@/lib/store'
import { iconsets } from '@/lib/manifest'
import { cn } from '@/lib/utils'

export default function AddressBar() {
	const { icon, setIcon } = useStore()
	const addressBarWidth = getAddressBarSize()

	return (
		<label className="flex">
			<span className="text-ink/50">/</span>
			<input
				id="address-bar"
				className={cn(
					'max-w-[calc(100vw-var(--offset,0ch)-3ch)] min-w-[1ch]',
					'supports-[not(hover:hover)]:mr-[-1.8ch] supports-[not(hover:hover)]:[--ios-fix:2ch]',
				)}
				style={
					{
						'--offset': `${'ic0n.dev'.length}ch`,
						width: `calc(${addressBarWidth || DEFAULT_ICON.length}ch + var(--ios-fix, 0ch))`,
					} as React.CSSProperties
				}
				list="iconsets"
				value={icon}
				onChange={(e) => setIcon(e.target.value as Icon.Path)}
				type="text"
				pattern="[a-z0-9]{2,3}/[a-zA-Z0-9]+"
				spellCheck={false}
				placeholder={DEFAULT_ICON}
				tabIndex={0}
			/>
			<span className="text-ink/50 [:valid+&]:hidden">_</span>

			<datalist id="iconsets">
				{iconsets.map((iconset) => (
					<option value={`${iconset}/`} key={iconset} />
				))}
			</datalist>
		</label>
	)
}
