export const Footer = () => {
    return (
        <footer className="bg-black/20 backdrop-blur-sm mt-20 border-t border-white/10">
            <div className="max-w-6xl mx-auto py-12 px-4 text-center text-gray-400">
                <p className="text-lg font-bold text-white mb-4">RaveTest</p>
                <div className="flex justify-center gap-6 mb-8">
                    <a href="#" className="hover:text-white">Product</a>
                    <a href="#" className="hover:text-white">Solutions</a>
                    <a href="#" className="hover:text-white">Resources</a>
                    <a href="#" className="hover:text-white">Company</a>
                </div>
                <p>© 2025 Rave Consultancy | All Rights Reserved</p>
            </div>
        </footer>
    );
}