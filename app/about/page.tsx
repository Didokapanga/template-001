import NavbarComponents from "@/components/Navbar/navbarComponent"

// app/about/page.tsx
export default function AboutPage() {
    return (
        <>
            <NavbarComponents />
            <div>
                <h1>À propos de nous</h1>
                <p>Ceci est la page À propos de notre site.</p>
            </div>
        </>
    );
}
