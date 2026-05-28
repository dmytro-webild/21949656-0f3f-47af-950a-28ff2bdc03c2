"use client";

import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import ProductCardThree from '@/components/sections/product/ProductCardThree';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import TestimonialCardTwelve from '@/components/sections/testimonial/TestimonialCardTwelve';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Leaf, Award } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
      contentWidth="small"
      sizing="mediumLarge"
      background="noise"
      cardStyle="inset"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="layered"
      headingFontWeight="bold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          brandName="La Essence Home"
          logoSrc="http://img.b2bpic.net/free-vector/luxurious-vintage-art-nouveau-badge-vector_53876-57453.jpg"
          logoAlt="luxurious home fragrance brand logo"
          navItems={[
            { name: "Início", id: "#hero" },
            { name: "Sobre", id: "#about" },
            { name: "Produtos", id: "#products" },
            { name: "Benefícios", id: "#benefits" },
            { name: "Experiência", id: "#experience" },
            { name: "Contato", id: "#contact" }
          ]}
          button={{
            text: "Comprar pelo WhatsApp",            href: "https://wa.me/seuwhatsapp"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="La Essence Home"
          description="Conheça a La Essence Home: fragrâncias para ambiente feitas com ingredientes premium, produção própria e aromas importados para criar experiências únicas dentro da sua casa."
          buttons={[
            { text: "Comprar pelo WhatsApp", href: "https://wa.me/seuwhatsapp" },
            { text: "Conhecer produtos", href: "#products" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/still-life-with-book-hipster_169016-3473.jpg"
          imageAlt="luxury home fragrance bottle elegant living room"
          useInvertedBackground={true}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Nossa Essência: Ingredientes Premium e Experiência Única"
          description={[
            "La Essence Home nasceu para transformar ambientes em experiências. Com ingredientes premium, produção própria e fragrâncias selecionadas, criamos produtos que deixam sua casa mais aconchegante, elegante e perfumada.",            "Nossa missão é ir além do perfume, cultivando memórias olfativas que refletem seu estilo e personalidade. Cada item é feito com cuidado, combinando a arte da perfumaria com a dedicação artesanal."
          ]}
          useInvertedBackground={false}
          buttons={[
            { text: "Conheça Nossos Valores", href: "#" }
          ]}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardThree
          title="Nossos Produtos Premium"
          description="Explore nossa linha exclusiva de fragrâncias para ambiente, cuidadosamente desenvolvidas para transformar sua casa e proporcionar uma experiência sensorial inesquecível."
          products={[
            { id: "home-spray", name: "Home Spray", price: "R$ 89,90", imageSrc: "http://img.b2bpic.net/free-photo/botanical-background_23-2147730141.jpg", imageAlt: "luxury home spray bottle elegant design" },
            { id: "diffusers", name: "Difusores de Ambiente", price: "R$ 139,90", imageSrc: "http://img.b2bpic.net/free-photo/incense-sticks-bedside-table_268835-1350.jpg", imageAlt: "elegant reed diffuser home fragrance" },
            { id: "aromatizers", name: "Aromatizadores", price: "R$ 79,90", imageSrc: "http://img.b2bpic.net/free-photo/everyday-bath-utensils-dark-marble-background_58702-17765.jpg", imageAlt: "premium aromatizer bottle elegant presentation" },
            { id: "imported-fragrances", name: "Fragrâncias Importadas", price: "R$ 199,90", imageSrc: "http://img.b2bpic.net/free-photo/compostable-care-products-assortment_23-2149353133.jpg", imageAlt: "imported luxury fragrance bottle exclusive design" },
            { id: "gift-kits", name: "Kits Presenteáveis", price: "A partir de R$ 150,00", imageSrc: "http://img.b2bpic.net/free-photo/different-presents-arrangement-high-angle_23-2149343246.jpg", imageAlt: "luxury home fragrance gift set elegant box" },
            { id: "premium-line", name: "Linha Premium para Casa", price: "R$ 249,90", imageSrc: "http://img.b2bpic.net/free-photo/front-view-interior-room-design-concept_23-2148786474.jpg", imageAlt: "premium home fragrance line exclusive collection" }
          ]}
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={true}
          buttons={[
            { text: "Tenho interesse", href: "https://wa.me/seuwhatsapp" }
          ]}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="benefits" data-section="benefits">
        <FeatureCardTwentyFive
          title="Benefícios Exclusivos La Essence Home"
          description="Transforme seu lar com a qualidade e sofisticação que só a La Essence Home oferece, criando um ambiente que reflete seu bem-estar e bom gosto."
          features={[
            {
              title: "Fragrâncias Marcantes e Elegantes",              description: "Nossas fragrâncias são cuidadosamente selecionadas para perfumar o ambiente com sofisticação e uma identidade olfativa única.",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/eco-life-environmental-logo-with-text_53876-165471.jpg", imageAlt: "elegant leaf icon gold luxury" },
                { imageSrc: "http://img.b2bpic.net/free-photo/eco-life-environmental-logo-with-text_53876-165471.jpg", imageAlt: "elegant leaf icon gold luxury" }
              ]
            },
            {
              title: "Ingredientes Selecionados e Produção Própria",              description: "Garantimos a qualidade desde a origem, com produção própria e o uso exclusivo de ingredientes premium, sem abrir mão do cuidado artesanal.",              icon: Leaf,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-vector/leaf-business-logo-template-organic-product-branding-vector_53876-157499.jpg", imageAlt: "premium ingredient icon natural botanical" },
                { imageSrc: "http://img.b2bpic.net/free-vector/leaf-business-logo-template-organic-product-branding-vector_53876-157499.jpg", imageAlt: "premium ingredient icon natural botanical" }
              ]
            },
            {
              title: "Experiência Premium para o Dia a Dia",              description: "Ideal para casa, escritório, lavabo ou como um presente memorável, nossos produtos elevam o seu dia a dia a um novo nível de bem-estar.",              icon: Award,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-instagram-highlight-illustration_23-2150863458.jpg", imageAlt: "handmade craft icon elegant hands" },
                { imageSrc: "http://img.b2bpic.net/free-vector/hand-drawn-instagram-highlight-illustration_23-2150863458.jpg", imageAlt: "handmade craft icon elegant hands" }
              ]
            }
          ]}
          animationType="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          buttons={[]}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="experience" data-section="experience">
        <TextSplitAbout
          title="Mais do que perfumar, é criar memórias."
          description={[
            "Cada fragrância La Essence Home foi pensada para despertar sensações, transformar a energia do ambiente e deixar sua casa com uma identidade única. Viva essa experiência que celebra a arte de sentir e se conectar com seu lar, criando momentos inesquecíveis a cada aroma."
          ]}
          useInvertedBackground={true}
          buttons={[
            { text: "Viva Essa Experiência", href: "#products" }
          ]}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwelve
          cardTitle="O que nossas clientes dizem"
          cardTag="Experiências La Essence Home"
          testimonials={[
            { id: "1", name: "Ana Clara S.", imageSrc: "http://img.b2bpic.net/free-photo/pretty-young-girl-taking-selfies-with-her-smart-phone-garden_1301-6703.jpg", imageAlt: "smiling woman avatar elegant style" },
            { id: "2", name: "Beatriz F.", imageSrc: "http://img.b2bpic.net/free-photo/handsome-man-outdoors-portrait_158595-3552.jpg", imageAlt: "man smiling avatar professional business casual" },
            { id: "3", name: "Carlos M.", imageSrc: "http://img.b2bpic.net/free-photo/young-beautiful-brunette-woman-having-fun-park_1301-4174.jpg", imageAlt: "young woman smiling avatar elegant" },
            { id: "4", name: "Daniela P.", imageSrc: "http://img.b2bpic.net/free-photo/close-up-portrait-corporate-woman-young-intern-walks-street-office-holds-mobile-phone-texts_1258-194216.jpg", imageAlt: "middle-aged woman avatar serene expression" },
            { id: "5", name: "Eduardo R.", imageSrc: "http://img.b2bpic.net/free-photo/young-man-travelling-by-city-bus_23-2148958101.jpg", imageAlt: "young man smiling avatar casual elegant" }
          ]}
          cardAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="instagram" data-section="instagram">
        <HeroLogo
          logoText="Siga a La Essence Home"
          description="Acompanhe novidades, lançamentos, feedbacks e dicas para deixar sua casa ainda mais perfumada. Conecte-se conosco e viva essa experiência sensorial!"
          buttons={[
            { text: "Ver Instagram @laessencehome", href: "https://instagram.com/laessencehome" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/cool-background-blank-wallpaper-place-your-concept_1194-641450.jpg"
          imageAlt="aesthetic Instagram feed layout home fragrance"
          useInvertedBackground={true}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Atendimento Personalizado"
          title="Fale Conosco e Escolha a Fragrância Perfeita"
          description="Entre em contato para tirar suas dúvidas, fazer pedidos especiais ou descobrir a fragrância ideal para o seu ambiente. Respondemos rápido via WhatsApp ou email."
          inputPlaceholder="Seu melhor email"
          buttonText="Enviar Mensagem"
          background={{
            variant: "radial-gradient"
          }}
          useInvertedBackground={false}
          tagAnimation="hover-magnetic"
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="final-cta" data-section="final-cta">
        <HeroLogo
          logoText="La Essence Home"
          description="Deixe sua casa com uma fragrância inesquecível. Transforme seu ambiente com a elegância e a qualidade que só a La Essence Home oferece."
          buttons={[
            { text: "Comprar agora pelo WhatsApp", href: "https://wa.me/seuwhatsapp" }
          ]}
          imageSrc="http://img.b2bpic.net/free-photo/front-view-beauty-products-shelf-with-copy-space_23-2150718061.jpg"
          imageAlt="luxury home fragrance bottle close up"
          useInvertedBackground={true}
          buttonAnimation="hover-magnetic"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="La Essence Home"
          logoSrc="http://img.b2bpic.net/free-vector/luxurious-vintage-art-nouveau-badge-vector_53876-57453.jpg"
          logoAlt="luxurious home fragrance brand logo"
          columns={[
            {
              title: "Institucional",              items: [
                { label: "Sobre Nós", href: "#about" },
                { label: "Contato", href: "#contact" },
                { label: "Nossa Missão", href: "#" }
              ]
            },
            {
              title: "Produtos",              items: [
                { label: "Home Spray", href: "#products" },
                { label: "Difusores", href: "#products" },
                { label: "Kits Presenteáveis", href: "#products" }
              ]
            },
            {
              title: "Redes Sociais",              items: [
                { label: "Instagram", href: "https://instagram.com/laessencehome" },
                { label: "WhatsApp", href: "https://wa.me/seuwhatsapp" }
              ]
            }
          ]}
          copyrightText="© 2024 La Essence Home. Todos os direitos reservados."
        />
      </div>
    </ThemeProvider>
  );
}
