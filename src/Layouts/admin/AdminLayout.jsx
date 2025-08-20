import React from 'react';
import { Outlet } from 'react-router';
import { Link } from 'react-router-dom';

const AdminLayout = () => {
   const list = [
           {
               name : 'all-users',
               lin : '/admin/users'
           },
           {
               name : 'admin-products',
               lin : '/admin/products'
           },
           {
               name : 'add-products',
               lin : '/admin/add-product'
           },
       ]
       return (
           <div className='flex justify-between items-center'>
               <div className='flex flex-col w-[25%] mx-auto'>
                   {
                       list.map((lis, i)=>
                       <Link key={i} className='mt-2' to={lis?.lin}>
                       {lis.name}
                       </Link>)
                   }
               </div>
               <div className='w-[72%] mx-auto'>
                   <Outlet/>
               </div>
           </div>
       );
};

export default AdminLayout;