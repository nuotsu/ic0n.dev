'use client'

import { DEFAULT_ICON, useStore, getAddressBarSize } from '@/lib/store'
import { iconsets } from '@/lib/iconManifest'
import type { IconPath } from '@/lib/iconManifest'

export default function AddressBar() {
	const { icon, setIcon } = useStore()
	const addressBarWidth = getAddressBarSize()

	return (
		<label>
			<span className="text-ink/50">/</span>
			<input
				id="address-bar"
				className="min-w-[1ch]"
				style={{ width: `${addressBarWidth || DEFAULT_ICON.length}ch` }}
				list="iconsets"
				type="text"
				placeholder={DEFAULT_ICON}
				value={icon}
				onChange={(e) => setIcon(e.target.value as IconPath)}
			/>
			<span className="text-ink/50">_</span>

			<datalist id="iconsets">
				{iconsets.map((iconset) => (
					<option value={iconset} key={iconset} />
				))}
			</datalist>
		</label>
	)
}
