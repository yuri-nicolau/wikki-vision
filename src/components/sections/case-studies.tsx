import CaseStoryCard from '@/components/case-study-card'

interface CustomProps {
	className?: string
}
export default function CaseStudies({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section
				id='case-studies'
				className='pt-16 md:pt-28 pb-12 flex flex-col gap-15 justify-center items-center'
			>
				<div className='max-w-lg flex flex-col gap-5 text-center'>
					<h2 className='text-title1'>Case Studies and Key Articles</h2>
					<p className='text-body'>
						How Computational Vision and AI can improve your Geoscience analyses
					</p>
				</div>
				<div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(390px,1fr))] w-full gap-8'>
					<div>
						<CaseStoryCard
							title='Assist Well Placement'
							body='In high-cost offshore operations where each well represents a multi–million-dollar investment, errors in well positioning can cost up to to US$ 150 - 200 million. Biostratigraphy analysis can prevent such losses.'
							imageSrc='/problem01.jpg'
							className='h-full'
							href='/case-studies/assist-well-placement'
						/>
					</div>
					<div className='flex flex-col gap-8'>
						<CaseStoryCard
							title='Determine Geological Time'
							body='Strategic use of valve positioning in smart completions shows gains of up to 4 Million USD per well.'
							imageSrc='/problem02.jpg'
							variant='horizontal'
							href='/case-studies/determine-geological-time'
						/>
						<CaseStoryCard
							title='Real Time Analysis during Drilling'
							body='The usage of Biostratigraphy could have saved £100 Million on equipment investment and avoided oil leakage.'
							imageSrc='/problem03.jpg'
							variant='horizontal'
							href='/case-studies/real-time-analysis-during-drilling'
						/>
					</div>
				</div>
			</section>
		</div>
	)
}
