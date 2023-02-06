import { surpriseMePrompts } from '../constants';
import FileSaver from 'file-saver';

export function getRandomPrompt(prompt) {
  const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);

  const randomPrompt = surpriseMePrompts[randomIndex];

  if (randomPrompt === prompt) return randomPrompt(prompt);

  return randomPrompt;
}

export async function dowloadImage(_id, photo) {
  FileSaver.saveAs(photo, `download/${_id}.jpg`);
}
