import FeatureCard from '@components/feature-card'
import FullWellLifeCycleSupport from '@assets/full-well-life-cycle-support'
import AIModelsTrainedByOperationalData from '@assets/ai-models-trained-by-operational-data'
import ModelingFailureInterdependence from '@assets/modeling-failure-interdependence'
import KnowledgeGraphBasedApproach from '@assets/knowledge-graph-based-approach'
import AutomatedCustomReports from '../assets/automated-custom-reports'
import CentralizedDataIntegration from '../assets/centralized-data-integration'

interface CustomProps {
	className?: string
}

export default function Features({ className = '' }: CustomProps) {
	return (
		<div className={`${className}`}>
			<div className='relative flex-grow max-w-[1760px] w-full'>
				<section
					id='features'
					className='py-16 md:py-28 flex flex-col gap-16 md:gap-[100px] justify-center items-center'
				>
					<div className='max-w-lg flex flex-col gap-5 text-center'>
						<h2 className='text-title1'>
							How our AI Model reaches more accurate solutions
						</h2>
						<p className='text-body'>Key Features and Technologies.</p>
					</div>
					<div className='grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(420px,1fr))] w-full gap-8 align-items: stretch'>
						<FeatureCard
							title='Software validated with real data'
							body='Investment of an O&G Market Leader to develop a prototype on Nannofossil Automatic Detection using AI. The developed models can be transferred to other domains with transfer learning.'
							className='h-full'
						>
							<CentralizedDataIntegration className='w-full h-auto' />
						</FeatureCard>
						<FeatureCard
							title='Development with experts'
							body="Collaboration between the Computing Team from WIKKI Brasil and Petrobras's Micropaleontology specialists, validating the expertise with market demands."
							className='h-full'
						>
							<FullWellLifeCycleSupport className='w-full h-auto' />
						</FeatureCard>
						<FeatureCard
							title='Web platform and scalable data'
							body='A web platform that allows you to deal efficiently handle increasing workloads or expand to accommodate growth in users, data, or transactions, without high computational costs'
							className='h-full'
						>
							<AutomatedCustomReports className='w-full h-auto' />
						</FeatureCard>
						<FeatureCard
							title='Remote Analysis and Sample Data'
							body='Web platform allows visualization of Micropaleontological slides. Samples and databases are uploaded to the web before the analysis.'
							className='h-full'
						>
							<KnowledgeGraphBasedApproach className='w-full h-auto' />
						</FeatureCard>
						<FeatureCard
							title='Automatic identification by AI'
							body='Integration with AI enables automated nannofossil detection, with a graphical interface for validation of the results by the specialist. The expert can also compare the observed species with similar ones from other databases.'
							className='h-full'
						>
							<ModelingFailureInterdependence className='w-full h-auto' />
						</FeatureCard>
						<FeatureCard
							title='Automated Custom Reports'
							body='Subject Experts from our team perform complex analyses, with a report being generated. Within this web report, the user can customize the report and perform additional studies and variations.'
							className='h-full'
						>
							<AIModelsTrainedByOperationalData className='w-full h-auto' />
						</FeatureCard>
					</div>
				</section>
			</div>
		</div>
	)
}
