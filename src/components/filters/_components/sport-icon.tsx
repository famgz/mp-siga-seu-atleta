import Image from 'next/image';

interface Props {
  sportCode: string;
}

export default function SportIcon({ sportCode }: Props) {
  return (
    <Image
      src={`https://codante.s3.amazonaws.com/codante-apis/olympic-games/pictograms/${sportCode}.avif`}
      alt='simbolo esporte'
      width={20}
      height={20}
    />
  );
}
