import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateRole } from "../../services/usersServices";
import toast from "react-hot-toast";

export default function useAdmin() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey : ['all-users'],
    mutationFn: updateRole,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['all-users'] });
      toast.success("Role updated successfully!");
    },
  });
}
