import React, { useState, useEffect } from 'react';
import { Carousel } from 'flowbite-react';

const navigation = [
    { name: 'Home', href: '#' },
    { name: 'Musica', href: '#' },
    { name: 'Futbol', href: '#' },
    { name: 'NBA', href: '#' },
    { name: 'Formula-1', href: '#' },
    { name: 'E-Sport', href: '#' },
    { name: 'Entretenimiento', href: '#' },
];

const slides = [
    {
        title: "Depresión Sonora",
        description: "Únete a Depresión Sonora para una noche intensa llena de emociones y melodías que exploran los rincones más profundos de la psicología humana. Este concierto promete una experiencia única, combinando letras profundas con una atmósfera melancolica    envolvente que resonará con cada asistente",
        image: "public/Carolina-Durante.jpg",
        poster: "public/DEPRESION-SONORA-2.jpg"
    },
    {
        title: "Bad Bunny",
        description: "Prepara tus sentidos para una explosión de energía y ritmo con Bad Bunny, el fenómeno global del reguetón. Con éxitos que han dominado las listas de música, este concierto ofrecerá un espectáculo vibrante y emocionante, lleno de luces, sonido y la inconfundible presencia de uno de los artistas más innovadores de la música urbana.",
        image: "public/banner-bad-bunny-en-lima-2022-scaled.jpg",
        poster: "public/7-badbunny-nadia-puspita.jpg"
    },
];

const products = [
    {
      id: 1,
      name: 'Basic Tee',
      href: '#',
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
      imageAlt: "Front of men's Basic Tee in black.",
      price: '$35',
      color: 'Black',
    },
  ]

