const inquirer = require('inquirer');
const { createCanvas, exportSVG } = require('svg-canvas');
const fs = require('fs');

async function generateLogo(text, textColor, shape, shapeColor) {
    const canvas = createCanvas(300, 200);
    const ctx = canvas.getContext('2d');

      // Draw text
  ctx.fillStyle = textColor;
  ctx.font = '24px sans-serif';
  ctx.fillText(text, 10, 50);

  // Draw shape
  ctx.fillStyle = shapeColor;
  if (shape === 'circle') {
    ctx.beginPath();
    ctx.arc(150, 120, 40, 0, Math.PI * 2);
    ctx.fill();
  } else if (shape === 'triangle') {
    ctx.beginPath();
    ctx.moveTo(150, 40);
    ctx.lineTo(110, 160);
    ctx.lineTo(190, 160);
    ctx.closePath();
    ctx.fill();
  } else if (shape === 'square') {
    ctx.fillRect(100, 70, 100, 100);
  }

  // Export SVG
  const svgStr = exportSVG(canvas);
  fs.writeFileSync('logo.svg', svgStr, 'utf-8');

  console.log('Generated logo.svg');
}


async function main() {
    console.log('Welcome to the Simple Logo Generator!');
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
      },
      {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color (color keyword or hexadecimal):',
      },
      {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape:',
        choices: ['circle', 'triangle', 'square'],
      },
      {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color (color keyword or hexadecimal):',
      },
    ]);
  
    generateLogo(answers.text, answers.textColor, answers.shape, answers.shapeColor);
  
    console.log('Logo generated successfully!');
  }
  
  if (require.main === module) {
    main();
  }
  
  module.exports = {
    generateLogo,
  };
  