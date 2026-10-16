const fs = require('fs');
const pdfjs = require('pdfjs-dist/legacy/build/pdf.mjs');
const path = 'C:\\Users\\luidi\\OneDrive\\Área de Trabalho\\IESB-PDM-SUL2\\praticas\\Gerenciador-despesas\\atividade08\\Atividade Prática - Gerenciador de despesas.pdf';

const data = new Uint8Array(fs.readFileSync(path));
pdfjs.getDocument({ data }).promise.then((doc) => {
  const tasks = [];
  for (let i = 1; i <= doc.numPages; i++) {
    tasks.push(doc.getPage(i).then((page) => page.getTextContent()).then((content) => {
      const text = content.items.map((item) => item.str).join(' ');
      console.log('--- PAGE ' + i + ' ---');
      console.log(text.slice(0, 5000));
    }));
  }
  return Promise.all(tasks);
}).catch((err) => {
  console.error(err);
  process.exit(1);
});
