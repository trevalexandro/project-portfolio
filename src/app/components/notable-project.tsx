import { JSX } from "react";
import SectionContainer from "./section-container";
import Image from 'next/image';
import lightDiagram from './../../../public/Portfolio Management-light.drawio.png';
import darkDiagram from './../../../public/Portfolio Management-dark.drawio.png';
import { useTheme } from "next-themes";

const NotableProjectSection = ():JSX.Element => {
    const { theme } = useTheme();

    return (
        <SectionContainer sectionName="Notable Project: Portfolio Management">
            <p className='self-center'>
                As an Engineering Manager in a Risk Engineering organization, my team was tasked with automating the process of
                changing credit lines of customers in the company's portfolio. The business case for this effort was to quickly
                manage the company's risk & reduce charge-offs as much as possible. We partnered with an external consultant that
                built out ML models that analyzed the entire company's portfolio. My team built out an end-to-end solution that
                would take data produced from the models, join that with other key data points in a data mart, and send the data
                to downstream systems for executing the credit line changes & reporting. We also created an internal front-end
                application that allowed end users to conduct manual reviews on recommendations that needed further review. This
                project reduced over $10 million in charge-offs within a year.
            </p>
            <Image className='self-center' src={theme === 'dark' ? darkDiagram : lightDiagram} alt='Portfolio Management Architecture' />
        </SectionContainer>
    );
};

export default NotableProjectSection;