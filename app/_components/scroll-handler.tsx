"use client";

import { useEffect, useState } from "react";
import { scroller } from "react-scroll"; // Importa o scroller do react-scroll

export default function ScrollHandler() {
  const [hasScrolled, setHasScrolled] = useState(false); // Controle se o redirecionamento já ocorreu
  const [isScrollingDown, setIsScrollingDown] = useState(true); // Verifica se o usuário está rolando para baixo

  useEffect(() => {
    let lastScrollY = window.scrollY; // Posição do scroll no último render

    const handleScroll = () => {
      // Detecta se o usuário está rolando para baixo
      if (window.scrollY > lastScrollY) {
        setIsScrollingDown(true); // O usuário rolou para baixo
      } else {
        setIsScrollingDown(false); // O usuário rolou para cima
      }
      lastScrollY = window.scrollY; // Atualiza a posição do scroll

      if (hasScrolled || !isScrollingDown) return; // Se o redirecionamento já ocorreu ou o usuário rolou para cima, não faz nada

      // Obtém a referência da seção AnimateBackground
      const animateSection = document.querySelector("#animate-background");

      if (animateSection) {
        const rect = animateSection.getBoundingClientRect();

        // Se a seção AnimateBackground está visível e o usuário rolou para baixo
        if (
          rect.top <= window.innerHeight &&
          rect.bottom >= 0 &&
          window.scrollY > 50
        ) {
          // Rola suavemente para a seção Techs
          scroller.scrollTo("hero-section", {
            duration: 1000, // Tempo de rolagem suave (em ms)
            delay: 0,
            smooth: "easeInOutQuart", // Tipo de animação de rolagem
          });

          // Marca que o redirecionamento já aconteceu
          setHasScrolled(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [hasScrolled, isScrollingDown]); // Dependência do estado isScrollingDown

  return null;
}
