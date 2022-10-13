import './styles/global.css';
import { Logo } from './Logo';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Envelope, Lock } from 'phosphor-react';
import { Checkbox } from './components/Checkbox';
import { Buttom } from './components/Buttom';

export function App() {

  return (
    <div className='w-screen h-screen flex flex-col bg-gray-900 items-center justify-center text-gray-100'>
        <header className='flex flex-col items-center'>
          <Logo />

          <Heading size="lg" className='mt-4'>
            Ignite Lab
          </Heading>

          <Text className='text-gray-400 mt-1' size="lg">
            Faça login e comece a usar!
          </Text>
        </header>

        <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
          <label htmlFor="email" className='flex flex-col gap-2'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            
            <TextInput.Root>
              <TextInput.icon>
                <Envelope/>
              </TextInput.icon>

              <TextInput.input type="email" id="email" placeholder='Digite seu e-mail'/>
            </TextInput.Root>
          </label>


          <label htmlFor="password" className='flex flex-col gap-2'>
            <Text className='font-semibold'>Digite sua senha</Text>
            
            <TextInput.Root>
              <TextInput.icon>
                <Lock />
              </TextInput.icon>

              <TextInput.input type="password" id="password" placeholder='********'/>
            </TextInput.Root>
          </label>

          <label htmlFor="remember" className='flex items-center gap-2'>
            <Checkbox id='remember'/>
            <Text size='sm' className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>

          <Buttom type="submit" className='mt-4'>Entrar na plataforma</Buttom>
        </form>

        <footer className='flex flex-col items-center gap-4 mt-8'>
          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Esqueceu sua senha?</a>
          </Text>

          <Text asChild size='sm'>
            <a href="" className='text-gray-400 underline hover:text-gray-200'>Não possui conta? Crie uma agora!</a>
          </Text>
        </footer>
    </div>
  )
}

