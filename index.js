import chalk from 'chalk';
import randomColor from 'randomcolor';

// Default color options for randomColor
const colorOptions = {
  luminosity: 'random',
  hue: 'random',
};

// Parse command line arguments and check if the input value is valid. If not, a random color is put out
const args = process.argv.slice(2);
if (args.length > 0) {
  const hues = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple',
    'pink',
    'monochrome',
  ];
  if (hues.some((hue) => args[0] === hue)) {
    colorOptions.hue = args[0];
  } else {
    console.log('Invalid choice, Output goes back to Random');
  }
}

if (args.length > 1) {
  const lums = ['bright', 'light', 'dark'];
  if (lums.some((lum) => args[1] === lum)) {
    colorOptions.hue = args[1];
  } else {
    console.log('Invalid choice, Output goes back to Random');
  }
}

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
