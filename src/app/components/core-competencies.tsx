import { Accordion, AccordionContent, AccordionItem } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { User } from "lucide-react";
import backendCoreCompetencies from './../../../public/Backend Core Compentencies Icons.drawio.png';
import frontEndCoreCompetencies from './../../../public/Front-End Core Compentencies Icons.drawio.png';
import dataCoreCompetencies from './../../../public/Data Core Compentencies Icons.drawio.png';
import cloudContainerInfraCoreCompetencies from './../../../public/Cloud_Container Infrastructure Core Compentencies Icons.drawio.png';
import otherCoreCompetencies from './../../../public/Other Core Compentencies Icons.drawio.png';
import Image from 'next/image';
import React, { JSX } from "react";
import SectionContainer from "./section-container";

const NUM_SEPARATOR_COMPONENTS:number = 3;

const getSeparatorComponents = ():JSX.Element[] => {
    const separatorComponents:JSX.Element[] = [];
    for(let i = 0; i < NUM_SEPARATOR_COMPONENTS; i++) {
        separatorComponents.push(<Separator orientation="vertical" className="invisible lg:visible mx-20" key={`separator ${i}`} />);
    }
    return separatorComponents;
};

const getAccordionComponent = ():JSX.Element => {
    const accordionItems = [
        { name: 'Backend', imageSrc: backendCoreCompetencies },
        { name: 'Front-End', imageSrc: frontEndCoreCompetencies },
        { name: 'Data', imageSrc: dataCoreCompetencies },
        { name: 'Cloud/Container Infrastructure', imageSrc: cloudContainerInfraCoreCompetencies },
        { name: 'Other Technologies', imageSrc: otherCoreCompetencies }
    ];

    return (
        <div>
            <Accordion type='multiple' defaultValue={accordionItems.map(accordionItem => accordionItem.name)}>
            {
                accordionItems.map(accordionItem => {
                    return (
                        <AccordionItem value={accordionItem.name} key={accordionItem.name}>
                            <AccordionContent className='flex flex-col'>
                                <p className="self-center mb-3">{accordionItem.name}</p>
                                <Image src={accordionItem.imageSrc} alt={accordionItem.name} />
                            </AccordionContent>
                        </AccordionItem>
                    );
                })
            }
            </Accordion>
        </div>
    );
};


const CoreCompetenciesSection = ():JSX.Element => {
    return (
        <SectionContainer sectionName="Core Competencies" id='coreCompetencies'>
            <div className='flex flex-col lg:flex-row self-center lg:items-center'> 
                <div className="flex flex-col items-center mb-5 lg:mb-0">
                    <User size={200} />
                    <p className='lg:max-w-md'>
                        Charismatic, talent multiplying engineer & people leader with over a decade of experience.
                        Successfully led enterprise projects reducing charge-offs by $10 million & manual reporting by 30 hours 
                        per month. Spearheaded design, implementation, and delivery of scalable, highly available, event driven 
                        microservices, critical data marts, and rich user interfaces & experiences. Sold technical background, 
                        owning individual contributor duties while managing tens of remote engineers throughout the U.S. & Brazil.
                        Consistently collaborated with product/business partners to develop roadmaps & provide budget estimates.
                    </p>
                </div>
                {getSeparatorComponents()}
                {getAccordionComponent()}
            </div>
        </SectionContainer>
    );
};

export default CoreCompetenciesSection;