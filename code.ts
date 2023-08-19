// Criação do botão "Criar" na UI do Figma
figma.showUI(__html__);

// Função para criar o texto "Capa" com a fonte Roboto, tamanho 60 e cor vermelha



// Receber mensagem da UI
figma.ui.onmessage = (msg) => {
  if (msg.type === 'create') {
    (async () => {
      const text = figma.createText()
    
      // Move to (50, 50)
      text.x = 50
      text.y = 50
    
      // Load the font in the text node before setting the characters
      await figma.loadFontAsync(text.fontName)
      text.characters = 'Hello world!'
    
      // Set bigger font size and red color
      text.fontSize = 18
      text.fills = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
    })()
  }
};
