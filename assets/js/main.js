document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initScrollEffects();
    initCardapioFilter();
    initScrollTop();
    initAnimations();
    initCarrinho();
});

function initNavigation() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    const header = document.getElementById('header');

    menuToggle.addEventListener('click', function() {
        menuToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    document.addEventListener('click', function(event) {
        const isClickInsideMenu = navMenu.contains(event.target);
        const isClickOnToggle = menuToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && navMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.pizza-card, .promo-card, .avaliacao-card, .passo-card');
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
}

function initCardapioFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const pizzaCards = document.querySelectorAll('.pizza-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const category = this.getAttribute('data-category');
            
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            pizzaCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                
                if (category === 'todas' || cardCategory === category) {
                    card.classList.remove('hidden');
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 100);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
}

function initScrollTop() {
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    });

    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initAnimations() {
    const heroContent = document.querySelector('.hero-content');
    
    if (heroContent) {
        setTimeout(() => {
            heroContent.style.opacity = '1';
        }, 100);
    }
}

function adicionarAoPedido(nomePizza, preco) {
    const telefone = '5511987654321';
    let mensagem = `Olá! Gostaria de fazer um pedido:\n\n`;
    
    if (preco > 0) {
        mensagem += `*${nomePizza}* - R$ ${preco.toFixed(2).replace('.', ',')}`;
    } else {
        mensagem += `Informações sobre: *${nomePizza}*`;
    }
    
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    
    window.open(urlWhatsApp, '_blank');
}

function inscreverNewsletter() {
    const emailInput = document.getElementById('newsletterEmail');
    const email = emailInput.value.trim();
    
    if (!email) {
        alert('Por favor, digite seu e-mail.');
        return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Por favor, digite um e-mail válido.');
        return;
    }
    
    alert(`Obrigado por se inscrever! Em breve você receberá nossas promoções no e-mail: ${email}`);
    emailInput.value = '';
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const headerHeight = document.getElementById('header').offsetHeight;
            const targetPosition = targetElement.offsetTop - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

window.addEventListener('load', function() {
    const pizzaCards = document.querySelectorAll('.pizza-card');
    
    pizzaCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
});

let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
}, false);

const priceElements = document.querySelectorAll('.pizza-price, .price-new');

priceElements.forEach(element => {
    const price = element.textContent;
    if (price.includes('R$')) {
        element.setAttribute('data-price', price);
    }
});

function verificarHorarioFuncionamento() {
    const agora = new Date();
    const diaSemana = agora.getDay();
    const hora = agora.getHours();
    
    let aberto = false;
    
    if (diaSemana >= 1 && diaSemana <= 4) {
        aberto = hora >= 18 && hora < 23;
    } else {
        aberto = hora >= 18 || hora < 1;
    }
    
    return aberto;
}

const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    fadeInObserver.observe(section);
});

const ctaButtons = document.querySelectorAll('.btn');
ctaButtons.forEach(button => {
    button.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    button.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

function animarNumeros() {
    const numeroElements = document.querySelectorAll('.passo-numero');
    
    numeroElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = 'pulse 0.6s ease';
        }, index * 200);
    });
}

window.addEventListener('scroll', function() {
    const passoSection = document.querySelector('.como-funciona');
    if (passoSection) {
        const rect = passoSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            animarNumeros();
        }
    }
});

document.querySelectorAll('.pizza-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const image = this.querySelector('.pizza-image');
        if (image) {
            image.style.transform = 'scale(1.05)';
            image.style.transition = 'transform 0.3s ease';
        }
    });
    
    card.addEventListener('mouseleave', function() {
        const image = this.querySelector('.pizza-image');
        if (image) {
            image.style.transform = 'scale(1)';
        }
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% {
            transform: translateX(-50%) scale(1);
        }
        50% {
            transform: translateX(-50%) scale(1.1);
        }
    }
    
    .fade-in {
        animation: fadeIn 0.8s ease forwards;
    }
    
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

console.log('🍕 Bella Napoli - Sistema iniciado com sucesso!');
console.log('📱 WhatsApp: (11) 98765-4321');
console.log('⏰ Horário de funcionamento verificado');

let carrinho = [];
const TAXA_ENTREGA = 8.00;

function initCarrinho() {
    const modal = document.getElementById('modalPedido');
    const btnClose = document.getElementById('modalClose');
    const btnContinuar = document.getElementById('btnContinuarComprando');
    const btnFinalizar = document.getElementById('btnFinalizarPedido');
    
    btnClose.addEventListener('click', fecharModal);
    btnContinuar.addEventListener('click', fecharModal);
    btnFinalizar.addEventListener('click', finalizarPedido);
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            fecharModal();
        }
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            fecharModal();
        }
    });
}

