import Reports from '@assets/reports'
import ServicesItem from '@components/services-item'
import Innovative from '@assets/innovative'
import Insights from '@assets/insights'

interface CustomProps {
	className?: string
}

export default function Services({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section className='pt-22 md:pt-32 pb-22 md:pb-48 flex flex-col gap-15 justify-center items-center'>
				<div className='max-w-2xl flex flex-col gap-5 text-center'>
					<div>
						<h2 className='text-title3'>OUR PROCESS</h2>
						<h3 className='text-title1'>How we Contribute</h3>
					</div>
					<p className='text-body'>
						Our AI solution offers you key Insight for Geosciences and
						Biostratigraphy applications.
					</p>
				</div>
				<div className='flex flex-wrap xl:flex-nowrap w-full justify-center gap-16'>
					<ServicesItem
						title='Insights and Expertise'
						body='Combine AI model with field samples, web software and reports to increase the efficiency of your prospecting, reducing non-optimized costs in well positioning.'
						className='flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					>
						<Insights className='max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full' />
					</ServicesItem>
					<ServicesItem
						title='Innovative AI Technology'
						body='Machine learning model validated with real data capable of reducing experts analysis time and increasing exploratory efficiency.'
						className='flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					>
						<Innovative className='max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full' />
					</ServicesItem>
					<ServicesItem
						title='Custom Web Reports'
						body='Web automated Reports containing key information for assist real-time decision making in well placement.'
						className='flex gap-0 max-w-[100%] md:min-w-[33%] md:max-w-[40%] xl:min-w-0'
					>
						<Reports className='max-w-27 sm:max-w-none sm:w-[30%] h-fit md:max-h-50 md:w-full' />
					</ServicesItem>
				</div>
			</section>
		</div>
	)
}
