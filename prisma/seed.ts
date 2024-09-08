import { Athlete, PrismaClient } from '@prisma/client';
import { athleteCoreData } from './athlete-list';

const prisma = new PrismaClient();

const sports = [
  { id: 1, code: 'P-ATH', name: 'Atletismo Paralímpico', paralympic: true },
  { id: 2, code: 'P-BDM', name: 'Badminton Paralímpico', paralympic: true },
  { id: 3, code: 'P-BOC', name: 'Bocha', paralympic: true },
  { id: 4, code: 'P-CSP', name: 'Canoagem Paralímpica', paralympic: true },
  { id: 5, code: 'P-CRD', name: 'Ciclismo Paralímpico', paralympic: true },
  {
    id: 6,
    code: 'P-WFE',
    name: 'Esgrima Em Cadeira De Rodas',
    paralympic: true,
  },
  { id: 7, code: 'P-FBB', name: 'Futebol De Cegos', paralympic: true },
  { id: 8, code: 'P-GBL', name: 'Goalball', paralympic: true },
  { id: 9, code: 'P-EQU', name: 'Hipismo Paralímpico', paralympic: true },
  {
    id: 10,
    code: 'P-PWL',
    name: 'Halterofilismo Paralímpico',
    paralympic: true,
  },
  { id: 11, code: 'P-JUD', name: 'Judô Paralímpico', paralympic: true },
  { id: 12, code: 'P-SWM', name: 'Natação Paralímpica', paralympic: true },
  { id: 13, code: 'P-ROW', name: 'Remo Paralímpico', paralympic: true },
  { id: 14, code: 'P-TKW', name: 'Taekwondo Paralímpico', paralympic: true },
  {
    id: 15,
    code: 'P-TTE',
    name: 'Tênis De Mesa Paralímpico',
    paralympic: true,
  },
  {
    id: 16,
    code: 'P-ARC',
    name: 'Tiro Com Arco Paralímpico',
    paralympic: true,
  },
  {
    id: 17,
    code: 'P-SHO',
    name: 'Tiro Esportivo Paralímpico',
    paralympic: true,
  },
  { id: 18, code: 'P-TRI', name: 'Triathlon Paralímpico', paralympic: true },
  {
    id: 19,
    code: 'P-WTE',
    name: 'Tênis Em Cadeira De Rodas',
    paralympic: true,
  },
  { id: 20, code: 'P-VBS', name: 'Vôlei Sentado', paralympic: true },
  { id: 21, code: 'ATH', name: 'Atletismo', paralympic: false },
  { id: 22, code: 'BDM', name: 'Badminton', paralympic: false },
  { id: 23, code: 'BKB', name: 'Basquete', paralympic: false },
  { id: 24, code: 'BOX', name: 'Boxe', paralympic: false },
  { id: 25, code: 'CSP', name: 'Canoagem', paralympic: false },
  { id: 26, code: 'CRD', name: 'Ciclismo', paralympic: false },
  { id: 27, code: 'FEN', name: 'Esgrima', paralympic: false },
  { id: 28, code: 'FBL', name: 'Futebol', paralympic: false },
  { id: 29, code: 'GAR', name: 'Ginástica Artística', paralympic: false },
  { id: 30, code: 'GRY', name: 'Ginástica Rítmica', paralympic: false },
  { id: 31, code: 'GTR', name: 'Ginástica de trampolim', paralympic: false },
  { id: 32, code: 'HBL', name: 'Handebol', paralympic: false },
  { id: 33, code: 'EQU', name: 'Hipismo', paralympic: false },
  { id: 34, code: 'JUD', name: 'Judô', paralympic: false },
  { id: 35, code: 'WLF', name: 'Levantamento de peso', paralympic: false },
  { id: 36, code: 'SWM', name: 'Natação', paralympic: false },
  { id: 37, code: 'MPN', name: 'Pentatlo moderno', paralympic: false },
  { id: 38, code: 'ROW', name: 'Remo', paralympic: false },
  { id: 39, code: 'RU7', name: 'Rugby sevens', paralympic: false },
  { id: 40, code: 'DIV', name: 'Saltos ornamentais', paralympic: false },
  { id: 41, code: 'SKB', name: 'Skate', paralympic: false },
  { id: 42, code: 'SRF', name: 'Surfe', paralympic: false },
  { id: 43, code: 'TKW', name: 'Taekwondo', paralympic: false },
  { id: 44, code: 'TEN', name: 'Tênis', paralympic: false },
  { id: 45, code: 'TTE', name: 'Tênis de Mesa', paralympic: false },
  { id: 46, code: 'ARC', name: 'Tiro com Arco', paralympic: false },
  { id: 47, code: 'SHO', name: 'Tiro Esportivo', paralympic: false },
  { id: 48, code: 'TRI', name: 'Triatlo', paralympic: false },
  { id: 49, code: 'SAL', name: 'Vela', paralympic: false },
  { id: 50, code: 'VVO', name: 'Vôlei', paralympic: false },
  { id: 51, code: 'VBV', name: 'Vôlei de praia', paralympic: false },
  { id: 52, code: 'WRE', name: 'Wrestling', paralympic: false },
];

/*
  [
    id: 519,
    name: 'Giullia Penalber',
    sportId: 52,
    paralympic: 0,
    instagramUrl: 'https://www.instagram.com/giulliapenalber/',
    instagramName: 'Giullia Penalber',
    instagramImageUrl: 'https://scontent.cdninstagram.com/v/t51.2885-19/399994822_859736399116319_6050891117975036689_n.jpg?stp=dst-jpg_p100x100&_nc_cat=100&ccb=1-7&_nc_sid=fcb8ef&_nc_ohc=xejgf_xCUQoQ7kNvgGhFyo_&_nc_ht=scontent.cdninstagram.com&oh=00_AYBdg1sVqP-z5gBS33FrtTnZLbPVWiagh-pneXtaZ7Hlzw&oe=66C971B4',
    instagramFollowersCount: 26000,
    instagramFollowingCount: 3229,
    instagramPostsCount: null,
    instagramBio: `🇧🇷 Seleção Brasileira de Wrestling\n🇫🇷 Olympian \n🥇🥇Pan-Americano \n🥇🥉Jogos Pan \n🎓Gestão de Projetos\n🏅Bolsa Atleta\n🏅Time Rio`,
  ],
*/

interface AthleteData
  extends Omit<Athlete, 'id' | 'instagramPostsCount' | 'updatedAt'> {}

const athletes: AthleteData[] = athleteCoreData.map(
  ([
    id,
    name,
    sportId,
    paralympic,
    instagramUrl,
    instagramName,
    instagramImageUrl,
    instagramFollowersCount,
    instagramFollowingCount,
    instagramPostsCount,
    instagramBio,
  ]) => ({
    // id,
    name: String(name),
    sportId: Number(sportId),
    paralympic: !!paralympic,
    instagramUrl: String(instagramUrl),
    instagramName: String(instagramName),
    instagramImageUrl: String(instagramImageUrl),
    instagramFollowersCount: Number(instagramFollowersCount),
    instagramFollowingCount: Number(instagramFollowingCount),
    // instagramPostsCount,
    instagramBio: instagramBio!.toString(),
  })
);

async function main() {
  await prisma.sport.createMany({
    data: sports,
    skipDuplicates: true,
  });

  await prisma.athlete.createMany({
    data: athletes,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