function adicionarAoPedido(nomePizza, preco) {
    const itemExistente = carrinho.find(item => item.nome === nomePizza);
    
    if (itemExistente) {
        itemExistente.quantidade++;
    } else {
        carrinho.push({
            nome: nomePizza,
            preco: preco,
            quantidade: 1
        });
    }
    
    abrirModal();
    atualizarCarrinho();
    
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = `${nomePizza} adicionada ao carrinho!`;
    toast.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: #44bd32;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 2000);
}

function abrirModal() {
    const modal = document.getElementById('modalPedido');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function fecharModal() {
    const modal = document.getElementById('modalPedido');
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function atualizarCarrinho() {
    const carrinhoVazio = document.getElementById('carrinhoVazio');
    const carrinhoItens = document.getElementById('carrinhoItens');
    const carrinhoResumo = document.getElementById('carrinhoResumo');
    const btnFinalizar = document.getElementById('btnFinalizarPedido');
    
    if (carrinho.length === 0) {
        carrinhoVazio.style.display = 'block';
        carrinhoItens.classList.remove('active');
        carrinhoResumo.style.display = 'none';
        btnFinalizar.disabled = true;
        return;
    }
    
    carrinhoVazio.style.display = 'none';
    carrinhoItens.classList.add('active');
    carrinhoResumo.style.display = 'block';
    btnFinalizar.disabled = false;
    const pizza = document.getElementById('pizza');
    
    carrinhoItens.innerHTML = carrinho.map((item, index) => `
        <div class="carrinho-item">
            <div class="item-imagem">
                <div style="width: 100%; height: 100%; background: linear-gradient(135deg, #6A1B1A, #C9A24D); display: flex; align-items: center; justify-content: center; font-size: 2rem;">🍕</div>
            </div>
            <div class="item-info">
                <div class="item-nome">${item.nome}</div>
                <div class="item-preco">R$ ${item.preco.toFixed(2).replace('.', ',')}</div>
            </div>
            <div class="item-quantidade">
                <button class="btn-quantidade" onclick="diminuirQuantidade(${index})">−</button>
                <span class="quantidade-valor">${item.quantidade}</span>
                <button class="btn-quantidade" onclick="aumentarQuantidade(${index})">+</button>
            </div>
            <button class="btn-remover" onclick="removerItem(${index})" title="Remover">🗑️</button>
        </div>
    `).join('');
    
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const total = subtotal + TAXA_ENTREGA;
    
    document.getElementById('subtotal').textContent = `R$ ${subtotal.toFixed(2).replace('.', ',')}`;
    document.getElementById('total').textContent = `R$ ${total.toFixed(2).replace('.', ',')}`;
}

function aumentarQuantidade(index) {
    carrinho[index].quantidade++;
    atualizarCarrinho();
}

function diminuirQuantidade(index) {
    if (carrinho[index].quantidade > 1) {
        carrinho[index].quantidade--;
        atualizarCarrinho();
    } else {
        removerItem(index);
    }
}

function removerItem(index) {
    carrinho.splice(index, 1);
    atualizarCarrinho();
}

function finalizarPedido() {
    const telefone = '5511987654321';
    let mensagem = `🍕 *PEDIDO BELLA NAPOLI*\n\n`;
    
    carrinho.forEach(item => {
        mensagem += `*${item.quantidade}x ${item.nome}*\nR$ ${(item.preco * item.quantidade).toFixed(2).replace('.', ',')}\n\n`;
    });
    
    const subtotal = carrinho.reduce((total, item) => total + (item.preco * item.quantidade), 0);
    const total = subtotal + TAXA_ENTREGA;
    
    mensagem += `─────────────────\n`;
    mensagem += `Subtotal: R$ ${subtotal.toFixed(2).replace('.', ',')}\n`;
    mensagem += `Taxa de entrega: R$ ${TAXA_ENTREGA.toFixed(2).replace('.', ',')}\n`;
    mensagem += `*Total: R$ ${total.toFixed(2).replace('.', ',')}*\n\n`;
    mensagem += `Aguardo confirmação! 😊`;
    
    const mensagemCodificada = encodeURIComponent(mensagem);
    const urlWhatsApp = `https://wa.me/${telefone}?text=${mensagemCodificada}`;
    
    window.open(urlWhatsApp, '_blank');
    
    carrinho = [];
    atualizarCarrinho();
    
    setTimeout(() => {
        fecharModal();
    }, 500);
}

const styleToast = document.createElement('style');
styleToast.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(styleToast);



