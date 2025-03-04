import { JSX, ReactNode } from "react";


export const TEXT_SIZE_CLASS_NAMES:string = 'text-xl md:text-4xl lg:text-6xl';

interface SectionContainerProps {
    sectionName: string;
    id?: string;
    children: ReactNode;
};

const SectionContainer = ({ sectionName, id, children }:SectionContainerProps):JSX.Element => {
    return (
        <div className='flex flex-col'>
            <p className={`${TEXT_SIZE_CLASS_NAMES} self-center mb-5`} id={id}>{sectionName}</p>
            {children}
        </div>
    );
};

export default SectionContainer;