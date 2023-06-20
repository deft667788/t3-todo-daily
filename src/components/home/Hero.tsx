import Image from "next/image"

export default function Hero() {
	return (
		<div className="hero">
			<p className="text-3xl font-bold text-center w-[400px] m-auto my-10 px-1.5">
				Organizing your day activity
				with Todo Daily
			</p>
			<div className="relative">
				<div className="absolute left-0 top-2 right-0 text-center">
					<button className="bg-primary text-white py-2 px-4 rounded-lg hover:opacity-70">Get started</button>
				</div>
				<Image src="/hero.png" alt="hero" width={1363} height={909} className="w-full"/>
			</div>
		</div>
	)
}