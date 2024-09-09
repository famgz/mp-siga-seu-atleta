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
        <DialogHeader>
          <DialogTitle>Sobre o projeto</DialogTitle>
          <DialogDescription>
            <p>
              Esse é um projeto criado com carinho pelo{' '}
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
              Se você encontrou alguma informação incorreta ou sentiu falta de
              algum atleta, por favor, entre em contato conosco pelo email:{' '}
              <span className='font-bold'>contato@codante.io</span>
            </p>
            <br />
            <p>
              Nós somos uma plataforma para quem quer aprender programação
              front-end. Se você quer aprender a criar sites como esse, acesse:{' '}
              <a
                className='text-yellow-500 font-bold'
                href='https://codante.io'>
                codante.io
              </a>
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
