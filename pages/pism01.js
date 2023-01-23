import { useState } from "react";

const Pism01 = () => {
    const [lesson, setLesson] = useState("https://www.youtube.com/embed/40Kfwpdvh3I");

    function selectLesson(lessonSelected) {
        setLesson(lessonSelected);
    }

    return (
        <div className="bg-[#c93d33] h-screen">
            <div className="pt-10">
                <h1 className="text-center text-5xl xl:text-5xl 2xl:text-9xl font-leagueSpartan drop-shadow-[5px_4px_1px_rgba(89,9,42,0.55)] text-[#59082a] font-black">Aulas PISM 01</h1>
            </div>

            <div className="p-10 sm:flex sm:flex-row">
                <div>
                    <iframe className="max-w-full h-auto aspect-video rounded-3xl" src={lesson} width="854" height="480" allow="autoplay"></iframe>
                </div>

                <div className="mt-10 sm:ml-10 flex flex-col w-64">
                    <button type="submit" className="bg-[#59082a] hover:bg-[#db9280] rounded-3xl m-1" onClick={() => selectLesson("https://www.youtube.com/embed/")}>
                        <h3 className="text-white text-xl font-leagueSpartan p-3">Aula 01 - 27/01</h3>
                    </button>

                    <button type="submit" className="bg-[#59082a] hover:bg-[#db9280] rounded-3xl m-1" onClick={() => selectLesson("https://www.youtube.com/embed/")}>
                        <h3 className="text-white text-xl font-leagueSpartan p-3">Aula 02 - 28/01</h3>
                    </button>

                    <button type="submit" className="bg-[#59082a] hover:bg-[#db9280] rounded-3xl m-1" onClick={() => selectLesson("https://www.youtube.com/embed/")}>
                        <h3 className="text-white text-xl font-leagueSpartan p-3">Aula 03 - 29/01</h3>
                    </button>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 text-center w-full text-leagueSpartan text-xl text-white">
                <h1>@gabaritandofisica</h1>
            </div>
        </div>
    )
};

export default Pism01;