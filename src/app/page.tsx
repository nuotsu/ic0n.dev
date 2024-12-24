'use client'

import { useState } from 'react'

export default function Home() {
	const [icon, setIcon] = useState('fa/FaReact')

	return (
		<section>
			<h1>Icons</h1>

			<input
				type="text"
				defaultValue={icon}
				onKeyUp={(e) => setIcon(e.currentTarget.value)}
			/>

			<img src={`/${icon}`} />
			<img className="w-20" src={`/${icon}?fill=dodgerblue`} />
		</section>
	)
}
