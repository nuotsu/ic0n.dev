'use client'

import { DEFAULT_ICON, useStore, getAddressBarSize } from '@/lib/store'
import { iconsets } from '@/lib/manifest'

export default function AddressBar() {
	const { icon, setIcon } = useStore()
	const addressBarWidth = getAddressBarSize()

	return (
		<label>
			<span className="text-ink/50">/</span>
			<input
				id="address-bar"
				className="min-w-[1ch] max-sm:mr-[-1.8ch] max-sm:[--ios-fix:2ch]"
				style={{
					width: `calc(${addressBarWidth || DEFAULT_ICON.length}ch + var(--ios-fix, 0ch))`,
				}}
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
