import chalk from 'chalk';
import randomColor from 'randomcolor';

// Default color options for randomColor
const colorOptions = {
  luminosity: 'random',
  hue: 'random',
};

// Slices the input
const args = process.argv.slice(2);
// Gets the input for the color
colorOptions.hue = args[0];
// Gets the input for the luminosity
colorOptions.luminosity = args[1];

// Generate random color
const color = randomColor(colorOptions);

// Console.log the colored block with the hex value inside
function colorAndLog(str) {
  console.log(chalk.hex(color).bold(str));
}

colorAndLog(`##############################
##############################
##############################
########              ########
########   ${color}    ########
########              ########
##############################
##############################
##############################`);
