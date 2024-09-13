import Image from 'next/image';

interface Props {
  sportCode: string;
  size?: number;
}

export default function SportIcon({ sportCode, size = 20 }: Props) {
  return (
    <Image
      src={`https://codante.s3.amazonaws.com/codante-apis/olympic-games/pictograms/${sportCode}.avif`}
      alt='simbolo esporte'
      width={size}
      height={size}
    />
  );
}
