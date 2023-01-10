import emoji from 'node-emoji';

const chosenEmoji = process.argv[2];

if (!chosenEmoji) {
  console.log(emoji.random().emoji);
} else if (emoji.hasEmoji(chosenEmoji)) {
  console.log(emoji.get(chosenEmoji));
} else {
  console.log('Emoji not found');
}
