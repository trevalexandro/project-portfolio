"use client"

import * as React from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DisplayMode = ({...props}: React.ComponentPropsWithoutRef<'div'>): React.JSX.Element => {
    const {theme, setTheme } = useTheme(); 

    const setCurrentTheme = ():void => {
        if (theme === 'light') {
            setTheme('dark');
            return;
        }

        setTheme('light');
    };

    return (
        <div className={props.className}>
            <Button variant='outline' size='icon' onClick={setCurrentTheme}>
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    );
};

export default DisplayMode;