import { Footer, FooterCopyright, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";
export default function Footerr() {
  return (
    <Footer className="dark:bg-gray-800 rounded-t-none  bg-gray-200">
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="Company" />
            <FooterLinkGroup col>
              <FooterLink href="#">About</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Brand Center</FooterLink>
              <FooterLink href="#">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="help center" />
            <FooterLinkGroup col>
              <FooterLink href="#">Discord Server</FooterLink>
              <FooterLink href="#">Twitter</FooterLink>
              <FooterLink href="#">Facebook</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="legal" />
            <FooterLinkGroup col>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Licensing</FooterLink>
              <FooterLink href="#">Terms &amp; Conditions</FooterLink>
            </FooterLinkGroup>
          </div>
          <div>
            <FooterTitle title="download" />
            <FooterLinkGroup col>
              <FooterLink href="#">iOS</FooterLink>
              <FooterLink href="#">Android</FooterLink>
              <FooterLink href="#">Windows</FooterLink>
              <FooterLink href="#">MacOS</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
        <div className="w-full bg-gray-100 dark:bg-gray-700 px-5 py-6 sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="CMDB™" year={2025} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <i className="fa-brands text-lg fa-facebook"></i>
            <i className="fa-brands text-lg fa-instagram"></i>
            <i className="fa-brands text-lg fa-x-twitter"></i>
            <i className="fa-brands text-lg fa-github"></i>
            <i className="fa-brands text-lg fa-react"></i>
          </div>
        </div>
      </div>
    </Footer>
  );
  
}

 
