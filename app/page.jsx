import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import TypeWriterText from "@/components/TypeWriterText";

const Home = () => {
  return (
    <section className=" h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left">
            <h1 className="h1 text-4xl lg:text-6xl">
              Olá, eu sou o Berg,
              <br /> um <TypeWriterText />.
            </h1>
            <p className="max-w-[500px] text-lg mb-9 mt-3 text-black/80 leading-5 lg:text-xl">
              Através da programação e do design, ajudo empresas e pessoas ao
              redor do mundo a expandir seus negócios para o meio online.
            </p>
            {/* btn and social media */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/cv/wandembergcurriculo.pdf" // Caminho para o arquivo na pasta public
                download="wandembergcurriculo.pdf" // Nome do arquivo ao ser baixado
                className="flex items-center" 
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Baixar meu currículo</span>
                  <FiDownload className="text-xl " />
                </Button>
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-14 h-14 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* photo */}
          <div>
            <Photo />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
