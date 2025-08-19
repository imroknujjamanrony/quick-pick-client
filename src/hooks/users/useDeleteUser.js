import { useMutation, useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { deleteUser } from '../../services/usersServices';
import toast from 'react-hot-toast';

const useDeleteUser = () => {
      const queryClient = useQueryClient();

    return useMutation({
        mutationKey : ['all-users'],
        mutationFn : (id)=> deleteUser(id),
        onSuccess: () => {
            console.log("User deleted successfully");
            toast.success("User deleted successfully");
            queryClient.invalidateQueries(['all-users']);
        },
    })
};

export default useDeleteUser;