// components/Footer.tsx

import { FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-10 w-full h-auto">
            <div className="container overflow-hidden w-full mx-auto px-4 py-4 flex justify-between flex-col mt-2 gap-5 mb-6">
                {/* Section principale du footer avec trois colonnes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Colonne 1 : Contact */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Contact</h3>
                        <p>Adresse : 123 Rue Exemple</p>
                        <p>Téléphone : +123 456 789</p>
                        <p>Email : contact@exemple.com</p>
                    </div>

                    {/* Colonne 2 : Liens de navigation */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="hover:underline">À propos de nous</a></li>
                            <li><a href="/services" className="hover:underline">Services</a></li>
                            <li><a href="/contact" className="hover:underline">Contact</a></li>
                            <li><a href="/faq" className="hover:underline">FAQ</a></li>
                        </ul>
                    </div>

                    {/* Colonne 3 : Réseaux sociaux */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
                        <div className="flex gap-6 font-semibold text-3xl text-white">
                            <span className="cursor-pointer"><FaLinkedin /></span>
                            <span className="cursor-pointer"><FaFacebookSquare /></span>
                            <span className="cursor-pointer"><FaSquareInstagram /></span>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-4 text-center">
                    <p className="text-sm">&copy; 2024 Labo Congo Soft. Tous droits réservés.</p>
                </div>
            </div>
        </footer>
    );
}
