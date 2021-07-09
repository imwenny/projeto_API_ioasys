# PROJETO_API_TRUE
### Projeto feito para seleção de dev mobile na Ioasys.
<br>
<br>
Justificativa de cada biblioteca adicionada no projeto:
<br>

    "@react-native-async-storage/async-storage": "^1.15.5", 
Foi usada para salvar os dados de chave e valor no dispositivo. São dados salvos com a API e assíncronos.<br/>

<br>

    "@react-navigation/native": "^5.9.4",
Para uma navegação entre as páginas que utiliza a biblioteca de forma nativa, além de ter uma maior perfomance.

<br>

    "@react-navigation/stack": "^5.14.5",
Para uma navegação normal da direita pra esquerda(contrário da navigation/native) em várias páginas.

<br>

    "axios": "^0.21.1",
Utilizei o Axios por que ele tem base em Promises e pode ser utilizado de algumas formas que dão uma abertura maior para programar. Além de fazer requisições HTTP com a API que foi indicada.

<br>

    "expo": "~42.0.0", 
A biblioteca foi instalada pois é uma forma de usar e ir testando o desenvolvimento mobile no emulador usado(Android Studio). Também facilita bastante o acesso a APIs nativas do dispositivo direto e sem muitas margens de falhas.

<br>

    "expo-app-loading": "^1.1.2",
Essa biblioteca serve de forma geral, para manter a tela inicial visível enquanto o componente AppLoading é construído. É interessante que para baixar/armazenar diversas coisas que é o ideal que tenha no dipostivo, para uma boa experiência.

<br>

    "expo-status-bar": "~1.0.4",
Foi usado para ter um componente e uma interface categórico para controlar a barra de status do aplicativo, assim dando pra alterar a cor do texto, cor de fundo, alterar opacidade e tudo mais. 

<br>

    "react": "16.13.1",
Biblioteca nativa do React.js básica para a criação de Ui interativas.

<br>

    "react-dom": "16.13.1",
Serve principalmente como uma ponte entre os componentes e o DOM. Foi usado a renderização do react-dom para renderizar componente DOM.

<br>

    "react-native": "https://github.com/expo/react-native/archive/sdk-42.0.0.tar.gz",
Baseado no React.js possibilita desenvolver aplicativos mobile híbridos usando JSX.

<br>

    "react-native-elements": "^3.4.2",
Usado para a implementação do sistema de design dos materiais. Contém um conjunto de componentes UI de uso geral estilizados de forma parecida.

<br>

    "react-native-gesture-handler": "^1.10.3",
Foi usado para ter mais controle sobre os componentes nativos integrados que podem lidar com gestos.

<br>

    "react-native-infinite-scrolling": "^2.0.0",
A utilização da biblioteca do scroll foi usada para mostrar todas as informações de uma só vez, assim, evitando processamento a mais desnecessário.

<br>

    "react-native-multi-selectbox": "^1.5.0",
Usado para selecionar multiplas opções e com a intenção de trazer uma melhor experiência do usuário na plataforma.

<br>

    "react-native-paper": "^4.9.2",
Uma coleção de componentes personalizáveis e prontos para a produção. Seguindo as diretrizes de Material Design da Google.

<br>

    "react-native-screens": "^3.4.0",
Usada como objetivo expor componentes de um contêiner de navegação ativa mais voltado para React Native. Funciona juntamente com a dependencia da biblioteca da navegação.

<br>

    "react-native-web": "~0.13.12",
Simular a forma do aplicativo nativo na web. Nem todas as funções funcionam na web.

<br>
  devDependencies
  
    "@babel/core": "^7.9.0"},
Sempre e em todas as aplicações deve ser adicionado, pois é o coração/centro do babel. 
<br>
<br>
<br>

## Tutorial para executar o aplicativo:
<br>-Baixar o código local
<br>-Abri o cmd do windows(win+r), escrever cmd e dar ok
<br>-Entrar na pasta onde esta o projeto. escrevendo cd e o endereço. por exemplo: C:\Users\wenny\Projeto_API_TRUE 
<br>-Ao entrar na pasta no cmd, escrever expo start
<br>-Daí vai abrir o navegador com um código qr ou link
<br>-Enquanto isso, baixar o app com o nome expo no celular ou no emulador, realizar um login ou se cadastrar.
<br>-Escanear o código qr se for pelo celular físico através da câmera ou copiar o link na opção tunel no navegador e colar no app do emulador.
<br>-Esperar o aplicativo abrir e colocar as seguintes informações: 
<br>  __*email: testeapple@ioasys.com.br*__
<br>  __*senha:12341234*__
<br>-Feito o login com sucesso, vem uma listagem das empresas, juntamente com uma barra de pesquisar e um botão de limpar filtro.
<br>-Escrever o nome de uma empresa existente na barra de pesquisa e logo em seguida colocar uma categoria de empresa assim o aplicativo processa a informação, retorna com o que foi procurado e você pode clicar na empresa para exibir mais detalhes dessa empresa.
<br>-Tem o botão voltar também em cima a esquerda, mas está ativado o botão voltar do próprio celular.
