import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export default function About() {
  return (
    <Dialog>
      <DialogTrigger>Sobre</DialogTrigger>
      <DialogContent>
        <DialogHeader className='space-y-6'>
          <DialogTitle>Sobre o projeto</DialogTitle>
          <DialogDescription>
            <p>
              Esse é um projeto fullstack criado através de iniciativa da
              plataforma{' '}
              <a
                href='https://codante.io'
                target='_blank'
                className='text-yellow-500 font-bold'>
                Codante
              </a>{' '}
              com o objetivo de dar visibiliade para os atletas olímpicos e
              paralímpicos brasileiros.
            </p>
            <br />
            <p>
              Confira o código completo no{' '}
              <a
                href='https://github.com/famgz/siga-seu-atleta'
                target='_blank'
                className='text-yellow-500 font-bold'>
                repositório do projeto
              </a>
              .
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
