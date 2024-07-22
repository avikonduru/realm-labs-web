import React from 'react';
import Image from 'next/image';
import { montserrat } from '../fonts';
import { colors } from '../pallete';

// radix
import {
	Container,
	Box,
	Flex,
	Button,
	Text,
	Link,
	Grid,
	Section,
} from '@radix-ui/themes';

const ServicesSection = () => {
	return (
		<Container
			style={{ padding: '60px 10px', background: colors.background }}>
			<Flex
				direction='column'
				style={{ marginBottom: '45px' }}>
				<Text
					className={montserrat.className}
					style={{
						color: colors.accent,
						fontSize: '16px',
						fontWeight: '800',
					}}>
					Choose your level of engagement
				</Text>
			</Flex>

			<Flex
				direction='column'
				gap='9'>
				<Grid
					columns='2'
					gap='8'>
					<Flex
						direction='column'
						justify='center'
						gap='4'>
						<Flex direction='column'>
							<Text style={{ fontSize: '26px', fontWeight: '700' }}>
								15-Minute Free Consultation
							</Text>
							<Text style={{ fontSize: '16px', fontWeight: '500' }}>
								Curious about Direct Primary Care? This quick,
								no-obligation call is your first step.
							</Text>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								What to expect:
							</Text>
							<Flex
								direction='column'
								style={{ fontSize: '16px', fontWeight: '500' }}>
								<Text>- Brief overview of the DPC model</Text>
								<Text>
									- Discussion of your current practice challenges
								</Text>
								<Text>- Assessment of your DPC potentia</Text>
								<Text>- Q&A session</Text>
							</Flex>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								Cost: <b>Free</b>
							</Text>
							<Button size='3'>
								<Text style={{ fontSize: '18px', fontWeight: '600' }}>
									Book Your Free Consult Now
								</Text>
							</Button>
						</Flex>
					</Flex>
					<Flex>
						<Image
							src='/assets/images/placeholder.png'
							height={100}
							width={2000}
							alt='Hero Section Realm Labs'
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
							}}
						/>
					</Flex>
				</Grid>

				<Grid
					columns='2'
					gap='8'>
					<Flex>
						<Image
							src='/assets/images/placeholder.png'
							height={100}
							width={2000}
							alt='Hero Section Realm Labs'
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
							}}
						/>
					</Flex>
					<Flex
						direction='column'
						justify='center'
						gap='4'>
						<Flex direction='column'>
							<Text style={{ fontSize: '26px', fontWeight: '700' }}>
								2-Hour DPC Strategy Session
							</Text>
							<Text style={{ fontSize: '16px', fontWeight: '500' }}>
								Ready to dive deeper? Get a customized roadmap for
								your DPC transition.
							</Text>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								What's included:
							</Text>
							<Flex
								direction='column'
								style={{ fontSize: '16px', fontWeight: '500' }}>
								<Text>
									- In-depth analysis of your current practice
								</Text>
								<Text>- Custom DPC transition strategy</Text>
								<Text>
									- Financial projections for your DPC practice
								</Text>
								<Text>- Marketing and patient acquisition plan</Text>
								<Text>- Tech stack recommendations</Text>
								<Text>- Follow-up implementation guide</Text>
							</Flex>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								Cost: <b>$497</b>
							</Text>
							<Button size='3'>
								<Text style={{ fontSize: '18px', fontWeight: '600' }}>
									Reserve Your Strategy Session
								</Text>
							</Button>
						</Flex>
					</Flex>
				</Grid>

				<Grid
					columns='2'
					gap='8'>
					<Flex
						direction='column'
						justify='center'
						gap='4'>
						<Flex direction='column'>
							<Text style={{ fontSize: '26px', fontWeight: '700' }}>
								Full DPC Launchpad Program
							</Text>
							<Text style={{ fontSize: '16px', fontWeight: '500' }}>
								The Ultimate DPC Practice Transformation. Transform
								your practice with our comprehensive support and
								cutting-edge tools. 
							</Text>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								Total Value: <b>$88,000+</b>
							</Text>
							<Flex
								direction='column'
								style={{ fontSize: '16px', fontWeight: '500' }}>
								Your Investment: Pay only for results - 20% of new
								patient revenue for 6 months, capped at $20,000
							</Flex>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								What you get:
							</Text>
							<Flex
								direction='column'
								style={{ fontSize: '16px', fontWeight: '500' }}>
								<Text>
									- Custom DPC Practice Management Software Suite
									($25,000 value)
								</Text>
								<Text>
									- Personalized Marketing Package ($15,000 value)
								</Text>
								<Text>- Tech Stack Optimization ($10,000 value)</Text>
								<Text>- DPC Analytics Dashboard ($8,000 value)</Text>
								<Text>
									- Digital Patient Acquisition Funnel ($12,000 value)
								</Text>
								<Text>
									- 6 Months of Priority Support and Optimization
									($18,000 value)
								</Text>
							</Flex>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '22px', fontWeight: '600' }}>
								Our Guarantee: Double Your Patient Satisfaction or
								It's Free
							</Text>
							<Flex
								direction='column'
								style={{ fontSize: '16px', fontWeight: '500' }}>
								90-Day Escape Hatch: Walk away within 90 days if not
								satisfied
							</Flex>
						</Flex>

						<Flex direction='column'>
							<Text style={{ fontSize: '16px', fontWeight: '600' }}>
								Limited to 5 practices per quarter - Apply now to
								secure your spot!
							</Text>
							<Button size='3'>
								<Text style={{ fontSize: '18px', fontWeight: '600' }}>
									Book Your Free Consult Now
								</Text>
							</Button>
						</Flex>
					</Flex>

					<Flex>
						<Image
							src='/assets/images/placeholder.png'
							height={100}
							width={2000}
							alt='Hero Section Realm Labs'
							style={{
								objectFit: 'cover',
								width: '100%',
								height: '100%',
							}}
						/>
					</Flex>
				</Grid>
			</Flex>
		</Container>
	);
};

export default ServicesSection;
