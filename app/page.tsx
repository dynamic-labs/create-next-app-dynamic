import Image from 'next/image'
import { DynamicWidget } from '../lib/dynamic'
import Menu from '../components/Menu'

export default function Home() {
	return (
		<main className="min-h-screen relative flex align-center justify-center flex-col">
			<Menu />
			<Image src={'/home.png'} className="z-0" fill alt="Home"></Image>
			<div className="z-10 mt-64 mx-auto">
				<DynamicWidget />
			</div>
		</main>
	)
}
