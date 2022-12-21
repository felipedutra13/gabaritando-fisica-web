import Image from 'next/image';
import { Button } from 'flowbite-react';
import image3 from '../public/image3.png';
import whatsapp from '../public/whatsapp.png';
import { useRouter } from 'next/router';

const Subscribe = () => {
    const router = useRouter();

    async function handleWhatsappButton() {
        router.push('https://chat.whatsapp.com/JY97tEBHRn7C7edkussouE');
    }

    return (
        <div className="bg-[#c93d33] h-screen flex xl:justify-center xl:items-center">
            <div className="xl:flex xl:flex-row relative top-5 xl:top-0">

                <div className="flex justify-center items-center">
                    <div className="relative h-[240px] w-[240px] xl:h-[480px] xl:w-[480px]">
                        <Image src={image3} layout="fill" objectFit="cover" />
                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <div className="w-3/5 relative top-5 xl:top-0">
                        <h1 className="font-pacifico text-center text-[#f1eeee] text-3xl xl:text-5xl">Aaah eu tô muito feliz que você chegou até aqui.</h1>
                        <h2 className="pt-5 font-leagueSpartan text-center text-[#f1eeee] text-xl xl:text-3xl">Para finalizar a sua inscrição e ter acesso a todas as aulas gratuitas do Desvendando o PISM, clique no botão abaixo e entre no Grupo de WhatsApp</h2>
                        <div className="flex justify-center pt-5">
                            <Button pill={true} type="submit" className="bg-[#2fba43] hover:bg-white hover:text-green-800" onClick={handleWhatsappButton}>
                                <p className="pr-2">ENTRAR NO GRUPO DE WHATSAPP</p>
                                <div className="">
                                    <Image src={whatsapp} width={30} height={30} />
                                </div>
                            </Button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
};

export default Subscribe;