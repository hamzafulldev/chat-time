import { signIn, signOut, useSession } from 'next-auth/react';
import React from 'react'

type LayoutProps = {
    children: JSX.Element;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    const session = useSession();
    return (
        <div>
            <div className='w-full flex justify-between p-4 bg-white text-black'>
                <div>logo</div>
                
                <div className='flex gap-4'>
                    <div>{session?.data?.user?.name}</div>
                <button className="bg-black py-2 px-4 text-white rounded-lg" onClick={() => signIn()}>Sign In</button>
                <button className="bg-black py-2 px-4 text-white rounded-lg" onClick={() => signOut()}>Sign Out</button>
                </div>
            </div>
            {children}
        </div>
    )
}

export default Layout