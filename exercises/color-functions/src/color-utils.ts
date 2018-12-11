export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  if (hex.length === 3) {
    let hr = hex[0];
    let hg = hex[1];
    let hb = hex[2];

    return hexToRgb(`${hr}${hg}${hb}`);
  }

  let [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2)); // ['ff' '00' '00']
    .map(hexChannel => parseInt(hexChannel, 16)); // [255, 0, 0]

  return {r, g, b}; // {r: 255, g: 0, b: 0}
}

export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(decimalChannel => Math.max(0, Math.min(255, decimalChannel.toString(16)))
    .map(hexChannel => hexChannel.length === 1 ? `0${hexChannel}` : hexChannel)
    .join('');
}
