import { JSX } from "react";
import SectionContainer from "./section-container";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface KeyProject {
    project: string;
    role: string;
    businessCase: string;
    technologiesUsed: string;
};

const getTableRows = ():JSX.Element[] => {
    const tableRows:KeyProject[] = [
        {
            project: 'DEWM',
            role: 'Senior Consultant',
            businessCase: 'Rewrite of the UI for the DEWM organization to consolidate codebases',
            technologiesUsed: 'Next.js, React, Tailwind, Tanstack Query, Django, Flask, MySQL, Docker, Azure'
        },
        {
            project: 'Florida FloodHub',
            role: 'Senior Consultant',
            businessCase: 'Create a rich UI/UX for the Florida FloodHub organization',
            technologiesUsed: 'Next.js, React, Tailwind, Tanstack Query, Railway, Directus'
        },
        { 
            project: 'Risk 360',
            role: 'Engineering Manager',
            businessCase: "Create a centralized view of a customer's risk",
            technologiesUsed: 'Snowflake, NestJS, React, Reltio/MDM, Datadog, AWS, Docker, k8s, GitHub Workflows'
        },
        {
            project: 'EDGE',
            role: 'Tech Lead',
            businessCase: 'Create an e-commerce experience offering non-fuel products to fuel customers',
            technologiesUsed: 'Postgres, SQL Server, Go, .NET Core, React, Datadog, Azure, ADO'
        },
        {
            project: 'Gold',
            role: 'Senior Software Engineer',
            businessCase: 'Maintain tire purchasing app for fuel customers',
            technologiesUsed: 'SQL Server, ASP.NET MVC, Datadog, Azure, ADO'
        }
    ];

    return (
        tableRows.map((tableRow, index) =>
            <TableRow key={index}>
                <TableCell>{tableRow.project}</TableCell>
                <TableCell>{tableRow.role}</TableCell>
                <TableCell>{tableRow.businessCase}</TableCell>
                <TableCell>{tableRow.technologiesUsed}</TableCell>
            </TableRow>
        )
    );
};

const OtherKeyProjectsSection = ():JSX.Element => {
    return (
        <SectionContainer sectionName='Other Key Projects'>
            <Table className="self-center">
                <TableHeader>
                    <TableRow>
                        <TableHead>Project</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Business Case</TableHead>
                        <TableHead>Technologies Used</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {getTableRows()}
                </TableBody>
            </Table>
        </SectionContainer>
    )
};

export default OtherKeyProjectsSection;
