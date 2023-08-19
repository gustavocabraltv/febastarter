const svgString = '<svg width="160" height="32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#a)"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.189 26.195v5.51h10.943V12.302c0-3.376-1.397-6.481-3.648-8.693C26.234 1.359 23.13 0 19.675 0H0v10.788h5.588a11.617 11.617 0 0 0-2.212 1.708c-4.463 4.385-4.463 11.487 0 15.91 4.463 4.386 11.681 4.386 16.144 0 .62-.698 1.203-1.435 1.669-2.211ZM60.267 4.54h3.337V13c.815-1.203 3.027-2.445 5.472-2.445 4.812 0 6.985 3.726 6.985 8.227 0 4.502-2.095 8.654-6.946 8.654-2.445 0-4.851-1.242-5.705-2.406l-.427 1.98H59.26V5.51c.039-.543.466-.97 1.009-.97Zm3.298 14.398c0 2.755 1.63 4.423 4.192 4.423 2.677 0 3.803-1.63 3.803-4.424 0-2.755-1.126-4.501-3.803-4.501-2.678 0-4.191 1.746-4.191 4.502Zm18.976-7.956h-3.144c-.543 0-.97.427-1.047.97v15.019h4.385v-8.965c.466-2.367 1.474-3.997 3.26-3.997 1.009 0 1.668.582 1.94 2.29l3.687-1.863c-.31-2.212-1.397-3.842-4.114-3.842-2.096 0-3.842.97-4.967 3.066v-2.678Zm27.631-6.442h3.376v8.382c.931-1.397 2.639-2.406 5.006-2.406 3.221 0 5.627 1.747 5.627 5.395v11.02h-4.308v-9.74c0-2.095-.737-3.066-2.91-3.066-1.591 0-2.949 1.048-3.454 2.756v10.09h-4.385V5.51a1.03 1.03 0 0 1 1.048-.97Zm32.675 14.747c0 4.54 3.182 8.11 8.538 8.11 5.394 0 8.615-3.57 8.576-8.11 0-5.472-3.648-8.77-8.576-8.77-4.929 0-8.538 3.298-8.538 8.77Zm4.424-.194c0-2.794 1.63-4.657 4.114-4.657 2.522 0 4.113 1.863 4.113 4.657 0 2.406-1.436 4.463-4.113 4.463-2.678 0-4.114-2.057-4.114-4.463Zm-98.88-8.11h-3.997c-.543 0-1.009.426-1.009.97v2.444h4.735c2.871 0 4.23.466 4.23 3.842-.815-1.009-2.484-1.63-4.812-1.63-3.26 0-6.17 1.552-6.17 5.278 0 3.725 2.444 5.51 5.937 5.51 2.483 0 4.463-.853 5.472-2.134l.271 1.746h3.532v-7.761c0-5.782-2.329-8.266-8.189-8.266Zm.505 13.232c-1.669 0-3.454-.465-3.454-2.29 0-1.823 1.591-2.367 3.454-2.367 1.94 0 3.609.699 3.609 2.29 0 1.514-1.591 2.367-3.61 2.367Zm49.206-13.233h.194c5.821 0 8.189 2.484 8.15 8.266v7.761h-3.532l-.271-1.746c-1.009 1.28-2.988 2.134-5.472 2.134-3.493 0-5.938-1.785-5.938-5.51 0-3.726 2.911-5.278 6.17-5.278 2.33 0 3.998.621 4.813 1.63 0-3.376-1.358-3.842-4.23-3.842H93.29v-2.444c0-.544.466-.97 1.01-.97h3.802Zm-2.755 10.944c0 1.824 1.785 2.29 3.454 2.29 2.018 0 3.609-.854 3.609-2.368 0-1.59-1.669-2.29-3.61-2.29-1.862 0-3.453.544-3.453 2.368Zm37.643-10.944h-3.997c-.543 0-1.009.427-1.009.97v2.445h4.696c2.872 0 4.23.466 4.23 3.842-.815-1.009-2.484-1.63-4.812-1.63-3.26 0-6.17 1.552-6.17 5.278 0 3.725 2.444 5.51 5.937 5.51 2.484 0 4.463-.853 5.472-2.134l.271 1.746h3.532v-7.761c0-5.782-2.329-8.266-8.15-8.266Zm.505 13.233c-1.669 0-3.454-.465-3.454-2.29 0-1.823 1.591-2.367 3.454-2.367 1.94 0 3.609.699 3.609 2.29-.039 1.514-1.591 2.367-3.609 2.367Zm3.919-16.958h-6.404c-.582 0-1.009.427-1.009.97v1.358h6.404c.543 0 1.009-.427 1.009-.97V7.257Z" fill="#fff"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h160v32H0z"/></clipPath></defs></svg>';

// Criação do botão "Criar" na UI do Figma
figma.showUI(__html__,  { width: 340, height: 550, title: "Feba Starter" });


// Receber mensagem da UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'create') {
    (async () => {
      const frame = figma.createFrame(); // Criação do quadro (frame)
      frame.name = "cover";
      frame.resize(1069, 588); // Definindo o tamanho do quadro
      frame.backgrounds = [{ type: 'SOLID', color: { r: 0.796, g: 0, b: 0.122 } }]; // Cor de fundo branca
      //cria texto
      const text = figma.createText();
      // Move to (50, 50)
      text.x = 50;
      text.y = 50;
      // Load the font in the text node before setting the characters
      await figma.loadFontAsync({ family: "Plus Jakarta Sans", style: "ExtraBold" }); // Load "Inter" font
      text.fontName = { family: "Plus Jakarta Sans", style: "ExtraBold" }; // Set font to "Inter"
      const title = msg.title || "Bê-a-bá\nRedes Sociais!";
      text.characters = title;
      // Set bigger font size and red color
      text.fontSize = 72;
      text.fills = [{ type: 'SOLID', color: { r: 1, g: 1, b: 1 } }];

      const breakWidth = 800;
      if (text.width > breakWidth) {
        const scaleFactor = breakWidth / text.width;
        text.resize(text.width * scaleFactor, text.height);
      }

      // Adiciona o nó de SVG ao quadro
      const svgNode = figma.createNodeFromSvg(svgString);
      // Posiciona o nó SVG no frame
      svgNode.x = 454; // Ajuste a posição X conforme necessário
      svgNode.y = 70; // Ajuste a posição Y conforme necessário
      frame.appendChild(svgNode);
      // Adiciona o nó de texto ao quadro
      frame.appendChild(text);

      text.x = (frame.width - text.width) / 2;
      text.y = (frame.height - text.height) / 2;
      text.textAlignHorizontal = 'CENTER';



    })()
  }
};
