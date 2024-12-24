'use client'

import { useState } from 'react'
import { BASE_URL } from '@/lib/store'
import ClickToCopy from '@/ui/ClickToCopy'

export default function Home() {
	const [icon, setIcon] = useState('fa/FaReact')

	const url = `${BASE_URL}/${icon}`
	const html = `<img src="${url}" alt="" />`

	return (
		<section>
			<input
				defaultValue={icon}
				onKeyUp={(e) => setIcon(e.currentTarget.value)}
				type="text"
				pattern="^[a-z0-9]+/[a-z0-9]+$"
				placeholder="fa/FaReact"
			/>

			<output>
				<pre className="overflow-x-auto">{html}</pre>

				<div className="flex gap-2">
					<ClickToCopy value={url}>Copy URL</ClickToCopy>
					<ClickToCopy value={html}>Copy HTML</ClickToCopy>
				</div>
			</output>

			<figure className="flex flex-wrap gap-2">
				<img src={url} />
				<img src={`${url}?fill=seagreen`} />
				<img className="w-20" src={`${url}?fill=dodgerblue`} />

				<div
					className="inline-block size-20 bg-linear-to-br from-green-600 to-yellow-200"
					style={{ mask: `url(${url}) center/cover` }}
				/>
			</figure>
		</section>
	)
}
