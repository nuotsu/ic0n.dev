'use client'

import { getUrl, useStore } from '@/lib/store'

export default function Icon() {
	const { mask } = useStore()
	const url = getUrl({ showColorParam: true })

	return (
		<figure className="anim-fade opacity-0 [--delay:200ms] [--duration:400ms]">
			{mask ? (
				<div
					className="mx-auto block size-24 bg-cover bg-center hover:[mask:none]!"
					style={{
						mask: `url(${url}) center/cover`,
						// mask: `url(https://mdn.github.io/shared-assets/images/examples/mask-star.svg) center/cover`,
						backgroundImage: `url(https://media3.giphy.com/media/NXOF5rlaSXdAc/200w.webp)`,
					}}
				/>
			) : (
				<img className="mx-auto size-24 text-[0px]" src={url} alt="" />
			)}
		</figure>
	)
}
