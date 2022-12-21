// import { getAPIClient } from '../services/axios';
// import { AuthContext } from "../contexts/AuthContext";
import api from '../services/api.js';
import { trackPromise } from 'react-promise-tracker';
import Loading from '../components/Loading';
import { useState } from "react";
import { useForm } from 'react-hook-form';
import cover from '../public/logo-gb.png';
import image1 from '../public/cover.jpg';
import image2 from '../public/tmp.jpg';
import Image from 'next/image';
import { Alert } from 'flowbite-react';
import { HiInformationCircle } from "react-icons/hi";
import { useRouter } from 'next/router';

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

const Home = () => {
  const router = useRouter();
  const { handleSubmit } = useForm();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [pismModule, setPismModule] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [moduleNotSelected, setModuleNotSelected] = useState(false);

  const onChangeName = (event) => {
    setName(event.target.value);
  };

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangeModule = (event) => {
    setPismModule(event.target.value);
  };

  async function handleSubscription() {
    if (!pismModule || pismModule == "notSelected") {
      setModuleNotSelected(true);
      return;
    }

    try {
      let response = await trackPromise(api.post(`/createStudent`, {
        name,
        email,
        pismModule
      }));

      if (response?.data?.success) {
        router.push('/subscribe');
      }
    } catch (err) {
      setShowAlert(true);
    }
  }


  return (
    <>
      <div>
        <div className="bg-[#c93d33] h-screen">
          <div className="sm:flex sm:flex-row">

            <div className="relative top-12 2xl:top-64">
              <div className="flex justify-center">
                <h1 className="text-center text-5xl xl:text-8xl 2xl:text-9xl font-leagueSpartan drop-shadow-[5px_4px_1px_rgba(89,9,42,0.55)] text-[#59082a] font-black">Desvendando o PISM</h1>
              </div>
              <div className="flex justify-center pl-2 pr-2">
                <h2 className="text-xl xl:text-3xl font-pacifico text-[#59082a] text-center">
                  Descruba todos os segredos por trás da prova de física para acertar mais questões.
                </h2>
              </div>
              <div className="relative top-5">
                <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleSubscription)}>
                  <div className="flex justify-center">
                    <input
                      id="name"
                      type="text"
                      placeholder="Nome completo"
                      required={true}
                      className="text-[#59082a] font-leagueSpartan text-sm xl:text-xl xl:w-3/4 2xl:text-2xl 2xl:w-1/2 rounded-3xl placeholder-[#59082a] w-[204px]"
                      onChange={onChangeName}
                    />
                  </div>
                  <div className="flex justify-center">
                    <select
                      id="modules"
                      required={true}
                      onChange={onChangeModule}
                      className="text-[#59082a] font-leagueSpartan text-sm xl:text-xl xl:w-3/4 2xl:text-2xl 2xl:w-1/2 rounded-3xl w-[204px]"
                      defaultValue={"notSelected"}
                    >
                      <option value="notSelected" disabled>
                        Selecione o Módulo
                      </option>
                      <option value="pism01">
                        PISM 01
                      </option>
                      <option value="pism02">
                        PISM 02
                      </option>
                      <option value="pism03">
                        PISM 03
                      </option>
                    </select>
                    {moduleNotSelected ?
                      <Alert
                        color="warning"
                        icon={HiInformationCircle}
                        onDismiss={() => setModuleNotSelected(false)}
                      >
                        <span>
                          <span className="font-medium">
                            Selecione um dos módulos!
                          </span>
                        </span>
                      </Alert> : null}
                  </div>
                  <div className="flex justify-center">
                    <input
                      id="email"
                      type="email"
                      placeholder="E-mail"
                      required={true}
                      onChange={onChangeEmail}
                      className="text-[#59082a] font-leagueSpartan text-sm xl:text-xl xl:w-3/4 2xl:text-2xl 2xl:w-1/2 rounded-3xl placeholder-[#59082a] w-[204px]"
                    />
                  </div>
                  {showAlert ?
                    <Alert
                      color="failure"
                      icon={HiInformationCircle}
                      onDismiss={() => setShowAlert(false)}
                    >
                      <span>
                        <span className="font-medium">
                          Ocorreu um erro inesperado, tente novamente!
                        </span>
                      </span>
                    </Alert> : null}
                  <div className="flex justify-center">
                    <button type="submit" className="bg-[#59082a] hover:bg-[#db9280] rounded-3xl">
                      <Loading />
                      <h3 className="text-white text-xl font-leagueSpartan p-3">QUERO ME INSCREVER</h3>
                    </button>
                  </div>
                </form>

              </div>
            </div>
            <div className="flex justify-center xl:block xl:justify-start">
              <div className="relative top-[72px] w-[246px] h-[246px] xl:top-[-34px] xl:w-[691px] xl:h-[691px]">
                <Image src={image1} alt="Gabaritando Física" />
              </div>
            </div>
          </div>
        </div >

        <div className="bg-[#59082a] xl:h-screen">
          <h1 className="relative top-10 xl:top-5 font-pacifico text-3xl xl:text-5xl text-white pl-5">O que só os aprovados sabem...</h1>
          <div className="flex justify-center">
            <h2 className="text-[#db9280] text-center text-xl xl:text-3xl font-leagueSpartan pt-10 w-3/5">Eu vou te mostrar tudo o que você precisa conhecer sobre a prova para ser aprovado na UFJF.</h2>
          </div>
          <div className="flex justify-center relative pt-5">
            <button type="submit" className="bg-[#c93d33] hover:bg-[#db9280] rounded-3xl" onClick={scrollToTop}>
              <h3 className="text-white text-xl font-leagueSpartan p-3">QUERO ME INSCREVER</h3>
            </button>
          </div>

          <div className="p-5 grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center">

            <div className="bg-[#e3b5a0]">
              <h1 className="font-leagueSpartan text-lg text-center font-bold">Aula 01</h1>
              <div className="pl-5 pr-5">
                <Image src={image2} alt="Aula 01" width={300} height={150} />
              </div>
              <h3 className="font-leagueSpartan text-lg text-center text-[#59082a] font-bold">O conteúdo programático de física e a melhor sequência de estudos.</h3>
              <h4 className="font-leagueSpartan text-lg text-justify text-[#f1eeee] pl-4 pr-4">Nesta aula, eu vou te apresentar todo o conteúdo programático do seu módulo e lhe mostrarei qual a melhor sequência didática para estudá-lo ao longo do ano.</h4>
            </div>

            <div className="bg-[#db9280]">
              <h1 className="font-leagueSpartan text-lg text-center font-bold">Aula 02</h1>
              <div className="pl-5 pr-5">
                <Image src={image2} alt="Aula 02" height={150} width={300} />
              </div>
              <h3 className="font-leagueSpartan text-lg text-center text-[#59082a] font-bold">Os conteúdos  recorrentes: só eles bastam para ser APROVADO?</h3>
              <h4 className="font-leagueSpartan text-lg text-justify text-[#f1eeee] pl-4 pr-4">Nesta aula, você conhecerá os conteúdos de física com maior recorrência na prova, mas também descobrirá se estudando apenas eles, conseguirá ser aprovado em um curso de alta concorrência.</h4>
            </div>

            <div className="bg-[#d17a65]">
              <h1 className="font-leagueSpartan text-lg text-center font-bold">Aula 03</h1>
              <div className="pl-5 pr-5">
                <Image src={image2} alt="Aula 03" height={150} width={300} />
              </div>
              <h3 className="font-leagueSpartan text-lg text-center text-[#59082a] font-bold">As equações mais utilizadas: memorizar NÃO É SUFICIENTE.</h3>
              <h4 className="font-leagueSpartan text-lg text-justify text-[#f1eeee] pl-4 pr-4">Nesta aula, você descobrirá quais são as equações que mais caem na prova. Vou te ensinar uma forma para nunca mais esquecê-las e aplicá-las corretamente nas questões.</h4>
            </div>


            <div className="bg-[#cd664d]">
              <h1 className="font-leagueSpartan text-lg text-center font-bold">Aula 04</h1>
              <div className="pl-5 pr-5">
                <Image src={image2} alt="Aula 04" height={150} width={300} />
              </div>
              <h3 className="font-leagueSpartan text-lg text-center text-[#59082a] font-bold">O Método IPEA para solução de questões.</h3>
              <h4 className="font-leagueSpartan text-lg text-justify text-[#f1eeee] pl-4 pr-4">Nesta aula, eu vou lhe apresentar o Método IPEA para solução de questões, e eu garanto que ela vai revolucionar o seu número de acertos.</h4>
            </div>

          </div>

        </div>

        <div className="bg-[#cd664d] flex h-screen justify-center items-center relative">
          <div>
            <h1 className="font-pacifico text-4xl text-[#59082a] pl-10">Prazer, Ana Paula!</h1>

            <div className="xl:flex xl:flex-row p-5">
              <div className="relative h-[240px] w-[240px] xl:h-[240px] xl:w-[240px] left-14 xl:left-0">
                <Image src={cover} layout="fill" objectFit="cover" />
              </div>

              <div className="xl:w-4/5 xl:pt-5 flex justify-center">
                <p className="font-leagueSpartan text-xl xl:text-3xl text-[#59082a] text-justify xl:pr-10">Oie, oie meu povo!
                  Eu sou a Ana, prof de Física e mestra em Física Aplicada pela Universidade Federal de Viçosa.
                  Desde 2015, atuo como professora de escolas públicas, privadas e cursinhos pré-vestibulares.
                  Sou especialista em Física do PISM e desenvolvi o Método IPEA, capaz de te  ajudar a acertar mais questões de Física.
                  Em 2022, criei o Extensivo Gabaritando Física no PISM, um curso completo e personalizado que vai te ajudar a atingir 80% de acertos na prova. </p>
              </div>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="bg-[#59082a] hover:bg-[#db9280] rounded-3xl" onClick={scrollToTop}>
                <h3 className="text-white text-xl font-leagueSpartan p-3">QUERO ME INSCREVER</h3>
              </button>
            </div>

            <div className="absolute bottom-0 left-0 text-center w-full text-leagueSpartan text-xl text-white">
              <h1>@gabaritandofisica</h1>
            </div>

          </div>
        </div>
      </div>

    </>
  );
}

export default Home;