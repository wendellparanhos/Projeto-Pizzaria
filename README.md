# 🍕 Pizzaria Bella Napoli - Landing Page

Landing page profissional para pizzaria com design moderno, desenvolvida em HTML, CSS e JavaScript puro.

## ✨ Características

- **100% HTML, CSS e JavaScript puro** (sem frameworks ou bibliotecas)
- Design responsivo e mobile-first
- Animações suaves ao scroll
- Menu de navegação fixo com efeito de ocultação
- Botão flutuante do WhatsApp
- Filtro de cardápio interativo
- Cards de pizza com hover effects
- Seção de promoções destacadas
- Depoimentos de clientes
- Integração direta com WhatsApp para pedidos
- SEO básico implementado

## 📁 Estrutura de Arquivos

```
Projeto-Pizzaria/
│
├── index.html                 # Página principal
├── assets/
│   ├── css/
│   │   └── style.css         # Estilos completos
│   ├── js/
│   │   └── main.js           # Interações JavaScript
│   └── images/               # Pasta para imagens (adicionar suas fotos)
└── README.md
```

## 🎨 Paleta de Cores

- **Primária**: #d32f2f (Vermelho)
- **Secundária**: #2e7d32 (Verde)
- **Accent**: #ffa726 (Laranja)
- **Fundo**: #fffef7 (Creme claro)
- **Texto**: #1a1a1a (Preto suave)

## 🚀 Como Usar

1. **Abra o arquivo `index.html`** em qualquer navegador moderno
2. **Personalize o conteúdo**:
   - Altere os textos no `index.html`
   - Adicione fotos reais na pasta `assets/images/`
   - Atualize o número do WhatsApp (procure por `5511987654321`)
   - Ajuste endereço, horários e informações de contato

3. **Adicionar Imagens Reais**:
   - Substitua os placeholders coloridos por fotos reais das pizzas
   - Atualize o CSS substituindo as classes `.pizza-*` com `background-image: url()`

## 📱 Integração WhatsApp

O site já está configurado para enviar pedidos via WhatsApp. Para personalizar:

1. Localize no código: `5511987654321`
2. Substitua pelo seu número (formato: código do país + DDD + número)
3. Exemplo: Brasil (11) 98765-4321 = `5511987654321`

## 🎯 Seções da Landing Page

1. **Hero Section** - Destaque principal com CTA
2. **Sobre** - História e diferenciais da pizzaria
3. **Cardápio** - Grid de pizzas com filtros
4. **Promoções** - Ofertas especiais em destaque
5. **Avaliações** - Depoimentos de clientes
6. **Como Funciona** - Processo de pedido em 3 passos
7. **Contato** - Localização e horários
8. **CTA Final** - Chamada para ação com WhatsApp
9. **Footer** - Links e newsletter

## 💡 Funcionalidades JavaScript

- Menu hamburger responsivo
- Scroll suave entre seções
- Header que some ao rolar para baixo
- Animações de entrada ao scroll (Intersection Observer)
- Filtro de cardápio por categoria
- Botão "Voltar ao topo"
- Validação de e-mail no newsletter
- Integração com WhatsApp nos botões "Pedir"

## 📱 Responsividade

- **Desktop**: Layout completo em grid
- **Tablet**: Ajustes de colunas e espaçamentos
- **Mobile**: Menu hamburguer, cards em coluna única

## 🔧 Personalização

### Alterar Cores
Edite as variáveis CSS no início do `style.css`:

```css
:root {
    --primary-color: #d32f2f;
    --secondary-color: #2e7d32;
    /* ... */
}
```

### Adicionar Mais Pizzas
No `index.html`, copie um `.pizza-card` e ajuste:

```html
<div class="pizza-card" data-category="tradicionais">
    <!-- Conteúdo do card -->
</div>
```

### Mudar Textos
Todos os textos estão direto no HTML para fácil edição.

## ⚡ Performance

- CSS otimizado com variáveis
- JavaScript vanilla (sem dependências)
- Imagens placeholder em SVG (leves)
- Animações com CSS transitions
- Lazy loading recomendado para imagens reais

## 🌐 Compatibilidade

- Chrome/Edge (últimas versões)
- Firefox (últimas versões)
- Safari (últimas versões)
- Opera (últimas versões)

## 📝 Licença

Livre para uso comercial e pessoal.

## 🎓 Tecnologias

- HTML5 Semântico
- CSS3 (Flexbox + Grid)
- JavaScript ES6+
- Intersection Observer API
- CSS Variables
- CSS Animations

## 📞 Suporte

Para personalizar ainda mais ou adicionar funcionalidades:
- Backend para processar pedidos
- Sistema de pagamento online
- Painel administrativo
- Integração com delivery

---

**Desenvolvido com ❤️ para a Bella Napoli**

*Pronto para uso comercial - Basta personalizar e publicar!*
