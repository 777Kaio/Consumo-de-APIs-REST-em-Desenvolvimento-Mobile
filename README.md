# Consumo-de-APIs-REST-em-Desenvolvimento-Mobile
# Trabalho do Jacques
# App de Previsão do Tempo

Este é um aplicativo mobile de **previsão do tempo** desenvolvido com **React Native**, **Expo** e **TypeScript**, usando **expo-router** para navegação entre telas. O app consome dados da **API OpenWeatherMap** para exibir a previsão atual de qualquer cidade do mundo.

---

## Funcionalidades

- Tela de boas-vindas com introdução do app
- Busca por nome de cidade
- Exibição do clima atual com:
  - Temperatura
  - Descrição do clima
  - Nome formatado da cidade e país
  - Ícone representando o tipo de clima
- Estilização moderna com efeitos de sombra e cores suaves roxa
- Navegação com abas e drawer

---

## Estrutura de Pastas
.
├── .expo/                        # Arquivos de configuração interna do Expo (gerado automaticamente)
│
├── app/                          # Diretório principal usado pelo expo-router para navegação entre telas
│   ├── (drawer)/                 # Layout e telas associadas ao menu lateral (drawer navigation)
│   ├── (tabs)/                   # Layout e telas da navegação por abas (tab navigation)
│   │   ├── _layout.tsx          # Define a estrutura visual das abas (ícones, rotas, etc)
│   │   ├── index.tsx            # Tela inicial de boas-vindas
│   │   └── weather.tsx          # Tela principal onde mostra a previsão do tempo
│   │
│   ├── _layout.tsx              # Layout global do app (envolve drawer e tabs)
│   ├── +html.tsx                # Arquivo opcional para renderizar conteúdo web (pouco usado)
│   ├── +not-found.tsx           # Tela exibida quando uma rota não é encontrada
│   └── modal.tsx                # Tela modal (tipo pop-up)
│
├── assets/                      # Recursos estáticos como imagens, fontes, etc
│   └── images/                  # Ícones e imagens de clima usados do app
│
├── components/                  # Componentes reutilizáveis em várias partes da aplicação
│   ├── app.tsx                  # Lógica e layout principal da tela de clima (input, botão, resultado)
│   ├── Button.tsx               # Botão customizado com estilo próprio
│   ├── Container.tsx            # Componente de layout/container visual
│   ├── EditScreenInfo.tsx       # Informações adicionais para a tela
│   ├── HeaderButton.tsx         # Botão para o cabeçalho (Header) do app
│   ├── ScreenContent.tsx        # Componente para conteúdo interno reutilizável
│   └── TabBarIcon.tsx           # Ícones personalizados usados nas abas
│
├── styles/
│   └── styles.tsx               # Arquivo central de estilos globais
│
├── node_modules/                # Pacotes instalados via npm/yarn (gerado automaticamente)
│
├── .gitignore                   # Arquivos e pastas que o Git deve ignorar
├── app-env.d.ts                 # Tipagem extra do projeto
├── app.json                     # Configurações do Expo (nome, ícone, splash etc)
├── babel.config.js              # Configuração do Babel (compilador JS)
├── cesconfig.json               # Provavelmente um arquivo personalizado (ou nome incorreto)
├── expo-env.d.ts                # Tipagens para variáveis de ambiente do Expo
├── global.css                   # (Se estiver em uso) CSS global do projeto (pouco usado em RN)
├── metro.config.js              # Configuração do Metro bundler (carregador de módulos do React Native)

