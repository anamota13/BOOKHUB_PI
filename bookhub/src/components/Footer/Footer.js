
import { Footer } from "flowbite-react";
import {  BsGithub, BsInstagram} from "react-icons/bs";
  

const FooterComponent = () => {
  return (
    <Footer container className="w-full fixed bottom-0 left-0 bg-white">
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:grid-cols-1">
          <div className="w-full">
            <Footer.Brand
            />
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6 w-full">
            <div className="w-full">
              <Footer.Title title="links" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">Home</Footer.Link>
                <Footer.Link href="#">Livros</Footer.Link>
                <Footer.Link href="#">Literatura Brasileira</Footer.Link>
                <Footer.Link href="#">Sobre Nós</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="w-full">
              <Footer.Title title="Contate-nos" />
              <Footer.LinkGroup col>
                <Footer.Link href="#">+55 16 99297-1607</Footer.Link>
                <Footer.Link href="#">bookhub@gmail.com</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div className="w-full">
              <Footer.Title title="Endereço" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://www.google.com/maps/place/Fatec+Franca+-+Faculdade+de+Tecnologia+de+Franca+Dr+Thomaz+Novelino/@-20.5149138,-47.4032692,17z/data=!3m1!4b1!4m6!3m5!1s0x94b0a650b93c4b5f:0xbe0e42f3aa42525c!8m2!3d-20.5149138!4d-47.4006943!16s%2Fg%2F1jkxwkhq2?entry=ttu&g_ep=EgoyMDI1MDIxOS4xIKXMDSoASAFQAw%3D%3D">
                  R. Irênio Greco, 4580, Vila Imperador - Franca-SP
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          
          <Footer.Copyright href="#" by="BookHub™" year={2025} />
          
         
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:ml-auto">
            
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="https://github.com/anamota13/BOOKHUB_PI" icon={BsGithub} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default FooterComponent;
