const Footer = () => {
    return (
        <footer className="bg-black border-t mt-12">
            <div className="max-w-4xl mx-auto px-4 py-6 text-center text-white">
                <p>&copy; {new Date().getFullYear()} My Blog. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