const Feed = React.memo(() => {
    const [activeNav, setActiveNav] = useState('Home');
    const [animationComplete, setAnimationComplete] = useState(false);
    const [spinnerVisible, setSpinnerVisible] = useState(true);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const spinnerTimer = setTimeout(() => {
            setSpinnerVisible(false);
        }, 2700);

        const animationTimer = setTimeout(() => {
            setAnimationComplete(true);
        }, 5500);

        return () => {
            clearTimeout(spinnerTimer);
            clearTimeout(animationTimer);
        };
    }, []);

    const handleNavClick = (name) => {
        setActiveNav(name);
    };

    return (
        <>
            <style>
                {`
                    @keyframes moveLogo {
                        0%, 60% {
                            top: 50vh;
                            left: 50vw;
                            transform: translate(-50%, -50%) scale(2);
                        }
                        100% {
                            top: 1.5rem;
                            left: 2rem;
                            transform: translate(0, 0) scale(1);
                        }
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }

                    @keyframes spin {
                        0% { transform: rotate(0deg); }
                        100% { transform: rotate(360deg); }
                    }

                    .logo-animation {
                        position: fixed;
                        animation: moveLogo 5s ease-out forwards;
                        z-index: 1000;
                    }

                    .spinner {
                        position: fixed;
                        top: calc(50vh + 60px);
                        left: 49.4%;
                        transform: translate(-50%, -50%);
                        width: 40px;
                        height: 40px;
                        border: 4px solid rgba(255, 255, 255, 0.3);
                        border-radius: 50%;
                        border-top: 4px solid #1F647C;
                        animation: spin 1s linear infinite;
                        opacity: 1;
                        transition: opacity 0.5s ease-out;
                        z-index: 1000;
                    }

                    .spinner-hidden {
                        opacity: 0;
                    }

                    .content-fade-in {
                        opacity: 0;
                        animation: fadeIn 1s ease-out forwards;
                        animation-delay: 5s;
                    }

                    .header-bg {
                        opacity: 0;
                        transition: opacity 0.5s ease-out;
                    }

                    .header-bg-visible {
                        opacity: 1;
                    }
                        
    
                `}
            </style>

            <img
                src="/E-Sync/LG-E-SYNC.png"
                className="h-14 w-auto logo-animation"
                alt="E-SYNC Logo"
            />
            <div className={`spinner ${spinnerVisible ? '' : 'spinner-hidden'}`}></div>
            <header className={`fixed inset-x-0 top-0 z-50 ${animationComplete ? 'header-bg-visible shadow-sm' : ''}`}>
                <div className="header-bg absolute inset-0 bg-black bg-opacity-50"></div>
                <nav aria-label="Global" className="relative flex items-center justify-between p-6 lg:px-8 backdrop-blur-md">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center flex-grow">
                            <a href="#" className="-m-1.5 p-1.5 invisible">
                                <img
                                    src="/E-Sync/LG-E-SYNC.png"
                                    className="h-12 w-auto"
                                    alt="E-SYNC Logo placeholder"
                                />
                            </a>
                            <div className="ml-8 relative content-fade-in flex-grow max-w-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white absolute left-3 top-1/2 transform -translate-y-1/2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder='Encuentra tu próximo evento ahora'
                                    className="text-sm bg-transparent text-white w-full pl-10 rounded-lg px-4 py-2 border border-white focus:outline-none focus:ring-2 focus:ring-custom-blue"
                                />
                            </div>
                        </div>

                        <div className="hidden lg:flex lg:items-center lg:gap-x-6 content-fade-in">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-sm font-semibold leading-6 ${
                                        activeNav === item.name ? 'text-custom-blue' : 'text-white'}`}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavClick(item.name);
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                            <div className="flex items-center gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5" />
                                </svg>
                                <div className="flex items-center gap-x-2 text-sm">
                                    <img
                                        alt=""
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                        className="h-9 w-9 rounded-full ring-2 ring-custom-blue"
                                    />
                                    <span className="text-white">Tom Cook</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-5 w-5 text-white">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex lg:hidden text-sm">
                            <button
                                type="button"
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                                onClick={() => setMobileMenuOpen(true)}
                            >
                                <span className="sr-only">Open menu</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6h16.5M3.75 12h16.5M3.75 18h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 transition-transform transform ease-in-out duration-300">
                        <button
                            type="button"
                            className="absolute top-4 right-4"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="h-6 w-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <div className="flex flex-col items-start mt-12">
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`text-lg font-semibold py-2 ${
                                        activeNav === item.name ? 'text-custom-blue' : 'text-black'}`}
                                    onClick={() => {
                                        setActiveNav(item.name);
                                        setMobileMenuOpen(false);
                                    }}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            <div aria-hidden="true" className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#1F647C] to-[#a93226] backdrop-blur-md content-fade-in" />


             {/* Carousel */}
             <div className={`fixed inset-0 z-0 ${animationComplete ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
                <Carousel
                    slide={false}
                    indicators={false}
                    leftControl={<span className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">&lt;</span>}
                    rightControl={<span className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full z-10">&gt;</span>}
                >
                    {slides.map((slide, index) => (
                    <div key={index} className="relative h-screen w-full">
                        <img
                        src={slide.image}
                        alt={slide.title}
                        className="absolute inset-0 h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16">
                        <div className="max-w-4xl">
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">{slide.title}</h2>
                            <p className="text-lg md:text-xl text-gray-200 mb-8">{slide.description}</p>
                            <div className="flex space-x-4">
                            <button className="bg-custom-yellow hover:bg-custom-yellow-dark text-gray-900 font-bold py-3 px-6 rounded-lg transition duration-300">
                                Comprar ahora
                            </button>
                            <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                                Leer Más
                            </button>
                            </div>
                        </div>
                        </div>
                        <img
                        src={slide.poster}
                        alt={`${slide.title} poster`}
                        className="absolute bottom-8 right-8 w-24 md:w-36 rounded-lg shadow-lg"
                        />
                    </div>
                    ))}
                </Carousel>
            </div>
            {/*Fin Carousel */}


            
        </>
    );
});

export default Feed;