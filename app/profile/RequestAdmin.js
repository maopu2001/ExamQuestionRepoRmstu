import Loading from '@/components/ui/Loading';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { toast } from '@/hooks/use-toast';
import { useState } from 'react';

export default function RequestAdmin(props) {
  const roleColor = props.roleColor;
  const [isLoading, setIsLoading] = useState(false);

  const requestAdmin = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/admin/requestaccess');
      if (!res.ok) {
        const resData = await res.json();
        throw new Error(resData.message);
      }
      toast({
        title: 'Request to access Admin sent successfully',
        className: 'bg-green-500 text-white',
      });
      setIsLoading(false);
    } catch (error) {
      toast({
        title: error.message || 'Failed to send request',
        className: 'bg-red-500 text-white',
      });
      setIsLoading(false);
    }
  };

  return (
    <AlertDialog>
      {isLoading && <Loading />}
      <AlertDialogTrigger className={`${roleColor} text-lg bg-transparent px-2 hover:bg-transparent hover:underline`}>
        Request Admin Access
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will send a request for administration access to the server.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={requestAdmin} className="bg-primary-600">
            Send Request
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
