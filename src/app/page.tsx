'use client'

import { store, BASE_URL, DEFAULT_ICONS } from '@/lib/store'
import ClickToCopy from '@/ui/ClickToCopy'
import { useEffect } from 'react'

export default function Home() {
	const { icon, setIcon, color, setColor } = store()

	const url = `${BASE_URL}/${icon}`

	useEffect(() => {
		setIcon(DEFAULT_ICONS[Math.floor(Math.random() * DEFAULT_ICONS.length)])
	}, [])

	return (
		<section className="grid gap-4 text-center">
			<input
				id="color"
				defaultValue={color}
				onChange={(e) => setColor(e.currentTarget.value)}
				type="color"
				hidden
			/>

			<div>
				<code>{BASE_URL}/</code>
				<input
					className="font-mono"
					defaultValue={icon}
					onKeyUp={(e) => setIcon(e.currentTarget.value)}
					type="text"
					pattern="^[a-z0-9]+/[a-z0-9]+$"
					placeholder="set/name"
				/>
			</div>

			<table className="mx-auto [&_code]:whitespace-nowrap [&_img]:m-auto [&_img]:size-12">
				<tbody>
					<tr>
						<th>Basic usage</th>
						<td>
							<img src={url} />
						</td>
						<td>
							<div className="flex flex-wrap justify-center gap-2">
								<ClickToCopy value={url}>Copy URL</ClickToCopy>
								<ClickToCopy value={`<img src="${url}" alt="" />`}>
									Copy HTML
								</ClickToCopy>
							</div>
						</td>
					</tr>
					<tr>
						<th>
							Add a fill color
							<small className="grid font-normal">
								<code>
									?fill=<label htmlFor="color">dodgerblue</label>
								</code>
								<code>
									?hex=<label htmlFor="color">{color.slice(1)}</label>
								</code>
							</small>
						</th>
						<td>
							<label htmlFor="color">
								<img src={`${url}?hex=${color.slice(1)}`} />
							</label>
						</td>
						<td>
							<div className="flex flex-wrap justify-center gap-2">
								<ClickToCopy value={`${url}?hex=${color.slice(1)}`}>
									Copy URL
								</ClickToCopy>
								<ClickToCopy
									value={`<img src="${url}?hex=${color.slice(1)}" />`}
								>
									Copy HTML
								</ClickToCopy>
							</div>
						</td>
					</tr>
					<tr>
						<th>
							Use as a CSS mask
							<small className="block font-normal">
								<code>mask: url(...)</code>
							</small>
						</th>
						<td>
							<div
								className="inline-block size-12 bg-cover bg-center hover:[mask:none]!"
								style={{
									mask: `url(${url}) center/cover`,
									backgroundImage: `url(https://media3.giphy.com/media/NXOF5rlaSXdAc/200w.webp)`,
								}}
							/>
						</td>
						<td>
							<ClickToCopy value={`mask: url(${url}) center/cover;`}>
								Copy mask CSS
							</ClickToCopy>
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}
