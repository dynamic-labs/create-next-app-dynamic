import Image from 'next/image'
import { DynamicWidget } from '../lib/dynamic'

export default function Home() {
	return (
		<main className="min-h-screen relative flex align-center justify-end flex-col">
			<Image src={'/home.png'} className="z-0" fill alt="Home"></Image>
			<div className="z-10 mx-auto mb-20">
				<DynamicWidget />
			</div>
		</main>
	)
}
