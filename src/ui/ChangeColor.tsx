'use client'

import { useStore } from '@/lib/store'

export default function ChangeColor() {
	const { color, setColor, colorChanged, removeColor } = useStore()

	return (
		<>
			<label>
				<input type="color" onChange={(e) => setColor(e.target.value)} hidden />
				Change color
			</label>

			{colorChanged && (
				<>
					<span className="text-ink/50">/</span>
					<button className="hover:line-through" onClick={removeColor}>
						Remove
					</button>
				</>
			)}
		</>
	)
}
