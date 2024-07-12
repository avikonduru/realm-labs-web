import { source_serif } from '../../fonts';
import Image from 'next/image';

// radix
import {
	Container,
	Box,
	Flex,
	Button,
	Text,
	Link,
	Grid,
	Separator,
} from '@radix-ui/themes';

const AboutSection = () => {
	return (
		<Container maxWidth='1300px'>
			<Box style={{ margin: '10px 0px 10px 0px' }}>
				<Flex
					direction='column'
					justify='center'
					minHeight='500px'>
					<Flex
						justify='center'
						style={{ marginBottom: '20px' }}>
						<Text
							size='7'
							className={source_serif.className}
							style={{ fontWeight: '600' }}>
							About Us
						</Text>
					</Flex>

					<Grid
						columns='2'
						gap='7'
						width='auto'>
						<Flex
							direction='column'
							gap='4'
							height='100%'
							justify='center'>
							<Box>
								<Text
									color='gray'
									size='4'
									style={{ fontWeight: '500' }}>
									Realm Labs is at the forefront of the AI and Web3
									revolution. We forge a tribe of visionaries who
									harness these cutting-edge technologies to transcend
									current limitations and architect a revolutionary,
									decentralized future.
								</Text>
							</Box>

							<Box>
								<Text
									color='gray'
									size='4'
									style={{ fontWeight: '500' }}>
									Our mission is to empower individuals and businesses
									to become architects of a new reality, where
									AI-augmented, Web3-empowered solutions lead
									humanity's evolution, solving global challenges and
									unlocking unprecedented potential.
								</Text>
							</Box>

							<Box>
								<Text
									color='gray'
									size='4'
									style={{ fontWeight: '500' }}>
									Join us in shaping a future that is distributed,
									intelligent, and ours to create. Together, we'll
									push the boundaries of what's possible and redefine
									the very essence of human potential in the digital
									age.
								</Text>
							</Box>
						</Flex>
						<Box>
							<Image
								src='/assets/images/about_us_image.jpg'
								height={100}
								width={500}
								alt='About Realm Labs'
								style={{
									borderRadius: '15px',
									objectFit: 'cover',
									width: '100%',
									height: '400px',
								}}
							/>
						</Box>
					</Grid>
				</Flex>
			</Box>
		</Container>
	);
};

export default AboutSection;
