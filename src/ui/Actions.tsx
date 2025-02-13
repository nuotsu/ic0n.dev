'use client'

import { getUrl } from '@/lib/store'
import ClickToCopy from './ClickToCopy'
import ChangeColor from './ChangeColor'
import ToggleMask from './ToggleMask'

export default function Actions() {
	const url = getUrl()

	return (
		<menu className="*:anim-fade text-center *:opacity-0">
			<li className="[--delay:250ms]">
				<ClickToCopy value={url}>Copy URL</ClickToCopy>
			</li>
			<li className="[--delay:300ms]">
				<ClickToCopy value={`<img src="${url}" alt="" />`}>
					Copy {'<img>'}
				</ClickToCopy>
			</li>
			<li className="flex justify-center gap-[1ch] [--delay:350ms]">
				<ChangeColor />
			</li>
			<li className="flex justify-center gap-[1ch] [--delay:400ms]">
				<ToggleMask />
			</li>
		</menu>
	)
}
