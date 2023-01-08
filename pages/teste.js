import Image from 'next/image';
import image3 from '../public/image1.png';

const Teste = () => {

    return (
        <div className="max-w-full">
            <Image src={image3} alt="Gabaritando Física" />
        </div>
    )
};

export default Teste;