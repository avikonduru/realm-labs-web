import React from 'react';
import { montserrat } from '../fonts';

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

const EngagementSection = () => {
	return (
		<Box>
			<Container>
				<Flex direction='column'>
					<Text
						className={montserrat.className}
						style={{
							color: '#006D77',
							fontSize: '40px',
							fontWeight: '800',
							lineHeight: '50px',
						}}>
						Choose your level of engagement
					</Text>
					<Text>
						Imagine spending quality time with patients and loving
						your work again. Don't let burnout end your medical
						career.
					</Text>
				</Flex>
				<Flex direction='row'>
					<Box>
						<Text>One</Text>
					</Box>
					<Box>
						<Text>Two</Text>
					</Box>
					<Box>
						<Text>Three</Text>
					</Box>
				</Flex>
				<Flex direction='column'>
					<Text>
						Join 100+ physicians who've reclaimed their practices:
					</Text>
					<Text>
						"Thanks to DPC Launchpad, I now spend an hour with each
						patient and my income has increased. It's the practice I
						always dreamed of." - Dr. Jane Smith
					</Text>
				</Flex>
			</Container>
		</Box>
	);
};

export default EngagementSection;
