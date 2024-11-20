import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { DialogClose } from '@radix-ui/react-dialog';


const UploadPdfDialog = ({ children }) => {
    return (
        <div>
            <Dialog>
                <DialogTrigger asChild>{children}</DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Upload Pdf File</DialogTitle>
                        <DialogDescription asChild>
                            <div>
                                <h2 className='mt-5'>Select a file to Upload</h2>
                                <div className='p-3 mt-1 rounded-md border'>
                                    <input type="file" accept='application/pdf' />
                                </div>
                                <div className='mt-2 flex flex-col gap-1'>
                                    <label>File Name*</label>
                                    <Input />
                                </div>
                            </div>
                        </DialogDescription>
                    </DialogHeader>

                    <DialogFooter>
                        <DialogClose>
                            <Button type="button" variant="outline">Close</Button>
                        </DialogClose>
                        <Button>Upload</Button>
                    </DialogFooter>

                </DialogContent>
            </Dialog>

        </div>
    );
};

export default UploadPdfDialog;