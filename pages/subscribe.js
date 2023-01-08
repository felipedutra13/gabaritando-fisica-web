import Image from 'next/image';
import { Button } from 'flowbite-react';
import image3 from '../public/image7.png';
import whatsapp from '../public/whatsapp.png';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as fbq from '../lib/fpixel';

const Subscribe = () => {
    const router = useRouter();

    async function handleWhatsappButton() {
        router.push('https://chat.whatsapp.com/JY97tEBHRn7C7edkussouE');
    }

    useEffect(() => {
        fbq.pageview();
        fbq.customPageview('typ-pism');

        const handleRouteChange = () => {
            fbq.pageview();
            fbq.customPageview('typ-pism');
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange)
        }
    }, [router.events]);

    return (
        <div className="bg-[#c93d33] h-screen flex xl:justify-center xl:items-center">
            <div className="xl:flex xl:flex-row pt-5 xl:top-0">

                <div className="flex justify-center items-center">
                    <div className="relative h-[240px] w-[240px] xl:h-[550px] xl:w-[550px]">
                        <Image src={image3} fill={true} />
                    </div>

                </div>

                <div className="flex justify-center items-center">
                    <div className="w-3/5 relative top-5 xl:top-0">
                        <h1 className="font-pacifico text-center text-[#f1eeee] text-3xl xl:text-5xl">Aaah eu tô muito feliz que você chegou até aqui.</h1>
                        <h2 className="pt-5 font-leagueSpartan text-center text-[#f1eeee] text-xl xl:text-3xl">Para finalizar a sua inscrição e ter acesso a todas as aulas gratuitas do Desvendando a Física do PISM, clique no botão abaixo e entre no Grupo de WhatsApp</h2>
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
            <div className="absolute bottom-0 left-0 text-center w-full text-leagueSpartan text-xl text-white">
                <h1>@gabaritandofisica</h1>
            </div>

        </div>
    )
};

export default Subscribe;