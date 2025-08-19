import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { allusers } from '../../services/usersServices';

const useAllUsers = () => {
    return useQuery({
        queryKey : ['all-users'],
        queryFn : allusers
    })
};

export default useAllUsers;