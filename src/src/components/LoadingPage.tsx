import { useState, useEffect } from 'react';
import { Loading } from './style';
import Link from 'next/link';

const LoadingPage = () => {
    return (
        <>
            <Loading>
                <div className='ring'>
                    Loading<span></span>
                </div>
            </Loading>
        </>
    );
};

export default LoadingPage;
