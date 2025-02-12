'use client'

import { getUrl } from '@/lib/store'
import ClickToCopy from './ClickToCopy'
import ChangeColor from './ChangeColor'
import ToggleMask from './ToggleMask'

export default function Actions() {
	const url = getUrl()

	return (
		<menu className="text-center">
			<li>
				<ClickToCopy value={url}>Copy URL</ClickToCopy>
			</li>
			<li>
				<ClickToCopy value={`<img src="${url}" alt="" />`}>
					Copy {'<img>'}
				</ClickToCopy>
			</li>
			<li className="flex justify-center gap-[1ch]">
				<ChangeColor />
			</li>
			<li className="flex justify-center gap-[1ch]">
				<ToggleMask />
			</li>
		</menu>
	)
}
