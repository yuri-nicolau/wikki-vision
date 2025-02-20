import BusinessModelItem from '@/components/problem-item'

interface CustomProps {
	className?: string
}
export default function Problem({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pt-[120px] pb-[60px] md:py-[120px] flex flex-col gap-[60px] justify-center items-center'>
				<div className='max-w-2xl flex flex-col gap-5 text-center'>
					<div>
						<h2 className='text-title3'>THE PROBLEMS WE SOLVE</h2>
						<h3 className='text-title1'>
							How Vision helps in Intelligent Oil Prospecting Management
						</h3>
					</div>
					<p className='text-body'>
						Through innovative models we tackle the primary challenges in Oil
						Prospecting:
					</p>
				</div>
				<div className='flex flex-wrap xl:flex-nowrap w-full justify-center gap-16'>
					<BusinessModelItem
						title='Assist Well Placement'
						body='Improper well positioning can lead to significant financial losses. Assertive well placement can lead to savings ranging up to $150-$200 million for the entire well. Through AI-automated geological time determination, we assist you in assuring optimal well positioning.'
						imageSrc='/problem01.jpg'
						className='max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					/>
					<BusinessModelItem
						title='Determine Geological Time'
						body='Sedimentary formations may have different rock types in different regions (or even within the same basin).  Our biostratigraphy expertise uses AI-integrated databases to assess the presence and succession of fossils to correlate these layers, thereby establishing a relative time framework across a wide area.'
						imageSrc='/problem02.jpg'
						className='max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					/>
					<BusinessModelItem
						title='Real Time Analysis during Drilling'
						body='Microfossil identification is a time-consuming and highly specialized activity. If a real‐time biostratigraphic analysis been routinely applied, operators could have avoided costly drilling errors, which might have saved on the order of € 100 million. Our expertise uses artificial intelligence (AI) to automate in real-time the microfossil identification process, saving  time and avoiding identification errors.'
						imageSrc='/problem03.jpg'
						className='max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					/>
				</div>
			</section>
		</div>
	)
}
