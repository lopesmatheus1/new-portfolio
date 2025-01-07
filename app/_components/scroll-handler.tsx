"use client";

import { useEffect, useState } from "react";
import { scroller } from "react-scroll";

export default function ScrollHandler() {
  const [hasScrolled, setHasScrolled] = useState(false); // Controle se o redirecionamento já ocorreu
  const [isAnimatingScroll, setIsAnimatingScroll] = useState(false); // Bloqueia múltiplos eventos de rolagem

  useEffect(() => {
    let lastScrollY = window.scrollY; // Posição inicial do scroll

    const disableScroll = () => {
      document.body.style.overflow = "hidden"; // Bloqueia o scroll
    };

    const enableScroll = () => {
      document.body.style.overflow = ""; // Restaura o scroll
    };

    const handleScroll = () => {
      if (isAnimatingScroll || hasScrolled) return; // Ignora se já está rolando ou se já rolou

      // Detecta se o usuário está rolando para baixo
      const isScrollingDown = window.scrollY > lastScrollY;
      lastScrollY = window.scrollY; // Atualiza a posição do scroll

      if (!isScrollingDown) return; // Ignora eventos de rolagem para cima

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
          setIsAnimatingScroll(true); // Marca a animação como ativa
          disableScroll(); // Desativa o scroll durante a animação

          // Rola suavemente para a seção Techs
          scroller.scrollTo("hero-section", {
            duration: 1000, // Tempo de rolagem suave (em ms)
            delay: 0,
            smooth: "easeInOutQuart", // Tipo de animação de rolagem
            onComplete: () => {
              // Após a animação, marca que o redirecionamento ocorreu
              setHasScrolled(true);
              setIsAnimatingScroll(false); // Libera a animação
              enableScroll(); // Restaura o scroll
            },
          });
        }
      }
    };

    // Adiciona o evento de scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Remove o evento de scroll
      window.removeEventListener("scroll", handleScroll);
      enableScroll(); // Garante que o scroll seja habilitado ao desmontar
    };
  }, [hasScrolled, isAnimatingScroll]);

  return null;
}