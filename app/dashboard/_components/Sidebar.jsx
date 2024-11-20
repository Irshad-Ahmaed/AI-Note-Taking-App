"use client";
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { LayoutList, Shield } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react';
import UploadPdfDialog from './UploadPdfDialog';

const Sidebar = () => {
    const [showUpload, setShowUpload] = useState(false);

    const uploadPdf = () => {
        setShowUpload(!showUpload);
    };
    return (
        <>
            <div className='relative flex flex-col items-center shadow-md h-screen p-7'>
                <Image src={'/logo.svg'} alt='logo' width={120} height={120} />

                <div className='mt-10 w-full'>
                    <UploadPdfDialog>
                        <Button onClick={() => uploadPdf()} className='w-full'>+ Upload PDF</Button>
                    </UploadPdfDialog>
                    <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 cursor-pointer rounded-lg'>
                        <LayoutList />
                        <h2>Workspace</h2>
                    </div>
                    <div className='flex gap-2 items-center p-3 mt-2 hover:bg-slate-100 cursor-pointer rounded-lg'>
                        <Shield />
                        <h2>Upgrade</h2>
                    </div>
                </div>

                <div className='absolute flex flex-col bottom-24 w-[80%]'>
                    <Progress value={33} />
                    <p className='text-sm mt-1'>2 out of 5 Pdf Uploaded</p>
                    <p className='text-sm mt-2'>Upgrade to Upload more PDF</p>
                </div>
            </div>
        </>
    );
};

export default Sidebar;