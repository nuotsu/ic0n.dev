'use client'

import { useStore, getUrl } from '@/lib/store'
import ClickToCopy from './ClickToCopy'
import { cn } from '@/lib/utils'

export default function ToggleCSSMask() {
	const { mask, setMask } = useStore()
	const url = getUrl()
	const css = `mask: url('${url}') center/cover;`

	return (
		<>
			<button
				className={cn(!mask && 'line-through')}
				onClick={() => setMask(!mask)}
			>
				CSS Mask
			</button>
			<span className="text-ink/50">/</span>
			<ClickToCopy value={css} />
		</>
	)
}
