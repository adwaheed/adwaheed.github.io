import { GENERAL_INFO } from '@/lib/data';



const Footer = async () => {
   
    return (
        <footer className="text-center pb-0" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                
            </div>
            <div className="bg-black/50 py-6">
                    <p
                        className="leading-none text-muted-foreground hover:text-white"
                    >
                        &copy; {new Date().getFullYear()} Adil Waheed
                        
                    </p>

                    
                </div>
        </footer>
    );
};

export default Footer;
