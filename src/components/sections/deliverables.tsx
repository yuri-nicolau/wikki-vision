import Button from '@components/button'
import Database from '../assets/database'
import File from '../assets/file'

interface CustomProps {
	className?: string
}
export default function Deliverables({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<section
				id='deliverables'
				className='pb-16 pt-8 flex flex-order gap-8 justify-between items-center w-full'
			>
				<div className='flex flex-col text-center lg:text-left gap-12 lg:pr-10 lg:w-[50%] lg:max-w-4xl'>
					<div className='flex flex-col gap-4'>
						<h2 className='text-header'>Our Deliverables</h2>
						<p className='text-body lg:max-w-lx'>
							Our team will aid you powered by Insight, providing detailed
							analyses in the form of a detailed{' '}
							<strong>web based report </strong>available anywhere you are.
							<br />
							<br />
							In this web based report,{' '}
							<strong>
								all the essential information is readily available and
								standardized
							</strong>
							, alongside integration options to use in other Softwares.
							<br />
							<br />
							<strong>
								Custom analyses are then possible by the user within the web
								report, allowing for variation of operational conditions and
								other complementary studies.
							</strong>
							<br />
							<br />
							Different options are available based on the volume of wells to
							evaluate and number of customizations desired. Contact our team to
							find out more!
						</p>
					</div>
					<div className='flex flex-row gap-5 justify-center lg:justify-start'>
						<Button href='/contact'>Contact Us</Button>
					</div>
				</div>
				<div className='lg:w-[45%] flex flex-col gap-8 items-center justify-center overflow-visible'>
					<div
						className={
							'bg-card flex pl-9 rounded-2xl w-full justify-between flex-row text-left'
						}
					>
						<div className='w-full flex flex-col gap-4 mr-8 md:mr-16 py-12'>
							<div className='flex flex-row items-center gap-4'>
								<Database className='min-w-8 md:w-8 h-auto' />
								<h3 className='text-title2'>
									Reliable Insights and Outputs to other Studies
								</h3>
							</div>
							<p className='text-body'>
								Thanks to the central database structure, all the data is
								managed safely and efficiently to allow for optimal usability by
								other engineering applications.
							</p>
						</div>
					</div>
					<div
						className={
							'bg-card flex pl-9 rounded-2xl w-full justify-between flex-row text-left'
						}
					>
						<div className='flex flex-col gap-4 mr-8 md:mr-16 py-12'>
							<div className='flex flex-row items-center gap-3'>
								<File className='min-w-8 md:w-8 h-auto' />
								<h3 className='text-title2'>Complementary Analyses</h3>
							</div>
							<p className='text-body'>
								The user is free to perform complementary studies within a user
								friendly interface within the web report, taking advantage of
								the AI technology to streamline processes and evaluate other
								scenarios.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}
