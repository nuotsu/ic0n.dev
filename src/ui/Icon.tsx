'use client'

import { getUrl, useStore } from '@/lib/store'

export default function Icon() {
	const { mask } = useStore()
	const url = getUrl({ showColorParam: true })

	console.log({ mask, url })

	if (mask)
		return (
			<div
				className="mx-auto block size-24 bg-cover bg-center hover:[mask:none]!"
				style={{
					mask: `url(${url}) center/cover`,
					backgroundImage: `url(https://media3.giphy.com/media/NXOF5rlaSXdAc/200w.webp)`,
				}}
			/>
		)

	return <img className="mx-auto size-24 text-[0px]" src={url} alt="" />
}
