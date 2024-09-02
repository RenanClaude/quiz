export function shuffle(elements: any[]): any[] {
  return elements.map((element) => ({ element, randomNumber: Math.random() }))
    .sort((obj1, obj2) => obj1.randomNumber - obj2.randomNumber)
    .map((obj) => (obj.element));
}