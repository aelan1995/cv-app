'use client'
import { useState, useEffect } from 'react';
import { useRouter } from "next/navigation";
import DefaultSidebar from 'components/cms/cms-sidebar.js';
import SimpleCard from 'components/cms/cms-content.js';

export default function CMS () {

    const router = useRouter();
    function handleLogout () {
        localStorage.removeItem('access_token')
        localStorage.removeItem('refresh_token')
        router.push("/auth/login")
    }

    return (
        <div className='px-12 py-12 flex flex-row gap-6'>
            <DefaultSidebar props={handleLogout}/>
            <SimpleCard/>
        </div>
    )
}