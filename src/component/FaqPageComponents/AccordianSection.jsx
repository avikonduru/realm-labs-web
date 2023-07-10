import { Fragment } from 'react';

// chakra
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Card,
  CardBody,
  Container,
} from '@chakra-ui/react';

const AccordianSection = () => {
  return (
    <Fragment>
      <Container maxW="1000px" mb="10">
        <Card>
          <CardBody>
            <Accordion allowMultiple>
              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What is AI automation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  AI automation is a process that utilizes artificial
                  intelligence to streamline and automate manual tasks,
                  increasing efficiency and reducing the chance of error.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How can AI automation help my business?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  AI automation can help manage and streamline your lead
                  handling process, increasing the speed and efficiency of
                  conversions. This allows you to focus more on growing your
                  business rather than being bogged down by operational
                  complexities.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How difficult is it to integrate your AI automation services
                    into my current operations?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Our AI automation services are designed to seamlessly
                  integrate with your existing operations. Plus, we provide
                  comprehensive training and ongoing support to ensure a smooth
                  transition.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What kind of support can I expect from your team?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  We provide extensive training during the integration process
                  and ongoing support afterwards. Our team is always available
                  to resolve any issues and answer any questions you might have.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Will AI automation replace any of my current staff?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  No, AI automation is designed to support your staff, not
                  replace them. It automates routine tasks, freeing up your team
                  to focus on more complex and strategic responsibilities.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What industries do you specialize in?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  We specialize in the construction, HVAC, manufacturing, and
                  renewable energy sectors. However, our solutions are adaptable
                  and can bring benefits to businesses in various other
                  industries as well.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    Can I see some success stories or case studies?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  Absolutely, you can visit our "Case Studies" section to see
                  examples of how we've helped businesses like yours transform
                  their lead management and grow.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    What is the cost of your services?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  The cost of our services varies depending on your specific
                  needs. We would be happy to discuss your requirements and
                  provide a customized quote.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    How quickly can I start seeing results from AI automation?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  The timeframe can vary depending on the complexity of your
                  operations, but many of our clients begin to see efficiency
                  improvements and increased lead conversions within a few weeks
                  of implementation.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </CardBody>
        </Card>
      </Container>
    </Fragment>
  );
};

export default AccordianSection;
