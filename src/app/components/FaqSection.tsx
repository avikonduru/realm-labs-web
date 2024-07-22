import React from 'react';
import Image from 'next/image';
import { montserrat } from '../fonts';
import { colors } from '../pallete';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import { ChevronDownIcon } from '@radix-ui/react-icons';
import '../style.css';

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

const FaqSection = () => {
	const AccordionTrigger = React.forwardRef(
		({ children, className, ...props }, forwardedRef) => (
			<Accordion.Header className='AccordionHeader'>
				<Accordion.Trigger
					className={classNames('AccordionTrigger', className)}
					{...props}
					ref={forwardedRef}>
					{children}
					<ChevronDownIcon
						className='AccordionChevron'
						aria-hidden
					/>
				</Accordion.Trigger>
			</Accordion.Header>
		)
	);

	const AccordionContent = React.forwardRef(
		({ children, className, ...props }, forwardedRef) => (
			<Accordion.Content
				className={classNames('AccordionContent', className)}
				{...props}
				ref={forwardedRef}>
				<div className='AccordionContentText'>{children}</div>
			</Accordion.Content>
		)
	);

	return (
		<Container style={{ padding: '60px 10px' }}>
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
					Frequently Asked Questions
				</Text>
			</Flex>

			<Flex>
				<Accordion.Root
					className='AccordionRoot'
					type='single'
					defaultValue='item-1'
					collapsible
					style={{ width: '100%' }}>
					<Accordion.Item
						className='AccordionItem'
						value='item-1'>
						<AccordionTrigger>
							<Text
								style={{
									fontSize: '20px',
									fontWeight: '600',
									color: colors.primary,
								}}>
								How long does the transition take?
							</Text>
						</AccordionTrigger>
						<AccordionContent>
							Yes. It adheres to the WAI-ARIA design pattern.
						</AccordionContent>
					</Accordion.Item>

					<Accordion.Item
						className='AccordionItem'
						value='item-2'>
						<AccordionTrigger>
							<Text
								style={{
									fontSize: '20px',
									fontWeight: '600',
									color: colors.primary,
								}}>
								Will I lose my current patients?
							</Text>
						</AccordionTrigger>
						<AccordionContent>
							Yes. It's unstyled by default, giving you freedom over
							the look and feel.
						</AccordionContent>
					</Accordion.Item>

					<Accordion.Item
						className='AccordionItem'
						value='item-3'>
						<AccordionTrigger>
							<Text
								style={{
									fontSize: '20px',
									fontWeight: '600',
									color: colors.primary,
								}}>
								How do I handle patients who want to keep using
								insurance?
							</Text>
						</AccordionTrigger>
						<Accordion.Content className='AccordionContent'>
							<div className='AccordionContentText'>
								Yes! You can animate the Accordion with CSS or
								JavaScript.
							</div>
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item
						className='AccordionItem'
						value='item-3'>
						<AccordionTrigger>
							<Text
								style={{
									fontSize: '20px',
									fontWeight: '600',
									color: colors.primary,
								}}>
								What if I'm not tech-savvy?
							</Text>
						</AccordionTrigger>
						<Accordion.Content className='AccordionContent'>
							<div className='AccordionContentText'>
								Yes! You can animate the Accordion with CSS or
								JavaScript.
							</div>
						</Accordion.Content>
					</Accordion.Item>

					<Accordion.Item
						className='AccordionItem'
						value='item-3'>
						<AccordionTrigger>
							<Text
								style={{
									fontSize: '20px',
									fontWeight: '600',
									color: colors.primary,
								}}>
								How quickly can I expect to see results?
							</Text>
						</AccordionTrigger>
						<Accordion.Content className='AccordionContent'>
							<div className='AccordionContentText'>
								Yes! You can animate the Accordion with CSS or
								JavaScript.
							</div>
						</Accordion.Content>
					</Accordion.Item>
				</Accordion.Root>
			</Flex>
		</Container>
	);
};

export default FaqSection;
