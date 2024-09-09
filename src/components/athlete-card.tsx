import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { BASE_AVATAR_IMG_PATH } from '@/lib/constants';
import { formatFollowersCount } from '@/lib/utils';
import { AthleteWithSport } from '@/services/athlete';
import { InstagramLogoIcon } from '@radix-ui/react-icons';
import { UserRoundIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
  athlete: AthleteWithSport;
}

export default function AthleteCard({ athlete }: Props) {
  const avatarImgUrl = `${BASE_AVATAR_IMG_PATH}/${athlete.instagramSlug}.jpg`;
  const accountUrl = `https://instagram.com/${athlete.instagramSlug}`;

  return (
    <Card className='w-full group'>
      <CardHeader className='flex items-start justify-between p-4 overflow-hidden gap-2'>
        <div className='flex gap-4 truncate w-full'>
          <Avatar className='border-2 border-black size-14'>
            <AvatarImage src={avatarImgUrl} alt='athlete avatar' />
            <AvatarFallback>
              <UserRoundIcon
                className='size-16 text-muted-foreground/40'
                strokeWidth={2}
              />
            </AvatarFallback>
          </Avatar>

          <div className='truncate flex-1'>
            <CardTitle className='text-lg font-bold truncate'>
              {athlete.instagramName || 'Atleta'}
            </CardTitle>
            <CardDescription className='text-sm truncate'>
              {athlete.sport!.name}
            </CardDescription>
          </div>

          <div className='font-medium flex gap-1'>
            <UserRoundIcon className='size-5' />
            {formatFollowersCount(athlete.instagramFollowersCount || 0)}
          </div>
        </div>
      </CardHeader>

      <CardContent className='p-4 text-sm text-gray-700 font-light flex-grow'>
        <p className='min-h-[7.5em] leading-[1.5em]'>{athlete.instagramBio}</p>
      </CardContent>

      <CardFooter className='flex justify-between items-center border-t p-4 text-sm'>
        <span className='font-bold truncate w-[40%]'>
          @{athlete.instagramSlug}
        </span>

        <Link
          href={accountUrl}
          className='flex items-center gap-1 text-blue-500'
          target='_blank'
          prefetch={false}>
          <InstagramLogoIcon />
          <span>Ver no Instagram</span>
        </Link>
      </CardFooter>
    </Card>
  );
}
