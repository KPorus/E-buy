import TopPicks from '@/components/desktop/top-picks';
import React from 'react';

interface ComponentProps {
    title: string;
}
const ProductShowcase = ({title}:ComponentProps) => {
    return (
        <div className='flex gap-2'>
            <div className='w-1/2'>Side</div>
            <TopPicks sectionTitle={title}/>
        </div>
    );
};


export default ProductShowcase;